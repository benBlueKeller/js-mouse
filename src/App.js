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
    this.state.winBox = {
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

    /**
     * mouse img is loaded after canvas enviroment setup
     * @param  {Function} callback is to draw() onload 
     */
    ((callback) => {
      var mouseI = new Image();
      mouseI.onload = function() {
        mouse.img = mouseI;
        callback();
      }
      mouseI.src = 'http://www.clker.com/cliparts/A/E/s/N/M/Y/lab-mouse-template-th.png'
    })(() => {this.draw()});

    window.addEventListener('keydown', (e) => {
      var code = e.keyCode;
      console.log(code);
      //up arrow
      if(code === 38) {
        mouse.y -= 10;
        this.draw();
      }
      //right arriw
      if(code === 39) {
        mouse.x += 10;
        this.draw();
      }
      //down arrow
      if(code === 40) {
        mouse.y += 10;
        this.draw();
      }
      //left arrow
      if(code === 37) {
        mouse.x -= 10;
        this.draw();
      }
    })

  }

  draw() {
    this.state.ctx.clearRect(0, 0, this.refs.mCanvas.width, this.refs.mCanvas.height)
    this.state.ctx.fillRect(this.state.winBox.x, this.state.winBox.y,50,50);
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
