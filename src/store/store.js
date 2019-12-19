import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { bookReducer } from '../reducers/books';

export const store = createStore(
  bookReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
