import React, { Component } from 'react';
import './js-mouse.css';

import Game from './game.js';

class JsMouse extends Component {
	constructor(props) {
    super(props);
    this.state = {}
  }

	componentDidMount() {
		var levels = {
				1: {
						startX: 100,
						startY: 100,
						winX: 110,
						winY: 110
				},
				2: {
						startX: 250,
						startY: 250,
						winX: 100,
						winY: 100,
						obs: {
								rects: [
										{
												x: 123,
												y: 181,
												w: 100,
												h: 72
										},
										{
												x: 311,
												y: 250,
												w: 6,
												h: 125
										}
								],
								FSMs: [
									{
										x: 350,
										y: 100,
										w: 5,
										h: 5
									},
									{
										x: 75,
										y: 100,
										w: 5,
										h: 5
									},
								]
						}
				}
		}
		var currentLevel = 1;
		//reference to game only used for debugging
		function nextLevel() {
				this.state.game = new Game(this.refs.mCanvas, levels[currentLevel], () => {
						currentLevel += 1;
						if(!levels[currentLevel]) {
								currentLevel = 1;
								alert("Mouse in The Hole!");
						}
						next();
				})
				this.setState(this.state);
		}
		var next = nextLevel.bind(this);
		next();
	}

	render() {
		return <div className="jsMouse">
			<canvas ref="mCanvas" id="canvas1" width="500" height="500"></canvas>
		</div>;
	}
}

export default JsMouse;
