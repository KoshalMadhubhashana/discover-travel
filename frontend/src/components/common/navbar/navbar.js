import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <header>
        <ul className="navbar-items">
          <li>
            <a>Discover Travel</a>
          </li>
          <li>
            {/*<a>Air Ticket</a>*/}
            <Link to={"/bookflight"}>Air Ticket</Link>
          </li>
          <li>
            <Link to={"/"}>Hotels</Link>
          </li>
          <li>
            <a>Travel Package</a>
          </li>
          <li>
            <Link to={"/guidedetails"}>Guide</Link>
          </li>
          <li>
            <Link to={"/activitiesPage"}>Activity</Link>
          </li>
          <li>
            <a>Insurance</a>
          </li>
        </ul>
        <div>
          <button id="sign_in_btn" className="btn_header">
            Sign In
          </button>
          <button id="register_btn" className="btn_header">
            Register
          </button>
        </div>
      </header>
    );
  }
}

export default Navbar;
