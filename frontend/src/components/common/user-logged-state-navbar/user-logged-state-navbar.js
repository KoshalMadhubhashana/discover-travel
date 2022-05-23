import React, { Component } from "react";
import "./user-logged-state-navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser } from "@fortawesome/free-solid-svg-icons";
class UserLoggedStateNavbar extends Component {
  render() {
    return (
      <header>
        <ul className="activity-page-navbar-items">
          <li>
            <span>Logo</span> Discover Travel
          </li>
        </ul>
        <p className="title">Activity management</p>
        <div>
          <button id="logout_btn">Log out</button>
          <button id="logged_user_btn">
            <span>
              <FontAwesomeIcon icon={faUser} />{" "}
            </span>
            Admin
          </button>
        </div>
      </header>
    );
  }
}

export default UserLoggedStateNavbar;
