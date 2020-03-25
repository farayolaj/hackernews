import React from 'react';
import './index.css';

// eslint-disable-next-line react/prop-types
export default function Table({ data }) {
  return (
    <div className="table">
      <div className="head">
        <span>Title</span>
        <span>Author</span>
        <span>Number of Comments</span>
        <span>Points</span>
      </div>
      {/*eslint-disable-next-line react/prop-types*/}
      {data.map(item =>
        <div key={item.objectID}>
          <span><a href={item.url}>{item.title}</a></span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </div>
      )}
    </div>
  );
}