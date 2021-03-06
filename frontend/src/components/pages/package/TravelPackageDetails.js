import React, {Component} from "react";
import axios from "axios";
//import Header from "../Header";
//import Footer from "../footer";
import AddRating from './PackageAddRating';
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";

export default class PackageDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
        };
    }

    componentDidMount() {
        const id = window.location.href.split("http://localhost:3000/travelpackages/travelpackage/")[1];
        axios
            .get(`http://localhost:8070/travelpackages/admin/${id}`)
            .then((res) => {
                if (res.data.success) {
                    this.setState({
                        post: res.data.post,
                    });
                }
            });
    }

    render() {
        const {
            _id,
            packageName,
            destination,
            discription,
            date,
            noofdays,
            noofnights,
            vehical,
            perperson,
            packageImage,
        } = this.state.post;

        return (
            <div>
                <Navbar/>
                <div className="boodydetails">

                    <div className="mybg infotr " style={{margin: "80px 0 0 0"}}>
                        <div className="container">
                            <div className={{paddingBottom: "10px"}}>
                                <hr/>
                            </div>
                            <ul class="postcard__tagbox" style={{fontSize: "16px", marginTop: "40px"}}>
                                <div style={{marginInlineStart: "59%"}}>
                                    <li class="tag__item mybtn-primary">
                                        <i class="fab fa-cc-visa mr-2"></i>Visa Payment
                                    </li>
                                    <li class="tag__item mybtn-primary">
                                        <i class="fas fa-paper-plane mr-2"></i>Full Option
                                    </li>
                                    <li class="tag__item mybtn-primary play blue">
                                        {" "}
                                        <i class="fas fa-hands mr-2"></i>Security{" "}
                                    </li>
                                </div>
                            </ul>
                            <hr/>
                            <br/>

                            <div class="card">
                                <img
                                    style={{height: "580px"}}
                                    class="card-img-top"
                                    src={`/uploads/${packageImage}`}
                                    alt="..."
                                />
                                <div class="card-body" style={{backgroundColor: "#DDE8E8"}}>
                                    <h5 class="card-title"> {packageName}</h5>
                                    <p class="card-text"> {date} </p>
                                    <p class="card-text">
                                        <i class="fas fa-long-arrow-alt-right mr-2"></i>
                                        <b> {destination} </b>{" "}
                                    </p>
                                    <p class="card-text">
                                        <i class="fas fa-long-arrow-alt-right mr-2"></i>
                                        <b> {discription} </b>{" "}
                                    </p>

                                    <p>
                                        'Discover Travel' is the most trustworthy best experienced
                                        travel company since 2012.It is known as the high comfort
                                        Service providers for immigrants/tourists to explore the
                                        beauty of Sri Lanka.Our compay facilitate all the travel
                                        needs with experienced guides and drivers.During the time
                                        in Sri Lanka to have a great travel experience.Company
                                        offer seasonal offers for the best price our travelers.
                                    </p>
                                </div>


                                <div class="modal custom-fade" id="exampleModalCenter" tabindex="-1" role="dialog"
                                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content"
                                             style={{width: "400px", height: "200px", alignContent: "center"}}>

                                            <div>
                                                <AddRating id={_id}/>

                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <div class="card-footer" style={{backgroundColor: "#ADADAD"}}>
                                    <ul class="postcard__tagbox" style={{fontSize: "16px"}}>
                                        <li class="tag__item">
                                            <i class="fas fa-tag mr-2"></i>PP $&nbsp;{perperson}
                                        </li>
                                        <li class="tag__item">
                                            <i class="fas fa-clock mr-2"></i>
                                            {noofdays}&nbsp;{noofnights}
                                        </li>
                                        <li class="tag__item play blue">
                                            {" "}
                                            <i class="fas fa-car mr-2"></i>
                                            {vehical}{" "}
                                        </li>


                                        <li style={{marginLeft: "12%", paddingBottom: "5px"}}>
                                            <button style={{width: "200px"}} type="button" class="btn mybtn-primary"
                                                    data-toggle="modal" data-target="#exampleModalCenter">
                                                <b>Give Rating</b>
                                            </button>
                                        </li>

                                        <li style={{marginLeft: "18%", paddingBottom: "5px"}}>
                                            <small class="text-muted">
                                                {" "}
                                                <button
                                                    type="submit"
                                                    class="btn mybtn-danger"
                                                    style={{width: "300px", fontSize: "20px"}}
                                                >
                                                    <a
                                                        href={`/bookingpackage/${_id}`}
                                                        style={{textDecoration: "none", color: "white"}}
                                                    >
                                                        Book Package
                                                    </a>
                                                </button>
                                            </small>{" "}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer/>
            </div>
        );
    }
}
