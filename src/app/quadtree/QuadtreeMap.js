import React from 'react'
import PropTypes from 'prop-types'

const colors = {
  'test': 'blue',
  'WiFi': 'red',
  'BT': 'green',
  'test 2': 'grey',
  'test 3': 'black',
  'test 9': 'violet',
  'test 12': 'cyan',
  'Donnerblitz': 'yellow'
};

function getColor(content) {
  return (colors[content] ? colors[content] : 'white' );
};

function getTranslation(index, width) {
    switch (index) {
    case 0:
      return '0,0';
    case 1:
      return '0,' +  width;
    case 2:
      return  width + ',' +  width;
    case 3:
      return  width + ',0';
    default:
      return '0,0';
  }
};

function serializeTree(node, index, width) {
  if ( !node.children ) return (<g transform={`translate(${getTranslation(index, width)})`}>
    <rect x="0" y="0" width={width} height={width} fill={getColor(node.content)}/>
  </g>);

  return (<g transform={`translate(${getTranslation(index, width)})`}>
    <rect x="0" y="0" width={width} height={width} fill={getColor(node.content)}/>
    {node.children.map(function(node, i) {
      return serializeTree(node, i, 0.5 * width);
    })}
  </g>);
}

export default function QuadtreeMap(props) {
  return (<svg width="1000" height="1000">
    <g transform={`translate(${0},${0})`}>
      { serializeTree(props.structure, 0, 1000) }
    </g>
  </svg>);
}

QuadtreeMap.propTypes = {
  structure: PropTypes.object,
}