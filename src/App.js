import React, { useState, useEffect } from 'react';
import './App.css';
import ImgMediaCard from './components/Card';
import CustomizedInputBase from './components/Search';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    const result = await axios.get(
      'http://openlibrary.org/search.json?q=the+lord+of+the+rings'
    );
    console.log('The results', result.data.docs);
    setBooks(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CustomizedInputBase />
      {/* <div className="cards-container">
        {books.map(book => (
          <div key={book.id}>
            <ImgMediaCard
            // title={book.title}
            // author={book.author_name}
            // book-image={book.image}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default App;
