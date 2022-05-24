import React from "react";
import "../../common/Styles/AdminHeader.css";

function HeaderAdmin() {
    return (
        <div>
            <div class="sidebar-container sidebar-containeradh">
                <div class="sidebar-logo sidebar-logoadh">
                    <i
                        class="fas fa-plane-departure"
                        aria-hidden="true"
                        style={{
                            fontSize: "70px",
                            marginLeft: "25px",
                            paddingBottom: "20px",
                        }}
                    ></i>
                </div>
                <ul class="sidebar-navigation sidebar-navigationadh">
                    <center><h2
                        class="headerad"
                        style={{fontSize: "17px", color: "blue", paddingTop: "15px"}}
                    >
                        <b>Discover Travelers</b>
                    </h2></center>
                    <li>
                        <a href="/adminhome">
                            <i class="fa fa-home" aria-hidden="true"></i> Homepage
                        </a>
                    </li>

                    <li>
                        <a href="/adminhotelpackage">
                            <i class="fa fa-hotel" aria-hidden="true"></i> Room Package
                        </a>
                    </li>
                    <li>
                        <a href="/adminairticket">
                            <i class="fa fa-hotel" aria-hidden="true"></i> Air Ticket
                        </a>
                    </li>
                    <li>
                        <a
                            href="/addActivityPage"
                        >
                            <i class="fa fa-swimmer" aria-hidden="true"></i>Add Activity
                        </a>
                    </li>
                    <li>
                        <a
                            href="/manageActivityPage"
                        >
                            <i className="fa fa-swimmer" aria-hidden="true"></i> View Activity
                        </a>
                    </li>
                    <li>
                        <a
                            //href="/guide"
                        >
                            <i class="fa fa-user" aria-hidden="true"></i> Guide
                        </a>
                    </li>
                    <li>
                        <a
                            href="/admincontact"
                        >
                            <i className="fa fa-user" aria-hidden="true"></i> Insurance
                        </a>
                    </li>
                    <li>
                        <a
                            href="/view"
                        >
                            <i className="fa fa-user" aria-hidden="true"></i> Payments
                        </a>
                    </li>
                </ul>
            </div>

            <div class="main_content">
                <div class="headerh" style={{height: "111px"}}>
                    <div id="hnamed">
                        <h1
                            style={{
                                paddingTop: "20px",
                                paddingLeft: "80px",
                                color: "white",
                            }}
                        >
                            {" "}
                            Discover Travelers Admin DashBord
                        </h1>
                    </div>

                    <div id="loginah">
                        <a
                            // href="/register"
                            style={{textDecoration: "none", color: "hsl(0,0%,70%,0.9)"}}
                        >
                            {" "}
                            <i class="fas fa-user-alt"></i>{" "}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderAdmin;
