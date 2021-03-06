import React, {Component } from 'react';
import axios from 'axios';
import hotelimg from '../../../../assets/simple-house-logo.png'
import luxurious from '../../../../assets/hotelhome.jpg'
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import '../../../common/Styles/HotelRoomStyle.css'
import Navbar from "../../../common/navbar/navbar";
import Footer from "../../../common/footer/footer";

export default class hotelpackage extends Component{

    constructor(props){
        super(props);
        this.state={
          posts:[]
        };
      }
      
      componentDidMount(){
        this.retrievePosts();
      }
      
      retrievePosts(){
        axios.get("http://localhost:8070/hotelpackage/").then(res =>{
          if(res.data.success){
            console.log(res)
            this.setState({
              posts:res.data.existingPackage
            });
          console.log(this.state.hotelpackage);
          }
        });
      } 


      filterData(posts,searchKey){

        const result = posts.filter((post)=>
          post.roomType.toLowerCase().includes(searchKey)
        )

        this.setState({posts:result})

      }

      handleSearchArea=(e)=>{

        const searchKey=e.currentTarget.value;
        axios.get("http://localhost:8070/hotelpackage/").then(res =>{
          if(res.data.success){

            this.filterData(res.data.existingPackage,searchKey)

          }
        });

      }
       

    

    render(){
      return(
        <div>
          <Navbar/>
            <div className="info">
              <div class="parallax-window" data-parallax="scroll" data-image-src="img/simple-house-01.jpg">
                <img src={luxurious} alt="Logo" class="shimg" />
                  <div class="tm-header">
                    <div class="tm-header-inner">
                      <div class="row" id="bokrow">
                        <div class="col-md-6 col-12">
                          <img src={hotelimg} alt="Logo" class="tm-site-logo"/> 
                            <div class="tm-site-text-box">
                              <h1 class="tm-site-title" style={{fontFamily: "Calibri"}}>Rooms</h1>
                              <div className="col-lg-3 mt-2 mb-2">
                                <input
                                style={{fontFamily: "Calibri", color: "black"}}
                                  className="from-control"
                                  id="hotelse"
                                  type="search"
                                  placeholder=" What are you looking for?"
                                  name="searchQuery"
                                  onChange={this.handleSearchArea}>
                                </input>
                              </div>	
                            </div>
                        </div>
                        <nav class="col-md-6 col-12 tm-nav">
                          <ul class="tm-nav-ul">
                            <li class="tm-nav-li"><a style={{fontFamily: "Calibri", textDecoration:'none' ,color:'white'}} href ={"/hotelpackage"} class="tm-nav-link active">Rooms</a></li>
                            <li class="tm-nav-li"><a style={{fontFamily: "Calibri", textDecoration:'none' ,color:'white'}} href ={"/userhotelbooking/View"} class="tm-nav-link">My Booking</a></li>
                          </ul>
                        </nav>	
                      </div>
                    </div>
                  </div>
              </div>
              <div className="container">
                <br></br>
                <br></br>
                <Row xs={1} md={3} className="g-4" id="by" class="rounded" >
                  {this.state.posts.map((posts) => (
                    /*<Col>
                      <Card class="crdboder" style={{borderColor:"black"}}>
                        <div  class="crdboder">
                          <Card.Img className="packageimg" variant="top" src={`/uploads/${posts.packageImage}`} id="cardimg" />
                            <Card.Body>
                              <Card.Title class="tm-gallery-title">
                                {posts.roomType}
                              </Card.Title>
                                <Card.Text>
                                  <div>
                                    <table>
                                      <tr>
                                        <td style={{fontFamily: "Calibri"}}>
                                          Per Day: Rs {posts.price}<br></br>
                                          Max Capacity: {posts.maxCapacity}
                                        </td>
                                        <td>
                                          <button type="button" class="btn btn-dark" id="crdbtn">
                                            <a href ={`/hotelpackagedetails/${posts._id}`} style={{fontFamily: "Calibri", textDecoration:'none',color:'white'}}>Features</a>
                                          </button>
                                        </td>
                                      </tr>
                                    </table>          
                                  </div>
                                </Card.Text>
                            </Card.Body>
                        </div>
                      </Card>
                    </Col>*/

                      <div className="card" style={{width: '100%', margin: 10, height: "max-content", maxHeight: "250px", overflow: "hidden"}}>
                        <div className="row no-gutters" >
                          <div className="col-sm-5">
                            <Card.Img className="card-img" src={`/uploads/${posts.packageImage}`}  height={'100%'} alt="Suresh Dasari Card"/>
                          </div>
                          <div className="col-sm-7">
                            <div className="card-body">
                              <h5 className="card-title">{posts.roomType}</h5>
                              <p className="card-text" style={{textAlign: 'left'}}>
                                Per Day: Rs {posts.price}<br></br>
                                Max Capacity: {posts.maxCapacity}
                              </p>
                              {/*<a href ={`/hotelpackagedetails/${posts._id}`} className="btn btn-primary">View Profile</a>*/}
                              <a href ={`/hotelpackagedetails/${posts._id}`}  className="btn btn-primary" style={{fontFamily: "Calibri", textDecoration:'none',color:'white'}}>Features</a>
                            </div>
                          </div>
                        </div>
                      </div>
                  ))}
                </Row>    
              </div>
            </div>
          <Footer/>
        </div>
        )
    }
}
