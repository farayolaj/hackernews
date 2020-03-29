import React from 'react';
import './index.css';

// eslint-disable-next-line react/prop-types
export default function Search({ searchTerm, onInputChanged, onSearch }) {
  return (
    <form className="search" onSubmit={event => {
      event.preventDefault();
      onSearch();
    }}>
      <input type="text" value={searchTerm} onChange={onInputChanged} />
      <button type="submit">Search</button>
    </form>
  );
}