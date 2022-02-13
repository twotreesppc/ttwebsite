import React from 'react';
import { Link } from "gatsby"

import WhiteLogo from "../../assets/images/white-logo.png"
import Shape16 from "../../assets/images/shape/shape16.png"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <Link to="/" className="logo">
                                <img src={WhiteLogo} alt="Two Trees PPC" />
                            </Link>
                            <p>Serving business owners in California and beyond since 2017.</p>

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Company</h3>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/contact">Get Started</Link>
                                </li>
                                <li>
                                    <Link to="/about-us-1">Our Story</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio-5">Case Studies</Link>
                                </li>
                                <li>
                                    <Link to="/blog-2">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/team-2">Meet The Team</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-2">
                            <h3>Solutions</h3>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/team-1">PPC Advertising</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Social Media Marketing</Link>
                                </li>
                                <li>
                                    <Link to="/services-1">Search Engine Optimization</Link>
                                </li>
                                <li>
                                    <Link to="/faq">Website Optimization</Link>
                                </li>
                                <li>
                                    <Link to="/blog-1">Data Services</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Contact Us</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i> 
                                    725 30th Street, Suite 208, Sacramento, CA 95816, United States
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i> 
                                    <a href="tel:+19166341570">+1 (916) 634 1570</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p><i className='bx bx-copyright'></i>{currentYear} <strong>Two Trees PPC</strong></p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/terms-of-service">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape16">
                <img src={Shape16} alt="Shape" />
            </div>
        </footer>
    );
}

export default Footer;