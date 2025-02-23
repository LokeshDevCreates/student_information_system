import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'leaflet/dist/leaflet.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "../src/pages/home"
import Campus from "../src/pages/campus"
import Courses from "../src/pages/courses"
import Attendance from "../src/pages/attendance"
import Profile from "../src/pages/profile"
import LogOut from "../src/pages/logout"
import Login from "../src/pages/login"
import Contact from './pages/contact';
import Frequent from './pages/frequent';
function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/frequent" element={<Frequent />} />
        </Routes>       
       </BrowserRouter>
    </>
  )
}

export default App