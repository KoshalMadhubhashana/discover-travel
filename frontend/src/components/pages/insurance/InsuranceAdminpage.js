import React, { useState, useEffect } from "react";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { NavLink } from "react-router-dom";
import HeaderAdmin from "../hotel/HeaderAdmin";

const InsuranceAdminpage = () => {
    const [data, setData] = useState([]);
    const [idata, setIdata] = useState([]);

    useEffect(() => {
        (async () => {
            await axios
                .get("/admin/")
                .then((res) => setData(res.data))
                .catch((error) => alert(error));
        })();
    }, []);

    console.log(data)

    useEffect(() => {
        (async () => {
            await axios
                .get("/insuarance/")
                .then((res) => setIdata(res.data))
                .catch((error) => alert(error));
        })();
    }, []);

    const deleteDetails = async (id) => {
        //method for deleting a userdetails
        if (window.confirm("Do you want to delete !")) {
            await axios.delete(`/admin/delete/${id}`);
            await axios
                .get("/admin/")
                .then((res) => setData(res?.data))
                .catch((error) => alert(error));
        }
    };

    const deleteInsDetails = async (id) => {
        //method for deleting a userdetails
        if (window.confirm("Do you want to delete !")) {
            await axios.delete(`/insuarance/delete/${id}`);
            await axios
                .get("/insuarance/")
                .then((res) => setIdata(res?.data))
                .catch((error) => alert(error));
        }
    };

    return (
        <div>
            <HeaderAdmin/>
            <div className=" container mx-auto">
                <div
                    className="p-2 text-center text-5xl mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md justify-content-center mx-auto">
                    Hello' Admin
                </div>
                <center>
                    <div>
                        <h1 className=" text-4xl mt-20">Package Details</h1>
                    </div>
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="w-4/5 border-4 border-sky-700 text-center">
                                        <thead className="border-b-4 border-b-sky-700">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Insuarance Type
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Insuarance Description
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Insuarance Date
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Insuarance Catergory
                                            </th>

                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 border-sky-700"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                        </thead>
                                        {idata.map((value) => {
                                            return (
                                                <tbody>
                                                <tr className="border-b">
                                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.itype}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700  max-w-5xl ">
                                                        <div
                                                            className=" w-3/4 whitespace-normal ml-12">{value.iDescription}</div>
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.iDate}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.iCatergory}
                                                    </td>
                                                    <td className="text-2xl px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        <NavLink to={`/insurance-update/${value._id}`}>
                                                            <EditOutlined style={{color: "green"}}/>{" "}
                                                        </NavLink>
                                                        <DeleteOutlined
                                                            style={{color: "red"}}
                                                            onClick={() => deleteInsDetails(value._id)}
                                                        />
                                                    </td>
                                                </tr>
                                                </tbody>
                                            );
                                        })}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
                <center>
                    <div>
                        <h1 className=" text-4xl mt-20">All Customer Details</h1>
                    </div>
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="w-4/5 border-4 border-sky-700 text-center">
                                        <thead className="border-b-4 border-b-sky-700">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Phone Number
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Nationality
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                NIC
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Country
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Home Town
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Message
                                            </th>

                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 border-sky-700"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                        </thead>
                                        {data.map((value) => {
                                            return (
                                                <tbody>
                                                <tr className="border-b">
                                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.name}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.phoneNumber}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.email}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.nationality}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.nic}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.country}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.homeTown}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.message}
                                                    </td>
                                                    <td className="text-2xl px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        <DeleteOutlined
                                                            style={{color: "red"}}
                                                            onClick={() => deleteDetails(value._id)}
                                                        />
                                                    </td>
                                                </tr>
                                                </tbody>
                                            );
                                        })}
                                    </table>
                                    <div className=" mt-6 float-right mr-32">
                                        <NavLink to="/dashbord">
                                            <Button type="primary" danger>
                                                Back
                                            </Button>
                                        </NavLink>
                                    </div>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    );
};

export default InsuranceAdminpage;