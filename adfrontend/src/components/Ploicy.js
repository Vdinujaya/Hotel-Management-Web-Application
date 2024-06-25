import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CoAndFe from './CoAndFe'
import NavBar from './NavBar'

export default function Policy() {
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
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Privacy Policy</h1>
                    <nav aria-label="breadcrumb">
                    </nav>
                </div>
            </div>
        </div>

        


        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="section-title text-center text-primary text-uppercase">Privacy Policy</h6>
                    <h1 class="mb-5"><span class="text-primary text-uppercase">Information </span> We Collect</h1>
                    <div className="container">
                

                        <h2>How We Use Your Information</h2>
                        <p>We use the information we collect for the following purposes...To process reservations and payments,To communicate with you about your reservation or inquiries,To send promotional offers and newsletters (if you opt-in),To improve our services and website functionality,To comply with legal obligations</p>
                        

                        <h2>Sharing Your Information</h2>
                        <p>We may share your personal information with third-party service providers who assist us in operating our website, processing reservations, or providing related services. These service providers are contractually obligated to use your information only as necessary to provide the services we request...</p>
                        

                        <h2>Your Rights</h2>
                        <p>You have the following rights regarding your personal information..The right to access the personal information we hold about you
                            ,The right to request correction of any inaccurate or incomplete information
                            ,The right to request deletion of your personal information
                            ,The right to object to the processing of your personal information, The right to withdraw consent for processing (if applicable)</p>
                            
                        <h2>Data Security</h2>
                        <p>We take reasonable measures to protect the personal information we collect, including encryption, secure servers, and access controls. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security. ...</p>
                        

                        <h2>Policy Updates</h2>
                        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on this page...</p>
                        
                        <h2>Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy or our data handling practices, please contact us at <a href="reservations.maldives@anantara.com">reservations.maldives@anantara.com</a> ...</p>
                        
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
