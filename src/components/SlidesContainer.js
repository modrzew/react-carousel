import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import Slide from './Slide.js';
import './SlidesContainer.css';


export default class SlidesContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // directionMultiplier is applied to CSS translation, indicating
      // in which way slide will move (left or right)
      directionMultiplier: 1,
    };
  }

  componentWillReceiveProps (nextProps, nextState) {
    if (nextProps.currentPage < this.props.currentPage) {
      this.setState({
        directionMultiplier: -1,
      });
    } else if (nextProps.currentPage > this.props.currentPage) {
      this.setState({
        directionMultiplier: 1,
      });
    }
  }

  render () {
    const currentSlide = this.props.slides.find((slide, index) => this.props.currentPage === index);
    const slide = <Slide key={this.props.currentPage} {...currentSlide} />;
    return (
      <ul className="slides-container">
        <CSSTransitionGroup
          transitionName="slide-change"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {slide}
        </CSSTransitionGroup>
        <style>{`
          .slide-change-enter {
            transform: translate(${this.state.directionMultiplier * 100}%);
          }
          .slide-change-leave.slide-change-leave-active {
            transform: translate(${this.state.directionMultiplier * -100}%);
          }
        `}</style>
      </ul>
    );
  }
}
