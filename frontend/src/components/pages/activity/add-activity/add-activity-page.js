import React, { Component } from "react";
import UserLoggedStateNavbar from "../../../common/user-logged-state-navbar/user-logged-state-navbar";
import AddActivityForm from "./components/add-activity-form/add-activity-form";
import Navbar from "../../../common/navbar/navbar";
import HeaderAdmin from "../../hotel/HeaderAdmin";

class AddActivityPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeaderAdmin/>
        <AddActivityForm></AddActivityForm>
      </div>
    );
  }
}

export default AddActivityPage;
