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
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavItem eventKey={3} href="#">Link</NavItem>
    </Nav>
  </Navbar>);
}

NavBar.propTypes = {
}