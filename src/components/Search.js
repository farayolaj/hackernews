import React from 'react';
import './index.css';

export default function Search() {
  return (
    <form className="search">
      <input type="text"></input>
      <button onSubmit={(event) => event.preventDefault()}>Search</button>
    </form>
  )
}