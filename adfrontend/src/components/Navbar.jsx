import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import User from '../img/profile-user.png'

const Navbar = () => {
    return (
        <div className="container-fluid bg-dark px-0">
            <div className="row gx-0">
                <div className="col-lg-3 bg-dark d-none d-lg-block">
                    <a href="index.html" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                        <Link to={'/'}><h1 className="navbar-h1">Anantara Dhigu</h1></Link>
                    </a>
                </div>
                <div className="col-lg-9">
                    <div className="row gx-0 bg-white d-none d-lg-flex">
                        <div className="col-lg-7 px-5 text-start">
                            <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i className="fa fa-envelope text-primary me-2"></i>
                                <p className="mb-0">reservations.maldives@anantara.com</p>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center py-2">
                                <i className="fa fa-phone-alt text-primary me-2"></i>
                                <p className="mb-0">+960 664-4111</p>
                            </div>
                        </div>
                        <div className="col-lg-5 px-5 text-end">
                            <div className="d-inline-flex align-items-center py-2">
                                <a className="me-3" href="https://www.facebook.com/AnantaraDhiguMaldives/"><i className="fab fa-facebook-f"></i></a>
                                <a className="me-3" href="https://www.instagram.com/anantaradhigu/?hl=en"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                        <a href="index.html" className="navbar-brand d-block d-lg-none">
                            <Link to={'/'}><h1 className="navbar-h1">Anantara Dhigu</h1></Link>
                        </a>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between px-5" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link to={'/'}><a className="nav-item nav-link">Home</a></Link>
                                <Link to={'/about'}><a className="nav-item nav-link">About</a></Link>
                                <Link to={'/services'}><a className="nav-item nav-link">Services</a></Link>
                                <Link to={'/rooms'}><a className="nav-item nav-link">Rooms</a></Link>
                                <div className="nav-item dropdown">
                                    <a href="index.html" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <Link to={'/bookRoom'}><a className="dropdown-item">Booking</a></Link>
                                        <Link to={'/team'}><a className="dropdown-item">Our Team</a></Link>
                                        <Link to={'/testimonial'}><a className="dropdown-item">Testimonial</a></Link>
                                    </div>
                                </div>
                                <Link to={'/contact'}><a className="nav-item nav-link">Contact</a></Link>
                                
                            </div>
                            <div className="navbar-nav mr-auto py-0">
                            <div className="nav-item dropdown">
                                    <a href="index.html" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><UserOutlined /></a>
                                    <div className="dropdown-menu rounded-0 m-0" style={{ textAlign: 'center', minWidth: 'auto', left: 'auto', right: 0 }}>
                                        <Link to={'/profile'}><a className="dropdown-item">Profile</a></Link>
                                        <Link to={'/login'}><a className="dropdown-item">Login</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar