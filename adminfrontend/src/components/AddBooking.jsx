import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";

const AddBooking = () => {

  const [txtRoomNo, setRoomNo] = useState('');
  const [txtEmail, setEmail] = useState('');
  const [txtName, setName] = useState('');
  const [txtCheckIn, setCheckIn] = useState('');
  const [txtCheckOut, setCheckOut] = useState('');
  const [txtRequest, setRequest] = useState('');
  const [txtBookTime, setBookTime] = useState('');

  const navigate = useNavigate();


  function sendData(e) {



    e.preventDefault();

    if (!txtRoomNo || !txtEmail || !txtCheckIn || !txtCheckOut || !txtName) {
      notification.error({ message: "Error", description: "Please fill in all required fields." });
      return;
    }

    const bookingData = {
      roomNo: txtRoomNo,
      cName: txtName,
      cEmail: txtEmail,
      checkIn: txtCheckIn,
      checkOut: txtCheckOut,
      sReq: txtRequest,
      bookTime: txtBookTime
    };

    axios.post("http://localhost:6655/booking/add", bookingData)
      .then(() => {
        notification.success({message:"Success", description:"Booking added successfully"});
        console.log("Booking added successfully");
      })
      .catch((error) => {
        notification.error({message:"Error", description:`Error adding booking: ${error.message}`});
        console.error("Error adding booking", error);
      });

      navigate('/SB');

  }

  return (
    <div style={{ marginTop: '160px' }}>
      <div className='container mt-5 py-1 px-4 shadow' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h2 className='text-center mb-3 mt-3'>Add Booking</h2>
        <form class="row g-3" style={{width:'50%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} onSubmit={sendData}>

          <div class="col-md-8">
            <label for="firstName" class="form-label">Room No</label>
            <input type="text" class="form-control" id="txtRoomNo" pattern="[0-9]*" onChange={(e) => {
              setRoomNo(e.target.value);
            }} />
          </div>
          <div class="col-md-8">
            <label for="lastName" class="form-label">Customer Name</label>
            <input type="text" class="form-control" id="txtName" onChange={(e) => {
              setName(e.target.value);
            }} />
          </div>
          <div class="col-md-8">
            <label for="lastName" class="form-label">Customer Email</label>
            <input type="email" class="form-control" id="txtEmail" onChange={(e) => {
              setEmail(e.target.value);
            }} />
          </div>
          <div class="col-md-8">
            <label for="inputEmail4" class="form-label">Check In</label>
            <input type="date" class="form-control" id="txtCheckIn" onChange={(e) => {
              setCheckIn(e.target.value);
            }} />
          </div>
          <div class="col-md-8">
            <label for="inputEmail4" class="form-label">Check Out</label>
            <input type="date" class="form-control" id="txtCheckOut" onChange={(e) => {
              const selectedCheckOutDate = new Date(e.target.value);
              const selectedCheckInDate = new Date(txtCheckIn);
              if (selectedCheckOutDate < selectedCheckInDate) {
                // If selected check-out date is before check-in date, reset to check-in date
                notification.error({message:"Error", description:"Check-out date cannot be before check-in date"});
                setCheckOut(txtCheckIn);
              } else {
                // Update check-out date state
                setCheckOut(e.target.value);
              }
            }} />
          </div>
          <div class="col-md-8">
            <label for="inputPassword4" class="form-label">Special Request</label>
            <textarea type="text" className="form-control mb-3" id="txtRequest" onChange={(e) => {
              setRequest(e.target.value);
            }} />
          </div>
          <div class="col-12">
            <button type="submit" className="btn btn-primary mb-3" id="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddBooking