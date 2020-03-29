import React from 'react';
import './index.css';

export default function Loading() {
  return (
    <div className="svg">
      <svg>
        <circle cx="50%" cy="50%" r="25" className="outer"></circle>
        <circle cx="50%" cy="50%" r="15" className="inner"></circle>
      </svg>
    </div>
  );
}