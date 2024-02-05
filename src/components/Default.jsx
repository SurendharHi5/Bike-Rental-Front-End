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
    </div>
  )
}

export default Default