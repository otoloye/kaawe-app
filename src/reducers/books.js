import initialState from '../store/initialState';
import { BOOKS_FETCHED } from '../actions/actionTypes';

export default (state = initialState.books, action) => {
  switch (action.type) {
    case BOOKS_FETCHED:
      return [...state, ...action.payload.books];
    default:
      return state;
  }
};
