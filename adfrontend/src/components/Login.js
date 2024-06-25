import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AuthService } from './AuthService';
import HomeFeedback from './HomeFeedback';
import Footer from './Footer';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';


export default function Login() {

  const [txtEmail, setEmail] = useState('');
  const [txtPassword, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    if (AuthService.isLoggedIn()) {
      setIsLoggedIn(true);
    }
  }, []);


  function sendData(e) {
    e.preventDefault();

    if (!txtPassword || !txtEmail) {
      setError("Please fill in all fields");
      return;
    }

    axios.get(`http://localhost:6655/customer/getemail/${txtEmail}`)
      .then((res) => {
        const customerArray = res.data.customer;

        if (customerArray && txtPassword === customerArray.password) {
          // Store user data in local storage
          AuthService.login(customerArray);
          // Redirect to the home page or the previous page
          setIsLoggedIn(true);
          window.location.href = "/";
        } else {
          setError("Login Failed: Incorrect email or password");
        }
      })
      .catch((err) => {
        setError("Login Failed: Customer not found");
      });
  }

  return (
    <div>
      <div className="container-xxl bg-white p-0">
        <NavBar />
        <div class="container-fluid page-header mb-5 p-0" style={{ backgroundImage: "url(http://localhost:6655/images/carousel-1.jpg)" }}>
          <div class="container-fluid page-header-inner py-5">
            <div class="container text-center pb-5">
              <h1 class="display-3 text-white mb-3 animated slideInDown">Log In</h1>
              <nav aria-label="breadcrumb">
              </nav>
            </div>
          </div>
        </div>
        <div class="container-xxl py-5">
          <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 class="section-title text-center text-primary text-uppercase mb-5">Log In</h6>
            </div>
            <div class="row g-5">
              <div class="col-lg-12">
                <div class="wow fadeInUp" data-wow-delay="0.2s">
                  <form onSubmit={sendData}>
                    <div class="row g-3">
                      <div class="col-md-6">
                        <div class="form-floating">
                          <input type="text" class="form-control" id="txtEmail" placeholder="Your Name" onChange={(e) => setEmail(e.target.value)} />
                          <label for="email">Email</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating">
                          <input type={showPassword ? "text" : "password"} class="form-control" id="txtPassword" placeholder="Your Email" onChange={(e) => setPassword(e.target.value)}
                          />
                          <label for="password" >Password</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <p>Dont have an Account? <Link to={'/register'}>Register</Link></p>
                      </div>
                      <div className='col-6' style={{ textAlign: 'left' }}>
                        <input type='checkbox' id="showPassword" onChange={() => setShowPassword(!showPassword)} style={{ marginRight: '20px' }}></input>
                        <label for="showPassword">Show Password</label>
                      </div>
                      {error && <p style={{ color: 'red' }}>{error}</p>}
                      <div class="col-12">
                        <button class="btn btn-primary w-100 py-3" type="submit">Log In</button>
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
  );
}
