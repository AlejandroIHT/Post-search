import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as postDataActions from '../actions/postDataActions';
import '../styles/components/header.css';
import Search from './Search';

const API = 'https://dummyapi.io/data/api/post';
const API_SEARCH = 'https://dummyapi.io/data/api/tag';
const API_ID = '60155ce9830963135fdbfd67';

const Header = ({ postDataReducer, getPosts }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search) getPosts(`${API_SEARCH}/${search.toLowerCase()}/post?page=1&limit=40`, API_ID);
  }, [search]);

  useEffect(() => {
    if (
      !search &&
      postDataReducer.postData.data.length === 0 &&
      !postDataReducer.loading
    )
      getPosts(`${API}?page=1&limit=40`, API_ID);
  }, [postDataReducer]);


  const handleChangeSearch = (e) => setSearch(e.target.value);

  return (
    <div className="Header">
      <div className="Header__container">
        <Search value={search} handleChange={handleChangeSearch} />
        {search.length !== 0 && (
          <p className="Header__container--toolTip">
            Remember to write the complete word.
          </p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ postDataReducer }) => ({ postDataReducer });

export default connect(mapStateToProps, postDataActions)(Header);
