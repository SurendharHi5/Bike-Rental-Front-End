import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'



const authUser =() =>{
    const users = JSON.parse(localStorage.getItem("user"))
   
    if(users){
       
        return <Navigate to="/home" />
    }
    
}
function Protect() {
    const isAuth = authUser()
  return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default Protect