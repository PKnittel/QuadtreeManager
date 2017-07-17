import React from 'react'
import PropTypes from 'prop-types'

function serializeTree(node, index, depth) {
  if ( !node.children ) return (<div key={index}> {index + ':' + node.content + ' '} <br/></div>);

  return (<div key={index}> {index + ':' + node.content + ' '} <br/>
    {node.children.map(function(node, i) {
      return serializeTree(node, index + '/'+ i, depth + 1);
    })}
  </div>);
}

export default function Quadtree(props) {
  	return (<svg width="100" height="100">
	  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
	</svg>);
}

Quadtree.propTypes = {
  structure: PropTypes.object,
}