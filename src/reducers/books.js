import { initialState } from './initialState';
import {
  FETCHED_BOOKS,
  FETCHED_BOOKS_SUCCESS,
  FETCHED_BOOKS_FAILURE
} from '../actions/actionTypes';

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_BOOKS: {
      return {
        loading: true
      };
    }

    case FETCHED_BOOKS_SUCCESS: {
      return {
        loading: false,
        books: action.payload,
        error: ''
      };
    }

    case FETCHED_BOOKS_FAILURE: {
      return {
        loading: false,
        books: [],
        error: action.payload
      };
    }

    default:
      return state;
  }
};
