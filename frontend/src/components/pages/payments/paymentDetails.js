import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";


function Insertfunction() {

    const [firstName, setFisrtName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [AddressOne, setAddressOne] = useState("");
    const [AddressTwo, setAddressTwo] = useState("");
    const [townCity, setTownCity] = useState("");
    const [country, setCountry] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expMonth, setExpMonth] = useState("");
    const [expYear, setExpYear] = useState("");
    const [cvcNumber, setCvcNumber] = useState("");


    function sendData(e) {
        e.preventDefault();

        const newPayment = {
            firstName,
            lastName,
            email,
            phoneNumber,
            AddressOne,
            AddressTwo,
            townCity,
            country,
            cardHolderName,
            cardNumber,
            expMonth,
            expYear,
            cvcNumber
        }

        axios.post("http://localhost:8070/payment/add", newPayment).then(() => {
            alert("Payment Successfull");
            setFisrtName("")
            setLastName("")
            setEmail("")
            setPhoneNumber("")
            setAddressOne("")
            setAddressTwo("")
            setCardNumber("")
            setTownCity("")
            setCountry("")
            setCardNumber("")
            setCardHolderName("")
            setExpMonth("")
            setExpYear("")
            setCvcNumber("")
            window.location.reload();
        }).catch((err) => {
            alert(err)
        })

    }

    return (

        <div className="bg-back">
            <form className="payment mybg" onSubmit={sendData}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">FIRST NAME</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="First name"
                               onChange={(e) => {
                                   setFisrtName(e.target.value)
                               }}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">LAST NAME</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="Last Name"
                               onChange={(e) => {
                                   setLastName(e.target.value)
                               }}/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">EMAIL ADDRESS</label>
                        <input type="email" className="form-control" id="email" placeholder="Email Address"
                               onChange={(e) => {
                                   setEmail(e.target.value)
                               }}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">PHONE NUMBER</label>
                        <input type="number" className="form-control" id="phoneNumber" placeholder="Phone Number"
                               onChange={(e) => {
                                   setPhoneNumber(e.target.value)
                               }}/>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="inputAddress">ADDRESS</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Main St"
                           onChange={(e) => {
                               setAddressOne(e.target.value)
                           }}/><br></br>
                    <input type="text" className="form-control" id="inputAddress2"
                           placeholder="Apartment, studio, or floor" onChange={(e) => {
                        setAddressTwo(e.target.value)
                    }}/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">TOWN/CITY</label>
                        <input type="text" className="form-control" id="inputCity" placeholder="Town/City"
                               onChange={(e) => {
                                   setTownCity(e.target.value)
                               }}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">COUNTRY</label>
                        <input type="text" className="form-control" id="inputCountry" placeholder="Country"
                               onChange={(e) => {
                                   setCountry(e.target.value)
                               }}/>
                    </div>
                </div>

                <div className="">
                    <div className="padding">
                        <div className="row" style={{margin: 0}}>
                            <div className="" style={{width: "100%"}}>
                                <div className="card">
                                    <div className="card-header">
                                        <strong>VISA/MASTER CARD</strong>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="name">CARDHOLDER NAME</label>
                                                    <input className="form-control" id="name" type="text"
                                                           placeholder="Enter Your Name" onChange={(e) => {
                                                        setCardHolderName(e.target.value)
                                                    }}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="ccnumber">CREDIT CRAD NUMBER</label>
                                                    <div className="input-group">
                                                        <input className="form-control" type="text"
                                                               placeholder="0000 0000 0000 0000" autoComplete="email"
                                                               maxLength={"16"} onChange={(e) => {
                                                            setCardNumber(e.target.value)
                                                        }}/>
                                                        <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <i className="mdi mdi-credit-card"></i>
                                                    </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-sm-4">
                                                <label htmlFor="ccmonth">MONTH</label>
                                                <select className="form-control" id="ccmonth" onChange={(e) => {
                                                    setExpMonth(e.target.value)
                                                }}>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                    <option>11</option>
                                                    <option>12</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <label htmlFor="ccyear">YEAR</label>
                                                <select className="form-control" id="ccyear" onChange={(e) => {
                                                    setExpYear(e.target.value)
                                                }}>
                                                    <option>2014</option>
                                                    <option>2015</option>
                                                    <option>2016</option>
                                                    <option>2017</option>
                                                    <option>2018</option>
                                                    <option>2019</option>
                                                    <option>2020</option>
                                                    <option>2021</option>
                                                    <option>2022</option>
                                                    <option>2023</option>
                                                    <option>2024</option>
                                                    <option>2025</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label htmlFor="cvv">CVV/CVC</label>
                                                    <input className="form-control" id="cvv" type="text"
                                                           placeholder="123" maxLength={"3"} onChange={(e) => {
                                                        setCvcNumber(e.target.value)
                                                    }}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button className="mybtn-primary btn btn-sm btn-success float-right" type="submit">
                                            <i className="mdi mdi-gamepad-circle"></i> Confirm
                                        </button>
                                        <button className="mybtn-danger btn btn-sm btn-danger" type="reset">
                                            <i className="mdi mdi-lock-reset"></i> Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Insertfunction;