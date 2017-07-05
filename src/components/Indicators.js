import React from 'react';

import Indicator from './Indicator';
import './Indicators.css';


export default function Slide (props) {
  const indicators = [];
  for (let i = 0; i < props.slidesCount; i++) {
    indicators.push(
      <Indicator
        active={props.currentPage === i}
        page={i}
        key={i}
        changePage={props.changePage.bind(this, i)}
      />
    );
  }
  return <ul className="indicators">{indicators}</ul>;
}
