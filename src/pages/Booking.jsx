import React, { useEffect, useState } from 'react'
import Default from '../components/Default'
import { useSelector, useDispatch } from 'react-redux'
import { getAllBikes } from '../redux/action/bikesAction'
import { useParams } from 'react-router-dom'
import { Col, Row, DatePicker, Button, Modal} from 'antd'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spinner from '../Spinner';
import axios from 'axios'

AOS.init();
const { RangePicker } = DatePicker;

function Booking() {
  
  const {bikes} = useSelector(state =>state.bikesReducer)
  const {loading} = useSelector(state =>state.alertsReducer)
  const dispatch = useDispatch()

  const [bike, setBike] = useState({})
  const [from, setFrom] = useState()
  const [to, setTo] = useState()
  const [totalHours, setTotalHours] = useState(0)
  const [totalDays, setTotalDays] = useState()
  const [totalAmount, setTotalAmount] = useState()
  const [timeSlot, setTimeSlot] = useState(false)

  const { id } = useParams();
  useEffect(()=>{
    if((bikes.length == 0)){

      dispatch(getAllBikes())
    }
    else{
      setBike(bikes.find(b =>b._id == id))
    }
  }, [bikes])


  const reqObj = {
      user : JSON.parse(localStorage.getItem("user"))._id,
      userName : JSON.parse(localStorage.getItem("user")).username,
      bike : bike._id,
      bikeName: bike.name,
      totalDays,
      totalHours,
      totalAmount,
      bookedTimeSlots: {
        from,
        to
      }
    }

  async function displayRazorpay() {

    // creating a new order
    const result = await axios.post("https://bike-rental-back-end.onrender.com/api/bookings/bookingbike", reqObj);

    

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    // Getting the order details back
    const {  id: order_id } = result.data;
    const amount = totalAmount * 100;
  
    const options = {
        key: "rzp_test_9j7QX4EPSwZr5G", 
        amount,
        currency: "INR",
        name: "KickBike Rental",
        description: "Test Transaction",
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            const result = await axios.post("https://bike-rental-back-end.onrender.com/api/bookings/success", {data : data});

            alert(result.data.msg);
            if(result){
              setTimeout(()=>{
                 window.location.href="/mybookings"
             })
         }
        },
        notes: {
            address: "KickBike Rental",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
 
}

  function changeDate(e){
    setFrom((e[0]).format("MMM-DD-YYYY HH:mm a"))
    setTo((e[1]).format("MMM-DD-YYYY HH:mm a"))
    setTotalHours(e[1].diff(e[0], "hours"))
    setTotalDays(e[1].diff(e[0], "days"))
    // console.log((e[0]).format('MMM-DD-YYYY HH:mm a'));
    // console.log((e[1]).format('MMM-DD-YYYY HH:mm a'));
  }

  useEffect(() =>{
    setTotalAmount(totalHours * bike.rentPerHour)
  }, [totalHours])


  return (
    <Default >
    {loading && (<Spinner />)}
      <Row justify="center" className='d-flex align-items-center bookingPage' style={{minHeight:"90vh"}}>
        <Col lg={12} md={12} data-aos="slide-right" data-aos-duration="800" className='mt-3'>
          <img src={bike.image} className='bookImg bs1' />
          <div className='pickupLoc'>
          <b>PICKUP & RETURN LOCATION</b>
          <br />
          <a className='a' href='https://maps.app.goo.gl/U7mzRLYaLXtLkSzy7'>12, Dhindal, Perundurai Road, Erode </a>
          </div>
        </Col>

        <Col lg={8} md={8} >
          <div className='bookInfo card bs1' data-aos="slide-left" data-aos-duration="800">
              <h1 className='text-center'>Bike Details</h1>
              <hr className='line'/>
            <div className='bookDet'>
              <h3>{bike.name}</h3>
              <h6><b>{bike.rentPerHour}</b> Per hour /-</h6>
              <h6>Max Persons : {bike.capacity}</h6>
            </div>
            <br />
              <h1 className='text-center'>Booking Details</h1>
              <hr />
              <div className='bookDet'>
              <h6>Select Date & Time</h6>
                <RangePicker className='date' format="MMM-DD-YYYY HH:mm" showTime={{format: "HH:mm",use12Hours:true}} onChange={changeDate} />
                <br />
                <Button type="primary" htmlType="submit" className='fbtn mt-2' onClick={()=>{setTimeSlot(true)}}> Booked Time Slots</Button>
               
             { from && to &&(<div className='total'>
                <h6>Total Days : {totalDays}</h6>
                  <h6>Total Hours : {totalHours}</h6>
                  <h4>Total Amount: {totalAmount}</h4>

                  <Button type="primary" htmlType="submit" className='fbtn' onClick={displayRazorpay}>Book Now</Button>

                </div>)}
               
            </div>
          </div>
        </Col>

        {bike.name && (
          <Modal open={timeSlot} closable={false} title=" Booked Time Slots" footer={false}>
              
              <div className='p-2'>
                {bike.bookedTimeSlots.map((slot,i)=>{
                  return(
                    <li key={i}> Booked in <b>{slot.from} - {slot.to} </b> </li>
                  )
                })}

                <div >
                  <Button className='text-right mt-5' onClick={()=>{setTimeSlot(false)}}> Close</Button>
                </div>
              </div>
          </Modal>
        )}
      </Row>

    </Default>
  )
}

export default Booking
