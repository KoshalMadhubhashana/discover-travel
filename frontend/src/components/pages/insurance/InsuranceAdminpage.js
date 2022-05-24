import React, {useState, useEffect} from "react";
import axios from "axios";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Button} from "antd";

import {NavLink} from "react-router-dom";
import HeaderAdmin from "../hotel/HeaderAdmin";
import "../../common/Styles/common.css"

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
                <center>
                    <div>
                        <h1 className=" text-4xl mt-20">Package Details</h1>
                    </div>
                    <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="w-4/5 border-4 border-sky-700 text-center">
                                        <thead class="border-b-4 border-b-sky-700">
                                        <tr>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Insuarance Type
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Insuarance Description
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Insuarance Date
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Insuarance Catergory
                                            </th>

                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-6 py-4 border-sky-700"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                        </thead>
                                        {idata.map((value) => {
                                            return (
                                                <tbody>
                                                <tr class="border-b">
                                                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.itype}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700  max-w-5xl ">
                                                        <div
                                                            className=" w-3/4 whitespace-normal ml-12">{value.iDescription}</div>
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.iDate}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.iCatergory}
                                                    </td>
                                                    <td class="text-2xl px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        <NavLink to={`/update/${value._id}`}>
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
                    <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="w-4/5 border-4 border-sky-700 text-center">
                                        <thead class="border-b-4 border-b-sky-700">
                                        <tr>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Message
                                            </th>

                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-6 py-4 border-sky-700"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                        </thead>
                                        {data.map((value) => {
                                            return (
                                                <tbody>
                                                <tr class="border-b">
                                                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.name}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.message}
                                                    </td>
                                                    <td class="text-2xl px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
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
