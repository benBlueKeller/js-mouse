import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './game.js';
import jsMouse from './js-mouse.js';


class App extends Component {
  constructor() {
    super();
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
            obstacles: {
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
    }
    var next = nextLevel.bind(this);
    next();
   /* this.state.game = new Game(this.refs.mCanvas, levels[1], () => {
        currentLevel += 1;
        this.state.game = new Game(this.refs.mCanvas, levels[currentLevel]);
    });*/
  }


  render() {
    return (
      <div>
        {/* <jsMouse /> */}
        <div className = "jsMouse">
          <canvas id="canvas1" ref="mCanvas" width="500" height="500"></canvas>
        </div>
      </div>
    );
  }
}

export default App;
