import React from 'react';

import SlideSynopsis from './SlideSynopsis';
import SlideTitle from './SlideTitle';

import './Slide.css';


export default function Slide (props) {
  const style = {
    backgroundImage: `url(${props.imageurl})`,
    backgroundSize: 'cover',
  };
  return (
    <li className="carousel-slide" style={style}>
      <a href={props.link}>
        <div className="text-container">
          <SlideTitle>{props.title}</SlideTitle>
          <SlideSynopsis>{props.synopsis}</SlideSynopsis>
        </div>
      </a>
    </li>
  );
}
