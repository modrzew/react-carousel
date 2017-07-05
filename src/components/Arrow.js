import React from 'react';
import classnames from 'classnames';

import './Arrow.css';


export default function Arrow (props) {
  let label;
  if (props.direction === 'left') {
    label = '<';
  } else {
    label = '>';
  }
  return (
    <div
      className={classnames('arrow', `arrow-${props.direction}`)}
      onClick={props.onClick}
    >
      {label}
    </div>
  );
}
