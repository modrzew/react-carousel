import React from 'react';

import SlidesContainer from './SlidesContainer.js';
import Indicators from './Indicators';
import Arrow from './Arrow';
import './Carousel.css';


export default class Carousel extends React.Component {
  constructor (props) {
    super(props);
    props.loadSlides();
  }

  move (direction) {
    let newPage = this.props.currentPage + direction;
    if (newPage < 0) {
      newPage = this.props.slides.length + direction;
    } else if (newPage === this.props.slides.length) {
      newPage = 0;
    }
    this.props.changePage(newPage);
  }

  render () {
    return (
      <div className="carousel">
        <SlidesContainer slides={this.props.slides} currentPage={this.props.currentPage} />
        <Indicators
          slidesCount={this.props.slides.length}
          currentPage={this.props.currentPage}
          changePage={this.props.changePage}
        />
        <Arrow direction="left" onClick={this.move.bind(this, -1)} />
        <Arrow direction="right" onClick={this.move.bind(this, 1)} />
      </div>
    );
  }
}
