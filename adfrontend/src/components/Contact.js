import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import CoAndFe from './CoAndFe'
import axios from 'axios'
import PopupMessage from './PopupMessage';


export default function Contact() {
    const[txtName,setName]  = useState('');
    const[txtEmail,setEmail]  = useState('');
    const[txtSubject,setSubject]  = useState('');
    const[txtMessage,setMessage]  = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const sendData = async (e) => {
        e.preventDefault();

        if (!txtName || !txtMessage ||!txtSubject || !txtEmail) {
            setPopupMessage('Please fill all fields!!');
            setShowPopup(true);
            return;
        }

        const feedbackData = {
            name: txtName,
            email: txtEmail,
            subject: txtSubject,
            message: txtMessage,
        };

        try {
            await axios.post("http://localhost:6655/contact/add", feedbackData);
            setPopupMessage('Message Submited');
        setShowPopup(true);
        
        setTimeout(() => {
            window.location.reload(); // Redirect after a delay
        }, 1000);
        } catch (error) {
            alert(`Error adding Contact: ${error.message}`);
            console.error("Error adding Contact", error);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <div>
        <PopupMessage show={showPopup} message={popupMessage} onHide={() => setShowPopup(false)} />
        <div className="container-xxl bg-white p-0">

        <NavBar/>

        <div class="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(img/carousel-1.jpg)"}}>
            <div class="container-fluid page-header-inner py-5">
                <div class="container text-center pb-5">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Contact Us</h1>
                    <nav aria-label="breadcrumb">
                    </nav>
                </div>
            </div>
        </div>

        


        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="section-title text-center text-primary text-uppercase">Contact Us</h6>
                    <h1 class="mb-5"><span class="text-primary text-uppercase">Contact</span> For Any Query</h1>
                </div>
                <div class="row g-4">
                    <div class="col-12">
                        <div class="row gy-4">
                            <div class="col-md-4">
                                <h6 class="section-title text-start text-primary text-uppercase">Booking</h6>
                                <p><i class="fa fa-envelope-open text-primary me-2"></i>book@anantara.com</p>
                            </div>
                            <div class="col-md-4">
                                <h6 class="section-title text-start text-primary text-uppercase">General</h6>
                                <p><i class="fa fa-envelope-open text-primary me-2"></i>info@anantara.com</p>
                            </div>
                            <div class="col-md-4">
                                <h6 class="section-title text-start text-primary text-uppercase">Technical</h6>
                                <p><i class="fa fa-envelope-open text-primary me-2"></i>tech@anantara.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                        <iframe class="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.231595453518!2d73.49924077502246!3d3.9726764960010703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f619bf2465709%3A0x2cbf39869cff6ed!2sAnantara%20Dhigu%20Maldives%20Resort!5e0!3m2!1sen!2slk!4v1711609620648!5m2!1sen!2slk"
                            frameborder="0" style={{minHeight: "350px", border:"0"}} allowfullscreen="" aria-hidden="false"
                            tabindex="0"></iframe>
                            
                    </div>
                    <div class="col-md-6">
                        <div class="wow fadeInUp" data-wow-delay="0.2s">
                            <form onSubmit={sendData}>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="txtName" onChange={(e)=>{setName(e.target.value);}} placeholder="Your Name"/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="txtEmail" onChange={(e)=>{setEmail(e.target.value);}} placeholder="Your Email"/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="txtSubject" onChange={(e)=>{setSubject(e.target.value);}} placeholder="Subject"/>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a message here" id="txtMessage" onChange={(e)=>{setMessage(e.target.value);}} style={{height: "150px"}}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
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
