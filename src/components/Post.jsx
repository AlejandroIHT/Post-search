import React from 'react';
import '../styles/components/post.css';

const Post = ({ data }) => (
  <div className="Post">
    <img
      className="Post__imgPost"
      src={data.image}
      alt="post"
    />
    <div className="Post__container">
      <div className="Post__container--tags">
        {data.tags.map(tag => <div className="tag">{tag}</div>)}
        <div className="tag">dogs</div>
      </div>
      <p className="Post__container--body">
        {data.text}
      </p>
      <div className="Post__container--user">
        <div className="user__container">
          <img
            src={data.owner.picture}
            alt="user"
          />
        </div>
        <div className="user__body">
          <h5 className="user__body--name">{`${data.owner.firstName} ${data.owner.lastName}`}</h5>
          <p className="user__body--email">{data.owner.email}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Post;
