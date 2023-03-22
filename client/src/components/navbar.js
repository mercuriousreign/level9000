import React, { useState } from "react";
import "./navbar.css";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul>
          <li className="home">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/User">Your Account</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/signup">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
