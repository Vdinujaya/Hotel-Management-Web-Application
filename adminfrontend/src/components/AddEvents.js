import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";
export default function AddEvent() {

  const [txtTitle, setTitle] = useState('');
  const [txtDescription, setDescription] = useState('');
  const [txtstartDateTime, setstartDateTime] = useState('');
  const [txtEndDateTime, setEndDateTime] = useState('');
  const [txtLocation, setLocation] = useState('');
  const [txtOrganizer, setOrganizer] = useState('');
  const [txtCapacity, setCapacity] = useState('');
  const [txtPrice, setPrice] = useState('');

  const navigate = useNavigate();

  function sendData(e) {



    e.preventDefault();
    if (!txtTitle || !txtDescription || !txtstartDateTime || !txtEndDateTime || !txtLocation || !txtOrganizer || !txtCapacity) {
      notification.error({ message: 'Error', description: 'Please fill in all fields.' });
      return;
    }

    if (new Date(txtEndDateTime) < new Date(txtstartDateTime)) {
      notification.error({ message: 'Error', description: 'End date cannot be before start date.' });
      return;
    }

    const customerData = {
      title: txtTitle,
      description: txtDescription,
      startDateTime: new Date(txtstartDateTime).toString(),
      endDateTime: new Date(txtEndDateTime).toString(),
      location:  txtLocation,
      organizer:  txtOrganizer,
      capacity: txtCapacity,
      price: txtPrice
    };

    axios.post("http://localhost:6655/event/add", customerData)
      .then(() => {
        notification.success({message:'Success',description:"Event added successfully"});
        console.log("event added successfully");
        navigate('/SEE');
      })
      .catch((error) => {
        notification.error({message:'Error',description:`Error adding event: ${error.message}`});
        console.error("Error adding event", error);
      });
  }

  return (
    <div style={{marginTop:'160px'}}>
          <div className='container-fluid mt-5 py-1 px-4 shadow' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h2 className='text-center m-3'>Add Event</h2>
            <form class="row g-3" onSubmit={sendData} style={{width:'50%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

              <div class="col-md-8">
                <label for="firstName" class="form-label">Title</label>
                <input type="text" class="form-control" id="txttitle" onChange={(e) => {
                  setTitle(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="lastName" class="form-label">Description</label>
                <textarea type="text" class="form-control" id="txtDescription" onChange={(e) => {
                  setDescription(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputEmail4" class="form-label">Starting Date</label>
                <input type="date" class="form-control" id="txtstartDateTime" onChange={(e) => {
                  setstartDateTime(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputPassword4" class="form-label">Ending Date</label>
                <input type="date" class="form-control" id="txtEndDateTime" onChange={(e) => {
              const selectedCheckOutDate = new Date(e.target.value);
              const selectedCheckInDate = new Date(txtstartDateTime);
              if (selectedCheckOutDate < selectedCheckInDate) {
                // If selected check-out date is before check-in date, reset to check-in date
                notification.error({message:"Error", description:"Ending date cannot be before Starting date"});
                setEndDateTime(txtstartDateTime);
              } else {
                // Update check-out date state
                setEndDateTime(e.target.value);
              }
            }} />
              </div>
              <div class="col-md-8">
                <label for="inputAddress" class="form-label">Location</label>
                <input type="text" class="form-control" id="txtLocation" onChange={(e) => {
                  setLocation(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputAddress2" class="form-label">Organizer</label>
                <input type="text" class="form-control" id="txtOrganizer" onChange={(e) => {
                  setOrganizer(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputAddress2" class="form-label">Capacity</label>
                <input type="text" pattern="[0-9]*" class="form-control" id="txtCapacity" onChange={(e) => {
                  setCapacity(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputAddress2" class="form-label">Price</label>
                <input type="text" pattern="[0-9]*" class="form-control" id="txtPrice" onChange={(e) => {
                  setPrice(e.target.value);
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