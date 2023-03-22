import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul>
          <li className="home">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/User">Your Account </Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
