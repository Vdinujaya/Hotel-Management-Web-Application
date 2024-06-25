import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { notification } from "antd";
export default function AddCustomer() {

  const [txtFirstName, setFirstName] = useState('');
  const [txtLastName, setLastName] = useState('');
  const [txtEmail, setEmail] = useState('');
  const [txtPassword, setPassword] = useState('');
  const [txtPhoneNo, setPhoneNo] = useState('');
  const [txtAddress, setAddress] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();


  function sendData(e) {



    e.preventDefault();

    if (!txtFirstName || !txtEmail || !txtPassword) {
      notification.error({ message: 'Error', description: 'Please fill in all required fields.' });
      return;
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
        notification.success({message:"Success", description:"Customer added successfully"});
        console.log("Customer added successfully");
        navigate('/');
      })
      .catch((error) => {
        notification.error({message:"Error",description:`Error adding customer: ${error.message}`});
        console.error("Error adding customer", error);
      });
  }

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
};





  return (
    <div style={{marginTop:'160px'}}>
          <div className='container mt-5 py-1 px-4 shadow' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h2 className='text-center m-3'>Add Customer</h2>
            <form class="row g-3" onSubmit={sendData} style={{width:'50%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

              <div class="col-md-8">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="txtFirstName" onChange={(e) => {
                  setFirstName(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="txtLastName" onChange={(e) => {
                  setLastName(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="txtEmail" onChange={(e) => {
                  setEmail(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputPassword4" class="form-label">Password</label>
                <input type={showPassword ? "text" : "password"} class="form-control" id="txtPassword" onChange={(e) => {
                  setPassword(e.target.value);
                }} />
                <div style={{ paddingTop: '10px' }}>
                                    <input type='checkbox' className='' style={{ marginRight: '10px' }} onChange={handleCheckboxChange} />
                                    <label>Show password</label>
                                </div>
              </div>
              <div class="col-md-8">
                <label for="inputAddress" class="form-label">Phone No</label>
                <input type="text" class="form-control" id="txtPhoneNo" pattern="[0-9]{10}" onChange={(e) => {
                  setPhoneNo(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputAddress2" class="form-label">Address</label>
                <input type="text" class="form-control" id="txtAddress" onChange={(e) => {
                  setAddress(e.target.value);
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