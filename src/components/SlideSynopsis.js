import React from 'react';

import './SlideSynopsis.css';


export default function SlideSynopsis (props) {
  return <p className="slide-synopsis">{props.children}</p>;
}
