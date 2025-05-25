import React from "react";
import Post from "./Post";
import "./../styles/Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <Post username="john_doe" imageUrl="https://via.placeholder.com/400" caption="Nice view!" />
      <Post username="jane_smith" imageUrl="https://via.placeholder.com/400" caption="Loving this!" />
    </div>
  );
};

export default Feed;
