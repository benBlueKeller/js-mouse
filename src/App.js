import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import jsMouse from './js-mouse.js';


class App extends Component {
  componentDidMount() {
    var can = this.refs.mCanvas
    var ctx = can.getContext('2d');
    
    function placeMouse(ctx) {
      ctx.drawImage(mouse.img, mouse.x, mouse.y)
    }
    var mouse = {};
    mouse.x = 100;
    mouse.y = 100;

    ((callback) => {
      var mouseI = new Image();
      mouseI.onload = function() {
        mouse.img = mouseI;
        callback(ctx);
      }
      mouseI.src = 'http://www.clker.com/cliparts/A/E/s/N/M/Y/lab-mouse-template-th.png'
    })(placeMouse);
    window.addEventListener('keydown', (e) => {
      var code = e.keyCode;
      console.log(code);
      //up arrow
      if(code === 38) {
        mouse.y -= 10;
        placeMouse(ctx);
      }
      //right arriw
      if(code === 39) {
        mouse.x += 10;
        placeMouse(ctx);
      }
      //down arrow
      if(code === 40) {
        mouse.y += 10;
        placeMouse(ctx);
      }
      //left arrow
      if(code === 37) {
        mouse.x -= 10;
        placeMouse(ctx);
      }
    })


    ctx.fillRect(50,50,50,50);
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
