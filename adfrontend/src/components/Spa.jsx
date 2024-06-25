import React,{useEffect} from 'react'
import Navbar from './NavBar'
import Footer from './Footer'
import HomeFeedback from './HomeFeedback'
import { Link } from 'react-router-dom'

const Spa = () => {
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
                            <h1 class="display-3 text-white mb-3 animated slideInDown">Spa</h1>
                            <nav aria-label="breadcrumb">
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Welcome to</h6>
                    <h1 className="mb-5">Anantara Dhigu <span className="text-primary text-uppercase">Spa</span></h1>
                </div>

                <p className="mb-4" style={{ marginLeft: '10%', marginRight: '10%' }}>
                    Indulge in relaxation and rejuvenation at the Anantara Dhigu Spa. Our luxurious spa offers a sanctuary of tranquility where you can escape the stresses of everyday life and embark on a journey of wellness. From soothing massages to revitalizing facials, our expert therapists are dedicated to providing you with an unforgettable spa experience.
                </p>
                <h6 className="section-title text-center text-primary text-uppercase" style={{ marginTop: '5%' }}>Our Services</h6>


                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="mb-5">Massage <span className="text-primary text-uppercase">Therapies</span></h1>
                            <ul className='spa_list' style={{ marginLeft: '20%', marginRight: '20%' }}>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Swedish Massage</li>
                                    <p className="mb-4">Relax and unwind with long, flowing strokes to ease tension and promote relaxation.</p>
                                </div>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Deep Tissue Massage</li>
                                    <p className="mb-4">Target specific areas of tension with firm pressure to release muscle knots and improve mobility.</p>
                                </div>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Hot Stone Massage</li>
                                    <p className="mb-4">Experience the healing benefits of warm basalt stones placed on key points of the body to melt away stress and tension.</p>
                                </div>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Aromatherapy Massage</li>
                                    <p className="mb-4">Immerse yourself in the therapeutic scents of essential oils, tailored to your preferences for a deeply relaxing experience.</p>
                                </div>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="http://localhost:6655/images/massage1.jpg" alt="ab1" style={{ marginTop: '25%' }} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="http://localhost:6655/images/massage2.jpg" alt="ab2" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="http://localhost:6655/images/massage3.jpg" alt="ab3" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="http://localhost:6655/images/massage4.png" alt="ab4" />
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
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="http://localhost:6655/images/face1.png" alt="ab1" style={{ marginTop: '25%' }} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="http://localhost:6655/images/face2.jpg" alt="ab2" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="http://localhost:6655/images/face3.jpg" alt="ab3" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="http://localhost:6655/images/face4.jpg" alt="ab4" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mb-5" style={{ marginTop: '5%' }}>Facial <span className="text-primary text-uppercase">Treatments</span></h1>
                            <ul className='spa_list' style={{ marginLeft: '10%', marginRight: '10%' }}>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Classic Facial</li>
                                    <p className="mb-4">Cleanse, exfoliate, and hydrate your skin with customized products to reveal a radiant complexion.</p>
                                </div>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Anti-Aging Facial</li>
                                    <p className="mb-4">Combat signs of aging with potent antioxidants and collagen-boosting ingredients for firmer, youthful-looking skin.</p>
                                </div>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Hydrating Facial</li>
                                    <p className="mb-4">Restore moisture balance to dry, dehydrated skin with nourishing serums and masks for a dewy glow.</p>
                                </div>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Men's Facial Facial</li>
                                    <p className="mb-4">Address the unique skincare needs of men with a tailored treatment to soothe irritation, reduce ingrown hairs, and promote skin health.</p>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="mb-5" style={{ marginTop: '5%' }}>Body <span className="text-primary text-uppercase">Treatments</span></h1>
                            <ul className='spa_list' style={{ marginLeft: '10%', marginRight: '10%' }}>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Body Scrub</li>
                                    <p className="mb-4">Renew your skin's texture and tone with a gentle exfoliation followed by a hydrating body butter application.</p>
                                </div>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Body Wrap</li>
                                    <p className="mb-4">Detoxify and nourish your skin with a luxurious body wrap infused with botanical extracts and minerals for ultimate relaxation.</p>
                                </div>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Hydrotherapy</li>
                                    <p className="mb-4">Immerse yourself in our hydrotherapy tub for a therapeutic soak enhanced with essential oils and bath salts to soothe muscles and calm the mind.</p>
                                </div>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="http://localhost:6655/images/body1.jpg" alt="ab1" style={{ marginTop: '25%' }} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="http://localhost:6655/images/body2.jpg" alt="ab2" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="http://localhost:6655/images/body5.jpg" alt="ab3" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="http://localhost:6655/images/body4.jpg" alt="ab4" />
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
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="http://localhost:6655/images/nail1.png" alt="ab1" style={{ marginTop: '25%' }} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="http://localhost:6655/images/nail2.jpg" alt="ab2" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="http://localhost:6655/images/nail3.jpg" alt="ab3" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="http://localhost:6655/images/nail4.jpg" alt="ab4" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mb-5" style={{ marginTop: '5%' }}>Nail <span className="text-primary text-uppercase">Care</span></h1>
                            <ul className='spa_list' style={{ marginLeft: '10%', marginRight: '10%' }}>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Maincure</li>
                                    <p className="mb-4">Treat your hands to a pampering manicure including nail shaping, cuticle care, massage, and polish application.</p>
                                </div>
                                <div className="spa">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Pedicure</li>
                                    <p className="mb-4">Relax and rejuvenate tired feet with a spa pedicure featuring a foot soak, exfoliation, massage, and polish of your choice.</p>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>



                <div className="container">
                    <h1 className="mb-5" style={{ marginTop: '5%' }}>Spa <span className="text-primary text-uppercase">Packages</span></h1>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                        <div className='col-lg-4 col-md-6 wow fadeInUp border rounded p-1' >
                            <div className="border rounded " data-wow-delay="0.1s" style={{ padding: '20px' }}>


                                <h5 className="mb-3">Blissful Escape</h5>
                                <p className="text-body mb-0">Indulge in a full day of pampering with a combination of massage, facial, body treatment, and nail care services.</p>

                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 wow fadeInUp border rounded p-1'>
                            <div className="border rounded " data-wow-delay="0.2s" style={{ padding: '20px' }}>

                                <h5 className="mb-3">Couples Retreat</h5>
                                <p className="text-body mb-0">Reconnect with your partner with a romantic spa experience including side-by-side massages and a private jacuzzi session.</p>

                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 wow fadeInUp border rounded p-1'>
                            <div className="border rounded " data-wow-delay="0.3s" style={{ padding: '20px' }}>

                                <h5 className="mb-3">Mom-to-Be Package</h5>
                                <p className="text-body mb-0">Spoil expectant mothers with a series of prenatal treatments designed to ease discomfort and promote relaxation.</p>

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

export default Spa