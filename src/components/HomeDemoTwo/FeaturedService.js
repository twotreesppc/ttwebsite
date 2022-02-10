import React from 'react';
import { Link } from "gatsby"

const FeaturedService = () => {
    return (
        <div className="boxes-area pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-boxes-box">
                            <div className="icon">
                                <i className="flaticon-research"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                </div>
                            </div>
                            <h3>
                                <Link to="/services-2">
                                    Digital Marketing
                                </Link>
                            </h3>
                            <p>From paid advertising to SEO, we help local businesses with getting maximum value out of every marketing budget dollar.</p>

                            <Link to="/single-services" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                Get Started 
                                <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-boxes-box">
                            <div className="icon">
                                <i className="flaticon-speed"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                </div>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Website Optimization
                                </Link>
                            </h3>
                            <p>We build, host and maintain some of the fastest websites on the internet. With us, your online presence is in the best hands!</p>
                            
                            <Link to="/single-services" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                Get Started 
                                <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-boxes-box">
                            <div className="icon">
                                <i className="flaticon-email-marketing"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                </div>
                            </div>
                            <h3>
                                <Link to="/single-services">
                                    Data Services
                                </Link>
                            </h3>
                            <p>With millions of data points available, our data team can develop precise digital audience targets for your business.</p>
                            
                            <Link to="/single-services" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                Get Started
                                <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedService;