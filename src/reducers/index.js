import { combineReducers } from 'redux';
import books from './books';
import selectedBook from './selectedBook';

export default combineReducers({ books, selectedBook });
