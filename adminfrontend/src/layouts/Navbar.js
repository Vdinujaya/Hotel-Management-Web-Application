import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

export default function Navbar() {
  return (
    <div className=''>
        <nav className="navbar-fixed navbar-expand-lg navbar-dark bg-primary" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
            <div className="container-fluid" style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
            <Link to={'/overview'} className='py-2' style={{color:'white',textDecoration:'none'}}><h1>Anantara Dhigu Admin</h1></Link>
            </div>
            <div className="container-fluid px-5 py-2" style={{display:'flex',justifyContent:'space-between',alignItems:'center',textAlign:'center'}}>
                <Link className='ad_topic' to={'/'} style={{color:'white',textDecoration:'none'}}><p className='text-center' style={{fontSize:'20px'}}>Customers</p></Link>
                <Link className='ad_topic' to={'/SE'} style={{color:'white',textDecoration:'none'}}><p className='text-center' style={{fontSize:'20px'}}>Employees</p></Link>
                <Link className='ad_topic' to={'/SEE'} style={{color:'white',textDecoration:'none'}}><p className='text-center' style={{fontSize:'20px'}}>Events</p></Link>
                <Link className='ad_topic' to={'/SI'} style={{color:'white',textDecoration:'none'}}><p className='text-center' style={{fontSize:'20px'}}>Inventory</p></Link>
                <Link className='ad_topic' to={'/SR'} style={{color:'white',textDecoration:'none'}}><p className='text-center' style={{fontSize:'20px'}}>Rooms</p></Link>
                <Link className='ad_topic' to={'/SS'} style={{color:'white',textDecoration:'none'}}><p className='text-center' style={{fontSize:'20px'}}>Suppliers</p></Link>
                <Link className='ad_topic' to={'/SB'} style={{color:'white',textDecoration:'none'}}><p className='text-center' style={{fontSize:'20px'}}>Booking</p></Link>
                <Link className='ad_topic' to={'/SCU'} style={{color:'white',textDecoration:'none'}}><p className='text-center' style={{fontSize:'20px'}}>Messages</p></Link>
                <Link className='ad_topic' to={'/SF'} style={{color:'white',textDecoration:'none'}}><p className='text-center' style={{fontSize:'20px'}}>Feedbacks</p></Link>
            </div>
        </nav>
    </div>
  )
}
