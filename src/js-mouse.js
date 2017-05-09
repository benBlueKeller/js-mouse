import React, { Component } from 'react';
import './js-mouse.css';

class jsMouse extends Component {
	constructor() {
		super();

		var can = document.getElementById('canvas1');
		var ctx = can.getContext('2d');


		ctx.fillRect(50,50,50,50);
		console.log("HJ");
	}

	render() {
		return (
			<div className = "jsMouse">
				<p> Hello World! </p>
				<canvas id="canvas1" width="500" height="500"></canvas>
			</div>
		);
	}
}

export default jsMouse;