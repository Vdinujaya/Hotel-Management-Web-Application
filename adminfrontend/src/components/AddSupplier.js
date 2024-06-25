import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";
export default function AddSupplier() {

  const [txtName, setName] = useState('');
  const [txtContactPerson, setContactPerson] = useState('');
  const [txtEmail, setEmail] = useState('');
  const [txtPhoneNo, setPhoneNo] = useState('');
  const [txtAddress, setAddress] = useState('');
  const navigate = useNavigate();


  function sendData(e) {



    e.preventDefault();
    if (!txtName || !txtContactPerson || !txtEmail || !txtPhoneNo || !txtAddress) {
      notification.error({ message: 'Error', description: 'Please fill in all fields.' });
      return;
    }

    const supplierData = {
      name: txtName,
      contactPerson: txtContactPerson,
      email: txtEmail,
      contactNo: txtPhoneNo,
      address: txtAddress,
    };

    axios.post("http://localhost:6655/supplier/add", supplierData)
      .then(() => {
        notification.success({message:'Success',description:"Supplier added successfully"});
        console.log("supplier added successfully");
        navigate('/SS');
      })
      .catch((error) => {
        notification.error({message:'Success',description:`Error adding Supplier: ${error.message}`});
        console.error("Error adding supplier", error);
      });
  }







  return (
    <div style={{marginTop:'160px'}}>
          <div className='container-fluid mt-5 py-1 px-4 shadow' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h2 className='text-center m-3'>Add Supplier</h2>
            <form class="row g-3" onSubmit={sendData} style={{width:'50%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

              <div class="col-md-8">
                <label for="firstName" class="form-label">Name</label>
                <input type="text" class="form-control" id="txtName" onChange={(e) => {
                  setName(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="lastName" class="form-label">Contract</label>
                <input type="text" class="form-control" id="txtContactPerson" onChange={(e) => {
                  setContactPerson(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="txtEmail" onChange={(e) => {
                  setEmail(e.target.value);
                }} />
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