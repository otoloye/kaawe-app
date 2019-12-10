import initialState from '../store/initialState';
import { BOOKS_FETCHED } from '../actions/actionTypes';
export default (state = initialState.books, action) => {
  switch (action.type) {
    case BOOKS_FETCHED:
      return [...state, ...action.payload.books]; // Since we are only slicing a part of state and that part is an array, what we should have returned here is an array
    default:
      return state;
  }
};
