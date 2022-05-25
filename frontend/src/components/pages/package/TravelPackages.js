import React, { Component } from "react";
import axios from "axios";
import { Button, Row } from "react-bootstrap";
import "../../common/Styles/TravelPackage.css";
//import Navbar from "./components/Travel_Packages/navbar.";
//import Footer from "../../components/Travel_Packages/footer.";
import Reactstars from "react-rating-stars-component";
import Navbar from "../../common/navbar/navbar";
import "../../common/Styles/common.css"

export default class CardItemsT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("http://localhost:8070/travelpackages").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPackage,
        });
        console.log(this.state.travelpackages);
      }
    });
  }


  filterData(posts, searchkey) {
    const result = posts.filter(
      (post) =>
        post.packageName.toLowerCase().includes(searchkey) ||
        post.packageName.toUpperCase().includes(searchkey)
    );
    this.setState({ posts: result });
  }

  handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;

    axios.get("http://localhost:8070/travelpackages").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPackage, searchkey);
      }
    });
  };

  render() {
    return (
      <div>
        <Navbar/>
        <div className="mybg top-down">
          <div className="bodytravelpackage, container" id="bbimg">
            <div>
              <br />
              <div class="row text-center text-lg-start">
                <div class="col-lg-2 col-md-2 col-6">
                  <a href="#" class="d-block mb-1 h-5">
                    <img
                      class="img-fluid img-thumbnail"
                     
                      src=" https://www.journeyera.com/wp-content/uploads/2017/10/untitled-0251.jpg.webp"
                      alt=""
                    />
                  </a>
                </div>

                <div class="col-lg-2 col-md-2 col-6">
                  <a href="#" class="d-block mb-1 h-10">
                    <img
                      class="img-fluid img-thumbnail"
                      src="https://www.localguidesconnect.com/t5/image/serverpage/image-id/665882i7CD25B0326310EE9?v=v2"
                      alt=""
                    />
                  </a>
                </div>

                <div class="col-lg-2 col-md-2 col-6">
                  <a href="#" class="d-block mb-1 h-10">
                    <img
                      class="img-fluid img-thumbnail"
                      src="https://www.reddottours.com/uploads/Destinations/Hill-Country/Hill%20Country-gallery-pop-up-7.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div class="col-lg-2 col-md-2 col-6">
                  <a href="#" class="d-block mb-1 h-10">
                    <img
                      class="img-fluid img-thumbnail"
                      src="https://i.redd.it/clhe5lk2qb671.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div class="col-lg-2 col-md-2 col-6">
                  <a href="#" class="d-block mb-1 h-10">
                    <img
                      class="img-fluid img-thumbnail"
                      src="https://www.jftours.com/uploads/772/conversions/preview.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div class="col-lg-2 col-md-2 col-6">
                  <a href="#" class="d-block mb-1 h-10">
                    <img
                      class="img-fluid img-thumbnail"
                      src="https://fotoworkshops.com/wp-content/uploads/2019/09/DSF0698_LR.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <hr />
           <p className="mb-2" style={{marginTop: "200px"}}>   Sri Lanka which is been kmown as the pearl of the Indian ocean is an Island
              with fascinating places to visit.Country has a great history and it is specially  well knowned for 
              it's own speiallities such as tea,rubber and coconut.The geographical location of the country includes
             coastal plains in the interior.The physical enviroment of wide ranging diversity makes Sri Lanka one of 
             the world's most scenic countries.This is a country with own cultural heritage and has a highly varied 
             eultural landscape with thse all attractive places in Sri Lanka.We love to give you a unmemorable journey 
              while you are srilanka by taking you to the most heart touching places to enjoy your journey.Join us with  
              discover travel and let us give you as unmemorable experience.
           </p>
        
              <div     class="d-flex flex-row align-items-center mb-2"
              style={{
                backgroundColor: "hsla(101, 27%, 53%, 0.27)",
                paddingBottom: "5px",
                paddingTop: "7px",
                
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <h1 style={{fontSize: 30}}><b>Our Travel Packages</b></h1>
           
                    <input
                      id="search-input"
                      type="search"
                      id="form1"
                      class="form-outline form-control"
                      style={{width:"400px",marginInlineStart:"29%"}}
                      placeholder="Search Package"
                      onChange={this.handleSearchArea}
                    />
                 
                  <button
                    id="search-button"
                    type="button"
                    style={{width: 40, height: 40}}
                    class="btn btn-primary"
                  >
                    <i class="fas fa-search"></i>
                  </button>
            </div>
           
           
           
              <hr />
              <Row xs={1} md={1} className="g-4" id="by" class="rounded">
                {this.state.posts.map((posts, idx) => (

                  <div class="container py-1">
                    <article class="postcard postcardtr dark blue">
                      <a class="postcard__img_link">
                        <img
                            className="postcard__img"
                            // src={`/uploads/package/${encodeURI(posts.packageImage)}`}/>
                            src={`/uploads/${posts.packageImage}`}/>
                      </a>
                      <div class="postcard__text">
                        <h1 class="postcard__title blue">
                          <a href="#">
                            {" "}
                            {idx + 1}. &nbsp;{posts.packageName}
                          </a>
                        </h1>
                       
                       
                        <div class="d-flex">
                          <div class="form-outline mr-4">
                      
                          <time class="postcard__subtitle small smalltr" datetime="2020-05-25 12:00:00">
                            <i class="fas fa-calendar-alt mr-2"></i>
                            {posts.date}
                          </time> 
                     
                            </div>
                            <div class="form-outline ">
                            
                          <Reactstars edit={false}  size={20} value={Math.floor(posts.reviewsAvg)}/>
                            </div>
                            </div>
                       






                        <div class="postcard__bar"></div>
                        <div class="postcard__preview-txt">
                          {posts.discription}
                        </div>
                        <br />
                        {posts.destination}
                 

                        <ul class="postcard__tagbox">
                          <li class="tag__item">
                            <i class="fas fa-tag mr-2"></i>PP $.&nbsp;
                            <a style={{ color: " hsl(180,100%,50%)" }}>
                              {posts.perperson}
                            </a>
                          </li>
                          <li class="tag__item">
                            <i class="fas fa-clock mr-2"></i>
                            {posts.noofdays}&nbsp;{posts.noofnights}
                          </li>
                          <li class="tag__item play blue">
                            <a style={{ color: "  hsl(60,100%,50%) " }}>
                              <i class="fas fa-car mr-2"></i>
                              {posts.vehical}
                            </a>
                          </li>
                  
                          <li>
                            <button
                              type="button"
                              class="btn mybtn-primary abv"
                              id="cardbtn2"
                            >
                              <a
                                href={`/travelpackages/travelpackage/${posts.id}`}
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                              >
                                View Details &nbsp;
                                <i class="fas fa-hand-point-right"> </i>
                              </a>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                ))}
              </Row>
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
       
      </div>
    );
  }
}
