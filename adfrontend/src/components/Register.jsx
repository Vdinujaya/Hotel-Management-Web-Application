import React, { useState } from 'react'
import HomeFeedback from './HomeFeedback'
import Footer from './Footer'
import NavBar from './NavBar'
import axios from 'axios'
import PopupMessage from './PopupMessage';

const Register = () => {


    const [showPassword, setShowPassword] = useState(false);
    const [txtFirstName, setFirstName] = useState('');
  const [txtLastName, setLastName] = useState('');
  const [txtEmail, setEmail] = useState('');
  const [txtPassword, setPassword] = useState('');
  const [txtPhoneNo, setPhoneNo] = useState('');
  const [txtAddress, setAddress] = useState('');
  const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');


  function sendData(e) {



    e.preventDefault();

    if (!txtFirstName || !txtLastName || !txtEmail || !txtPassword || !txtPhoneNo || !txtAddress) {
      // If any field is empty, display an error message
      alert("Please fill in all required fields.");
      return; // Prevent further execution of the function
  }

    const customerData = {
      firstName: txtFirstName,
      lastName: txtLastName,
      email: txtEmail,
      phone: txtPhoneNo,
      address: txtAddress,
      password: txtPassword
    };

    axios.post("http://localhost:6655/customer/add", customerData)
      .then(() => {
        setPopupMessage('Successfully Registerd');
        setShowPopup(true);
        
        setTimeout(() => {
          window.location.href = "/login"; // Redirect after a delay
        }, 1000);
      })
      .catch((error) => {
        alert(`Error adding customer: ${error.message}`);
        console.error("Error adding customer", error);
      })
  }

  return (
    <div>
      <PopupMessage show={showPopup} message={popupMessage} onHide={() => setShowPopup(false)} />
      <div className="container-xxl bg-white p-0">
        <NavBar />
        <div class="container-fluid page-header mb-5 p-0" style={{ backgroundImage: "url(http://localhost:6655/images/carousel-1.jpg)" }}>
          <div class="container-fluid page-header-inner py-5">
            <div class="container text-center pb-5">
              <h1 class="display-3 text-white mb-3 animated slideInDown">Register</h1>
              <nav aria-label="breadcrumb">
              </nav>
            </div>
          </div>
        </div>


        <div class="container-xxl py-5">
          <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 class="section-title text-center text-primary text-uppercase mb-5">Register</h6>
            </div>
            <div class="row g-5">
              <div class="col-lg-12">
                <div class="wow fadeInUp" data-wow-delay="0.2s">
                  <form onSubmit={sendData}>
                    <div class="row g-3">
                      <div class="col-md-6">
                        <div class="form-floating">
                          <input type="text" class="form-control" id="txtFirstName" onChange={(e) => {
                  setFirstName(e.target.value);
                }} placeholder="Your Name"  />
                          <label for="text">First Name</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating">
                          <input type="text" class="form-control" id="txtLastName" onChange={(e) => {
                  setLastName(e.target.value);
                }} placeholder="Your Name"  />
                          <label for="text">Last Name</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating">
                          <input type="email" class="form-control" id="txtEmail" onChange={(e) => {
                  setEmail(e.target.value);
                }} placeholder="Your Name"  />
                          <label for="email">Email</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating">
                          <input type="text" pattern='[0-9]{10}' class="form-control" id="txtPhoneNo" onChange={(e) => {
                  setPhoneNo(e.target.value);
                }} placeholder="Your Name"  />
                          <label for="number">Mobile</label>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-floating">
                          <input type="text" class="form-control" id="txtAddress" onChange={(e) => {
                  setAddress(e.target.value);
                }} placeholder="Your Name"  />
                          <label for="text">Address</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating">
                          <input type={showPassword ? "text" : "password"} class="form-control" id="txtPassword" onChange={(e) => {
                  setPassword(e.target.value);
                }} placeholder="Your Email" 
                          />
                          <label for="password" >Password</label>
                        </div>
                      </div>
                      <div className='col-6' style={{textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <input type='checkbox' id="showPassword" onChange={() => setShowPassword(!showPassword)}  style={{marginRight:'20px'}}></input>
                        <label for="showPassword">Show Password</label>
                      </div>
                      <div class="col-12">
                        <button class="btn btn-primary w-100 py-3" type="submit">Register</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>













        <HomeFeedback />
        <Footer />
      </div>
    </div>
  )
}

export default Register