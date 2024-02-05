import React, { useEffect, useState } from 'react'
import Default from '../components/Default'
import {Row, Col, Form, Button, Input} from "antd"
import { useDispatch, useSelector } from 'react-redux'
import { editBike, getAllBikes } from '../redux/action/bikesAction'
import Spinner from '../Spinner'
import { Link, useParams } from 'react-router-dom'


function EditBike() {
    const {bikes} = useSelector(state =>state.bikesReducer)
  const dispatch  = useDispatch()
  const {loading} = useSelector(state =>state.alertsReducer)
  const [bike, setBike] = useState()
  const [allBikes, setAllBikes] = useState([])

  const { id } = useParams();
  useEffect(()=>{
    
    if((bikes.length == 0)){

        dispatch(getAllBikes())
      }
      else{
        setAllBikes(bikes)
        setBike(bikes.find(b =>b._id == id))
      }
  }, [bikes])


  function updateForm(values){
    values._id = bike._id
    dispatch(editBike(values))
    console.log(values)
  }
  return (
        <Default>
         {loading && (<Spinner />)}
          <Row justify="center">
            <Col lg={15} md={15} sm={15}>
                {allBikes.length > 0 && (
                    <Form layout='vertical' className='bs1 addForm p-5' onFinish={updateForm} initialValues={bike}>
                        <h1>Edit Bike</h1>
                        <hr />
                        <br />
                        <Form.Item name="name" label="Bike Name"  >
                        <Input placeholder="Bike Name" />
                        </Form.Item>
                        <Form.Item name="image" label="Image" >
                        <Input placeholder="Image_url" />
                        </Form.Item>
                        <Form.Item name="capacity" label="Capacity"  >
                        <Input placeholder="Capacity" />
                        </Form.Item>
                        <Form.Item name="rentPerHour" label="Rent Per Hour"  >
                        <Input placeholder="Rent Per Hour" />
                        </Form.Item>
                        <div className='text-start p-2'>
                            <Button type="primary" htmlType="submit" className='fbtn'>Update</Button>
                            <Button type="primary" htmlType="submit" className='fbtn backBtn '>
                                <Link to="/adminhome" className='a'> Back </Link>
                            </Button>
                        </div>
                        
                    </Form>
                )}
            </Col>
          </Row>
        </Default>
  )
}

export default EditBike