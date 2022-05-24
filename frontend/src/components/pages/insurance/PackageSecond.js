import React, { useState, useEffect } from "react";
import { Button, Progress } from "antd";
import { LeftCircleOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./../../common/Styles/insurance/insurance.css";


const PackageSecond = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("/insuarance/")
        .then((res) => setData(res.data))
        .catch((error) => alert(error));
    })();
  }, []);

  const filteredData = data.filter(
    (el) => el.itype === "2nd Insuarance Package"
  );

  return (
    <div className="container mx-auto top-down">
      <div className="flex justify-center mt-8 gap-1 mb-10 w-full" style={{flexDirection: "column"}}>
        <div className=" card text-center" style={{background: "#e8ebf7"}}>
          <div className=" text-2xl font-semibold">
            2st Part Insuarance Package
          </div>
          <div className=" flex justify-center gap-28 px-8 py-10" style={{flexDirection: "column"}}>
            <div className=" border-2 py-48 px-36 bg-inssecond bg-cover"></div>
            <div className="py-2 px-6 card">
              <div className=" -translate-y-1">
                <Progress type="circle" percent={100} width={80} />
              </div>
              {filteredData.map((value) => (
                <>
                  <span className=" text-red-600 text-2xl font-extrabold">
                    {value.itype}
                  </span>
                  <br />
                  <span className=" text-lg font-bold">
                    {value.iDescription}
                  </span>
                  <br />
                  <br />
                  <span className=" text-xl font-semibold bg-yellow-300 p-2 rounded-lg">
                    {value.iCatergory}
                  </span>
                  <br />
                  <br />
                  <span className=" text-lg font-bold">{value.iDate}</span>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className=" card text-center" style={{background: "#e8ebf7"}}>
          <div className=" text-2xl font-semibold">Admin Task</div>
          <div className="  justify-center gap-32 px-10 py-10">
            <div className="card py-40 px-20">
              <NavLink to="/admincontact">
                <div className=" border-2 py-8 px-14 -translate-y-16 bg-stone-700 text-red-100 text-2xl">
                  Contact Admin
                </div>
              </NavLink>
              <div>
                <NavLink to="/package">
                  <button type="primary" className="btn mybtn-primary">
                    {" "}
                    <LeftCircleOutlined />
                    Previous Page{" "}
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSecond;
