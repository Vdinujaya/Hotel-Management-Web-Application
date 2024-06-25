import React, { useEffect, useState } from 'react'
import Navbar from './NavBar'
import HomeFeedback from './HomeFeedback'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Event = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const [event, setEvent] = useState([]);

  const getEvent = () => {
    axios.get('http://localhost:6655/event/').then((res) => {
      console.log(res.data);
      setEvent(res.data);
    }).catch((err) => {
      alert(err.message);
    });
  }


  useEffect(() => {
    getEvent();
  }, []);

    return (
        <div>
            <div className='container-xxl bg-white p-0'>
                <Navbar />
                <div class="container-fluid page-header mb-5 p-0" style={{ backgroundImage: "url(img/carousel-1.jpg)" }}>
                    <div class="container-fluid page-header-inner py-5">
                        <div class="container text-center pb-5">
                            <h1 class="display-3 text-white mb-3 animated slideInDown">Event & Party</h1>
                            <nav aria-label="breadcrumb">
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Welcome to</h6>
                    <h1 className="mb-5">Anantara Dhigu <span className="text-primary text-uppercase">Event & Party</span></h1>
                </div>

                <p className="mb-4" style={{ marginLeft: '10%', marginRight: '10%' }}>
                    Welcome to our Event and Party Booking page! Whether you're planning a birthday bash, corporate event, or a wedding reception, our hotel offers the perfect venue for any occasion. Our experienced event planners are here to make your special day unforgettable.
                </p>

                <h1 className="mb-5">Events gonna happen <span className="text-primary text-uppercase">Soon</span></h1>
                {event.map((c, index) => (
                <div className="container">
                    <div className="row g-5 m-5 align-items-center">
                        <div className="col-lg-6">
                            <ul className='spa_list' style={{ marginLeft: '10%', marginRight: '10%' }}>
                                <div className="spa">
                                <h1 className="mb-1"><span className="text-primary text-uppercase">{c.title}</span></h1>
                                <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>On: {c.startDateTime}</li>
                                <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Organized By: {c.organizer}</li>
                                <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Ticket Price: {c.price}</li>
                                </div>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3">
                            <div className="spa">
                                    <p className="mb-4">{c.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}

                <Link to={'/contact'}><a className="btn btn-primary py-3 px-5 mt-5 mb-4">Contact Us For More Details</a></Link>

                <HomeFeedback />
                <Footer />
            </div>
        </div>
    )
}

export default Event