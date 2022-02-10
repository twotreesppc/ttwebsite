import React from 'react';
import { Link } from "gatsby"

import AboutImg from "../../assets/images/about-img2.png"
import Shape15 from "../../assets/images/shape/shape15.png"

const AboutSection = () => {
    return (
        <div className="about-area pb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src={AboutImg} alt="About" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="text">
                                <span className="sub-title">About Us</span>
                                <h2>Marketing That Amplifies Small Businesses</h2>
                                <p>We give businesses an equal shot of digital success by playing to their strengths and getting in front of their perfect customers at exactly the right time. We have over 20 years of experience and only work on a fixed amount of projects at any one time to ensure our team keeps a tight focus.</p>
                                
                                <ul className="funfacts-list">
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-menu-1"></i>
                                            <h3>46</h3>
                                            <p>Current Projects</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-web-settings"></i>
                                            <h3>$9.3M</h3>
                                            <p>Ad Spend Managed To Date</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-conversation"></i>
                                            <h3>6</h3>
                                            <p>Expert US Based Team Members</p>
                                        </div>
                                    </li>
                                </ul>

                                <Link to="/about-us-2" className="default-btn">
                                    More About Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape15">
                <img src={Shape15} alt="Shape" />
            </div>
        </div>
    )
}

export default AboutSection;