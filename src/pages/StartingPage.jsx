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


    </div>
  )
}

export default StartingPage