import { Obstacle, FSM } from './obstacles.js';

/**Game class for jsMouse
 *
 * @param  {[type]} canvas [description]
 * @param  {[type]} level  [description]
 * @return {[type]}        [description]
 */
export default class Game {
	constructor(canvas, level, winFunc = () => {alert('Mouse in The Hole!')}, controlsScope = window) {
		this.can = canvas;
		this.ctx = canvas.getContext('2d');

		this.start = {}
		this.start.x = level.startX;
		this.start.y = level.startY

    this.mouse = {};
    this.mouse.x = level.startY;
    this.mouse.y = level.startX;
    this.mouse.w = 50;
    this.mouse.h = 50;

    this.winBox = {};
    this.winBox.x = level.winX;
    this.winBox.y = level.winY;

    this.loadObstacles = this.loadObstacles.bind(this);
		this.loadObstacles(level.obs || {});

    this.winFunc = winFunc;

		this.draw = this.draw.bind(this);

		((callback, mouse) => {
      var mouseI = new Image();
      mouseI.onload = function() {
        mouse.img = mouseI;
        callback();
      }
      mouseI.src = 'http://www.clker.com/cliparts/A/E/s/N/M/Y/lab-mouse-template-th.png'
    })(() => {this.runCycle()}, this.mouse);

    function controls(e) {
      //console.log(code);
      var key = e.keyCode;
      //up arrow
      if(key === 38) {
        this.mouse.y -= 10;
      }
      //right arriw
      if(key === 39) {
        this.mouse.x += 10;
      }
      //down arrow
      if(key === 40) {
        this.mouse.y += 10;
      }
      //left arrow
      if(key === 37) {
        this.mouse.x -= 10;
      }
    }
    this.eventListener = controls.bind(this);
    controlsScope.addEventListener('keydown', this.eventListener);

		this.runCycle = this.runCycle.bind(this);
		this.running = true;
	}

	loadObstacles(obs) {
		this.obstacles = [];
		if(obs.rects) for(var ob of obs.rects) this.obstacles.push(new Obstacle(ob));
		if(obs.FSMs) for(ob of obs.FSMs) this.obstacles.push(new FSM(ob));
	}

	runCycle() {
		var fps = 25;
		for(var obstacle of this.obstacles) {
			if(obstacle.onTick) obstacle.onTick();
		}
		this.draw();
		if(this.running) setTimeout(this.runCycle, 1000 / fps)
	}

	checkForWin() {
		if(this.mouse.x === this.winBox.x && this.mouse.y === this.winBox.y) {
			setTimeout(this.winFunc, 1);//give ctx time to place image
			window.removeEventListener('keydown', this.eventListener);
			this.running = false;
		}
	}

	checkForOnObstacle() {
		function rectOverlap(r1, r2) {
			return !( r1.x > (r2.x + r2.w) ||
			(r1.x + r1.w) <  r2.x ||
			r1.y > (r2.y + r2.h) ||
			(r1.y + r1.h) <  r2.y);
		}
		if(this.obstacles) {
			for(var rect of this.obstacles) {
				if(rectOverlap(this.mouse, rect)) {
					this.mouse.x = this.start.x;
					this.mouse.y = this.start.y;
				}
			}
		}
	}

	draw() {
		const drawObstacles = ((obstacles = this.obstacles) => {
			for(var obstacle of obstacles) obstacle.draw(this.ctx);
		}).bind(this);

		this.checkForOnObstacle();
		this.checkForWin();

		this.ctx.clearRect(0, 0, this.can.width, this.can.height)
		this.ctx.fillRect(this.winBox.x, this.winBox.y,50,50);
		this.ctx.drawImage(this.mouse.img, this.mouse.x, this.mouse.y, this.mouse.w, this.mouse.h);
		drawObstacles();
	}
}
