/**Game class for jsMouse
 * 
 * @param  {[type]} canvas [description]
 * @param  {[type]} level  [description]
 * @return {[type]}        [description]
 */

export default class Game {
	constructor(canvas) {
		this.can = canvas;
		this.ctx = canvas.getContext('2d');
	}
}