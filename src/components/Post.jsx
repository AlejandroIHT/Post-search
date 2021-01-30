import React from 'react';
import '../styles/components/post.css';

const Post = () => (
  <div className="Post">
    <img
      className="Post__imgPost"
      src="https://img.dummyapi.io/photo-1581804928342-4e3405e39c91.jpg"
      alt="post"
    />
    <div className="Post__container">
      <div className="Post__container--tags">
        <div className="tag">animals</div>
        <div className="tag">dogs</div>
      </div>
      <p className="Post__container--body">
        Senderismo con mi perro en el bosque. Labrador retriever negro sobre
        campo de hierba marrón durante el día
      </p>
      <div className="Post__container--user">
        <div className="user__container">
          <img
            src="https://randomuser.me/api/portraits/women/61.jpg"
            alt="user"
          />
        </div>
        <div className="user__body">
          <h5 className="user__body--name">Nombre Apellido</h5>
          <p className="user__body--email">email@email.com</p>
        </div>
      </div>
    </div>
  </div>
);

export default Post;
