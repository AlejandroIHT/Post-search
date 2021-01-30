import React from 'react';
import '../styles/components/header.css';
import Search from './Search';

const Header = () => (
  <div className="Header">
    <div className="Header__container">
      <Search />
    </div>
  </div>
);

export default Header;
