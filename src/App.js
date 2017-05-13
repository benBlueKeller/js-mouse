import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import jsMouse from './js-mouse.js';


class App extends Component {
  constructor() {
    super();
    this.state = {}
    this.state.mouse = {
      x: 50,
      y: 50
    }
  }

  componentDidMount() {
    this.state.can = this.refs.mCanvas
    this.state.ctx = this.state.can.getContext('2d');
    var mouse = this.state.mouse;
    
    function placeMouse(ctx) {
      ctx.drawImage(mouse.img, mouse.x, mouse.y, 50, 50)
    }

    ((callback, ctx) => {
      var mouseI = new Image();
      mouseI.onload = function() {
        mouse.img = mouseI;
        callback(ctx);
      }
      mouseI.src = 'http://www.clker.com/cliparts/A/E/s/N/M/Y/lab-mouse-template-th.png'
    })(placeMouse, this.state.ctx);

    window.addEventListener('keydown', (e) => {
      var code = e.keyCode;
      console.log(code);
      //up arrow
      if(code === 38) {
        mouse.y -= 10;
        placeMouse(this.state.ctx);
      }
      //right arriw
      if(code === 39) {
        mouse.x += 10;
        placeMouse(this.state.ctx);
      }
      //down arrow
      if(code === 40) {
        mouse.y += 10;
        placeMouse(this.state.ctx);
      }
      //left arrow
      if(code === 37) {
        mouse.x -= 10;
        placeMouse(this.state.ctx);
      }
    })


    this.state.ctx.fillRect(50,50,50,50);
  }

  draw() {
    this.state.ctx.clearRect(0, 0, this.refs.mCanvas.width, this.refs.mCanvas.height)
    this.state.ctx.drawImage(this.state.mouse.img, this.state.mouse.x, this.state.mouse.y, 50, 50)
  }

  render() {
    return (
      <div>
        <jsMouse />
        <div className = "jsMouse">
          <canvas id="canvas1" ref="mCanvas" width="500" height="500"></canvas>
        </div>
      </div>
    );
  }
}

export default App;
