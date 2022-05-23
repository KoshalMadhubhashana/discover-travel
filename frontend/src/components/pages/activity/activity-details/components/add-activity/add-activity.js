import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./add-activity.css";
class AddActivityButton extends Component {
  state = {};
  render() {
    return (
      <div className="acivity-btn-container">
        <Link to={`/manageActivityPage`}>
          <button className="add-activity-btn">Add activity</button>
        </Link>
      </div>
    );
  }
}

export default AddActivityButton;
