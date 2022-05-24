import UserLoggedStateNavbar from "../../../common/user-logged-state-navbar/user-logged-state-navbar";
import React, {Component} from "react";
import ActivityManageCard from "./components/activity-card/activity-manage-card";
import "./manage-activity-page.css";
import AddActivityBtn from "./components/add-activity-btn/add-activity-btn";
import Navbar from "../../../common/navbar/navbar";
import Footer from "../../../common/footer/footer";
import "../../../common/Styles/common.css";
import HeaderAdmin from "../../hotel/HeaderAdmin";

class ManageActivityPage extends Component {
    state = {};

    render() {
        return (
            <div>
                <HeaderAdmin/>
                {/*<AddActivityBtn></AddActivityBtn>*/}
                <ActivityManageCard></ActivityManageCard>
            </div>
        );
    }
}

export default ManageActivityPage;
