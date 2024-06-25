import React, { useState, useEffect } from "react"
import axios from "axios";//HTTP client for making requests from the browser.
import { Link, useNavigate } from "react-router-dom";// component from React Router, which is used for navigation within a React application.
import { notification } from "antd";
export default function AddEmployee() {

  const [txtName, setName] = useState('');
  const [txtAge, setAge] = useState('');
  const [txtEmail, setEmail] = useState('');
  const [txtRole, setRole] = useState('');
  const [txtAddress, setAddress] = useState('');
  const [txtDescription, setDescription] = useState('');

  const navigate = useNavigate();


  function sendData(e) {



    e.preventDefault();

    if (!txtName || !txtAge || !txtEmail || !txtRole || !txtAddress || !txtDescription) {
      notification.error({message:"Error", description:'Please fill in all fields.'});
      return;
    }

    const employeeData = {
      name: txtName,
      age: txtAge,
      email: txtEmail,
      role: txtRole,
      address: txtAddress,
      description: txtDescription
    };

    axios.post("http://localhost:6655/employee/add", employeeData)
      .then(() => {
        notification.success({message:"Success", description:"Employee added successfully"});
        console.log("Employee added successfully");
        navigate('/SE');
      })
      .catch((error) => {
        notification.error({message:"Error", description:`Error adding employee: ${error.message}`});
        console.error("Error adding employee", error);
      });
  }

  return (
    <div style={{marginTop:'160px'}}>
          <div className='container-fluid mt-5 py-1 px-4 shadow' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h2 className='text-center m-3'>Add Employee</h2>
            <form class="row g-3" onSubmit={sendData} style={{width:'50%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

              <div class="col-md-8">
                <label for="firstName" class="form-label">Name</label>
                <input type="text" class="form-control" id="txtName" onChange={(e) => {
                  setName(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="lastName" class="form-label">Age</label>
                <input type="text" class="form-control" pattern="[0-9]*" id="txtAge" onChange={(e) => {
                  setAge(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="txtEmail" onChange={(e) => {
                  setEmail(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputPassword4" class="form-label">Role</label>
                <input type="text" class="form-control" id="txtRole" onChange={(e) => {
                  setRole(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputAddress" class="form-label">Description</label>
                <textarea type="text" class="form-control" id="txtDescription" onChange={(e) => {
                  setDescription(e.target.value);
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