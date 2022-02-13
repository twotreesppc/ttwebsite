import React from 'react';
import { Link } from "gatsby"

import TeamImg1 from '../../assets/images/team/mike-sq.jpg'
import TeamImg2 from '../../assets/images/team/mirah-sq.jpg'
import TeamImg3 from '../../assets/images/team/aaron-sq.jpg'
import TeamImg4 from '../../assets/images/team/lexi-sq.jpg'
import TeamImg5 from '../../assets/images/team/abigail-sq.jpg'
import TeamImg6 from '../../assets/images/team/cecilia-sq.jpg'

const OurTeamStyleOne = () => {
    return (
        <div className="team-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team-box">
                            <img src={TeamImg1} alt="team-image" />

                            <div className="content">
                                <h3>Michael Wisby</h3>
                                <span>Chief Strategist / CEO</span>
                            </div>

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team-box">
                            <img src={TeamImg2} alt="team-image" />

                            <div className="content">
                                <h3>Mirah Lucas</h3>
                                <span>Chief Operations Officer</span>
                            </div>

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="section-title">
                            <span className="sub-title">Our Team</span>
                            <h2>Human Powered Success</h2>

                            <Link to="/team-1" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                View All <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team-box">
                            <img src={TeamImg3} alt="team-image" />

                            <div className="content">
                                <h3>Aaron Brynen</h3>
                                <span>Digital Marketing Consultant</span>
                            </div>

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team-box">
                            <img src={TeamImg4} alt="team-image" />

                            <div className="content">
                                <h3>Lexi Spencer</h3>
                                <span>Digital Marketing Manager</span>
                            </div>

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team-box">
                            <img src={TeamImg5} alt="team-image" />

                            <div className="content">
                                <h3>Abigail Bolla</h3>
                                <span>Digital Marketing Assistant</span>
                            </div>

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team-box">
                            <img src={TeamImg6} alt="team-image" />

                            <div className="content">
                                <h3>Cecilia Qu'in</h3>
                                <span>Content Marketer</span>
                            </div>

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeamStyleOne;