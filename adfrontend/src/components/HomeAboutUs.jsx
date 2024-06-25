import React from 'react'
import { Link } from 'react-router-dom'

const HomeAboutUs = () => {
  return (
    <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <h6 className="section-title text-start text-primary text-uppercase">About Us</h6>
                        <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">Anantara Dhigu</span></h1>
                        <p className="mb-4">
                        Anantara Digu Hotel offers a luxurious escape in the Maldives, where guests can indulge in elegant overwater villas and pristine beachfront accommodations. With a focus on relaxation and adventure, 
                        the resort provides exquisite dining options, thrilling water sports, and rejuvenating spa experiences. Committed to sustainability, Anantara Digu ensures a harmonious blend of luxury and environmental responsibility. 
                        Whether for a romantic getaway or a family vacation, this idyllic retreat promises unforgettable moments amidst the breathtaking beauty of the Maldives.
                        </p>
                        <div className="row g-3 pb-4">
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-hotel fa-2x text-primary mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">30</h2>
                                        <p className="mb-0">Rooms</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">197</h2>
                                        <p className="mb-0">Staffs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-users fa-2x text-primary mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">23</h2>
                                        <p className="mb-0">Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to={'/about'}><a className="btn btn-primary py-3 px-5 mt-2">Explore More</a></Link>
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="img/ab-1.jpg" alt="ab1"style={{marginTop: '25%'}}/>
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="img/ab-2.jpg" alt="ab2"/>
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="img/ab-3.jpg" alt="ab3"/>
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="img/ab-4.jpg" alt="ab4"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HomeAboutUs