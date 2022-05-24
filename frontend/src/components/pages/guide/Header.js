import React from "react";
import {Button} from "antd";
import {useNavigate, NavLink} from "react-router-dom";
import {HomeTwoTone} from "@ant-design/icons";
import "../../common/Styles/common.css"

const Header = () => {
    const history = useNavigate();

    return (
        <div className=" container mx-auto">
            <div className="mybg to-pink-500 h-16">
                <div className="pt-4 flex items-center justify-center gap-2">
                    <div className="">
                        <a href="/user-dashboard/rc/profile/null">
                            <button type="primary" className="btn mybtn-primary">My Details</button>
                            {" "}
                        </a>
                    </div>
                    {" "}
                    <div className="">
                        <a href="/user-dashboard/rc/inbox">
                            <button type="primary" className="btn mybtn-primary">Inbox</button>
                            {" "}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
