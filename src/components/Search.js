import React from 'react';
import './index.css';

// eslint-disable-next-line react/prop-types
export default function Search({ searchTerm, onInputChanged, onSearch }) {
  return (
    <div className="search">
      <input type="text" value={searchTerm} onChange={onInputChanged} />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}