import React, { useEffect, useState } from 'react'
import Default from '../components/Default'
import { Col, Row, DatePicker, Button} from 'antd'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';


const { RangePicker } = DatePicker;
function StartingPage() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    <Row className='mt-3' justify="center" >
    <Col lg={20} md={20}>
      <RangePicker className='moment' format="MMM-DD-YYYY HH:mm" showTime={{format: "HH:mm",use12Hours:true}} style={{width:"60%",height:"50px",textAlign: "center"}} >
       
      </RangePicker>
      <Button type="primary" htmlType="submit" className=' fbtn rideBtn'><Link className='a' to="/login">Start Ride</Link></Button>
    </Col>
  </Row>     


  <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={2000}>
        <img src='https://wallpapercave.com/wp/wp4934564.jpg' className='stImg d-block w-100 ' text="First slide" />
        <Carousel.Caption>
          <h1>Ride safe, have the safest journey</h1>
          <h4>Choose your favorite</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src='https://wallpapercave.com/wp/wp5691360.jpg' className='stImg d-block w-100 ' text="Second slide" />
        <Carousel.Caption>
          <h1>Take a trip today</h1>
          <h4>Million ideas for your single journey</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src='https://c4.wallpaperflare.com/wallpaper/767/881/90/ktm-helmet-motorcycle-canon-wallpaper-preview.jpg' className='stImg d-block w-100 ' text="Third slide" />
        <Carousel.Caption>
          <h1>The best two-wheelers for you</h1>
          <h4>
          Ride a bike and save your money
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div>
        <footer>
  <div className="footer-wrap">
  <div className="container first_class">
      <div className="row">
        <div className="col-md-3 col-sm-6">
        <h3 className='quickLinks'>Quick  Links</h3>
          <ul className="footer-links text-start">
            <li><a href="/home">Home</a>
            </li>
            <li><a href="#">About us</a>
            </li>
            <li><a href="#">Contact Us</a>
            </li>
            <li><a href="#">Terms &amp; Conditions</a>
            </li>
            <li><a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="col-md-5 col-sm-6">
        <form className="newsletter">
           <input type="text" placeholder="Email Address" /> 
           <Button type="primary" htmlType="submit" className='fbtn mt-2'>Send</Button> 
        </form>
        
        </div>
        <div className="col-md-4 col-sm-6">
        <div className="col-md-12">
          <div className="standard_social_links">
        <div>
          <li className="round-btn btn-facebook"><a href="#"><i className="fab fa-facebook-f"></i></a>

          </li>
          <li className="round-btn btn-linkedin"><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a>

          </li>
          <li className="round-btn btn-twitter"><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>

          </li>
          <li className="round-btn btn-instagram"><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a>

          </li>
          <li className="round-btn btn-whatsapp"><a href="#"><i className="fab fa-whatsapp" aria-hidden="true"></i></a>

          </li>
          <li className="round-btn btn-envelop"><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>

          </li>
        </div>
      </div>  
        </div>
          <div className="clearfix"></div>
        <div className="col-md-12 text-end"><h3 >Stay Connected</h3></div>
        </div>
      </div>
  </div>    
    
    <div className="row">
      
      <div className="container-fluid">
      <div className="copyright"> Copyright 2024 | All Rights Reserved by KickBike Rental.</div>
      </div>
      
    </div>
  </div>
  
  </footer>

        </div>

    </div>
  )
}

export default StartingPage