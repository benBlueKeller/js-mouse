/**Game class for jsMouse
 * 
 * @param  {[type]} canvas [description]
 * @param  {[type]} level  [description]
 * @return {[type]}        [description]
 */

export default class Game {
	constructor(canvas, controlsScope = window) {
		this.can = canvas;
		this.ctx = canvas.getContext('2d');
		console.log(this);
		this.ctx.fillRect(90,90,50,50);
    this.mouse = {}
    this.mouse.x = 50;
    this.mouse.y = 50;

    this.winBox = {};
    this.winBox.x = 50;
    this.winBox.y = 50;
		
		((callback, mouse) => {
      var mouseI = new Image();
      mouseI.onload = function() {
        mouse.img = mouseI;
        callback();
      }
      mouseI.src = 'http://www.clker.com/cliparts/A/E/s/N/M/Y/lab-mouse-template-th.png'
    })(() => {this.draw()}, this.mouse);

    controlsScope.addEventListener('keydown', (e) => {
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
    })
	}

	checkForWin() {
		if(this.mouse.x === this.winBox.x && this.mouse.y === this.winBox.y) {
			console.log("WIN!!!");
		}
	}

	draw() {
		this.checkForWin();
		this.ctx.clearRect(0, 0, this.can.width, this.can.height)
		this.ctx.fillRect(this.winBox.x, this.winBox.y,50,50);
		this.ctx.drawImage(this.mouse.img, this.mouse.x, this.mouse.y, 50, 50)
	}
}