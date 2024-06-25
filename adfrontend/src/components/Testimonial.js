import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import CoAndFe from './CoAndFe'
import axios from 'axios';
export default function Testimonial() {
    const [feedbacks, setFeedbacks] = useState([]);

    const getFeedbacks = () => {
        axios.get('http://localhost:6655/feedback/').then((res) => {
            console.log(res.data);
            setFeedbacks(res.data);
        }).catch((err) => {
            alert(err.message);
        });
    }
    useEffect(() => {
        getFeedbacks();
    })
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className="container-xxl bg-white p-0">
                <NavBar />
                <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: "url(img/carousel-1.jpg)" }}>
                    <div className="container-fluid page-header-inner py-5">
                        <div className="container text-center pb-5">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Testimonial</h1>
                            <nav aria-label="breadcrumb">
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Feedbacks</h6>
                    <h1 className="mb-5">Feedbacks given by <span className="text-primary text-uppercase">Customers</span></h1>
                </div>
                <div className="container">
                    {feedbacks.map((feedback, index) => (
                        <div className="border py-4 mb-4" key={index}>
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="font-weight-bold">{feedback.name}</p>
                                    <p>{feedback.feedback}</p>
                                    <p className="text-muted">{new Date(feedback.createdAt).toLocaleDateString()}</p>
                                </div>
                                {feedback.reply && (
                                    <div className="col-md-6">
                                        <p className="font-weight-bold">Anantara Dhigu</p>
                                        <p>{feedback.reply}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <CoAndFe />
                <Link to={'/'}><a className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a></Link>
            </div>
        </div>
    )
}
