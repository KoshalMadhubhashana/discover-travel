
import React, {useState,useEffect} from "react";
import GuideNavbr from "./GuideNavbar";
import Header from "./Header";
import { Card, Col, Row } from 'antd';
import CommonAdminHome from "../hotel/Home/CommonAdminHome";
import HeaderAdmin from "../hotel/HeaderAdmin";
import "../../common/Styles/common.css"

const Inbox = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            await fetch("/contactGuid/")
                .then((res) => res.json())
                .then((json) => {
                    setData(json);
                   
        
                });
        })();
    }, []);

    return (
        <div>

            <HeaderAdmin />
            <div style={{margin:"10px 10px 10px 240px"}}>
            <Header />

            <div className=" container mx-auto card"  style={{margin:"30px 0"}}>
                <div className="site-card-wrapper border-2 p-4 mt-4 mybg">
                    <Row gutter={16}>
                        {data.map((value) => {
                            return(
                                <Col span={8}>
                                <Card  bordered={true}>
                                    <h1 className="text-3xl font-semibold text-sky-500"> Message </h1>
                                   <div className="text-lg font-semibold">
                                   {value.message}
                                       </div>
                                </Card>
                            </Col>  
                            )
                        })}
                        
                       
                    </Row>
                </div>
            </div>
            </div>
            <br/><br/>
        </div>
    )
}

export default Inbox;