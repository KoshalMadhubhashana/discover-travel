import React, {useEffect, useState} from "react"
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import "../../common/Styles/common.css"

export default function EditPayment() {

    const [firstName, setFisrtName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [AddressOne, setAddressOne] = useState("");
    const [AddressTwo, setAddressTwo] = useState("");
    const [townCity, setTownCity] = useState("");
    const [country, setCountry] = useState("");

    const {id} = useParams();

    useEffect(() => {
        getPayments();
    }, []);

    let navigate = useNavigate();

    function getPayments() {
        let paymount = true;

        fetch(`http://localhost:8070/payment/get/${id}`)
            .then((res) => res.json())

            .then((result) => {
                if (paymount) {
                    setFisrtName(result.firstName);
                    setLastName(result.lastName);
                    setEmail(result.email);
                    setPhoneNumber(result.phoneNumber);
                    setAddressOne(result.AddressOne);
                    setAddressTwo(result.AddressTwo);
                    setTownCity(result.townCity);
                    setCountry(result.country);
                }
                console.log(result);
            });

        return () => (paymount = false);
    }


    function updateData(e) {

        e.preventDefault();

        //alert("Insert");

        const updatePayment = {
            firstName,
            lastName,
            email,
            phoneNumber,
            AddressOne,
            AddressTwo,
            townCity,
            country
        }

        axios
            .patch(`http://localhost:8070/payment/update/${id}`, updatePayment)
            .then((res) => {
                alert("Payment Updated Successfully!");
                navigate("/view");
                console.log(updatePayment);
            })
            .catch((err) => {
                alert("Database Error");
            });
    }


    return (
        <div>
            <Navbar/>
            <div className="bg-back" style={{marginTop: 0}}>
                <h2>Update Payment</h2>
                <form className="payment mybg">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">FIRST NAME</label>
                            <input type="text" className="form-control" id="firstName" placeholder="First name"
                                   value={firstName} onChange={(e) => {
                                setFisrtName(e.target.value);
                            }}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">LAST NAME</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Last Name"
                                   value={lastName} onChange={(e) => {
                                setLastName(e.target.value);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">EMAIL ADDRESS</label>
                            <input type="email" className="form-control" id="email" placeholder="Email Address"
                                   value={email} onChange={(e) => {
                                setEmail(e.target.value);
                            }}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">PHONE NUMBER</label>
                            <input type="number" className="form-control" id="phoneNumber" placeholder="Phone Number"
                                   value={phoneNumber} onChange={(e) => {
                                setPhoneNumber(e.target.value);
                            }}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputAddress">ADDRESS</label>
                        <input type="text" className="form-control" id="AddressOne" placeholder="Main St"
                               value={AddressOne} onChange={(e) => {
                            setAddressOne(e.target.value);
                        }}/><br></br>
                        <input type="text" className="form-control" id="AddressTwo"
                               placeholder="Apartment, studio, or floor" value={AddressTwo} onChange={(e) => {
                            setAddressTwo(e.target.value);
                        }}/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">TOWN/CITY</label>
                            <input type="text" className="form-control" id="townCity" placeholder="Town/City"
                                   value={townCity} onChange={(e) => {
                                setTownCity(e.target.value);
                            }}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">COUNTRY</label>
                            <input type="text" className="form-control" id="country" placeholder="Country"
                                   value={country} onChange={(e) => {
                                setCountry(e.target.value);
                            }}/>
                        </div>
                    </div>

                    <div className="card-footer">
                        <button className="mybtn-primary btn btn-sm btn-success float-right" type="submit" onClick={updateData}>
                            <i className=" mdi mdi-gamepad-circle"></i>Save
                        </button>
                        <button className="mybtn-danger btn btn-sm btn-danger" type="reset">
                            <i className="mdi mdi-lock-reset"></i> Cancel
                        </button>
                    </div>

                </form>
            </div>
            <Footer/>
        </div>
    )

}


