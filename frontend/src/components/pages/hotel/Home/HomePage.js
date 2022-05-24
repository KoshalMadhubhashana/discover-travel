import React, {Component} from "react";
import "../../../common/Styles/Stylehome.css";

import imag1 from "../../../../assets/sl.jpg";
import imag2 from "../../../../assets/hotel.jpg";
import imag3 from "../../../../assets/resorts.webp";
import imag4 from "../../../../assets/villas.jpg";
import imag5 from "../../../../assets/apartments.jpg";
import imag6 from "../../../../assets/cottages.jpg";
import imag7 from "../../../../assets/hh.jpg";
import Header from "../Header";

import Navbar from "../../../common/navbar/navbar";
import Footer from "../../../common/footer/footer";

const data = [
    {
        src: imag1,
        caption: "Sri Lanka",
    },

    {
        src: imag2,
        caption: "Luxury Hotels",
    },

    {
        src: imag3,
        caption: "Resorts",
    },

    {
        src: imag4,
        caption: "Luxury Villas",
    },

    {
        src: imag5,
        caption: "Apartments",
    },

    {
        src: imag6,
        caption: "Cottages",
    },

    {
        src: imag7,
        caption: "Holiday Homes",
    },
];

function Dots(props) {
    const dots = data.map((data, index) => {
        return (
            <span
                key={index}
                className={index === props.slideIndex ? "dot activedot" : "dot"}
            ></span>
        );
    });

    return <div className="dot-container">{dots}</div>;
}

function Slider(props) {
    const slide = data.map((d, index) => {
        return (
            <div
                key={index}
                className={
                    index === props.slideIndex ? "myslides fade" : "myslidesnone"
                }
            >
                <img className="imgxx" src={d.src} alt={d.caption}/>

                <div className="textxx">{d.caption}</div>
            </div>
        );
    });

    return slide;
}

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
            arrow: "right",
        };
    }

    prevSlide() {
        this.setState({
            slideIndex:
                this.state.slideIndex === 0
                    ? data.length - 1
                    : this.state.slideIndex - 1,
            arrow: "left",
        });
    }

    nextSlide() {
        this.setState({
            slideIndex:
                this.state.slideIndex === data.length - 1
                    ? 0
                    : this.state.slideIndex + 1,
            arrow: "right",
        });
    }

    componentDidMount() {
        this.timer = setInterval(() => this.autoPlay(), 3000);
    }

    autoPlay() {
        if (this.state.arrow === "left") {
            this.setState({
                slideIndex:
                    this.state.slideIndex === 0
                        ? data.length - 1
                        : this.state.slideIndex - 1,
            });
        } else {
            this.setState({
                slideIndex:
                    this.state.slideIndex === data.length - 1
                        ? 0
                        : this.state.slideIndex + 1,
            });
        }
    }

    render() {
        return (
            <div>
                <Navbar/>

                <div class="info">
                    <div className="container-fluid " id="bodyhome">
                        <div className="App">
                            <div className="containerhome container">
                                <br/>
                                <div className="slideshow-containerxx">
                                    <Slider slideIndex={this.state.slideIndex}/>
                                    <span className="prev" onClick={() => this.prevSlide()}>
                    &#10094;
                  </span>
                                    <span className="next" onClick={() => this.nextSlide()}>
                    &#10095;
                  </span>
                                </div>

                                <Dots slideIndex={this.state.slideIndex}/>
                            </div>
                        </div>
                        <br/>
                        <p className="parga">
                            {" "}
                            Sri Lanka is an island country located off the southern coast of India. Sri Lanka is
                            surrounded by the Indian Ocean, Gulf of Mannar, the Palk Strait, and lies in the vicinity of
                            India and the Maldives. The geography of Sri Lanka includes coastal plains in the north and
                            hills and mountains in the interior.
                            Sri Lanka tourism is characterized by its colonial architecture, and Buddhist temples,
                            stunning beaches, and destinations like Colombo, Galle, Kandy, Yala National Park. Wildlife
                            Sanctuaries with leopard and elephant populations are also some of the most popular places
                            to visit in Sri Lanka.
                            <br/>
                            <br/>
                            The benefits you can gain from using Discover travelers web app, to
                            start with, your agent will help you choose the right places to
                            go. It can be difficult if not misleading to read travel reviews
                            posted online. A travel agent knows what is a truly good – and
                            safe – place to go. He or she will possess the expertise necessary
                            to book you where you want when you want. Your agent will also be
                            able to help you decide what it is you want from a vacation if you
                            are uncertain. A specialized travel agent can also book you for
                            multiple stops for an excursion tour or for something like
                            near-space flights, something online booking sites are usually not
                            capable of handling. Complicated itineraries were made for travel
                            agents, who get to flex their booking muscles and solve even your
                            most complex travel situations. solve even your most complex
                            travel situations.
                            <br/>
                            <br/>
                            Some online holiday deals sites do enable you to book with a
                            deposit and pay the balance in instalments but you are usually
                            restricted. For example, you have to book a package or you can
                            only pay in instalments for hotels but not flights etc. With
                            travel agencies you can book the flight you want and the hotel you
                            want separately and pay in instalments for both – and for cruises
                            too! solve even your most complex travel situations. solve even
                            your most complex travel situations. solve even your most.
                            <br/>
                            <br/>
                            Traveling is a very crucial part of life as it is the best way to
                            get out of the busy schedule. It is also to experience life in
                            different ways . Traveling is actually a good remedy for stress,
                            anxiety and depression. It also improves the mental and physical
                            health.
                            <br/>
                            <br/>
                            If you travel, you will not only learn about foreign cultures, but
                            about your own as well. You will notice the cultural differences,
                            and will find out what makes your culture unique. After retrurning
                            from a long journey, you will see your country with new eyes.
                        </p>

                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}


