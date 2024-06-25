import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import CoAndFe from './CoAndFe'
import HomeRooms from './HomeRooms';
import axios from 'axios';
import HomeServices from './HomeServices';

export default function Home(){
    
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

    return(
        <div>
            <div className="container-xxl bg-white p-0">

        <NavBar/>
        
        <div className="container-fluid p-0 mb-5">
            <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src="http://localhost:6655/images/anan-1.jpg" alt="Carousel slide 1"/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: '700px' }}>
                                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                                <h1 className="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious Hotel</h1>
                                <Link to={'/rooms'}><a className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="http://localhost:6655/images/anan-2.jpg" alt="Carousel slide 1"/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: '700px' }}>
                                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                                <h1 className="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious Hotel</h1>
                                <Link to={'/rooms'}><a href="index.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
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
                                        <p className="mb-0">Employees</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-users fa-2x text-primary mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">{supplier.length}</h2>
                                        <p className="mb-0">Suppliers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="http://localhost:6655/images/ab-1.jpg" alt="ab1"style={{marginTop: '25%'}}/>
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="http://localhost:6655/images/ab-2.jpg" alt="ab2"/>
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="http://localhost:6655/images/ab-3.jpg" alt="ab3"/>
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="http://localhost:6655/images/ab-4.jpg" alt="ab4"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <HomeRooms/>
        
        
        <HomeServices/>
            
        <CoAndFe/>
    <Link to={'/'}><a className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a></Link>
    </div>
        </div>
    )
}