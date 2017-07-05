const createAction = (type) => (payload) => ({ type, payload });


export const CAROUSEL_CHANGE_PAGE = 'CAROUSEL_CHANGE_PAGE';
export const carouselChangePage = createAction(CAROUSEL_CHANGE_PAGE);

export const CAROUSEL_LOAD_SLIDES = 'CAROUSEL_LOAD_SLIDES';
export const carouselLoadSlides = createAction(CAROUSEL_LOAD_SLIDES);

export function carouselStartLoadingSlides () {
  return (dispatch) => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(carouselLoadSlides(data.carousel))
      });
  }
}
