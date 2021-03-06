import React, {useState, useEffect} from "react";
import axios from "axios";
import {DeleteOutlined} from "@ant-design/icons";
import {Button} from "antd";

import {NavLink} from "react-router-dom";
import HeaderAdmin from "../hotel/HeaderAdmin";

const UserAdminpage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            await axios
                .get("/api/auth/")
                .then((res) => setData(res?.data))
                .catch((error) => alert(error));
        })();
    }, []);

    const deleteDetails = async (id) => {
        //method for deleting a userdetails
        if (window.confirm("Do you want to delete !")) {
            await axios.delete(`/api/auth/delete/${id}`);
            await axios
                .get("/api/auth/")
                .then((res) => setData(res?.data))
                .catch((error) => alert(error));
        }
    };

    return (
        <div>
            <HeaderAdmin/>
            <div className=" container mx-auto">
                <center>
                    <div>
                        <h1 className=" text-4xl mt-20">All User Details</h1>
                    </div>
                    <div class="flex flex-col " style={{marginLeft:"220px"}}>
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
                                                First Name
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Last Name
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Telephone Number
                                            </th>

                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                NIC Number
                                            </th>

                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                                            >
                                                Email Address
                                            </th>


                                        </tr>
                                        </thead>
                                        {data.map((value) => {
                                            return (
                                                <tbody>
                                                <tr class="border-b">
                                                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.firstName}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.lastName}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.telephoneNumber}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.nicNumber}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                                        {value.emailAddress}
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

export default UserAdminpage;
