// import React from 'react'
// import { Outlet, Navigate } from 'react-router-dom'


// const adminAuthUser = () =>{
//     const users = localStorage.getItem("user");
//     const value = JSON.parse(users)
//     console.log("role: ", value.role)
//     if(value.role === "admin"){
//         return <Navigate to="/adminhome" />
//     }

// }

// function AdminProtect() {
//     const isAuth = adminAuthUser()
//   return isAuth ? <Outlet /> : <Navigate to="/home" />
    
// }

// export default AdminProtect


// // axios.post("http://localhost:3000/api/users/login", { email, password})
// // .then(res => {
// //   if(res.data.Status === "Success"){
// //     if(res.data.role === "admin"){

// //     }
// //     message.success("Login Successfull")
        
// //     }
// //     else{
// //       navigate("/home")
// //     }
  
  
// // }).catch(err => {
// //   message.error("Sorry, your Email or Password was incorrect.")
// //   console.log(err)
// // })