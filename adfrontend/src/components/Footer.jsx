import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div className="container pb-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-4">
                        <div className="bg-primary rounded p-4">
                            <a href="index.html"><h1 className="text-white text-uppercase mb-3">Anantara Dhigu</h1></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h6 className="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>P.O. Box 2098, Dhigufinolhu, South Male Atoll, Male</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+960 664-4111</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>reservations.maldives@anantara.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href="https://twitter.com/anantaramaldive?lang=en"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/AnantaraDhiguMaldives/"><i className="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="row gy-5 g-4">
                            <div className="col-md-6">
                                <h6 className="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                                <Link to={'/about'}><a className="btn btn-link">About Us</a></Link>
                                <Link to={'/contact'}><a className="btn btn-link">Contact Us</a></Link>
                                <Link to={'/policy'}><a className="btn btn-link">Privacy Policy</a></Link>
                                <Link to={'/condition'}><a className="btn btn-link">Terms & Condition</a></Link>
                                <Link to={'/support'}><a className="btn btn-link">Support</a></Link>
                            </div>
                            <div className="col-md-6">
                                <h6 className="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                                <Link to={'/food'}><a className="btn btn-link">Dinning</a></Link>
                                <Link to={'/spa'}><a className="btn btn-link">Spa</a></Link>
                                <Link to={'/sports'}><a className="btn btn-link">Sports & Games</a></Link>
                                <Link to={'/event'}><a className="btn btn-link">Event & Party</a></Link>
                                <Link to={'/gym'}><a className="btn btn-link">GYM & Fitness</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; All Right Reserved. 
							
							
							Designed By <a className="border-bottom">Byte Me</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <Link to={'/'}><a>Home</a></Link>
                                <Link to={'/cookies'}><a>Cookies</a></Link>
                                <Link to={'/help'}><a>Help</a></Link>
                                <Link to={'/fqas'}><a>FQAs</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer