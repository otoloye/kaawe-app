import React, { useState } from 'react';
import './App.css';

const initialState = ['Area boys', 'Boys II Men', 'Fela Kuti'];

function App() {
  const [books, setBooks] = useState(initialState);

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
