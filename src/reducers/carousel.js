import update from 'react-addons-update';
import { CAROUSEL_CHANGE_PAGE, CAROUSEL_LOAD_SLIDES } from '../actions';

const initialState = {
  slides: [],
  currentPage: 0,
};

export default function carousel (state = initialState, { type, payload }) {
  switch (type) {
    case CAROUSEL_CHANGE_PAGE:
      return update(state, { currentPage: { $set: payload } });
    case CAROUSEL_LOAD_SLIDES:
      const newState = {...state};
      newState.slides = [...payload];
      return newState;
    default:
      return state;
  }
}
