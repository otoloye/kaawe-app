import React, { useState, useEffect } from 'react';
import './App.css';
import ImgMediaCard from './components/Card';
import CustomizedInputBase from './components/Search';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

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

  return (
    <div>
      <CustomizedInputBase />
      <Grid container justify="center" spacing={1}>
        {books.map(book => (
          <Grid key={book.key} item>
            <ImgMediaCard title={book.title} author={book.author_name} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
