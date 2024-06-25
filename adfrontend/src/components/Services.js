import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import CoAndFe from './CoAndFe'
import HomeServices from './HomeServices'
export default function Services() {
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
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Services</h1>
                    <nav aria-label="breadcrumb">
                    </nav>
                </div>
            </div>
        </div>

        

        <HomeServices/>

        <CoAndFe/>
    <Link to={'/'}><a className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a></Link>

        </div>
    </div>
  )
}
