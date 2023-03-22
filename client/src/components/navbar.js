import React, { useState } from "react";
import "./navbar.css";
import { Link , redirect,} from "react-router-dom";

export default function Navbar(props) {

  function gohome(){
    return redirect("/")
  }
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul>
          <li className="home">
            <Link to="/">Over9000</Link>
          </li>
          <li>
            {props.loggedOut && <Link to="/User">Your Account </Link>}
          </li>
          <li>
            {!props.loggedOut && <Link to="/login">Login</Link>}
            
          </li>
          <li>
            {!props.loggedOut && <Link to="/signup">Register</Link>}
            
          </li>
          <li>
            {props.loggedOut && <Link to="/" onClick={props.logout}>Logout</Link>}
          </li>
        </ul>
      </div>
    </nav>
  );
}
