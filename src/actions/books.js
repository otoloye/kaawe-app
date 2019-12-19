import axios from 'axios';
import { BOOKS_FETCHED } from './actionTypes';

export const setBooks = books => {
  return {
    type: BOOKS_FETCHED,
    payload: { books }
  };
};

export const getBooks = query => {
  return async dispatch => {
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=microservice`
    );
    const jsonResult = result.data.items;
    dispatch(setBooks(jsonResult));
  };
};
