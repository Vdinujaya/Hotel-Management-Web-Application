import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { AuthService } from './AuthService';

const HomeRooms = () => {

    const [room, setRooms] = useState([]);
    

    const getRoom = () => {
        axios.get('http://localhost:6655/room/')
          .then((res) => {
            console.log(res.data);
            setRooms(res.data);
            console.log(res.data._id);
          })
          .catch((err) => {
            alert(err.message);
          });    
          
      };

      useEffect(() => {
        getRoom();
        
      }, []);

      const handleBookRoom = (id) => {
        if (AuthService.isLoggedIn()) {
          const user = AuthService.getUser();
          if (user && user.customerId) {
            const customerId = user.customerId;
            window.location.href = `/bookRoom/${customerId}/${id}`;
          } else {
            console.error("User data does not contain customerId");
          }
        } else {
          // If user is not logged in, redirect to login page
          window.location.href = '/login';
        }
      };

  return (
    <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Our Rooms</h6>
                    <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Rooms</span></h1>
                </div>




                
                <div className="row g-4">
                {room.slice(0, 3).map((singleRoom, index) => (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
        <div className="room-item shadow rounded overflow-hidden" style={{ height: "100%" }}>
            <div className="position-relative">
                <img className="img-fluid" src={`http://localhost:6655/images/${singleRoom.image}`} alt="" />
                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">LKR{singleRoom.price}/Night</small>
            </div>
            <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{singleRoom.roomType}</h5>
                    <div className="ps-2">
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                        <small className="fa fa-star text-primary"></small>
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>{singleRoom.bedDetails}</small>
                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>{singleRoom.bathCount}</small>
                    <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                </div>
                <p className="text-body mb-3">{singleRoom.description}</p>
                <div className="\">
                    
                </div>
            </div>
        </div>
    </div>
))}

                    
                    
                </div>

            </div>
        </div>
  )
}

export default HomeRooms