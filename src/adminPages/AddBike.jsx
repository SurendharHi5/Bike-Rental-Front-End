import React from 'react'
import Default from '../components/Default'
import {Row, Col, Form, Button, Input} from "antd"
import { useDispatch, useSelector } from 'react-redux'
import { addBike } from '../redux/action/bikesAction'
import Spinner from '../Spinner'
import { Link } from 'react-router-dom'


function AddBike() {
  const {loading} = useSelector(state =>state.alertsReducer)
  const dispatch  = useDispatch()
 

  function addForm(values){
    values.bookedTimeSlots = []
    dispatch(addBike(values))
    console.log(values)
  }
  return (
        <Default>
         {loading && (<Spinner />)}
          <Row justify="center">
            <Col lg={15} md={15} sm={15}>
            <Form layout='vertical' className='bs1 addForm p-5' onFinish={addForm}>
            <h1>Add Bike</h1>
            <hr />
            <br />
            <Form.Item name="name" label="Bike Name" rules={[{required: true}]} >
              <Input placeholder="Bike Name" />
            </Form.Item>
            <Form.Item name="image" label="Image" rules={[{required: true}]}>
              <Input placeholder="Image_url" />
            </Form.Item>
            <Form.Item name="capacity" label="Capacity" rules={[{required: true}]} >
              <Input placeholder="Capacity" />
            </Form.Item>
            <Form.Item name="rentPerHour" label="Rent Per Hour" rules={[{required: true}]} >
              <Input placeholder="Rent Per Hour" />
            </Form.Item>
            <div className='text-start p-2'>
            <Button type="primary" htmlType="submit" className='fbtn'>Add Bike</Button>
            <Button type="primary" htmlType="submit" className='fbtn backBtn '>
              <Link to="/adminhome" className='a'> Back </Link>
            </Button>
            </div>
              
          </Form>
            </Col>
          </Row>
        </Default>
  )
}

export default AddBike