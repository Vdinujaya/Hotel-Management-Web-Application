import { notification } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const UpdateSupplier = () => {

    const { id } = useParams();
    const [values, setValues] = useState({
        _id: id,
        name: '',
        contactPerson: '',
        email: '',
        contactNo: '',
        address: ''
    });


    useEffect(() => {
      axios.get(`http://localhost:6655/supplier/get/${id}`)
          .then((res)=>{
            setValues(res.data.supplier);
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
        if (!values.name || !values.contactPerson || !values.email || !values.contactNo || !values.address) {
          notification.error({ message: 'Error', description: 'Please fill in all fields.' });
          return;
      }
        axios.put(`http://localhost:6655/supplier/update/${id}`, values)
            .then(() => {
                notification.success({ message: 'Success', description: 'Supplier updated successfully.' });
                navigate('/SS');
            })
            .catch(err => {
                console.log(err);
                notification.error({ message: 'Error', description: 'Failed to update supplier.' });
            });
    };




  return (
    <div style={{marginTop:'160px'}}>
          <div className='container mt-5 py-1 px-4 shadow' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h2 className='text-center m-3'>Update Supplier</h2>
            <form class="row g-3" onSubmit={handleSubmit} style={{width:'50%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

              <div class="col-md-8">
                <label for="firstName" class="form-label">Name</label>
                <input type="text" class="form-control" id="txtName"value={values.name} onChange={e => setValues({ ...values, name: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="lastName" class="form-label">Contract</label>
                <input type="text" class="form-control" id="txtContactPerson" value={values.contactPerson} onChange={e => setValues({ ...values, contactPerson: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="txtEmail" value={values.email} onChange={e => setValues({ ...values, email: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="inputAddress" class="form-label">Phone No</label>
                <input type="text" class="form-control" id="txtPhoneNo" pattern="[0-9]{10}" value={values.contactNo} onChange={e => setValues({ ...values, contactNo: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="inputAddress2" class="form-label">Address</label>
                <input type="text" class="form-control" id="txtAddress" value={values.address} onChange={e => setValues({ ...values, address: e.target.value })}/>
              </div>
              <div class="col-12">
                <button type="submit" className="btn btn-primary mb-3" id="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default UpdateSupplier