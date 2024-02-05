import React, { useEffect, useState } from 'react'
import Default from '../components/Default'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBike, getAllBikes } from '../redux/action/bikesAction'
import { Button, Col, Row, message, Popconfirm } from 'antd'
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';
import { DeleteFilled, EditFilled } from '@ant-design/icons';



function AdminHome() {
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

  const users = localStorage.getItem("user");
  const value = JSON.parse(users)
  
  
  console.log(value)

 
  return (
    <Default>

   
            <div className='text-end mt-3 mr-2'>
                <Button type="primary" htmlType="submit" className='fbtn addBike'>
                    <Link to="/addbike" className='a' > Add Bike + </Link>
                </Button>
            </div>

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
                               
                               <div className='adminIcon' >
                               <Link to={`/editbike/${bike._id}`} >
                                    <EditFilled className='editIcon' />
                                </Link>

                                <Popconfirm title="Are you sure to delete this Bike?" onConfirm={()=>{dispatch(deleteBike({id : bike._id}))}}  okText="Yes" cancelText="No" >
                                    <DeleteFilled className='deleteIcon' />
                                </Popconfirm>
                                
                               </div>
                            </div>
                            </div>
                            
                          </div>
                          
                      </div>

                  </Col>
        })}
      </Row>
      </div>

    </Default>
  )
}

export default AdminHome