import React from 'react';

export default function BookDetails({ match }) {
  const {
    params: { bookId }
  } = match;

  return (
    <div>
      Books details :<strong>{bookId}</strong>
    </div>
  );
}
