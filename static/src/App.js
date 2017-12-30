import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import MouseModal from './Js-mouse.js';

class App extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <MouseModal />
      </div>
    );
  }
}

export default App;
