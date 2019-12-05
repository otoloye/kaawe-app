import React, { useState, useEffect } from 'react';
import './App.css';
import ImgMediaCard from './components/Card';
import CustomizedInputBase from './components/Search';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Loader from './components/Loader';

function App() {
  const [books, setBooks] = useState([]);

  const fetchData = async url => {
    const result = await axios.get(url);
    const jsonResponse = await result.data.docs;
    return jsonResponse;
  };

  useEffect(() => {
    fetchData(
      'http://openlibrary.org/search.json?q=the+lord+of+the+rings'
    ).then(result => {
      console.log(result);
      setBooks(result);
    });
  }, []);

  const getAuthor = book => {
    if (book.author_name) {
      if (book.author_name.length > 1) {
        const splitedAuthors = book.author_name.join(', ');
        console.log('Authors', splitedAuthors);
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
        return book.author_name[0];
      }
    } else {
      return 'Anonymous';
    }
  };

  return (
    <div>
      <CustomizedInputBase />

      {books.length > 0 ? (
        <Grid container justify="center" spacing={1}>
          {books.map(book => (
            <Grid key={book.key} item>
              <ImgMediaCard title={book.title} author={getAuthor(book)} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
