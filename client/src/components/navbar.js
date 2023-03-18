import React, { useState } from "react";
import "./navbar.css";

export default function Navbar(props) {
  console.log("props inside navbar", props.plans[1].img);
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
            <a href="/Login">Login</a>
          </li>
          <li>
            <a href="/Register">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
