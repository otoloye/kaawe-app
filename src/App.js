import React, { useState, useEffect } from 'react';
import './App.css';
import ImgMediaCard from './components/Card';
import CustomizedInputBase from './components/Search';
import axios from 'axios';

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
      <div className="cards-container">
        {books.map(book => (
          <div key={book.key}>
            <ImgMediaCard
              title={book.title}
              author={book.author_name}
              // book-image={book.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
