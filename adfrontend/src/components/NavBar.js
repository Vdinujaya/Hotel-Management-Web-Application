import { Link } from 'react-router-dom'
import { AuthService } from './AuthService'
import { UserOutlined } from '@ant-design/icons'
export default function NavBar(){
    const handleLogout =()=>{

        AuthService.logout();
        window.location.href = '/';
    }

    const renderLogoutLink = () => {
      if (AuthService.isLoggedIn()) {
          return <a className="dropdown-item" onClick={handleLogout} style={{ cursor: 'pointer' }}>Log out</a>;
      }
      // If not logged in, return null to not render the link
      return null;
  };

    const handleAuthPro = () => {
        if (AuthService.isLoggedIn()) {
          const user = AuthService.getUser();
          if (user && user.customerId) {
            const customerId = user.customerId;
            window.location.href = `/myprofile/${customerId}`;
          } else {
            console.error("User data does not contain customerId");
          }
        } else {
          // If user is not logged in, redirect to login page
          window.location.href = '/login';
        }
      };

      const handleAuthBoo = () => {
        if (AuthService.isLoggedIn()) {
          const user = AuthService.getUser();
          if (user && user.customerId) {
            const customerId = user.customerId;
            window.location.href = `/mybooking/${customerId}`;
          } else {
            console.error("User data does not contain customerId");
          }
        } else {
          // If user is not logged in, redirect to login page
          window.location.href = '/login';
        }
      };
    return (
        <div>
            <div className="container-fluid bg-dark px-0">
            <div className="row gx-0">
                <div className="col-lg-3 bg-dark d-none d-lg-block">
                    <a href="index.html" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                    <Link to={'/'}><h1 className="navbar-h1">Anantara Dhigu</h1></Link>
                    </a>
                </div>
                <div className="col-lg-9">
                    <div className="row gx-0 bg-white d-none d-lg-flex">
                        <div className="col-lg-7 px-5 text-start">
                            <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i className="fa fa-envelope text-primary me-2"></i>
                                <p className="mb-0">reservations.@anantara.com</p>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center py-2">
                                <i className="fa fa-phone-alt text-primary me-2"></i>
                                <p className="mb-0">+112 664-411</p>
                            </div>
                        </div>
                        <div className="col-lg-5 px-5 text-end">
                            <div className="d-inline-flex align-items-center py-2">
                                <a className="me-3" href="https://www.facebook.com/AnantaraDhiguMaldives/"><i className="fab fa-facebook-f"></i></a>
                                <a className="me-3" href="https://www.instagram.com/anantaradhigu/?hl=en"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                        <a href="index.html" className="navbar-brand d-block d-lg-none">
                        <Link to={'/'}><h1 className="navbar-h1">Anantara Dhigu</h1></Link>
                        </a>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link to={'/'}><a className="nav-item nav-link">Home</a></Link>
                                <Link to={'/about'}><a className="nav-item nav-link">About</a></Link>
                                <Link to={'/services'}><a className="nav-item nav-link">Services</a></Link>
                                <Link to={'/rooms'}><a className="nav-item nav-link">Rooms</a></Link>
                                <Link to={'/contact'}><a className="nav-item nav-link">Contact</a></Link>
                                <Link to={'/testimonial'}><a className="nav-item nav-link">Testimonial</a></Link>
                            </div>
                            <div className="navbar-nav mr-auto py-0">
                            <div className="nav-item dropdown">
                                    <a href="index.html" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><UserOutlined /></a>
                                    <div className="dropdown-menu rounded-0 m-0" style={{ textAlign: 'center', minWidth: 'auto', left: 'auto', right: 0 }}>
                                        <a className="dropdown-item" onClick={handleAuthPro} style={{cursor:'pointer'}}>Profile</a>
                                        <a className="dropdown-item" onClick={handleAuthBoo} style={{cursor:'pointer'}}>My Bookings</a>
                                        {renderLogoutLink()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </div>
    )
}