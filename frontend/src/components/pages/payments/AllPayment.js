import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import "../../common/AllPayment.css";
import HeaderAdmin from "../hotel/HeaderAdmin";


export default function AllPayment() {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        function getPayments() {
            axios.get("http://localhost:8070/payment/view").then((res) => {
                console.log(res);
                setPayments(res.data)
            }).catch((err) => {
                alert(err.message);
            })
        }

        getPayments();


    }, [])

    const deleteHandler = async (id) => {
        try {
            await axios.delete(`http://localhost:8070/payment/delete/${id}`);
            alert("Are you sure to delete payment details ? ");
            window.location.reload();

        } catch (error) {
            alert(error);
        }
    }


    return (
        <div style={{marginLeft: "220px"}}>
            <HeaderAdmin/>
            <div className="pay-back">
                <div className="two-head">
                    <h1 style={{fontSize: "20px", textAlign:"center"}}><b>All Payment Details</b></h1>
                </div>
                <div className="table-wrapper">
                    <table className="fl-table">
                        <tbody>

                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>email</th>
                            <th>Contact</th>
                            <th>Address1</th>
                            <th>Address2</th>
                            <th>Town</th>
                            <th>Country</th>
                            <th>Holder Name</th>
                            <th>Card Number</th>
                            <th>eMonth</th>
                            <th>eYear</th>
                            <th>CVC</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>

                        {
                            payments.map(post =>
                                <tr>
                                    <td key={post.id}>{post.firstName}</td>
                                    <td key={post.id}>{post.lastName}</td>
                                    <td key={post.id}>{post.email}</td>
                                    <td key={post.id}>{post.phoneNumber}</td>
                                    <td key={post.id}>{post.AddressOne}</td>
                                    <td key={post.id}>{post.AddressTwo}</td>
                                    <td key={post.id}>{post.townCity}</td>
                                    <td key={post.id}>{post.country}</td>
                                    <td key={post.id}>{post.cardHolderName}</td>
                                    <td key={post.id}>{post.cardNumber}</td>
                                    <td key={post.id}>{post.expMonth}</td>
                                    <td key={post.id}>{post.expYear}</td>
                                    <td key={post.id}>{post.cvcNumber}</td>
                                    <td>
                                        <button className="button" onClick={() => deleteHandler(post._id)}>Delete
                                        </button>
                                    </td>

                                    <td>
                                        <Link to={`/update/${post._id}`} className="button-update">Update</Link>
                                    </td>

                                </tr>)
                        }

                        </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
