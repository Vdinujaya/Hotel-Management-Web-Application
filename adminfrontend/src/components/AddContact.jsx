import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";

const AddContact = () => {

  const navigate = useNavigate();

    const [txtName, setName] = useState('');
    const [txtEmail, setEmail] = useState('');
    const [txtSubject, setSubject] = useState('');
    const [txtMessage, setMessage] = useState('');

  function sendData(e) {


    

    e.preventDefault();

    if (!txtName || !txtEmail || !txtSubject || !txtMessage) {
      notification.error({ message: "Error", description: "Please fill in all required fields." });
      return;
  }

    const contactData = {
      name: txtName,
      email: txtEmail,
      subject: txtSubject,
      message: txtMessage,
    };

    axios.post("http://localhost:6655/contact/add", contactData)
      .then(() => {
        notification.success({message:"Success", description:"Contact added successfully"});
        console.log("Contact added successfully");
        navigate('/SCU');
      })
      .catch((error) => {
        notification.error({message:"Error", description:`Error adding contact: ${error.message}`});
        console.error("Error adding contact", error);
      });
  }

  return (
    <div style={{marginTop:'160px'}}>
          <div className='container mt-5 py-1 px-4 shadow' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h2 className='text-center mb-3 mt-3'>Add Contact</h2>
            <form class="row g-3" onSubmit={sendData} style={{width:'50%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

              <div class="col-md-8">
                <label for="firstName" class="form-label">Name</label>
                <input type="text" class="form-control" id="txtName" onChange={(e) => {
                  setName(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="txtEmail" onChange={(e) => {
                  setEmail(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputAddress" class="form-label">Subject</label>
                <input type="text" class="form-control" id="txtSubject" onChange={(e) => {
                  setSubject(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputAddress2" class="form-label">Message</label>
                <input type="text" class="form-control" id="txtMessage" onChange={(e) => {
                  setMessage(e.target.value);
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

export default AddContact