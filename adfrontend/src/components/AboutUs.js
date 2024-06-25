import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CoAndFe from './CoAndFe'
import NavBar from './NavBar'
import axios from 'axios'
export default function AboutUs() {

    const { cId } = useParams();

    const [room, setRooms] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [supplier, setSupplier] = useState([]);
    

    const getRoom = () => {
        axios.get('http://localhost:6655/room/')
          .then((res) => {
            console.log(res.data);
            setRooms(res.data);
            console.log(res.data._id);
          })
          .catch((err) => {
            alert(err.message);
          });    
          
      };
    const getEmployee = () => {
        axios.get('http://localhost:6655/employee/')
          .then((res) => {
            console.log(res.data);
            setEmployee(res.data);
            console.log(res.data._id);
          })
          .catch((err) => {
            alert(err.message);
          });    
          
      };
    const getSupplier = () => {
        axios.get('http://localhost:6655/supplier/')
          .then((res) => {
            console.log(res.data);
            setSupplier(res.data);
            console.log(res.data._id);
          })
          .catch((err) => {
            alert(err.message);
          });    
          
      };

      useEffect(() => {
        getRoom();
        
      }, []);
      useEffect(() => {
        getEmployee();
        
      }, []);
      useEffect(() => {
        getSupplier();
        
      }, []);

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
                    <h1 class="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb">
                    </nav>
                </div>
            </div>
        </div>

       


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
                                        <h2 className="mb-1" data-toggle="counter-up">{room.length}</h2>
                                        <p className="mb-0">Rooms</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">{employee.length}</h2>
                                        <p className="mb-0">Staffs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-users fa-2x text-primary mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">{supplier.length}</h2>
                                        <p className="mb-0">Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>                    </div>
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


        <CoAndFe/>
    <Link to={'/'}><a className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a></Link>

        </div>
    </div>
  )
}
