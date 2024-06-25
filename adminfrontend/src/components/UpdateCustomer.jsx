import { notification } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const UpdateCustomer = () => {

    const { id } = useParams();
    const [values, setValues] = useState({
        _id: id,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        address: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:6655/customer/get/${id}`)
            .then((res)=>{
              setValues(res.data.customer);
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
        if (!values.firstName || !values.lastName || !values.email || !values.phone || !values.password || !values.address) {
            notification.error({ message: 'Error', description: 'Please fill in all required fields.' });
            return;
        }
        axios.put(`http://localhost:6655/customer/update/${id}`, values)
            .then(() => {
                notification.success({ message: 'Success', description: 'Customer updated successfully.' });
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                notification.error({ message: 'Error', description: 'Failed to update customer.' });
            });
    };


    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div style={{marginTop:'160px'}}>
                    <div className='container mt-5 py-1 px-4 shadow' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <h2 className='text-center m-3'>Update Customer</h2>
                        <form class="row g-3" onSubmit={handleSubmit} style={{width:'50%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

                            <div class="col-md-8">
                                <label for="firstName" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="txtFirstName" value={values.firstName} onChange={e => setValues({ ...values, firstName: e.target.value })} />
                            </div>
                            <div class="col-md-8">
                                <label for="lastName" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="txtLastName" value={values.lastName} onChange={e => setValues({ ...values, lastName: e.target.value })} />
                            </div>
                            <div class="col-md-8">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control" id="txtEmail" value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} />
                            </div>
                            <div class="col-md-8">
                                <label for="inputPassword4" class="form-label">Password</label>
                                <input type={showPassword ? "text" : "password"} class="form-control" id="txtPassword" value={values.password} onChange={e => setValues({ ...values, password: e.target.value })} />
                                <div style={{ paddingTop: '10px' }}>
                                    <input type='checkbox' className='' style={{ marginRight: '10px' }} onChange={handleCheckboxChange} />
                                    <label>Show password</label>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <label for="inputAddress" class="form-label">Phone No</label>
                                <input type="text" class="form-control" id="txtPhoneNo" pattern="[0-9]{10}" value={values.phone} onChange={e => setValues({ ...values, phone: e.target.value })} />
                            </div>
                            <div class="col-md-8">
                                <label for="inputAddress2" class="form-label">Address</label>
                                <input type="text" class="form-control" id="txtAddress" value={values.address} onChange={e => setValues({ ...values, address: e.target.value })} />
                            </div>
                            <div class="col-12">
                                <button type="submit" className="btn btn-primary mb-3" id="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
    )
}

export default UpdateCustomer