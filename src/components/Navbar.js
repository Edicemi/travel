import React from "react";
import "../styles/navbar.css";

// importing images
import logo from "../images/logo.png";
// import logo from "../images/Rectangle.png";
// importing images

export const Navbar = () => {
  return (
    <div className="navbar">
      <img className="" src={logo} alt="Logo" />
      <ul className="nav-list">
        <li className="nav-list1">Home</li>
        <li className="nav-list1">About</li>
        <li className="nav-list1">Services</li>
        <li className="nav-list1">Upcoming Packages</li>
      </ul>
      <div className="navb">
        <button className="nav-button">Get in Touch</button>
      </div>
    </div>
  );
};
