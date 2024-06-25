import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Rooms from "./components/Rooms";
import BookRoom from "./components/BookRoom";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Login from "./components/Login";
import { AuthService } from "./components/AuthService";
import MyBookings from './components/MyBookings';
import Myprofile from './components/MyProfile';
import FoodAndRes from "./components/FoodAndRes";
import Spa from "./components/Spa";
import Sports from "./components/Sports";
import Event from "./components/Event";
import Gym from "./components/Gym";
import Policy from "./components/Ploicy";
import Support from "./components/Support";
import Condition from "./components/Condition";
import SR from './components/SR';

import './App.css';
import './css/bootstrap.min.css';
import './css/style.css';
import './js/main';
import Register from './components/Register';
import UpdateMyProfile from './components/UpdateMyProfile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(AuthService.isLoggedIn());

  useEffect(() => {
    // Update isLoggedIn state when AuthService changes
    setIsLoggedIn(AuthService.isLoggedIn());
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/:cId" element={<Home />} />
          <Route path="/rooms" element={<SR />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mybooking/:cId" element={<MyBookings />} />
          <Route path="/myprofile/:cId" element={<Myprofile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/bookRoom/:cId/:rId/:cIn/:cOt"
            element={<BookRoom />}
          />
          <Route path="/food" element={<FoodAndRes/>}/>
          <Route path="/spa" element={<Spa/>}/>
          <Route path="/sports" element={<Sports/>}/>
          <Route path="/event" element={<Event/>}/>
          <Route path="/gym" element={<Gym/>}/>
          <Route path="/policy" element={<Policy/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/condition" element={<Condition/>}/>
          <Route path="/SRN" element={<SR/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
