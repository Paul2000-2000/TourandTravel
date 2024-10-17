import React from "react";
import Logo from "../../assets/logo.png";
import "./navbar.css";

const navbar = () => {
  return (
    <div className="navbar">
      <div className="nav1">
        <p className="nav1-p">20% off on next booking</p>
        <p className="nav1-p">mobile no. +91 123456789</p>
      </div>
      <div className="nav2">
        <img src={Logo} alt="" id="logo" />
        <ul className="nav2-ul">
          <li className="nav2-ul-li">Home</li>
          <li className="nav2-ul-li">Blogs</li>
          <li className="nav2-ul-li">Best Places</li>
          <li className="nav2-ul-li">About</li>
          <li className="nav2-ul-li">Quick Links</li>
        </ul>
        <button id="nav2-but">Book Now</button>
      </div>
    </div>
  );
};

export default navbar;
