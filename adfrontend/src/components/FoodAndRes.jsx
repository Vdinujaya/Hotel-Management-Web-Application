import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './NavBar'
import Footer from './Footer'
import HomeFeedback from './HomeFeedback'

const FoodAndRes = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className="container-xxl bg-white p-0">

                <Navbar />

                <div class="container-fluid page-header mb-5 p-0" style={{ backgroundImage: "url(img/carousel-1.jpg)" }}>
                    <div class="container-fluid page-header-inner py-5">
                        <div class="container text-center pb-5">
                            <h1 class="display-3 text-white mb-3 animated slideInDown">Dinning</h1>
                            <nav aria-label="breadcrumb">
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Welcome to</h6>
                    <h1 className="mb-5">Anantara Dhigu <span className="text-primary text-uppercase">Dinning</span></h1>
                </div>

                <p className="mb-4" style={{ marginLeft: '10%', marginRight: '10%' }}>
                    At Anantara Dhigu, we offer a diverse range of culinary delights to satisfy every palate. From gourmet cuisine to casual dining options, our chefs
                    craft dishes using the freshest ingredients sourced locally and internationally. Whether you're a guest staying with us or a visitor looking for a memorable dining experience, we invite you to explore our menus and indulge in a world of flavors.
                </p>
                <h6 className="section-title text-center text-primary text-uppercase" style={{ marginTop: '5%' }}>Our Menus</h6>

                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="mb-5">Breakfast <span className="text-primary text-uppercase">Menu</span></h1>
                            <ul className='menu_list' style={{ marginLeft: '20%', marginRight: '20%' }}>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Classic Breakfast</li>
                                    <p className="mb-4">Two eggs any style, choice of bacon or sausage, hash browns, and toast.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Buttermilk Pancakes</li>
                                    <p className="mb-4">Fluffy pancakes served with maple syrup and butter.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Eggs Benedict</li>
                                    <p className="mb-4">Poached eggs, Canadian bacon, and hollandaise sauce on an English muffin, served with breakfast potatoes.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Vegetarian Omelet</li>
                                    <p className="mb-4">Three-egg omelet filled with sautéed mushrooms, bell peppers, onions, spinach, and Swiss cheese, served with toast.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Continental Breakfast</li>
                                    <p className="mb-4">Assorted pastries, croissants, muffins, yogurt, granola, fresh fruit, and choice of juice or coffee.</p>
                                </div>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="http://localhost:6655/images/breakfast1.jpg" alt="ab1" style={{ marginTop: '25%' }} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="http://localhost:6655/images/breakfast2.jpeg" alt="ab2" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="http://localhost:6655/images/breakfast3.jpg" alt="ab3" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="http://localhost:6655/images/breakfast4.jpg" alt="ab4" />
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
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="http://localhost:6655/images/lunch1.jpg" alt="ab1" style={{ marginTop: '25%' }} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="http://localhost:6655/images/lunch2.jpeg" alt="ab2" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="http://localhost:6655/images/lunch3.png" alt="ab3" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="http://localhost:6655/images/lunch4.jpg" alt="ab4" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mb-5" style={{ marginTop: '5%' }}>Lunch <span className="text-primary text-uppercase">Menu</span></h1>
                            <ul className='menu_list' style={{ marginLeft: '10%', marginRight: '10%' }}>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Soup of the Day</li>
                                    <p className="mb-4">Chef's daily creation served with freshly baked bread.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Caesar Salad</li>
                                    <p className="mb-4">Crisp romaine lettuce, Parmesan cheese, croutons, and Caesar dressing.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Grilled Chicken Sandwich</li>
                                    <p className="mb-4">Marinated grilled chicken breast, lettuce, tomato, red onion, and mayo on a toasted bun, served with fries.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Margherita Pizza</li>
                                    <p className="mb-4">Fresh mozzarella, sliced tomatoes, basil, and marinara sauce on a crispy thin crust.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Pasta Primavera</li>
                                    <p className="mb-4">Linguine pasta tossed with seasonal vegetables in a garlic herb sauce, topped with Parmesan cheese.</p>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="mb-5" style={{ marginTop: '5%' }}>Dinner <span className="text-primary text-uppercase">Menu</span></h1>
                            <ul className='menu_list' style={{ marginLeft: '10%', marginRight: '10%' }}>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Filet Mignon</li>
                                    <p className="mb-4">Grilled 8 oz. beef tenderloin served with mashed potatoes, seasonal vegetables, and red wine reduction.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Pan-Seared Salmon</li>
                                    <p className="mb-4">Fresh Atlantic salmon fillet served with wild rice pilaf, sautéed spinach, and lemon dill sauce.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Mushroom Risotto</li>
                                    <p className="mb-4">Creamy Arborio rice cooked with mixed mushrooms, Parmesan cheese, and truffle oil.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Grilled Vegetable Platter</li>
                                    <p className="mb-4">Seasonal vegetables marinated and grilled, served with quinoa salad and balsamic glaze.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Shrimp Scampi</li>
                                    <p className="mb-4">Sautéed shrimp in garlic butter sauce served over linguine pasta with cherry tomatoes and parsley.</p>
                                </div>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="http://localhost:6655/images/dinner1.jpeg" alt="ab1" style={{ marginTop: '25%' }} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="http://localhost:6655/images/dinner2.jpg" alt="ab2" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="http://localhost:6655/images/dinner3.jpg" alt="ab3" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="http://localhost:6655/images/dinner4.jpg" alt="ab4" />
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
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="http://localhost:6655/images/bar1.jpg" alt="ab1" style={{ marginTop: '25%' }} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="http://localhost:6655/images/bar2.jpg" alt="ab2" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="http://localhost:6655/images/bar3.jpg" alt="ab3" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="http://localhost:6655/images/bar4.jpg" alt="ab4" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mb-5" style={{ marginTop: '5%' }}>Bar & Lounge <span className="text-primary text-uppercase">Menu</span></h1>
                            <ul className='menu_list' style={{ marginLeft: '10%', marginRight: '10%' }}>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Classic Mojito</li>
                                    <p className="mb-4">Two eggs any style, choice of bacon or sausage, hash browns, and toast.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Classic Mojito</li>
                                    <p className="mb-4">White rum, fresh mint, lime juice, simple syrup, and soda water.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Buffalo Chicken Wings</li>
                                    <p className="mb-4">Fresh mozzarella, sliced tomatoes, basil, and marinara sauce on a crispy thin crust.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Cheese Platter</li>
                                    <p className="mb-4">Crispy chicken wings tossed in spicy buffalo sauce, served with blue cheese dressing and celery sticks.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Signature Cocktails</li>
                                    <p className="mb-4">Bartender's special creations using premium spirits, fresh fruits, and unique ingredients.</p>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="mb-5" style={{ marginTop: '5%' }}>Room Service <span className="text-primary text-uppercase">Menu</span></h1>
                            <ul className='menu_list' style={{ marginLeft: '10%', marginRight: '10%' }}>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Club Sandwich</li>
                                    <p className="mb-4">Triple-decker sandwich with roasted turkey, bacon, lettuce, tomato, and mayo on toasted bread, served with fries.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Caprese Salad</li>
                                    <p className="mb-4">Fresh mozzarella, sliced tomatoes, basil, balsamic glaze, and olive oil.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Penne Pasta with Marinara Sauce</li>
                                    <p className="mb-4">Penne pasta tossed in homemade marinara sauce, topped with Parmesan cheese.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Grilled Vegetable Wrap</li>
                                    <p className="mb-4">Grilled seasonal vegetables, mixed greens, hummus, and feta cheese wrapped in a flour tortilla, served with chips.</p>
                                </div>
                                <div className="menu">
                                    <li className="mb-1 section-title" style={{ listStyle: 'none', fontWeight: '700' }}>Chocolate Lava Cake</li>
                                    <p className="mb-4">Warm chocolate cake with a molten chocolate center, served with vanilla ice cream.</p>
                                </div>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="http://localhost:6655/images/breakfast5.png" alt="ab1" style={{ marginTop: '25%' }} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="http://localhost:6655/images/lunch5.jpg" alt="ab2" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="http://localhost:6655/images/dinner5.jpg" alt="ab3" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="http://localhost:6655/images/bar5.jpg" alt="ab4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to={'/contact'}><a className="btn btn-primary py-3 px-5 mt-5 mb-4">Contact Us For More Details</a></Link>



                <HomeFeedback />

                <Footer />
                <Link to={'/rooms'}><a className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a></Link>

            </div>
        </div>
    )
}

export default FoodAndRes