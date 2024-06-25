import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthService } from "./AuthService";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CoAndFe from './CoAndFe'
import NavBar from './NavBar';
import PopupMessage from './PopupMessage';
export default function BookRoom() {

    const { cId } = useParams();
    const { rId } = useParams();
    const { cIn } = useParams();
    const { cOt } = useParams();
    const [room, setRoom] = useState({});
    const [customer, setCustomer] = useState({});
    const [txtEmail, setEmail] = useState('');
    const [txtRoomNo, setRoomNo] = useState('');
    const [txtInDate, setInDate] = useState('');
    const [txtOutDate, setOutDate] = useState('');
    const [txtSReq, setSReq] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    useEffect(() => {
        const getRoom = async () => {
            try {
                const res = await axios.get(`http://localhost:6655/room/get/${rId}`);
                setRoom(res.data.room);
            } catch (error) {
                alert(error.message);
            }
        };

        const getCustomer = async () => {
            try {
                const res = await axios.get(`http://localhost:6655/customer/get/${cId}`);
                setCustomer(res.data.customer);
            } catch (error) {
                alert(error.message);
            }
        };

        getRoom();
        getCustomer();
    }, [cId, rId]);


    const sendData = async (e) => {
        e.preventDefault();

        const bookingData = {
            roomId: rId,
            roomNo: room.roomNumber,
            customerId: cId,
            cName: customer.firstName,
            cEmail: customer.email,
            checkIn: cIn,
            checkOut: cOt,
            sReq: txtSReq,
            boookTime: new Date().toISOString()
        };

        try {
            await axios.post("http://localhost:6655/booking/add", bookingData);
            setPopupMessage('Booking Successfull');
            setShowPopup(true);
            // Clear form fields after successful booking
            setEmail('');
            setRoomNo('');
            setInDate('');
            setOutDate('');
            setSReq('');
            setTimeout(() => {
                window.location.href = '/rooms'; // Redirect after a delay
              },1000);
        } catch (error) {
            setPopupMessage('Booking not added');
            setShowPopup(true);
        }
    };

    return (
        <div>
            <PopupMessage show={showPopup} message={popupMessage} onHide={() => setShowPopup(false)} />
            <div className="container-xxl bg-white p-0">

                <NavBar />

                <div class="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(http://localhost:6655/images/carousel-1.jpg)' }}>
                    <div class="container-fluid page-header-inner py-5">
                        <div class="container text-center pb-5">
                            <h1 class="display-3 text-white mb-3 animated slideInDown">Booking</h1>
                            <nav aria-label="breadcrumb">
                            </nav>
                        </div>
                    </div>
                </div>



                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 class="section-title text-center text-primary text-uppercase">Room Booking</h6>
                            <h1 class="mb-5">Book A <span class="text-primary text-uppercase">Luxury Room</span></h1>
                        </div>
                        <div class="row g-5">
                            <div class="col-lg-6">
                                <div className="row g-3">
                                    <div className="col-6 text-end">
                                        <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="http://localhost:6655/images/ab-1.jpg" alt="ab1" style={{ marginTop: '25%' }} />
                                    </div>
                                    <div className="col-6 text-start">
                                        <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="http://localhost:6655/images/ab-2.jpg" alt="ab2" />
                                    </div>
                                    <div className="col-6 text-end">
                                        <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="http://localhost:6655/images/ab-3.jpg" alt="ab3" />
                                    </div>
                                    <div className="col-6 text-start">
                                        <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="http://localhost:6655/images/ab-4.jpg" alt="ab4" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="wow fadeInUp" data-wow-delay="0.2s">
                                    <form onSubmit={sendData}>
                                        <div class="row g-3">
                                            <div class="col-md-6">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="txtEmail" placeholder="Your Name" value={customer.email} disabled onChange={(e) => {
                                                        setEmail(e.target.value);
                                                    }} />
                                                    <label for="name">Your Email</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="txtRoomNo" placeholder="Your Email" value={room.roomNumber} disabled onChange={(e) => {
                                                        setRoomNo(e.target.value);
                                                    }} />
                                                    <label for="email" >Room Number</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-floating date" id="date3" data-target-input="nearest">
                                                    <input type="date" class="form-control datetimepicker-input" id="txtInDate" value={cIn} placeholder="Check In" disabled data-target="#date3" data-toggle="datetimepicker" onChange={(e) => {
                                                        setInDate(e.target.value);
                                                    }} />
                                                    <label for="checkin">Check In</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-floating date" id="date4" data-target-input="nearest">
                                                    <input type="date" class="form-control datetimepicker-input" value={cOt} id="txtOutDate" placeholder="Check Out" disabled data-target="#date4" data-toggle="datetimepicker" onChange={(e) => {
                                                        setOutDate(e.target.value);
                                                    }} />
                                                    <label for="checkout">Check Out</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <textarea class="form-control" placeholder="Special Request" id="txtSReq" style={{ height: '100px' }} onChange={(e) => {
                                                        setSReq(e.target.value);
                                                    }} ></textarea>
                                                    <label for="message">Special Request</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <button class="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <CoAndFe />
                <Link to={'/'}><a className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a></Link>

            </div>
        </div>
    )
}
