import {
  FETCHED_BOOKS,
  FETCHED_BOOKS_SUCCESS,
  FETCHED_BOOKS_FAILURE
} from './actionTypes';
import axios from 'axios';

export const getBooksRequest = () => {
  return {
    type: FETCHED_BOOKS
  };
};

export const getBooksSuccess = books => {
  return {
    type: FETCHED_BOOKS_SUCCESS,
    payload: books
  };
};

export const getBooksFailure = error => {
  return {
    type: FETCHED_BOOKS_FAILURE,
    payload: error
  };
};

export const fetchBooksApi = query => {
  return dispatch => {
    dispatch(getBooksRequest);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(res => {
        const jsonResponse = res.data.items;
        dispatch(getBooksSuccess(jsonResponse));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(getBooksFailure(errorMsg));
      });
  };
};
