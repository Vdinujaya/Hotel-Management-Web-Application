import { notification } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const UpdateInventory = () => {

    const { id } = useParams();
    const [values, setValues] = useState({
        _id: id,
        itemName: '',
        description: '',
        Quantity: '',
        price: '',
        Supplier: ''
    });


    useEffect(() => {
        axios.get(`http://localhost:6655/inventory/get/${id}`)
            .then((res)=>{
              setValues(res.data.inventory);
              console.log(res.data);
            })
            .catch(err => {
                console.log(err);
                notification.error({ message: 'Error', description: 'Failed to fetch inventory data.' });
            });
    }, [id]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.itemName || !values.Quantity || !values.price || !values.Supplier || !values.description) {
          notification.error({ message: 'Error', description: 'Please fill in all fields.' });
          return;
      }
        axios.put(`http://localhost:6655/inventory/update/${id}`, values)
            .then(() => {
                notification.success({ message: 'Success', description: 'Inventory updated successfully.' });
                navigate('/SI');
            })
            .catch(err => {
                console.log(err);
                notification.error({ message: 'Error', description: 'Failed to update inventory.' });
            });
    };


  return (
    <div style={{marginTop:'160px'}}>
          <div className='container mt-5 py-1 px-4 shadow' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h2 className='text-center m-3'>Update Supplies</h2>
            <form class="row g-3" onSubmit={handleSubmit} style={{width:'50%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

              <div class="col-md-8">
                <label for="firstName" class="form-label">Item Name</label>
                <input type="text" class="form-control" id="txtItemName" value={values.itemName} onChange={e => setValues({ ...values, itemName: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="lastName" class="form-label">Quantity</label>
                <input type="text" class="form-control" pattern="[0-9]*" id="txtQuantity" value={values.Quantity} onChange={e => setValues({ ...values, Quantity: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="inputEmail4" class="form-label">Price</label>
                <input type="text" class="form-control" pattern="[0-9]*" id="txtPrice" value={values.price} onChange={e => setValues({ ...values, price: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="inputPassword4" class="form-label">Supplier</label>
                <input type="text" class="form-control" id="txtSupplier" value={values.Supplier} onChange={e => setValues({ ...values, Supplier: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="inputAddress" class="form-label">Description</label>
                <textarea type="text" class="form-control" id="txtDescription" value={values.description} onChange={e => setValues({ ...values, description: e.target.value })}/>
              </div>
              <div class="col-12">
                <button type="submit" className="btn btn-primary mb-3" id="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default UpdateInventory