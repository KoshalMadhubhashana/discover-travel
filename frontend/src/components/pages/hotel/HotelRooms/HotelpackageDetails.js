import React, {Component} from 'react';
import axios from "axios";
import '../../../common/Styles/HotelRoomStyle.css'
import '../../../common/AllPayment.css'
import '../../../common/Styles/common.css'
import Navbar from "../../../common/navbar/navbar";
import Footer from "../../../common/footer/footer";


export default class HotelpackageDetails extends Component {

    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            post: {}
        };
    }

    componentDidMount() {
        console.log(window.location.href);
        // const id = this.props.match.params.id;
        const id = window.location.href.split("http://localhost:3000/hotelpackagedetails/")[1];
        axios.get(`http://localhost:8070/hotelpackage/read/${id}`).then((res) => {
            console.log("hrere", res)
            console.log("hrere", res.data)
            if (res.data.success) {
                console.log(res.data);
                this.setState({
                    post: res.data.HotelPackage
                });
            }
        });
    }

    onSubmit = (e) => {
        /*
          const userInfo=localStorage.getItem('userInfo');
          if(userInfo==null){
            alert("You are not Authorized User. Please sign in first.")
            window.location.href = `/register`;
        }else{
          window.location.href = `/addnewhotelbooking/${this.state.post._id}`;
        }*/

        window.location.href = `/addnewhotelbooking/${this.state.post._id}`;
    }


    render() {
        console.log("State",this.state.post)
        const {roomType, details, price, size, maxCapacity, packageImage} = this.state.post;

        return (
            <div>
                <Navbar/>
                <div className="info">
                    <div class="container">
                        <div class="row" id="bokrow">
                            <div class="col-md-12">
                                <div class="mu-about-area">
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <div class="row mybg" id="bokrow">
                                        <div class="col-md-6">
                                            <div class="mu-about-left">
                                                <img class="detailsimg" style={{width: '100%', minWidth: 'unset'}}
                                                     src={`/uploads/${packageImage}`} alt="Men Speaker"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mu-about-right" style={{textAlign: 'left'}}>
                                                <br></br>
                                                <h2 class="detailstitle"
                                                    style={{fontFamily: "Calibri", textAlign: 'left'}}> {roomType}</h2><br></br>
                                                <p style={{textAlign: 'left'}}>{details}</p>
                                                <p class="detailsprice" style={{fontFamily: "Calibri", textAlign: 'left'}}>Per Day:
                                                    Rs {price}</p>
                                                <p className="tm-gallery-price" style={{fontFamily: "Calibri",textAlign: 'left'}}>Room
                                                    Size: {size}</p>
                                                <p style={{fontFamily: "Calibri",textAlign: 'left'}}>Maximum people: {maxCapacity}</p>
                                                <button className="btn btn-primary" onClick={this.onSubmit}
                                                        style={{backgroundColor: "#192c3e", width: "20%"}}><a
                                                    style={{textDecoration: 'none', color: 'white'}}>Book Now</a>
                                                </button>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
