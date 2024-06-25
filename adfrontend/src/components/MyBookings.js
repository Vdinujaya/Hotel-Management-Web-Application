import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthService } from "./AuthService";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';
import HomeFeedback from './HomeFeedback';
import Footer from './Footer';
import CoAndFe from './CoAndFe';

export default function MyBookings() {
  const { cId } = useParams();
  const [bookings, setBookings] = useState([]);

  const getBookings = () => {
    axios.get(`http://localhost:6655/booking/getcid/${cId}`)
      .then((res) => {
        console.log(res.data);
        setBookings(res.data); // Set the array of bookings
      })
      .catch((err) => {
        
      });
  };

  useEffect(() => {
    getBookings(); // Fetch bookings when the component mounts
  }, []);

  return (
    <div>

      <div className="container-xxl bg-white p-0">
        <NavBar />

        <div class="container-fluid page-header mb-5 p-0" style={{ backgroundImage: "url(http://localhost:6655/images/carousel-1.jpg)" }}>
          <div class="container-fluid page-header-inner py-5">
            <div class="container text-center pb-5">
              <h1 class="display-3 text-white mb-3 animated slideInDown">My Bookings</h1>
              <nav aria-label="breadcrumb">
              </nav>
            </div>
          </div>
        </div>

        <div class="container-xxl py-5">
          <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h1 class="mb-5">Details<span class="text-primary text-uppercase"></span></h1>
            </div>
            <div class="row">
      <div class="col-lg-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th className="text-primary">#</th>
              <th className="text-primary">Room Number</th>
              <th className="text-primary">Check In</th>
              <th className="text-primary">Check Out</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{booking.roomNo}</td>
              <td>{booking.checkIn}</td>
              <td>{booking.checkOut}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
          </div>
        </div>


        <CoAndFe />
        

      </div>






      {/*tabele ekakata pilivalata ekin ekata enna hadpn me thiyenn widiha balala*/}
      {bookings.map((booking, index) => (













        <div key={index}>
          <p>Booking ID: {booking._id}</p>
          <p>Room ID: {booking.roomId}</p>

        </div>
      ))}
    </div>
  )
}
