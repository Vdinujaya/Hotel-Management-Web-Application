import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import PopupMessage from './PopupMessage';
export default function CoAndFe(){

    const[txtName,setName]  = useState('');
    const[txtFeedback,setFeedback]  = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    
    const sendData = async (e) => {
        e.preventDefault();

        if (!txtName || !txtFeedback) {
            setPopupMessage('Please enter Name and FeedBack!!');
            setShowPopup(true);
            return;
        }
        const feedbackData = {
            name: txtName,
            feedback: txtFeedback
        };

        try {
            await axios.post("http://localhost:6655/feedback/add", feedbackData);
            setPopupMessage('Feedback Submited');
        setShowPopup(true);
        
        setTimeout(() => {
            window.location.reload(); // Redirect after a delay
        }, 1000);
        } catch (error) {
            alert(`Error adding Feedback: ${error.message}`);
            console.error("Error adding Feedback", error);
        }
    };
    
    return(
        <div>
            <PopupMessage show={showPopup} message={popupMessage} onHide={() => setShowPopup(false)} />
        <div className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="row justify-content-center">
            <div className="col-lg-10 border rounded p-1">
                <div className="border rounded text-center p-1">
                    <div className="bg-white rounded text-center p-5">
                        <h4 className="mb-4">Give your <span className="text-primary text-uppercase">Feedback</span></h4>
                        <div className=" mx-auto" style={{ maxWidth: '400px' }} >
                            <form onSubmit={sendData}>
                            <input className="form-control w-100 py-3 ps-4 pe-5" style={{marginBottom:'10px'}} type="text" placeholder="Enter your Name" id="txtName" onChange={(e)=>{
                                setName(e.target.value);
                            }}/>
                            <input className="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your Feedback" id="txtFeedback" onChange={(e)=>{
                                setFeedback(e.target.value);
                            }}/>
                            <button type="submit" className="btn btn-primary py-2 px-3 top-0 end-0 mt-2 me-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
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
        </div>
    )
}