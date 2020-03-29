import React from 'react';
import './index.css';

const Header = ({ children}) => (
  <header>
    <h1>My Hacker Stories</h1>
    {children}
  </header>
);

export default Header;