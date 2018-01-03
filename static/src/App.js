import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import MouseModal from './Mouse-modal.js';
import JsMouse from './Js-mouse.js';

class App extends Component {
  constructor(props) {
    super(props);
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
