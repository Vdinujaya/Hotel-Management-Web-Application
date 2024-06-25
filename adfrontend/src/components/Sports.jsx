import React, { useEffect } from 'react'
import Navbar from './NavBar'
import HomeFeedback from './HomeFeedback'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Sports = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className='container-xxl bg-white p-0'>
                <Navbar />
                <div class="container-fluid page-header mb-5 p-0" style={{ backgroundImage: "url(img/carousel-1.jpg)" }}>
                    <div class="container-fluid page-header-inner py-5">
                        <div class="container text-center pb-5">
                            <h1 class="display-3 text-white mb-3 animated slideInDown">Sports & Games</h1>
                            <nav aria-label="breadcrumb">
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Welcome to</h6>
                    <h1 className="mb-5">Anantara Dhigu <span className="text-primary text-uppercase">Sports & Games</span></h1>
                </div>

                <p className="mb-4" style={{ marginLeft: '10%', marginRight: '10%' }}>
                    Immerse yourself in the sun, sand, and sea with a plethora of exciting sports, outdoor adventures and indoor games available at Anantara Dhigu. Whether you're a thrill-seeker or simply seeking relaxation by the shore, our beachside resort offers a wide array of activities to suit every guest's preferences.
                </p>
                <h6 className="section-title text-center text-primary text-uppercase" style={{ marginTop: '5%' }}>Our Sports</h6>


                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="mb-5">Water <span className="text-primary text-uppercase">Sports</span></h1>
                            <ul className='sport_list' style={{ marginLeft: '20%', marginRight: '20%' }}>
                                <div className="sport">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Surfing Lessons</li>
                                    <p className="mb-4">Ride the waves and learn the art of surfing with expert instructors guiding you through the basics and beyond.</p>
                                </div>
                                <div className="sport">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Kayaking Tours</li>
                                    <p className="mb-4">Embark on guided kayaking tours to discover hidden coves, coastal caves, and marine life along the shoreline.</p>
                                </div>
                                <div className="sport">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Jet Ski Rentals</li>
                                    <p className="mb-4">Experience the healing benefits of warm basalt stones placed on key points of the body to melt away stress and tension.</p>
                                </div>
                                <div className="sport">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Swimming Pool</li>
                                    <p className="mb-4">Take a refreshing dip in our outdoor swimming pool, perfect for relaxation and exercise.</p>
                                </div>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="http://localhost:6655/images/water1.jpeg" alt="ab1" style={{ marginTop: '25%' }} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="http://localhost:6655/images/water2.jpg" alt="ab2" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="http://localhost:6655/images/water3.jpg" alt="ab3" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="http://localhost:6655/images/water4.jpg" alt="ab4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="http://localhost:6655/images/b1.jpg" alt="ab1" style={{ marginTop: '25%' }} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="http://localhost:6655/images/b2.png" alt="ab2" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="http://localhost:6655/images/b3.jpg" alt="ab3" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="http://localhost:6655/images/b4.jpg" alt="ab4" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mb-5" style={{ marginTop: '5%' }}>Beach <span className="text-primary text-uppercase">Sports</span></h1>
                            <ul className='sport_list' style={{ marginLeft: '10%', marginRight: '10%' }}>
                                <div className="sport">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Beach Volleyballl</li>
                                    <p className="mb-4">Gather friends and family for a friendly game of beach volleyball on our designated courts, with stunning ocean views as your backdrop.</p>
                                </div>
                                <div className="sport">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Beach Soccer</li>
                                    <p className="mb-4">Kick off your shoes and join in a game of soccer on the sandy shores, where every goal is accompanied by the sound of crashing waves.</p>
                                </div>
                                <div className="sport">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Sandcastle Building Contests</li>
                                    <p className="mb-4">Channel your inner architect and participate in our sandcastle building contests, a fun activity for all ages with prizes for the most creative creations.</p>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="mb-5" style={{ marginTop: '5%' }}>Indoor <span className="text-primary text-uppercase">Sports</span></h1>
                            <ul className='sport_list' style={{ marginLeft: '10%', marginRight: '10%' }}>
                                <div className="sport">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Badminton</li>
                                    <p className="mb-4">Enjoy fast-paced rallies and competitive matches on our indoor badminton courts. Rackets and shuttlecocks available for rent.</p>
                                </div>
                                <div className="sport">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Pool Table</li>
                                    <p className="mb-4">Sink some balls and showcase your cueing skills on our professional-grade pool table. Gather friends or family for a game of pool in a relaxed atmosphere.</p>
                                </div>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="http://localhost:6655/images/indoor1.jpg" alt="ab1" style={{ marginTop: '25%' }} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="http://localhost:6655/images/indoor2.jpg" alt="ab2" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="http://localhost:6655/images/indoor3.jpg" alt="ab3" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="http://localhost:6655/images/indoor4.jpg" alt="ab4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>











                <Link to={'/contact'}><a className="btn btn-primary py-3 px-5 mt-5 mb-4">Contact Us For More Details</a></Link>

                <HomeFeedback />
                <Footer />
            </div>
        </div>
    )
}

export default Sports