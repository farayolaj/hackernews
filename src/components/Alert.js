import React from 'react';
import './index.css';

export const AlertType = {
  WARNING: {
    bgColor: 'lightgreen',
    textColor: 'green',
  },
  ERROR: {
    bgColor: 'lightpink',
    textColor: 'red',
  },
  LOG: {
    bgColor: 'lightblue',
    textColor: 'blue',
  },
};

const Alert = ({ children, type, onClose, show }) => {
  const style = {
    backgroundColor: type.bgColor,
    color: type.textColor
  };

  return show ? (
    <div className="alert" style={style}>
      <span className="dismiss" onClick={onClose}>X</span>
      <p>{children}</p>
    </div>
  ) : null;
};

export default Alert;