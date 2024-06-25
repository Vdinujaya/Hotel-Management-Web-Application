import React, { useEffect } from 'react'
import CoAndFe from './CoAndFe'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

export default function Condition() {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <div>
        <div className="container-xxl bg-white p-0">

        <NavBar/>

        <div class="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(img/carousel-1.jpg)"}}>
            <div class="container-fluid page-header-inner py-5">
                <div class="container text-center pb-5">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Terms & Condition</h1>
                    <nav aria-label="breadcrumb">
                    </nav>
                </div>
            </div>
        </div>

        


        <div class="container-xxl py-5">
  <div class="container1">
    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 class="section-title text-center text-primary text-uppercase">Terms & Condition</h6>
      <h1 class="mb-5"><span class="text-primary text-uppercase">Please read these Terms and Conditions carefully before using </span> Anantara Dhigu website</h1>
      <div class="container">

        <div class="row">
          <div class="col-md-12">
            <h2>1. Reservations</h2>
            <p>All reservations are subject to availability and confirmation by Anantara Dhigu. We reserve the right to refuse or cancel any reservation at our discretion.</p>
          </div>
        </div>
        <div class="row">
             <div class="col-md-12">
                <h2>2. Room Rates and Payment</h2>
                <p>Room rates are displayed in the currency of your choice. Payment is required at the time of booking unless otherwise specified. Additional charges may apply for extra services or amenities.</p>
            </div>
        </div>


            <div class="row">
                <div class="col-md-12">
                <h2>3. Check-in and Check-out</h2>
                <p>Check-in time is [time], and check-out time is [time]. Early check-in and late check-out may be available upon request and subject to availability. Failure to check out by the specified time may result in additional charges.</p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                <h2>4. Cancellation Policy</h2>
                <p>Cancellation policies vary depending on the type of reservation and rate plan selected. Please refer to the specific cancellation policy provided at the time of booking.</p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                <h2>5. Guest Responsibilities</h2>
                <p>Guests are responsible for providing accurate information at the time of booking. Guests are expected to adhere to hotel policies and guidelines during their stay. Any damages to hotel property caused by guests will be charged accordingly.</p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                <h2>6. Limitation of Liability</h2>
                <p>[Your Hotel Name] shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use of or inability to use the Service.</p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                <h2>7. Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.</p>
                </div>
            </div>
                    

        <div class="row">
          <div class="col-md-12">
            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at <a href="reservations.maldives@anantara.com">reservations.maldives@anantara.com</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    <CoAndFe/>
        
    <Link to={'/'}><a className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a></Link>

        </div>
    </div>
  )
}
