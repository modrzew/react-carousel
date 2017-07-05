import React from 'react';
import classnames from 'classnames';

import './Indicator.css';


export default function Indicator (props) {
  return (
    <li
      className={classnames('indicator', { active: props.active })}
      onClick={props.changePage}
    />
  );
}
