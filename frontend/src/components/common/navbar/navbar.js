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
            <Link to={"/"}>Discover Travel</Link>
          </li>
          <li>
            {/*<a>Air Ticket</a>*/}
            <Link to={"/bookflight"}>Air Ticket</Link>
          </li>
          <li>
            <Link to={"/hotelpackage"}>Hotels</Link>
          </li>
          <li>
            <Link to="/travelpackages">Travel Package</Link>
          </li>
          <li>
            <Link to={"/guidedetails"}>Guide</Link>
          </li>
          <li>
            <Link to={"/activitiesPage"}>Activity</Link>
          </li>
          <li>
            <Link to={"/package"}>Insurance</Link>
          </li>
        </ul>
        <div>
          <Link to={"/login"}>
          <button id="sign_in_btn" className="btn_header">
            Sign In
          </button></Link>
          <Link to={"/register"}>
          <button id="register_btn" className="btn_header">
            Register
          </button>
          </Link>
          <Link to={"/guide-login"}>
            <button id="register_btn" className="btn_header">
              Guide
            </button>
          </Link>
        </div>
      </header>
    );
  }
}

export default Navbar;
