import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './game.js';
import jsMouse from './js-mouse.js';


class App extends Component {
  constructor() {
    super();
    this.state = {}

    //SETUP Game
  }

  componentDidMount() {
    this.state.can = this.refs.mCanvas
    this.state.ctx = this.state.can.getContext('2d');
    new Game(this.refs.mCanvas);
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
