import React from 'react'
import PropTypes from 'prop-types'

function serializeTree(tree, index) {
  if (typeof tree === 'string') return index + ':' +tree + ' ';
  const nodes = Object.values(tree);

  let result = '';
  nodes.forEach(function(node, i) {
  	result += serializeTree(node, index + '/'+ i);
  })
  return result;
}

export default function Quadtree(props) {
	const text = serializeTree(props.structure, 'x');
  return (<div className="TreeStructure">{text}</div>);
}

Quadtree.propTypes = {
  structure: PropTypes.object,
}