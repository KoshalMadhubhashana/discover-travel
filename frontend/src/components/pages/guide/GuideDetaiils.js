import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import axios from "axios";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import Navbar from "../../common/navbar/navbar";
import "../../common/Styles/common.css";

const GuideDetaiils = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("/api/guid/")
        .then((res) => setData(res?.data))
        .catch((error) => alert(error));
    })();
  }, []);

  const filterData = data.filter(
      (el) => el.username !== "admin"
  );

  return (
    <div>
      <Navbar/>
      <div className="mybg container mx-auto" style={{marginTop: "90px"}}>
        <div className="site-card-wrapper p-6">
          <Row gutter={16}>
            {filterData.map((value, index) => {
              return (
                <div className="gridbox">
                  <Col span={32}>
                    <Card title="Guider Details" bordered={false}>
                      <div className=" font-semibold  text-black text-lg">
                        {" "}
                        Full Name: {value.fullName}
                      </div>
                      <div className=" font-semibold  text-black text-lg">
                        {" "}
                        Address: {value.address}
                      </div>
                      <div className=" font-semibold  text-black text-lg">
                        {" "}
                        Age: {value.age}
                      </div>
                      <div className=" font-semibold  text-black text-lg">
                        {" "}
                        Contact No: {value.contactNo}
                      </div>
                      <div className=" font-semibold  text-black text-lg">
                        {" "}
                        Language: {value.language}
                      </div>
                      <div className=" font-semibold  text-black text-lg">
                        {" "}
                        Category: {value.category}
                      </div>
                      <div className=" font-semibold  text-black text-lg">
                        {" "}
                        Email: {value.email}
                      </div>
                      <div className="mt-4">
                        {" "}
                        <NavLink to={`/contactguide/${value._id}`}>
                        <button type="primary" className="btn mybtn-primary">Contact Guide</button>
                        </NavLink>
                      </div>
                    </Card>
                  </Col>
                </div>
              );
            })}
          </Row>
        </div>
      </div>
      <br />
    </div>
  );
};

export default GuideDetaiils;
