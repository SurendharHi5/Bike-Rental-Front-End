import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Booking from "./pages/Booking"
import StartingPage from "./pages/StartingPage";
import Protect from "./protectPages/Protect";
import MyBookings from "./pages/MyBookings";
import AddBike from "./adminPages/AddBike";
import AdminHome from "./adminPages/AdminHome";
import EditBike from "./adminPages/EditBike";


function App() {

  return (
   <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element= { <StartingPage /> } />
              <Route element={<Protect />}>
                <Route path="/home" element={ <Home /> } />
                <Route path="/booking/:id" element={ <Booking/> } />
                <Route path="/mybookings" element={ <MyBookings /> } />
                <Route path="/addbike" element={ <AddBike /> } />
                <Route path="/editbike/:id" element={ <EditBike /> } />
                <Route path="/adminhome" element={ <AdminHome /> } />
              </Route>
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
          </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App



