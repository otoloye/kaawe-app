import React, { useState, useEffect } from 'react';
import './App.css';
import ImgMediaCard from './components/Card';
import CustomizedInputBase from './components/Search';
import axios from 'axios';

function App() {
  // URL: https://www.goodreads.com/search/index.xml    (sample url)
  // HTTP method: GET
  // Parameters:
  // q: The query text to match against book title, author, and ISBN fields. Supports boolean operators and phrase searching.
  // page: Which page to return (default 1, optional)
  // key: Developer key (required).
  // search[field]: Field to search, one of 'title', 'author', or 'all' (default is 'all')

  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    const result = await axios(
      'https://www.goodreads.com/search.xml?key=KEY&q=Ender%27s+Game'
    );
    console.log('The results', result);
    setBooks(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CustomizedInputBase />
      <div className="cards-container">
        {books.map(book => (
          <div key={book.id}>
            <ImgMediaCard
            // title={book.title}
            // author={book.author}
            // book-image={book.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
