import React from 'react'
import { Link } from 'react-router-dom'

const HomeServices = () => {
  return (
    <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Our Services</h6>
                    <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Services</span></h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <Link to={'/rooms'}><a className="service-item rounded">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-hotel fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">Rooms</h5>
                            <p className="text-body mb-0">Comfortable accommodations with modern amenities for a memorable stay.</p>
                        </a></Link>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <Link to={'/food'}><a className="service-item rounded">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-utensils fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">Dinning</h5>
                            <p className="text-body mb-0">Exquisite dining experiences featuring global flavors and fresh ingredients.</p>
                        </a></Link>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <Link to={'/spa'}><a className="service-item rounded">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-spa fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">Spa</h5>
                            <p className="text-body mb-0">Luxurious spa treatments and facilities for relaxation and rejuvenation..</p>
                        </a></Link>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                        <Link to={'/sports'}><a className="service-item rounded">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-swimmer fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">Sports & Games</h5>
                            <p className="text-body mb-0">Varied sports facilities for active recreation and leisure.</p>
                        </a></Link>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <Link to={'/event'}><a className="service-item rounded">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-glass-cheers fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">Event & Party</h5>
                            <p className="text-body mb-0">Versatile event spaces for successful meetings, weddings, and celebrations.</p>
                        </a></Link>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <Link to={'/gym'}><a className="service-item rounded">
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-dumbbell fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">GYM & Fitness</h5>
                            <p className="text-body mb-0">State-of-the-art fitness center for energizing workouts and wellness.</p>
                        </a></Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HomeServices