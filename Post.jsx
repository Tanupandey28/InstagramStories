import React from "react";
import "./../styles/Post.css";

const Post = ({ username, imageUrl, caption }) => {
  return (
    <div className="post">
      <div className="post-header">{username}</div>
      <img src={imageUrl} alt={caption} className="post-image" />
      <div className="post-caption"><strong>{username}</strong> {caption}</div>
    </div>
  );
};

export default Post;
