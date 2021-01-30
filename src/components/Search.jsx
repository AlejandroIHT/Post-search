import React from 'react';
import '../styles/components/search.css';

const Search = ({ value, handleChange }) => (
  <>
    <div className="search">
      <div className="search__icon">
        <i className="fas fa-search" />
      </div>
      <input
        id="search"
        className="search__input"
        type="text"
        placeholder="Search tag"
        onChange={handleChange}
        value={value}
      />
      <label className="tasks__search__container" htmlFor="search" />
    </div>
  </>
);

export default Search;
