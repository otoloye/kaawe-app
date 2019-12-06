import React, { useState } from 'react';
import './App.css';
import BookCard from './components/BookCard';
import BookSearch from './components/BookSearch';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchData = async () => {
    setLoading(true);
    const result = await axios.get(`${API_BASE_URL}?q=${query}`);
    const jsonResponse = await result.data.items;
    setBooks(jsonResponse);
    setLoading(false);
  };

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
    fetchData();
  };
  return (
    <div>
      <BookSearch
        onSubmitHandler={onSubmitHandler}
        onInputChange={onInputChange}
        query={query}
      />
      {/* <Loader query={query} loading={loading} /> */}
      {loading === false ? (
        <Grid container justify="center" spacing={3}>
          {books.map((book, index) => (
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

export default App;
