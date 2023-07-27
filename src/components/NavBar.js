/**
 * Co-Developed by Raunak Singh, B00831843
 */

import React from "react";
import "./NavBar.css";
import WheelIcon from "./steering-wheel-512.gif";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="logo">
          <a href="/"><img src={WheelIcon} className="nav-bar-icon" alt="auto care logo" /></a>
        </div>
        <div className="menu-options">
          <ul>
            <a href="/"><li>Home</li></a>
            <a href="/profile"><li>Profile</li></a>
            <a href="/faq"><li>FAQ</li></a>
            <a href="/contact"><li>Contact Us</li></a>
            <a href="/register"><li>Register</li></a>
            <a href="/login"><li>Login</li></a>
          </ul>
        </div>
      </nav>
    );
  }
}
