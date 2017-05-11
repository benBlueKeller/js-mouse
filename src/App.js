import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import jsMouse from './js-mouse.js';


class App extends Component {
  componentDidMount() {
    var can = this.refs.mCanvas
    var ctx = can.getContext('2d');


    ctx.fillRect(50,50,50,50);
    console.log("HJ");
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
