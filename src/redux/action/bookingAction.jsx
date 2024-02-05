import axios from "axios";
import { message } from "antd";

export const bookingBike = (reqObj)=> async (dispatch) =>{

    dispatch({type: "LOADING", payload: true})

    try {
        await axios.post("http://localhost:3000/api/bookings/bookingbike", reqObj)
        
        dispatch({type: "LOADING", payload: false})
        message.success("Booking Successfull")
       
        setTimeout(()=>{
            window.location.href="/mybookings"
        })
    } catch (error) {
        console.log(error);
        dispatch({type: "LOADING", payload: false})
        message.error("Something went wrong, please try again")
    }
}


export const getAllBookings = ()=>async dispatch =>{

    dispatch({type: "LOADING", payload: true})

    try {
        const response = await axios.get("http://localhost:3000/api/bookings/getallbookings")
        dispatch({type: "GET_ALL_BOOKINGS", payload: response.data})
        dispatch({type: "LOADING", payload: false})
    } catch (error) {
        console.log(error)
        dispatch({type: "LOADING", payload: false})
    }
}