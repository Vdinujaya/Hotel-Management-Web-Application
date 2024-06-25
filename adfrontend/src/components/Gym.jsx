import React, { useEffect } from 'react'
import Navbar from './NavBar'
import HomeFeedback from './HomeFeedback'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Gym = () => {
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
                            <h1 class="display-3 text-white mb-3 animated slideInDown">Gym & Fitness</h1>
                            <nav aria-label="breadcrumb">
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Welcome to</h6>
                    <h1 className="mb-5">Anantara Dhigu <span className="text-primary text-uppercase">Gym & Fitness</span></h1>
                </div>

                <p className="mb-4" style={{ marginLeft: '10%', marginRight: '10%' }}>
                    Stay fit and energized during your stay with our state-of-the-art gym and fitness facilities. Whether you're a seasoned athlete or just starting your fitness journey, our amenities cater to all levels and interests.
                </p>

                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="mb-5">Gym <span className="text-primary text-uppercase">Facilities </span></h1>
                            <ul className='spa_list' style={{ marginLeft: '20%', marginRight: '20%' }}>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Cardio Zone</li>
                                    <p className="mb-4">Burn calories and improve your cardiovascular health with a variety of cardio machines, including treadmills, ellipticals, and stationary bikes.</p>
                                </div>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Strength Training Area</li>
                                    <p className="mb-4">Build muscle and tone your body with our selection of free weights, weight machines, and functional training equipment.</p>
                                </div>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Group Fitness Classes</li>
                                    <p className="mb-4">Join our expert-led group fitness classes for a fun and motivating workout experience. Choose from options like yoga, Zumba, HIIT, and more.</p>
                                </div>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Swimming Pool</li>
                                    <p className="mb-4">Take a refreshing dip in our indoor pool for a low-impact cardio workout or to relax after a challenging gym session.</p>
                                </div>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Personal Training</li>
                                    <p className="mb-4">Elevate your fitness routine with personalized guidance from our certified personal trainers. They'll help you set goals, design workouts, and stay motivated on your fitness journey.</p>
                                </div>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="http://localhost:6655/images/gym1.jpg" alt="ab1" style={{ marginTop: '25%' }} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="http://localhost:6655/images/gym2.jpg" alt="ab2" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="http://localhost:6655/images/gym3.jpg" alt="ab3" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="http://localhost:6655/images/gym4.jpg" alt="ab4" />
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
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="http://localhost:6655/images/faci1.jpg" alt="ab1" style={{ marginTop: '25%' }} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="http://localhost:6655/images/faci2.jpg" alt="ab2" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="http://localhost:6655/images/faci3.jpg" alt="ab3" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="http://localhost:6655/images/faci4.jpg" alt="ab4" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mb-5">Fitness Center <span className="text-primary text-uppercase">Amenities </span></h1>
                            <ul className='spa_list' style={{ marginLeft: '20%', marginRight: '20%' }}>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Towels and Water Stations</li>
                                    <p className="mb-4">Stay hydrated and refreshed with complimentary towels and water stations available throughout the gym.</p>
                                </div>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Locker Rooms</li>
                                    <p className="mb-4">Store your belongings securely in our clean and spacious locker rooms equipped with showers, toiletries, and changing areas.</p>
                                </div>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Fitness Equipment Maintenance</li>
                                    <p className="mb-4">Our equipment is regularly maintained to ensure optimal performance and safety for all users.</p>
                                </div>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Fitness Assessments</li>
                                    <p className="mb-4">Schedule a fitness assessment with our staff to evaluate your current fitness level and set achievable goals.</p>
                                </div>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>24/7 Access</li>
                                    <p className="mb-4">Enjoy access to our fitness center 24 hours a day, so you can work out whenever it fits your schedule.</p>
                                </div>
                            </ul>
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

export default Gym