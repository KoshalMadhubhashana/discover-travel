import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./activity-card.css";
class ActivityCard extends Component {
  state = {};
  render() {
    return (
      <div class="activity-card">
        <img src="./images/activity-01.jpg" class="forImage" />
        <h4 class="activity-name">Activity name</h4>
        <p class="activity-description">
          Lorem ipsum dollar sit amet Lorem ipsum dollar sit ametLorem ipsum
          dollar sit ametLorem sit ametLorem idacdd d psum dollar sit ametLorem
          idacdd d psum dollar sit ametLorem idacdd d psum dollar ipsum dollar
          sit ametLorem idacdd d psum dollar sit ametLorem ipsum dollar sit
          ametLorem ipsum dollar sit amet
        </p>
        <center>
          <Link to="/activityDetailsPage">
            <button className="more-details-btn">More details</button>
          </Link>
        </center>
      </div>
    );
  }
}

export default ActivityCard;
