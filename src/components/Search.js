import React from 'react';
import './index.css';

// eslint-disable-next-line react/prop-types
export default function Search({ searchTerm }) {
  return (
    <form className="search">
      <input type="text" value={searchTerm} />
      <button onSubmit={(event) => event.preventDefault()}>Search</button>
    </form>
  );
}