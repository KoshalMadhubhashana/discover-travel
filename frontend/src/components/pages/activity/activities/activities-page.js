import React, { Component } from "react";
import ActivityCard from "./components/activity-card/activity-card";
import "./activities-page.css";
import Navbar from "../../../common/navbar/navbar";

class ActivitiesPage extends Component {
  state = {};
  render() {
    return (
      <section className="all-activities-section">
        <Navbar></Navbar>
        <ActivityCard></ActivityCard>
        <ActivityCard></ActivityCard>
        <ActivityCard></ActivityCard>
        <ActivityCard></ActivityCard>
      </section>
    );
  }
}

export default ActivitiesPage;
