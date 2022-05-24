import React from "react";
import { Button } from "antd";

import "./Styles/Dashboard.css";
import { NavLink } from "react-router-dom";

const Dashbord = () => {
  return (
    <div className=" container mx-auto mt-20 ">
      <div mt-4>
        <div className=" border-2 flex mt-10 py-36 justify-center   box-shadow bg-dash">
          <div className=" border-2 py-20 px-1 text-center border-black bg-slate-700">
            <div className=" text-xl font-bold text-white">
              1st part Insuarance Package
            </div>
            <div className="mt-4">
              <Button type="danger">Read More</Button>
            </div>
            <div className="mt-4">
              <NavLink to="/package">
                <Button type="primary">Choose</Button>
              </NavLink>
            </div>
          </div>
          <div className=" border-2 py-20 px-4 text-center border-black bg-slate-700 translate-x-6">
            <div className=" text-xl font-bold text-white">
              2st part Insuarance Package
            </div>
            <div className="mt-4">
              <Button type="danger">Read More</Button>
            </div>
            <div className="mt-4">
              <NavLink to="/packagesecond">
                <Button type="primary">Choose</Button>
              </NavLink>
            </div>
          </div>
          <div>
            <div className="border-2 py-20 px-1 ml-20 border-red-700 text-xl text font-semibold justify-center text-center hover:bg-neutral-300">
              Insurance is a means of protection from financial loss.
              <br /> It is a form of risk management, primarily used to hedge
              against
              <br /> the risk of a contingent or uncertain loss.
              <br /> An entity which provides insurance is known
              <br /> as an insurer, 
              an insurance company, <br />an insurance carrier or an underwriter.
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Dashbord;
