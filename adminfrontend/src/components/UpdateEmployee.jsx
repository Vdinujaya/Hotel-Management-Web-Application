import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { notification } from 'antd'


const UpdateEmployee = () => {
  
  const { id } = useParams();
  const [values, setValues] = useState({
    _id: id,
    name: '',
    age: '',
    email: '',
    role: '',
    description: '',
    address: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:6655/employee/get/${id}`)
        .then((res)=>{
          setValues(res.data.employee);
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

    if (!values.name || !values.age || !values.email || !values.role || !values.description || !values.address) {
      notification.error({ message: 'Error', description: 'Please fill in all required fields.' });
      return;
  }
    
    axios.put(`http://localhost:6655/employee/update/${id}`, values)
      .then(() => {
        notification.success({ message: 'Success', description: 'Employee updated successfully.' });
        navigate('/SE');
      })
      .catch(err => {
        console.log(err);
        notification.error({ message: 'Error', description: 'Failed to update employee.' });
      });
  };


  return (
    <div style={{marginTop:'160px'}}>
          <div className='container mt-5 py-1 px-4 shadow'style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h2 className='text-center m-3'>Update Employee</h2>
            <form className="row g-3" onSubmit={handleSubmit} style={{width:'50%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

              <div className="col-md-8">
                <label for="firstName" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" value={values.name} onChange={e => setValues({...values, name: e.target.value})}/>
              </div>
              <div className="col-md-8">
                <label for="lastName" className="form-label">Age</label>
                <input type="text" className="form-control" id="txtAge" pattern="[0-9]*" value={values.age} onChange={e => setValues({...values, age: e.target.value})}/>
              </div>
              <div className="col-md-8">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="txtEmail" value={values.email} onChange={e => setValues({...values, email: e.target.value})}/>
              </div>
              <div className="col-md-8">
                <label for="inputPassword4" className="form-label">Role</label>
                <input type="text"  className="form-control" id="txtRole" value={values.role} onChange={e => setValues({...values, role: e.target.value})}/>
              </div>
              <div className="col-md-8">
                <label for="inputAddress" className="form-label">Description</label>
                <textarea type="text" className="form-control" id="txtDescription" value={values.description} onChange={e => setValues({...values, description: e.target.value})}/>
              </div>
              <div className="col-md-8">
                <label for="inputAddress2" className="form-label">Address</label>
                <input type="text" className="form-control" id="txtAddress" value={values.address} onChange={e => setValues({...values, address: e.target.value})}/>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary mb-3" id="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default UpdateEmployee