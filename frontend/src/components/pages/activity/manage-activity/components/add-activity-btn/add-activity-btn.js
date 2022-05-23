import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./add-activity-btn.css";
class AddActivityBtn extends Component {
  state = {};
  render() {
    return (
      <div className="acivity-btn-container">
        <Link to={`/addActivityPage`}>
          <button className="add-activity-btn">Add activity</button>
        </Link>
      </div>
    );
  }
}

export default AddActivityBtn;
