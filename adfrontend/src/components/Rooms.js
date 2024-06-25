
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CoAndFe from './CoAndFe';
import { AuthService } from './AuthService';

export default function Rooms() {
    
    const [room, setRooms] = useState([]);
    const [availableRoomIds, setAvailableRoomIds] = useState([]);
    const [minAvailableRoomIds, setMinAvailableRoomIds] = useState([]);
    const [notAvailableRoomIds, setNotAvailableRoomIds] = useState([]);
  
    useEffect(() => {
        axios.get('http://localhost:6655/room/')
            .then((res) => {
                console.log("Rooms data:", res.data);
                const availableRooms = res.data.filter(room => room.isAvailable === 'yes');//filter and set the availiable rooms
                console.log("Available rooms:", availableRooms); 
                setRooms(availableRooms);
            })
            .catch((err) => {
                console.error("Error fetching rooms:", err); 
                alert(err.message);
            });    
    }, []);
  
    useEffect(() => {
      axios.get('http://localhost:6655/booking/')
          .then((res) => {
              const today = new Date();
              const todayDateString = today.toISOString().split('T')[0];
              console.log("Booking data:", res.data);
              console.log(todayDateString);
              const catchBooking = res.data.filter(booking => (booking.checkIn > todayDateString && booking.checkOut > todayDateString  ));//filter and set the availiable rooms
              console.log("Available bookings:", catchBooking); 
              const roomIds = catchBooking.map(booking => booking.roomId);
              console.log("Room IDs:", roomIds);
              setAvailableRoomIds(roomIds);
          })
          .catch((err) => {
              console.error("Error fetching rooms:", err); 
              alert(err.message);
          });    
  }, []);
  //Not Available
  useEffect(() => {
      axios.get('http://localhost:6655/booking/')
          .then((res) => {
              const today = new Date();
              const todayDateString = today.toISOString().split('T')[0];
              console.log("Booking data:", res.data);
              console.log(todayDateString);
              const catchNotAvaiBooking = res.data.filter(booking => (booking.checkIn < todayDateString && booking.checkOut > todayDateString  ));//filter and set the availiable rooms
              console.log("Available bookings:", catchNotAvaiBooking); 
              const roomIds = catchNotAvaiBooking.map(booking => booking.roomId);
              console.log("Room IDs:", roomIds);
              setNotAvailableRoomIds(roomIds);
          })
          .catch((err) => {
              console.error("Error fetching rooms:", err); 
              alert(err.message);
          });    
  }, []);
  
  //get min availiabes
  useEffect(() => {
      axios.get('http://localhost:6655/booking/')
          .then((res) => {
              const today = new Date();
              const todayDateString = today.toISOString().split('T')[0];
              console.log("Booking data:", res.data);
              console.log(todayDateString);
              const catchMinAvaiBooking = res.data.filter(booking => (booking.checkIn < todayDateString && booking.checkOut < todayDateString  ));//filter and set the availiable rooms
              console.log("Available bookings:", catchMinAvaiBooking); 
              const roomIds = catchMinAvaiBooking.map(booking => booking.roomId);
              console.log("Room IDs min:", roomIds);
              setMinAvailableRoomIds(roomIds);
          })
          .catch((err) => {
              console.error("Error fetching rooms:", err); 
              alert(err.message);
          });    
  }, []);
  //update the room notavailiability
  useEffect(() => {
      // Check if availableRoomIds is not empty
      if (notAvailableRoomIds.length > 0) {
          // Update room availability for each room ID in availableRoomIds
          notAvailableRoomIds.forEach(roomId => {
              axios.put(`http://localhost:6655/room/update/${roomId}`, { isAvailable: 'no' })
                  .then((res) => {
                      console.log(`Room with ID ${roomId} updated successfully`);
                  })
                  .catch((err) => {
                      console.error(`Error updating room with ID ${roomId}:`, err); 
                      alert(err.message);
                  });    
          });
      }
  }, [notAvailableRoomIds]);
  
  // Update room availability to 'yes' for the stored room IDs
  useEffect(() => {
      // Check if availableRoomIds is not empty
      if (minAvailableRoomIds.length > 0) {
          // Update room availability for each room ID in availableRoomIds
          minAvailableRoomIds.forEach(roomId => {
              axios.put(`http://localhost:6655/room/update/${roomId}`, { isAvailable: 'yes' })
                  .then((res) => {
                      console.log(`Room with ID ${roomId} updated successfully`);
                  })
                  .catch((err) => {
                      console.error(`Error updating room with ID ${roomId}:`, err); 
                      alert(err.message);
                  });    
          });
      }
  }, [minAvailableRoomIds]);
  
  // Update room availability to 'yes' for the stored room IDs
  useEffect(() => {
      // Check if availableRoomIds is not empty
      if (availableRoomIds.length > 0) {
          // Update room availability for each room ID in availableRoomIds
          availableRoomIds.forEach(roomId => {
              axios.put(`http://localhost:6655/room/update/${roomId}`, { isAvailable: 'yes' })
                  .then((res) => {
                      console.log(`Room with ID ${roomId} updated successfully`);
                  })
                  .catch((err) => {
                      console.error(`Error updating room with ID ${roomId}:`, err); 
                      alert(err.message);
                  });    
          });
      }
  }, [availableRoomIds]);
  
  
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
    <div>
        <div className="container-xxl bg-white p-0">
        
        <NavBar/>
        <div class="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(img/carousel-1.jpg)"}}>
            <div class="container-fluid page-header-inner py-5">
                <div class="container text-center pb-5">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Rooms</h1>
                    <nav aria-label="breadcrumb">
                    </nav>
                </div>
            </div>
        </div>

        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Our Rooms</h6>
                    <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Rooms</span></h1>
                </div>
                {room.map((singleRoom, index) => (
        <div className="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s" style={{height:'600px'}}key={index}>
    
        <div className="row g-0" >
            <div className="col-md-6 bg-dark d-flex align-items-center">
                <div className="p-5">
                    <h6 className="section-title text-start text-white text-uppercase mb-3">Room No: {singleRoom.roomNumber} - {singleRoom.roomType}</h6>
                    <p></p>
                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>{singleRoom.bedDetails}</small>
                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>{singleRoom.bathCount}</small>
                    <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                    <p className="text-white mb-2 mt-2">LKR{singleRoom.price}</p>
                    <p className="text-white mb-2">{singleRoom.description}</p>
                    <ul>
                        <li className='text-white' style={{listStyle:'none'}}>Maximum Capacity: Suitable for up to {singleRoom.capacity} guests.</li>
                    </ul>
                    <button className="btn btn-primary py-md-3 px-md-5 me-3" onClick={() => handleBookRoom(singleRoom._id)}>Book Now</button>
                </div>
            </div>
            <div className="col-md-6">
                <div className="position-relative">
                    <img className="img-fluid" style={{height:'500px'}} src={`http://localhost:6655/images/${singleRoom.image}`} alt=""/>
                </div>
            </div>
        </div>
    
</div>
))}

{/*import contact us and feedbacks*/}
<CoAndFe/>
       
    <Link to={'/rooms'}><a className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a></Link>

        </div>
    </div>
  )
}
