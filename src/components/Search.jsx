import React from 'react';
import '../styles/components/search.css';

const Search = ({ value, handleChange, handleClick }) => (
  <>
    <div className="search">
      <div className="search__icon">
        <i className="fas fa-search" />
      </div>
      <input
        id="search"
        className={`search__input ${false ? 'active' : null}`}
        type="text"
        placeholder="Search tag"
        onChange={handleChange}
        value={value}
      />
      <label
        className={`tasks__search__container ${false ? 'active' : null}`}
        htmlFor="search"
      />
    </div>
  </>
);

export default Search;
