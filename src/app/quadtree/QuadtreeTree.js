import React from 'react'
import PropTypes from 'prop-types'

function serializeTree(node, index, width, center) {
  if ( !node.children ) return ( <g transform={`translate(${center},${40})`}>
      <circle cx="-5" cy="-4" r="3" stroke="black" stroke-width="1" fill="red" />
      <text fill="red">{node.content}</text>
    </g>);

  return (<g transform={`translate(${center},${40})`}>
    <circle cx="-5" cy="-4" r="3" stroke="black" stroke-width="1" fill="red" />
    <text fill="red">{node.content}</text>
    {node.children.map(function(node, i) {
      const newCenter = ((i - 1.5) * 0.25 * width);
      return serializeTree(node, i, 0.2 * width, newCenter);
    })}
  </g>);
}

export default function Quadtree(props) {
  return (<svg width="1200" height="650px">
    <g transform={`translate(${600},${0})`}>
      { serializeTree(props.structure, 'x', 1000, 0) }
    </g>
  </svg>);
}

Quadtree.propTypes = {
  structure: PropTypes.object,
}