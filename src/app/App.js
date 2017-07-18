import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

import Quadtree from './quadtree/Quadtree';
import QuadtreeTree from './quadtree/QuadtreeTree';
import QuadtreeMap from './quadtree/QuadtreeMap';

import NavBar from './NavBar/NavBarContainer';

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
        { content: null },
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
        { content: null },
        { content: 'test 9' },
      ],
    },
    {
      content: null,
      children: [
        { content: 'test' },
        { content: null },
        { content: 'BT' },
        { content: 'test 12' },
      ],
    }
  ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <NavBar/>
        {this.renderTreeComponent()}
      </div>
    );
  }

  renderTreeComponent() {
    switch (this.props.viewMode) {
      case 'TREE':
        return <QuadtreeTree structure={structure}/>;
      case 'MAP':
        return <QuadtreeMap structure={structure}/>;
      default:
        return <Quadtree structure={structure}/>;
    }
  }
}


App.propTypes = {
  viewMode: PropTypes.string,
};

export default App;
