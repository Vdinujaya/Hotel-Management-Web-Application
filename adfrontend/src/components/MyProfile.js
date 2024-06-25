import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthService } from "./AuthService";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';
import { Card, Form, Input, Button } from 'antd';
import '../../node_modules/antd/dist/reset.css';

import Footer from './Footer';
import HomeFeedback from './HomeFeedback';
import '../css/MyProfile.css'
import CoAndFe from './CoAndFe';

export default function Myprofile() {
  const { cId } = useParams();
  const [customer, setCustomer] = useState([]);

  const handleLogout = () => {

    AuthService.logout();
    window.location.href = '/';
  }

  const getCustomer = () => {
    axios.get(`http://localhost:6655/customer/get/${cId}`)
      .then((res) => {
        console.log(res.data.customer);
        setCustomer(res.data.customer); // Set the array of bookings
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getCustomer(); // Fetch bookings when the component mounts
  }, []);
  return (
    <div>
      <div className="container-xxl bg-white p-0">
        <NavBar />

        <div class="container-fluid page-header mb-5 p-0" style={{ backgroundImage: "url(http://localhost:6655/images/carousel-1.jpg)" }}>
          <div class="container-fluid page-header-inner py-5">
            <div class="container text-center pb-5">
              <h1 class="display-3 text-white mb-3 animated slideInDown">My Profile</h1>
              <nav aria-label="breadcrumb">
              </nav>
            </div>
          </div>
        </div>


        <div class="container-fluid py-5">
          <div class="container">
            <div class="text-center">
              <h1 class="mb-5 text-primary">User Profile</h1>
            </div>
            <div class="row">
              <div class="col-lg-6 offset-lg-3">
                <div class="card mb-4">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <h6 for="firstName" class="myde-t section-title text-center  text-uppercase mb-3">First Name</h6>
                          <p id="firstName">{customer.firstName}</p>
                        </div>
                        <div class="form-group">
                          <h6 for="lastName" class="myde-t section-title text-center  text-uppercase  mb-3">Last Name</h6>
                          <p id="lastName">{customer.lastName}</p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <h6 for="email" class="myde-t section-title text-center  text-uppercase  mb-3">Email</h6>
                          <p id="email">{customer.email}</p>
                        </div>
                        <div class="form-group">
                          <h6 for="phone" class="myde-t section-title text-center  text-uppercase  mb-3">Mobile</h6>
                          <p id="phone">{customer.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center mb-3">
                  <button class="btn btn-primary w-50 py-3" type="submit" onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>



        <CoAndFe />


      </div>
    </div>

  )
}