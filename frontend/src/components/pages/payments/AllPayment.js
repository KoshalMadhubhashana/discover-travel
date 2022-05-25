import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";
import "../../common/AllPayment.css";
import HeaderAdmin from "../hotel/HeaderAdmin";
import ReactToPrint from "react-to-print";
import ComponentToPrint from "../package/BookingAllDetails";


/*export default function AllPayment2() {
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
                <ReactToPrint
                    trigger={() => (
                        <button
                            type="button"
                            class="btn btn-danger"
                            // style={{ marginInlineStart: "380%" }}
                        >
                            <i class="fas fa-print mr-2"></i>Print this out!
                        </button>
                    )}
                    content={() => this.componentRef}
                />
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
            <div ref={(Component) => (this.componentRef = Component)}>
                <hr/>
                <div
                    style={{marginInlineEnd: "10px", marginInlineStart: "10px"}}
                >
                    <table
                        className="table"
                        style={{backgroundColor: "hsla(90, 0%, 100%, 0.9)"}}
                    >
                        <thead className="thead-dark">
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
                        </thead>
                        <tbody>
                        {payments.map((post, index) => (
                            <tr key={index} style={{fontWeight: "bold"}}>
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
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </div>
    )
}*/

class AllPayment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            sortType: "asc",
        };
    }

    componentDidMount() {
        this.retrievePosts();
    }

    retrievePosts() {
        axios.get("http://localhost:8070/payment/view").then((res) => {
            console.log(res);
            this.setState({
                posts: res.data,
            });
        }).catch((err) => {
            alert(err.message);
        })
        /*axios.get("http://localhost:8070/payment/view")
            .then((res) => {
                if (res.data.success) {
                    this.setState({
                        posts: res.data.allBookings,
                    });
                    console.log(this.state.posts)
                }
            });*/
    }
     deleteHandler = async (id) => {
        try {
            await axios.delete(`http://localhost:8070/payment/delete/${id}`);
            alert("Are you sure to delete payment details ? ");
            window.location.reload();

        } catch (error) {
            alert(error);
        }
    }

    render() {
        const { posts } = this.state;


        return (
            <div>
                <HeaderAdmin/>
                <div
                    className="infoadmin"
                >
                    <br />
                    <div>
                        <div className="pay-back">
                            <div className="two-head">
                                <h1 style={{fontSize: "20px", textAlign: "center"}}><b>All Payment Details</b></h1>
                            </div>
                            <ReactToPrint
                                trigger={() => (
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        style={{ color: "black" }}>
                                        <i className="fas fa-print mr-2"></i>Print this out!
                                    </button>
                                )}
                                content={() => this.componentRef}
                            />
                            <div ref={(Component) => (this.componentRef = Component)}>
                                <hr/>
                                <div>
                                    <table
                                        className="table"
                                        style={{backgroundColor: "hsla(90, 0%, 100%, 0.9)"}}
                                    >
                                        <thead className="thead-dark" >
                                        <tr hidden>
                                            <th scope="col">#</th>

                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">email</th>
                                            <th scope="col">Contact</th>
                                            <th scope="col">Address1</th>
                                            <th scope="col">Address2</th>
                                            <th scope="col">Town</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">Holder Name</th>
                                            <th scope="col">Card Number</th>
                                            <th scope="col">eMonth</th>
                                            <th scope="col">eYear</th>
                                            <th scope="col">CVC</th>
                                            <th scope="col">Action</th>
                                            <th scope="col">Action</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="col">#</th>

                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">email</th>
                                            <th scope="col">Contact</th>
                                            <th scope="col">Address1</th>
                                            <th scope="col">Address2</th>
                                            <th scope="col">Town</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">Holder Name</th>
                                            <th scope="col">Card Number</th>
                                            <th scope="col">eMonth</th>
                                            <th scope="col">eYear</th>
                                            <th scope="col">CVC</th>
                                            <th scope="col">Action</th>
                                            <th scope="col">Action</th>

                                        </tr>
                                        {posts.map((post, index) => (
                                            <tr key={index} style={{fontWeight: "bold"}}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{post.firstName}</td>
                                                <td>{post.lastName}</td>
                                                <td>{post.email}</td>
                                                <td>{post.phoneNumber}</td>
                                                <td>{post.AddressOne}</td>
                                                <td>{post.AddressTwo}</td>
                                                <td>{post.townCity}</td>
                                                <td>{post.country}</td>
                                                <td>{post.cardHolderName}</td>
                                                <td>{post.cardNumber}</td>
                                                <td>{post.expMonth}</td>
                                                <td>{post.expYear}</td>
                                                <td>{post.cvcNumber}</td>
                                                <td>
                                                    <button className="btn mybtn-danger" onClick={() => this.deleteHandler(post._id)}>Delete
                                                    </button>
                                                </td>

                                                <td>
                                                    <Link to={`/update/${post._id}`} className="btn mybtn-primary">Update</Link>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AllPayment;