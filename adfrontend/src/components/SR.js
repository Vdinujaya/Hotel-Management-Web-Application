
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CoAndFe from './CoAndFe';
import { AuthService } from './AuthService';
import PopupMessage from './PopupMessage';


export default function SR() {
    const [room, setRooms] = useState([]);
    const [allRoom, setAllRooms] = useState([]);
    const [availableRoomIds, setAvailableRoomIds] = useState([]);
    const [txtGetInTime, setGetInTime] = useState('');
    const [txtGetOutTime, setGetOutTime] = useState('');
    const [getFinalOutput, setFinalOutput] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    
    const handleBookRoom = (id,txtGetInTime,txtGetOutTime) => {
        if (AuthService.isLoggedIn()) {
            const user = AuthService.getUser();
            if (user && user.customerId) {
                const customerId = user.customerId;
                window.location.href = `/bookRoom/${customerId}/${id}/${txtGetInTime}/${txtGetOutTime}`;
            } else {
                console.error("User data does not contain customerId");
            }
        } else {
            // If user is not logged in, redirect to login page
            setPopupMessage('Please Login to continue');
            setShowPopup(true);
            setTimeout(() => {
                window.location.href = '/login'; // Redirect after a delay
              }, 2000);
        }
    };

    function sendData(e) {
        e.preventDefault();

        var currentDate = new Date();

        // Get the current date in the format YYYY-MM-DD
        var formattedDate = currentDate.toISOString().split('T')[0];

        console.log(formattedDate);
        
        if (!txtGetInTime || !txtGetOutTime) {
            setPopupMessage('Please enter both check-in and check-out dates.');
            setShowPopup(true);
            return;
          }

        if (txtGetInTime > txtGetOutTime) {
            setPopupMessage('Please enter valid dates.');
            setShowPopup(true);
            return;
          }

        if (txtGetInTime < formattedDate ||  txtGetOutTime < formattedDate) {
            setPopupMessage('Please enter valid dates.');
            setShowPopup(true);
            return;
          }
        
        console.log(txtGetInTime);
        console.log(txtGetOutTime);
    
        axios.get('http://localhost:6655/booking/')
            .then((res) => {
                const allRoomIds = [...new Set(res.data.map(booking => booking.roomId))];

            // Filter available room IDs based on search date range and overlapping bookings
            const availableRoomIds = allRoomIds.filter(roomId => {
                // Get bookings for the current room
                const bookingsForRoom = res.data.filter(booking => booking.roomId === roomId);
                
                // Check if any booking overlaps with the search date range
                const overlappingBooking = bookingsForRoom.some(booking => 
                    (booking.checkIn <= txtGetOutTime && booking.checkOut >= txtGetInTime) ||
                    (booking.checkOut >= txtGetInTime && booking.checkOut <= txtGetOutTime) ||
                    (booking.checkIn >= txtGetInTime && booking.checkIn <= txtGetOutTime)
                );
                
                // Return true if there are no overlapping bookings
                return !overlappingBooking;
            });
                const roomIds = availableRoomIds;
                console.log("Available Room IDs:", availableRoomIds);
                setAvailableRoomIds(availableRoomIds); // Set available room IDs here
    
                // Clear existing data before setting new data
                setFinalOutput([]);
    
                // Fetch details for each room
                roomIds.forEach(roomId => {
                    axios.get(`http://localhost:6655/room/get/${roomId}`)
                        .then((res) => {
                            console.log("Room data av:", res.data.room);
                            setFinalOutput(prevState => [...prevState, res.data.room]);
                            // Handle data for each room as needed
                        })
                        .catch((err) => {
                            console.error(`Error fetching room ${roomId}:`, err);
                            alert(err.message);
                        });
                });
    
                // Fetch all rooms
                axios.get('http://localhost:6655/room/')
                    .then((res) => {
                        console.log("Rooms data:", res.data);
                        setAllRooms(res.data);
                        // Filter out rooms that are not booked
                        const notBookedRooms = res.data.filter(room => !allRoomIds.includes(room._id));
                        const roomIdsNotBooked = notBookedRooms.map(room => room._id);
                        console.log("Rooms not booked details:", notBookedRooms);
                        console.log("Rooms not booked yet:", roomIdsNotBooked);
                        setRooms(notBookedRooms);
                    })
                    .catch((err) => {
                        console.error("Error fetching rooms:", err);
                        alert(err.message);
                    });
            })
            .catch((err) => {
                console.error("Error fetching bookings:", err);
                alert(err.message);
            });
    }
    

  return (
    <div>
       <PopupMessage show={showPopup} message={popupMessage} onHide={() => setShowPopup(false)} />
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
                    <h1 className="mb-5">Find Our Availiable <span className="text-primary text-uppercase">Rooms</span></h1>
                </div>
                <div className="row justify-content-center">
                <div className="col-lg-5 border rounded p-1">
    <div className="border rounded text-center p-1" >
        <div className="bg-white rounded text-center p-5">
            
            <div className="mx-auto" style={{ maxWidth: '800px' }}>
                <form onSubmit={sendData} className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="txtGetInTime" className="text-primary w-100 py-3 ps-4 pe-5 "><h6 className="text-primary ">Check In Date</h6></label>
                        <input className="form-control py-3 ps-4 pe-5" type="date" id="txtGetInTime" onChange={(e) => {
                            setGetInTime(e.target.value);
                        }} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="txtGetOutTime" className="text-primary w-100 py-3 ps-4 pe-5"><h6 className="text-primary ">Check Out Date</h6></label>
                        <input className="form-control py-3 ps-4 pe-5" type="date" id="txtGetOutTime" onChange={(e) => {
                            setGetOutTime(e.target.value);
                        }} />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary py-2 px-3 top-0 end-0 mt-2 me-2">Search</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

        </div>
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
                    <button className="btn btn-primary py-md-3 px-md-5 me-3" onClick={() => handleBookRoom(singleRoom._id,txtGetInTime,txtGetOutTime)}>Book Now</button>
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

{getFinalOutput.map((singleRoom, index) => (
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
                    <button className="btn btn-primary py-md-3 px-md-5 me-3" onClick={() => handleBookRoom(singleRoom._id,txtGetInTime,txtGetOutTime)}>Book Now</button>
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
  )
}
