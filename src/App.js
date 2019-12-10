import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import BookCard from './components/BookCard';
import BookSearch from './components/BookSearch';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getBooks } from './actions/books';

function App(props) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    props.getBooks(query).then(() => {
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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

  const onInputChange = e => {
    setQuery(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
  };
  return (
    <div>
      <BookSearch
        onSubmitHandler={onSubmitHandler}
        onInputChange={onInputChange}
        query={query}
      />
      {/* <Loader query={query} loading={loading} /> */}
      {!loading ? (
        <Grid container justify="center" spacing={3}>
          {props.books.map((book, index) => (
            <Grid key={index} item>
              <BookCard
                id={book.id}
                coverImage={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                author={getAuthor(book)}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress className="loader-spinner" />
      )}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    books: state.books
  };
};
export default connect(mapStateToProps, { getBooks })(App);
