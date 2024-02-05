import React, { useEffect, useState } from 'react'
import Default from '../components/Default'
import { useSelector, useDispatch } from 'react-redux'
import { getAllBikes } from '../redux/action/bikesAction'
import { Col, Row, Button } from 'antd'
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';


function Home() {
  const {bikes} = useSelector(state =>state.bikesReducer)
  const {loading} = useSelector(state =>state.alertsReducer)
  const [totalBikes, setTotalBikes] = useState([]);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllBikes())
  }, [])

  useEffect(()=>{
    setTotalBikes(bikes)
  }, [bikes])


 
  return (
    <Default>

          {loading == true && (<Spinner />)}
      <div className='home'>
      <Row justify="center" gutter={20}>
        {totalBikes.map((bike,i)=>{
           return <Col lg={5} md={7} sm={10} xs={16} key={i}>
                      <div className='card Hbike p-2 bs1'>
                        <img src={bike.image} className='bikeimg' />

                          <div className='bikeContent'>
                            <div className='align-items-center'> 
                                <b>{bike.name}</b>
                                <br />
                                

                                <div className='cHid'>
                                <p> Rent Per Hour <b>{bike.rentPerHour}</b> /-</p>
                              <Button type="button" className='bookBtn btn btn-secondary justify-content-center ' >
                                <Link to={`/booking/${bike._id}`} className='bookLink'>
                                  Book Now 
                                </Link>
                               </Button>
                            </div>
                            </div>
                            
                          </div>
                          
                      </div>

                      {/* <Card className='bike p-2 bs1' >
                          <Card.Img  src={bike.image} className='bikeimg'  />
                          <Card.Body className='bikeContent'>
                            <div>
                            <Card.Title>{bike.name}</Card.Title>
                            </div>
                            <Card.Text>
                            {bike.rentPerHour} Rent Per Hour /-
                            </Card.Text>
                            <Button variant="primary" className='bt1 mt-3'>Book Now</Button>
                          </Card.Body>
                        </Card> */}

                  </Col>
        })}
      </Row>
      </div>

    </Default>
  )
}

export default Home