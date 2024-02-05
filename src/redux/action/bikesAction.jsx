import { message } from "antd";
import axios from "axios";

export const getAllBikes = ()=>async dispatch =>{

    dispatch({type: "LOADING", payload: true})

    try {
        const response = await axios.get("http://localhost:3000/api/bikes/getallbikes")
        dispatch({type: "GET_ALL_BIKES", payload: response.data})
        dispatch({type: "LOADING", payload: false})
    } catch (error) {
        console.log(error)
        dispatch({type: "LOADING", payload: false})
    }
}

export const addBike = (reqObj) => async dispatch =>{

    dispatch({type: "LOADING", payload: true})
    try {
        await axios.post("http://localhost:3000/api/bikes/addbike", reqObj)
        dispatch({type: "LOADING", payload: false})
        message.success("New Bike added successfully")
        setTimeout(()=>{
            window.location.href="/adminhome"
        }, 500)
    } catch (error) {
        console.log(error)
        dispatch({type: "LOADING", payload: false})
    }
}

export const editBike = (reqObj) => async dispatch =>{

    dispatch({type: "LOADING", payload: true})
    try {
        await axios.post("http://localhost:3000/api/bikes/editbike", reqObj)
        dispatch({type: "LOADING", payload: false})
        message.success("Updated successfully")
        setTimeout(()=>{
            window.location.href="/adminhome"
        }, 500)
    } catch (error) {
        console.log(error)
        dispatch({type: "LOADING", payload: false})
    }
}

export const deleteBike = (reqObj) => async dispatch =>{

    dispatch({type: "LOADING", payload: true})
    try {
        await axios.post("http://localhost:3000/api/bikes/deletebike", reqObj)
        dispatch({type: "LOADING", payload: false})
        message.success("Deleted successfully")
        setTimeout(()=>{
            window.location.reload()
        }, 500)
    } catch (error) {
        console.log(error)
        dispatch({type: "LOADING", payload: false})
    }
}