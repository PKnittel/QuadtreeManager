import React from 'react';
import PropTypes from 'prop-types';

import { Nav, Navbar, NavItem } from 'react-bootstrap';

const style = {
  border: '2px solid black',
  height: '300px'
};

export default function NavBar(props) {
  return (<Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Quadtree Manager</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} onClick={props.onClick.bind(this, 'TEXT')}>Textmode</NavItem>
      <NavItem eventKey={2} onClick={props.onClick.bind(this, 'TREE')}>Treemode</NavItem>
      <NavItem eventKey={3} onClick={props.onClick.bind(this, 'MAP')}>Mapmode</NavItem>
    </Nav>
  </Navbar>);
}

NavBar.propTypes = {
  onClick: PropTypes.func,
}