import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { message, notification } from "antd";
export default function AddRoom() {

  const [txtroomImage, setroomImage] = useState('');
  const [txtroomNumber, setroomNumber] = useState('');
  const [txtroomType, setroomType] = useState('');
  const [txtbedDetails, setbedDetails] = useState('');
  const [txtbathCount, setbathCount] = useState('');
  const [txtprice, setprice] = useState('');
  const [txtcapacity, setcapacity] = useState('');
  const [txtdescription, setdescription] = useState('');
  const [txtisAvailable, setisAvailable] = useState('');
  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();
    if (!txtroomImage || !txtroomNumber || !txtroomType || !txtprice || !txtcapacity || !txtdescription || !txtisAvailable) {
      notification.error({ message: 'Error', description: 'Please fill in all fields and select an image.' });
      return;
    }
    
    const formData = new FormData();

      formData.append('image', txtroomImage);
      formData.append('roomNumber', txtroomNumber);
      formData.append('roomType', txtroomType);
      formData.append('bedDetails', txtbedDetails);
      formData.append('bathCount', txtbathCount);
      formData.append('price', txtprice);
      formData.append('capacity', txtcapacity);
      formData.append('description', txtdescription);
      formData.append('isAvailable', txtisAvailable);
      


    axios.post("http://localhost:6655/room/add", formData)
      .then(() => {
        notification.success({message:'Success',description:"Room added successfully"});
        console.log("room added successfully");
        navigate('/SR');
      })
      .catch((error) => {
        notification.error({message:'Success',description:`Error adding room: ${error.message}`});
        console.error("Error adding room", error);
      });
  }

  return (
    <div style={{marginTop:'160px'}}>
          <div className='container-fluid mt-5 py-1 px-4 shadow' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h2 className='text-center m-3'>Add Room</h2>
            <form class="row g-3" onSubmit={sendData} style={{width:'50%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

              <div class="col-md-8">
                <label for="firstName" class="form-label">Room No</label>
                <input type="text" class="form-control" pattern="[0-9]*" id="txtroomNumber" onChange={(e) => {
                  setroomNumber(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="lastName" class="form-label">Room Type</label>
                <input type="text" class="form-control" id="txtroomType" onChange={(e) => {
                  setroomType(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="lastName" class="form-label">Bed Details</label>
                <input type="text" class="form-control" id="txtbedDetails" onChange={(e) => {
                  setbedDetails(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="lastName" class="form-label">Bathrooms</label>
                <input type="text" class="form-control" pattern="[0-9]*" id="txtbathCount" onChange={(e) => {
                  setbathCount(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputEmail4" class="form-label">Price</label>
                <input type="text" class="form-control" pattern="[0-9]*" id="txtprice" onChange={(e) => {
                  setprice(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputPassword4" class="form-label">Capacity</label>
                <input type="text" class="form-control" pattern="[0-9]*" id="txtcapacity" onChange={(e) => {
                  setcapacity(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputAddress" class="form-label">Description</label>
                <textarea type="text" class="form-control" id="txtdescription" onChange={(e) => {
                  setdescription(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputAddress2" class="form-label">Is Avaliable</label>
                <select class="form-control" id="txtisAvailable" onChange={(e) => {
                  setisAvailable(e.target.value);
                }}>
                <option value="">Select Availability</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </div>
              <div class="col-md-8">
                <label for="formFile" class="form-label">Default file input example</label>
                <input class="form-control" type="file" id="txtroomImage" onChange={(e) => {
                    const selectedFile = e.target.files[0];
                    setroomImage(selectedFile);
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