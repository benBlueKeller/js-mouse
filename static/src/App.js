import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './game.js';
import jsMouse from './Js-mouse.js';


class App extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <jsMouse />
      </div>
    );
  }
}

export default App;
