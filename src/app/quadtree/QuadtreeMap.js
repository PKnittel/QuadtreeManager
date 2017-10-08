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
  'Donnerblitz': 'yellow',
  'inside': 'beige',
  'outside': 'white',
  'wall': 'black'
};

function getColor(content) {
  return (colors[content] ? colors[content] : 'transparent' );
};

function getTranslation(index, width) {
    switch (index) {
    case 0:
      return '0,0';
    case 1:
      return  width + ',0';
    case 2:
      return  width + ',' +  width;
    case 3:
      return '0,' +  width;
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
  const mapHeight = 650;

  return (<svg width="1000" height={mapHeight} onContextMenu={props.showContextMenu}>
    <g transform={`translate(${0},${0})`}>
      { serializeTree(props.structure, 0, mapHeight) }
    </g>
  </svg>);
}

QuadtreeMap.propTypes = {
  structure: PropTypes.object,
  showContextMenu: PropTypes.func,
}