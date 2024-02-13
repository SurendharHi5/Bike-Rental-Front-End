import React from 'react'
import { Button, Dropdown, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    key: '1',
    label: (
      <a className='a' href="/home">
        Home
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a className='a' href="/mybookings">
        Bookings
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a className='a' href="/adminhome">
        Admin
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a className='a' onClick={() =>{
        localStorage.removeItem("user")
        window.location.href="/"
      }}>
        Logout
      </a>
    ),
  }
];

function Default(props) {
  
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <div>
        <div className='header bs1 '>
          <Row gutter={16} justify="center">
            <Col lg={22} md={20} sm={20} xs={20}>
              <div className='d-flex justify-content-between'>
                  <h1 className='defaultName'>
                  <Link to = "/home" className='a kickBike'> KickBike Rental</Link></h1>
                  <Dropdown menu={{items}}placement="bottom">
                    <Button  >
                   <i className="fa-solid fa-user"></i>
                   
                   <p className='mt-1'>{user.username}</p>
                    
                    </Button>
                  </Dropdown>
              </div>
            </Col>
          </Row>
            
        </div>

        <div className='content'>
            {props.children}
        </div>


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

export default Default