/**Game class for jsMouse
 * 
 * @param  {[type]} canvas [description]
 * @param  {[type]} level  [description]
 * @return {[type]}        [description]
 */

export default class Game {
	constructor(canvas, level, winFunc = () => {alert("Mouse in The Hole!")}, controlsScope = window) {
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

    this.obstacles = level.obstacles;

    this.winFunc = winFunc;
		
		((callback, mouse) => {
      var mouseI = new Image();
      mouseI.onload = function() {
        mouse.img = mouseI;
        callback();
      }
      mouseI.src = 'http://www.clker.com/cliparts/A/E/s/N/M/Y/lab-mouse-template-th.png'
    })(() => {this.draw()}, this.mouse);

    function l(e) {
      //console.log(code);
      var code = e.keyCode;
      //up arrow
      if(code === 38) {
        this.mouse.y -= 10;
        this.draw();
      }
      //right arriw
      if(code === 39) {
        this.mouse.x += 10;
        this.draw();
      }
      //down arrow
      if(code === 40) {
        this.mouse.y += 10;
        this.draw();
      }
      //left arrow
      if(code === 37) {
        this.mouse.x -= 10;
        this.draw();
      }
    }
    this.eventListener = l.bind(this);
    controlsScope.addEventListener('keydown', this.eventListener);
	}

	checkForWin() {
		if(this.mouse.x === this.winBox.x && this.mouse.y === this.winBox.y) {
			setTimeout(this.winFunc, 1);//give ctx time to place image
    	window.removeEventListener('keydown', this.eventListener);
		}
	}

	checkForOnObstacle() {
		if(this.obstacles && this.obstacles.rects) {
			function xOverLap() {
		
			}
			function rectOverlap(r1, r2) {
				return !( r1.x           > (r2.x + r2.w) || 
             (r1.x + r1.w) <  r2.x           || 
              r1.y           > (r2.y + r2.h) ||
             (r1.y + r1.h) <  r2.y);
			}
			for(var rect of this.obstacles.rects) {
				if(rectOverlap(this.mouse, rect)) {
					this.mouse.x = this.start.x;
					this.mouse.y = this.start.y;
				}
			}
		}
	}

	draw() {
		/*function drawObstacles(obstacles = this.obstacles) {
			if(typeof obstacles.rects === "object") {
				for(var rect in obstacles.rects) {
					this.ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
				}
			}
		}*/
		const drawObstacles = ((obstacles = this.obstacles) => {
			if(typeof obstacles.rects === "object") {
				for(var rect of obstacles.rects) {
					this.ctx.fillRect(rect.x, rect.y, rect.w, rect.h);				
				}
			}
		}).bind(this);

		this.checkForOnObstacle();
		this.checkForWin();

		this.ctx.clearRect(0, 0, this.can.width, this.can.height)
		this.ctx.fillRect(this.winBox.x, this.winBox.y,50,50);
		this.ctx.drawImage(this.mouse.img, this.mouse.x, this.mouse.y, this.mouse.w, this.mouse.h);
		if(this.obstacles) drawObstacles();
	}
}