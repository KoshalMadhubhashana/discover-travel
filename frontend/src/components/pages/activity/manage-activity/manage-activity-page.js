import UserLoggedStateNavbar from "../../../common/user-logged-state-navbar/user-logged-state-navbar";
import React, { Component } from "react";
import ActivityManageCard from "./components/activity-card/activity-manage-card";
import "./manage-activity-page.css";
import AddActivityBtn from "./components/add-activity-btn/add-activity-btn";

class ManageActivityPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <UserLoggedStateNavbar></UserLoggedStateNavbar>
        <AddActivityBtn></AddActivityBtn>
        <ActivityManageCard></ActivityManageCard>
      </div>
    );
  }
}

export default ManageActivityPage;
