import React from 'react';
import PropTypes from 'prop-types';

function getStyle(depth) {
  return {
    'text-align': 'left',
    'text-indent': 50 + depth * 20 + 'px',
  }
};

function serializeTree(node, index, depth) {
  if ( !node.children ) return (<div key={index} style={getStyle(depth)}> {index + ':' + node.content + ' '} <br/></div>);

  return (<div key={index} style={getStyle(depth)}> {index + ':' + node.content + ' '} <br/>
    {node.children.map(function(node, i) {
      return serializeTree(node, index + '/'+ i, depth + 1);
    })}
  </div>);
}

export default function Quadtree(props) {
	const text = serializeTree(props.structure, 'x', 0);
  return (<div className="TreeStructure">{text}</div>);
}

Quadtree.propTypes = {
  structure: PropTypes.object,
}