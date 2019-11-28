import React, { useState, useEffect } from 'react';
import './App.css';

const initialState = ['Area boys', 'Boys II Men', 'Fela Kuti'];

function App() {
  const [books, setBooks] = useState([]);

  let booksCopy = books;

  useEffect(() => {
    fetch(
      'https://openlibrary.org/api/books?bibkeys=ISBN:0385472579,LCCN:62019420&format=json'
    ).then(res => {
      console.log('show books from ISBN:', res.url);
      setBooks([...booksCopy, res.url]);
    });
  }, []);

  return (
    <div className="app-root">
      <h1>This is a list of the books</h1>
      <div>
        {books.map(book => (
          <p>{book}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
