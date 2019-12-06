import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function BookDetails({ match }) {
  const {
    params: { bookId }
  } = match;

  const [book, setBook] = useState({});
  const API_BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchData = async url => {
    const result = await axios.get(url);
    const jsonResponse = await result.data.volumeInfo;
    return jsonResponse;
  };

  useEffect(() => {
    fetchData(`${API_BASE_URL}/${bookId}`).then(result => {
      setBook(result);
    });
  }, [API_BASE_URL, bookId]);

  return (
    <div>
      <h3>
        <strong>Title:</strong>
        {book.title}
      </h3>
      <p>
        <strong>Authors:</strong> {book.authors}
      </p>
      <p>
        <strong>Published Date:</strong> {book.publishedDate}
      </p>
      <p>
        <strong>Publisher:</strong> {book.publisher}
      </p>
      <p>
        <strong>Page Count:</strong> {book.pageCount}
      </p>
    </div>
  );
}
