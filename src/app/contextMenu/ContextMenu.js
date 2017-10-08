import React, { Component } from 'react';
import PropTypes from 'prop-types';

function getStyle(position) {
  return {
    'position': 'absolute',
    'left': position.x + 'px',
    'top': position.y + 'px',
    'background-color': 'lightgray',
    'width': '150px',
    'height': '250px',
  }
};

class ContextMenu extends Component {
  render() {
    if (!this.props.show) return null;
    return (
      <div ref={(contextMenu) => { this.contextMenu = contextMenu }} tabIndex="0"
        style={getStyle(this.props.position)} onBlur={this.props.hideContextMenu} className="ContextMenu">
        Context Menü Content
      </div>);
  }

  componentDidMount(){
    this.contextMenu.focus();
  }

  componentDidUpdate(){
    if(this.contextMenu) {
      this.contextMenu.focus();
    }
  }
}

ContextMenu.propTypes = {
  show: PropTypes.bool,
  position: PropTypes.object,
}

export default ContextMenu;