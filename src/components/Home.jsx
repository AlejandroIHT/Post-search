import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as postDataActions from '../actions/postDataActions';
import '../styles/components/home.css';
import Post from './Post';
import Loader from './Loader';

const API = 'https://dummyapi.io/data/api/post';
const API_ID = '60155ce9830963135fdbfd67';

const Home = ({ postDataReducer, getPosts }) => {
  useEffect(() => {
    if (postDataReducer.postData.data.length === 0) getPosts(`${API}?page=1&limit=40`, API_ID);
  }, []);

  if (postDataReducer.loading) {
    return (
      <div className="Home center">
        <Loader />
      </div>
    );
  }

  if (postDataReducer.error) {
    return (
      <div className="Home center">
        <h3>Error :(</h3>
      </div>
    );
  }

  return (
    <div className="Home">
      {postDataReducer.postData.data.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ postDataReducer }) => ({ postDataReducer });

export default connect(mapStateToProps, postDataActions)(Home);
