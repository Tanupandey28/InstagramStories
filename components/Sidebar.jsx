import React from "react";
import "./../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h4>Suggestions For You</h4>
      <ul>
        <li>@insta_user1</li>
        <li>@insta_user2</li>
        <li>@insta_user3</li>
      </ul>
    </div>
  );
};

export default Sidebar;
