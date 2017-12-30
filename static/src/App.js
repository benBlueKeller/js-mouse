import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import MouseModal from './Mouse-modal.js';

class App extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <p>Hello</p>
        <MouseModal />
      </div>
    );
  }
}

export default App;
