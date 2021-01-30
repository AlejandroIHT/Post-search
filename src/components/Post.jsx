import React from 'react';
import '../styles/components/post.css';

const Post = () => {
  return (
    <div className="Post">
      <img src="" alt="image post" />
      <div className="Post__container">
        <div className="Post__container--tags">
          <div className="tags">animals</div>
          <div className="tags">dogs</div>
        </div>
        <p className="Post__container--body">
          Senderismo con mi perro en el bosque. Labrador retriever negro sobre
          campo de hierba marrón durante el día
        </p>
        <div className="Post__container--user">
          <div className="user__container">
            <img src="" alt="user image" />
          </div>
          <div className="user__body">
            <h5 className="user__body--name">Nombre Apellido</h5>
            <p className="user__body--email">email@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
