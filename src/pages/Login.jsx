import React from 'react'
import {Row, Col, Form, Button, Input} from "antd"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../redux/action/userActions'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spinner from '../Spinner';


AOS.init();

function Login() {
  const dispatch = useDispatch()
  const {loading} = useSelector(state =>state.alertsReducer)
  function onFinish(values){
    dispatch(userLogin(values))
    // console.log(values)
  }

  return (
    <div className='login'>
         {loading && (<Spinner />)}
      <Row gutter={16}>
        <Col lg={14} md={14} className='imggif mt-5'>
          <img data-aos="slide-left" data-aos-duration="800" src='https://giffiles.alphacoders.com/174/17469.gif' />
        </Col>
        <Col lg={8} md={8} className='textLeft mt-5'>
          <Form layout='vertical' className='form logForm p-5' onFinish={onFinish}>
            <h1>Login</h1>
            <hr />
            <Form.Item name="email" label="Email" >
              <Input placeholder="Enter email" required/>
            </Form.Item>
            <Form.Item name="password" label="Password" >
              <Input.Password placeholder="Password" required/>
            </Form.Item>

            <Button type="primary" htmlType="submit" className='fbtn'>Login</Button>
              <br />
              <br />
              <span>Don't have an account?<Link to="/register" className='link'> Register</Link></span>
          </Form>
        </Col>
      </Row>

    </div>
  )
}

export default Login