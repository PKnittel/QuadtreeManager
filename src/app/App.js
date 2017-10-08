import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

import Quadtree from './quadtree/Quadtree';
import QuadtreeTree from './quadtree/QuadtreeTree';
import QuadtreeMap from './quadtree/QuadtreeMap';

import NavBar from './NavBar/NavBarContainer';

import ContextMenuContainer from './contextMenu/ContextMenuContainer';

const structure = {
  content: null,
  children: [
    {
      content: null,
      children: [
        {
          content: null,
          children: [
            { content: 'wall' },
            { content: 'wall' },
            { content: 'inside' },
            { content: 'wall' },
          ],
        },
        {
          content: null,
          children: [
            { content: 'wall' },
            { content: 'wall' },
            { content: 'inside' },
            { content: 'inside' },
          ],
        },
        { content: 'inside' },
        {
          content: null,
          children: [
            { content: 'wall' },
            { content: 'inside' },
            { content: 'inside' },
            { content: 'wall' },
          ],
        },
      ],
    },
    {
      content: null,
      children: [
        {
          content: null,
          children: [
            { content: 'wall' },
            { content: 'wall' },
            { content: 'inside' },
            { content: 'inside' },
          ],
        },
        {
          content: null,
          children: [
            { content: 'wall' },
            { content: 'wall' },
            { content: 'wall' },
            { content: 'inside' },
          ],
        },
        {
          content: null,
          children: [
            { content: 'inside' },
            { content: 'wall' },
            { content: 'wall' },
            { content: 'inside' },
          ],
        },
        { content: 'inside' },
      ],
    },
    {
      content: null,
      children: [
        { content: 'inside' },
        {
          content: null,
          children: [
            { content: 'inside' },
            { content: 'wall' },
            { content: 'wall' },
            { content: 'inside' },
          ],
        },
        {
          content: null,
          children: [
            { content: 'inside' },
            { content: 'wall' },
            { content: 'wall' },
            { content: 'wall' },
          ],
        },
        {
          content: null,
          children: [
            { content: 'inside' },
            { content: 'inside' },
            { content: 'wall' },
            { content: 'wall' },
          ],
        },
      ],
    },
    {
      content: null,
      children: [
        {
          content: null,
          children: [
            { content: 'wall' },
            { content: 'inside' },
            { content: 'inside' },
            { content: 'wall' },
          ],
        },
        { content: 'inside' },
        {
          content: null,
          children: [
            { content: 'inside' },
            { content: 'inside' },
            { content: 'wall' },
            { content: 'wall' },
          ],
        },
        {
          content: null,
          children: [
            { content: 'wall' },
            { content: 'inside' },
            { content: 'wall' },
            { content: 'wall' },
          ],
        },
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
        <ContextMenuContainer/>
      </div>
    );
  }

  renderTreeComponent() {
    switch (this.props.viewMode) {
      case 'TREE':
        return <QuadtreeTree structure={structure}/>;
      case 'MAP':
        return <QuadtreeMap structure={structure} showContextMenu={this.props.showContextMenu}/>;
      case 'TEXT':
      default:
        return <Quadtree structure={structure}/>;
    }
  }
}


App.propTypes = {
  viewMode: PropTypes.string,
};

export default App;
