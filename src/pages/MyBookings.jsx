import React, { useEffect } from 'react'
import Default from '../components/Default'
import { useSelector, useDispatch } from 'react-redux'
import { getAllBookings } from "../redux/action/bookingAction"
import { Button, Col, Row } from 'antd'
import { Link } from 'react-router-dom'


function MyBookings() {

  const dispatch = useDispatch()
  const {bookings} = useSelector(state =>state.bookingsReducer)

  const user = JSON.parse(localStorage.getItem("user"))
  useEffect(()=>{
    dispatch(getAllBookings())
  },[])

  return (
    <Default>
           <Row>
            <Col lg={3} className='mt-3'>
            <Button type="primary" htmlType="submit" className='fbtn backBtn text-left '>
              <Link to="/home" className='a'> Back </Link>
            </Button>
        
            </Col>
            <Col lg={17} md={17} sm={17} xs={18}>
            { bookings.length > 0 ? (
              <h2 className='text-center mt-3'>My Bookings</h2>
            ) : (
              <h2 className='text-center mt-3'>No Bookings</h2>
            )}
            </Col>
           </Row>
            
        <Row justify="center">
          <Col lg={20} md={23} sm={23} >
            
              
                <div>
                {bookings.filter(b=>b.user==user._id).map((booking, i) =>{
                return <Row className='bs1 m-2 text-left' key={i}>
                  <Col lg={7} md={7}  className='p-2 mt-1'>
                    <p className="bookText">Bike Name : <b>{booking.bike.name} </b></p>
                    <p className="bookText">Total Days : <b>{booking.totalDays}</b></p>
                    <p className="bookText">Total Hours : <b>{booking.totalHours}</b></p>
                    <p className="bookText">Total Amount : <b>{booking.totalAmount}</b></p>
                  </Col>
                  <Col lg={7} md={7}  className='p-2 mt-1'>
                    <p className="bookText">From : <b>{booking.bookedTimeSlots.from}</b>  </p>
                    <p className="bookText"> To : <b>{booking.bookedTimeSlots.to}</b> </p>
                    <p className="bookText">Date of Booking : <b>{(booking.createdAt.slice(0,-3))}</b> <b></b></p>
                  </Col>
                  <Col lg={7} md={7} className=' mt-2'>
                    <img className="bookText book img" src={booking.bike.image} height="150" />
                  </Col>
                </Row>
              })}
                </div>
              
            
          </Col>
        </Row>
    </Default>
  )
}

export default MyBookings