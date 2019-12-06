import initialState from '../store/initialState';
import { BOOKS_FETCHED } from '../actions/actionTypes';

export default (state = initialState.books, action) => {
  console.log('Action', action);
  switch (action.type) {
    case BOOKS_FETCHED:
      return { ...state, books: action.payload.books };

    default:
      return state;
  }
};
