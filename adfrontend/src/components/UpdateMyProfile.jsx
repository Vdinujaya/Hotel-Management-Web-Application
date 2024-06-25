import React, { useEffect, useState } from 'react'
import HomeFeedback from './HomeFeedback'
import Footer from './Footer'
import NavBar from './NavBar'
import axios from 'axios'
import PopupMessage from './PopupMessage';
import { useNavigate, useParams } from 'react-router-dom'
import { notification } from 'antd'


const UpdateMyProfile = () => {

  const { id } = useParams();
  const navigate = useNavigate();

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
      .then((res) => {
        const customerData = res.data; // Assuming response is directly customer data
        setValues(customerData);
      })
      .catch(err => {
        console.log(err);
        notification.error({ message: 'Error', description: 'Failed to fetch customer data.' });
      });
  }, [id]);

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
    <div>
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
                  <form onSubmit={handleSubmit}>
                    <div class="row g-3">
                      <div class="col-md-6">
                        <div class="form-floating">
                          <input type="text" class="form-control" id="txtFirstName" value={values.firstName} onChange={e => setValues({ ...values, firstName: e.target.value })} placeholder="Your Name"  />
                          <label for="text">First Name</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating">
                          <input type="text" class="form-control" id="txtLastName" value={values.lastName} onChange={e => setValues({ ...values, lastName: e.target.value })} placeholder="Your Name"  />
                          <label for="text">Last Name</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating">
                          <input type="email" class="form-control" id="txtEmail" value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} placeholder="Your Name"  />
                          <label for="email">Email</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating">
                          <input type="text" pattern='[0-9]{10}' class="form-control" id="txtPhoneNo" value={values.phone} onChange={e => setValues({ ...values, phone: e.target.value })} placeholder="Your Name"  />
                          <label for="number">Mobile</label>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-floating">
                          <input type="text" class="form-control" id="txtAddress" value={values.address} onChange={e => setValues({ ...values, address: e.target.value })} placeholder="Your Name"  />
                          <label for="text">Address</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating">
                          <input type={showPassword ? "text" : "password"} class="form-control" id="txtPassword" value={values.password} onChange={e => setValues({ ...values, password: e.target.value })} placeholder="Your Email" 
                          />
                          <label for="password" >Password</label>
                        </div>
                      </div>
                      <div className='col-6' style={{textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <input type='checkbox' id="showPassword" onChange={() => setShowPassword(!showPassword)}  style={{marginRight:'20px'}}></input>
                        <label for="showPassword">Show Password</label>
                      </div>
                      <div class="col-12">
                        <button class="btn btn-primary w-100 py-3" type="submit">Update</button>
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

export default UpdateMyProfile