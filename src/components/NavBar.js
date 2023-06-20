import React from "react";
import "./NavBar.css";
import WheelIcon from "./steering-wheel_icon_512.png";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="logo">
          <img src={WheelIcon} className="nav-bar-icon" alt="auto care logo" />
        </div>
        <div className="menu-options">
          <ul>
            <li>Home</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
    );
  }
}