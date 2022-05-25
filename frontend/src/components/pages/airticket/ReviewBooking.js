import React, { useState, useEffect } from "react";
import { Button, Card, Col, Row } from "antd";
import axios from "axios";

import Header from "./Header";
import "./../../common/Styles/Admin.css";
import "./../../common/Styles/common.css";
import { NavLink } from "react-router-dom";

const ReviewBooking = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("/mybooking/")
        .then((res) => setData(res.data))
        .catch((error) => alert(error));
    })();
  }, []);

  const filterData = data.filter((el) => el.stops === "1");

  return (
    <div className=" container mx-auto">
      <Header />
      <div className="site-card-wrapper mybg  p-2 mb-4 mt-2">
        <div className="text-center font-semibold text-5xl mb-10">
          Review Bookings
        </div>
        {filterData.map((value, index) => {
          return (
            <div className=" translate-x-80">
              <Card
                title={value.title}
                className="mycard"
                bordered={true}
                style={{width: 650 }}
              >
                <div className=" flex-row">
                  <div className="mt-2 text-blue-900 font-bold text-lg flex justify-between">
                    <div className=" flex">Time :</div>
                    <div className=" flex">
                      {value.startTime} - {value.endTime}
                    </div>
                  </div>
                  <div className="mt-2 text-lg text-red-600 font-bold flex justify-between">
                    <div className="flex">Price :</div>
                    <div className="flex">$ {value.price}</div> 
                  </div>
                  <div className="mt-2 text-lg text-yellow-600 font-bold flex justify-between">
                    <div className="flex">Weight :</div>
                    <div className="flex">{value.weight}Kg</div>
                  </div>
                  <div className="mt-2 text-lg text-green-700 font-bold flex justify-between">
                    <div className="flex">Stops :</div>
                    <div className="flex">{value.stops}</div>
                  </div>
                </div>
                <hr />
                <div className=" mt-4 flex gap-4 justify-between">
                  <div className=" text-lg text-black font-bold flex">Total Fee</div>
                  <div className=" text-lg text-black font-bold flex">$500</div>
                </div>
              </Card>
            </div>
          );
        })}
        <br />
        <div className="mb-4 text-center mt-10">
          <NavLink to="/pay/500">
            <button className="btn mybtn-danger" type="danger">PROCEED</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ReviewBooking;
