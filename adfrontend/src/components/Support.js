import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CoAndFe from './CoAndFe'
import NavBar from './NavBar'

export default function Support() {
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
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Support</h1>
                    <nav aria-label="breadcrumb">
                    </nav>
                </div>
            </div>
        </div>

        


        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="section-title text-center text-primary text-uppercase">Support </h6>
                    <h1 class="mb-5"><span class="text-primary text-uppercase">Support</span> For Any Query</h1>
                </div>
                <div class="row g-4">
                    <div class="col-12">
                        <div class="row gy-4">
                            <div class="col-md-4">
                                <h6 class="section-title text-start text-primary text-uppercase">Booking</h6>
                                <p><i class="fa fa-envelope-open text-primary me-2"></i>book@example.com</p>
                            </div>
                            <div class="col-md-4">
                                <h6 class="section-title text-start text-primary text-uppercase">General</h6>
                                <p><i class="fa fa-envelope-open text-primary me-2"></i>info@example.com</p>
                            </div>
                            <div class="col-md-4">
                                <h6 class="section-title text-start text-primary text-uppercase">Technical</h6>
                                <p><i class="fa fa-envelope-open text-primary me-2"></i>tech@example.com</p>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <p>Welcome to our website, where we offer comprehensive hotel and room management and booking services, ensuring a seamless experience for our users. Through our intuitive user registration and login functionalities, guests can easily create accounts, manage bookings, view past reservations, and receive personalized offers.</p>
                        
                        <p>Our advanced search and reservation system allows users to effortlessly find available rooms based on their preferences, including check-in/out dates, number of guests, and room types.</p>
                        
                        <p>For hotel management, we provide a robust system to efficiently manage room availability, update statuses based on bookings, and mark rooms unavailable for maintenance or cleaning. Upon making a reservation, guests receive immediate confirmation emails with detailed booking information. Secure payment options are available to facilitate hassle-free transactions.</p>
                        
                        <p>In addition, our platform supports cancellation and modification requests, empowering users to adjust their bookings within the specified policy guidelines. User profiles enable guests to update personal information, preferences, and view their booking history.</p>
                        
                        <p>Comprehensive room details and high-quality images provide users with the necessary information to make informed decisions. Reviews and ratings from previous guests further aid in the decision-making process for prospective guests.</p>
                        
                        <p>Integration with a Property Management System (PMS) streamlines operations and synchronizes bookings across different channels. Our website's responsive design ensures compatibility across various devices, and stringent security measures are in place to protect user data. Customer support is readily available to address any queries or issues encountered during the booking process, ensuring a smooth and satisfactory experience for all users.</p>
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
