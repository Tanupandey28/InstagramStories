import React from "react";
import "./../styles/Header.css";
import homeIcon from "./../icons/home.svg";
import messageIcon from "./../icons/send.svg";
import exploreIcon from "./../icons/compass.svg";
import heartIcon from "./../icons/heart.svg";

const Header = () => {
  return (
    <header className="insta-header">
      <div className="insta-logo">Instagram</div>
      <div className="insta-search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="insta-icons">
        <img src={homeIcon} alt="Home" className="icon" />
        <img src={messageIcon} alt="Messages" className="icon" />
        <img src={exploreIcon} alt="Explore" className="icon" />
        <img src={heartIcon} alt="Notifications" className="icon" />
      </div>
    </header>
  );
};

export default Header;
