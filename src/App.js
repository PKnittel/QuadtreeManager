import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quadtree from './quadtree/Quadtree';
import NavBar from './NavBar/NavBarContainer';

class App extends Component {
  render() {
    const structure = {
      content: null,
      children: [
        {
          content: null,
          children: [
            { content: 'test' },
            { content: 'WiFi' },
            { content: 'BT' },
            { content: 'test 2' },
          ],
        },
        {
          content: 'Donnerblitz',
          children: [
            { content: 'test' },
            { content: 'WiFi' },
            { content: 'BT' },
            { content: 'test 3' },
          ],
        },
        {
          content: null,
          children: [
            { content: 'test' },
            { content: 'WiFi' },
            { content: 'BT' },
            { content: 'test 9' },
          ],
        },
        {
          content: null,
          children: [
            { content: 'test' },
            { content: 'WiFi' },
            { content: 'BT' },
            { content: 'test 12' },
          ],
        }
      ]
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
        <NavBar/>
        <Quadtree structure={structure}/>
      </div>
    );
  }
}

export default App;
