import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quadtree from './quadtree/Quadtree';

class App extends Component {
  render() {
    const structure = {
      0:{
        0: 'test',
        1: 'WiFi',
        2: 'BT',
        3: 'test 2',
      },
      1:{
        0: 'test',
        1: 'WiFi',
        2: 'BT',
        3: 'test 3',
      },
      2:{
        0: 'test',
        1: 'WiFi',
        2: 'BT',
        3: 'test 9',
      },
      3:{
        0: 'test',
        1: 'WiFi',
        2: 'BT',
        3: 'test 12',
      }
    }


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Quadtree structure={structure}/>
      </div>
    );
  }
}

export default App;
