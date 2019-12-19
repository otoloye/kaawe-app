import React, { useState, useEffect } from 'react';
import './App.css';
import BookCard from './components/BookCard';
import BookSearch from './components/BookSearch';
import Grid from '@material-ui/core/Grid';
import { fetchBooksApi } from './actions/books';
import { connect } from 'react-redux';

function App(props) {
  useEffect(() => {
    props.fetchBooksApi(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [query, setQuery] = useState('');

  const placeholderImage = 'http://lorempixel.com/400/200/';

  const getAuthor = book => {
    if (book.volumeInfo.authors) {
      if (book.volumeInfo.authors.length > 1) {
        const splitedAuthors = book.volumeInfo.authors.join(', ');
        return splitedAuthors;
        // let nameString = '';
        // book.author_name.forEach((author, index) => {
        //   if (index !== 0) {
        //     nameString += `, ${author}`;
        //   } else {
        //     nameString += author;
        //   }
        // });
        // return nameString;
        // return `${book.author_name[0]} et al`;
      } else {
        return book.volumeInfo.authors[0];
      }
    } else {
      return 'Anonymous';
    }
  };

  const checkImage = url => {
    if (typeof url === 'undefined') {
      return placeholderImage;
    } else {
      return url.thumbnail;
    }
  };

  const onInputChange = e => {
    setQuery(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    props.fetchBooksApi(query);
  };

  return (
    <div>
      <BookSearch
        onSubmitHandler={onSubmitHandler}
        onInputChange={onInputChange}
        query={query}
      />

      <Grid container justify="center" spacing={3}>
        {props.books.map((book, index) => (
          <Grid key={index} item>
            <BookCard
              id={book.id}
              coverImage={checkImage(book.volumeInfo.imageLinks)}
              title={book.volumeInfo.title}
              author={getAuthor(book)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    books: state.books
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchBooksApi: query => dispatch(fetchBooksApi(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
