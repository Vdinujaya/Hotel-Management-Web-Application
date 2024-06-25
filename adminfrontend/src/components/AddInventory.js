import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";
export default function AddInventory() {

  const [txtItemName, setItemName] = useState('');
  const [txtQuantity, setQuantity] = useState('');
  const [txtPrice, setPrice] = useState('');
  const [txtSupplier, setSupplier] = useState('');
  const [txtDescription, setDescription] = useState('');
  const navigate = useNavigate();


  function sendData(e) {



    e.preventDefault();
    if (!txtItemName || !txtQuantity || !txtPrice || !txtSupplier || !txtDescription) {
      alert('Please fill in all fields.');
      return;
    }

    const inventoryData = {
      itemName: txtItemName,
      Quantity: txtQuantity,
      price: txtPrice,
      Supplier: txtSupplier,
      description: txtDescription
    };
    const supplierData = {
      contactPerson: txtItemName,
      name: txtSupplier,
    };

    axios.post("http://localhost:6655/inventory/add", inventoryData)
      .then(() => {
        notification.success({message:'Success',description:"Inventory added successfully"});
        console.log("inventory added successfully");
        navigate('/SI');
      })
      .catch((error) => {
        notification.error({message:'Error',description:`Error adding inventory: ${error.message}`});
        console.error("Error adding inventory", error);
      });

      axios.post("http://localhost:6655/supplier/add", supplierData)
      .then(() => {
        console.log("supplier added successfully");
      })
      .catch((error) => {
        console.error("Error adding supplier", error);
      });
  }

  return (
    <div style={{marginTop:'160px'}}>
          <div className='container-fluid mt-5 py-1 px-4 shadow' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h2 className='text-center m-3'>Add Inventory</h2>
            <form class="row g-3" onSubmit={sendData} style={{width:'50%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

              <div class="col-md-8">
                <label for="firstName" class="form-label">Item Name</label>
                <input type="text" class="form-control" id="txtItemName" onChange={(e) => {
                  setItemName(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="lastName" class="form-label">Quantity</label>
                <input type="text" pattern="[0-9]*" class="form-control" id="txtQuantity" onChange={(e) => {
                  setQuantity(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputEmail4" class="form-label">Price</label>
                <input type="text" pattern="[0-9]*" class="form-control" id="txtPrice" onChange={(e) => {
                  setPrice(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputPassword4" class="form-label">Supplier</label>
                <input type="text" class="form-control" id="txtSupplier" onChange={(e) => {
                  setSupplier(e.target.value);
                }} />
              </div>
              <div class="col-md-8">
                <label for="inputAddress" class="form-label">Description</label>
                <textarea type="text" class="form-control" id="txtDescription" onChange={(e) => {
                  setDescription(e.target.value);
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