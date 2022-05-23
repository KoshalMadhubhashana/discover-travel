import React, { Component } from "react";
import UserLoggedStateNavbar from "../../../common/user-logged-state-navbar/user-logged-state-navbar";
import AddActivityForm from "./components/add-activity-form/add-activity-form";

class AddActivityPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <UserLoggedStateNavbar></UserLoggedStateNavbar>
        <AddActivityForm></AddActivityForm>
      </div>
    );
  }
}

export default AddActivityPage;
