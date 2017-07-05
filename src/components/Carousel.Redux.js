import { connect } from 'react-redux';

import Carousel from './Carousel';
import { carouselChangePage, carouselStartLoadingSlides } from '../actions';

const mapStateToProps = (state) => ({
  slides: state.carousel.slides,
  currentPage: state.carousel.currentPage,
});

const mapDispatchToProps = {
  loadSlides: carouselStartLoadingSlides,
  changePage: carouselChangePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
