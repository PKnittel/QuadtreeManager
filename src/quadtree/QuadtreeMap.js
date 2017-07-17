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
  	return (<svg width="100" height="100">
	  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="blue" />
	</svg>);
}

Quadtree.propTypes = {
  structure: PropTypes.object,
}