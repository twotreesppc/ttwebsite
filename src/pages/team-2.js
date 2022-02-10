import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/App/Footer';

import TeamImg1 from '../assets/images/team/mike-sq.jpg'
import TeamImg2 from '../assets/images/team/mirah-sq.jpg'
import TeamImg3 from '../assets/images/team/aaron-sq.jpg'
import TeamImg4 from '../assets/images/team/lexi-sq.jpg'
import TeamImg5 from '../assets/images/team/abigail-sq.jpg'
import TeamImg6 from '../assets/images/team/cecilia-sq.jpg'
import TeamImg7 from '../assets/images/team/team-img7.jpg'
import TeamImg8 from '../assets/images/team/team-img8.jpg'
import TeamImg9 from '../assets/images/team/team-img9.jpg'
import TeamImg10 from '../assets/images/team/team-img10.jpg'
import TeamImg11 from '../assets/images/team/team-img11.jpg'
import TeamImg12 from '../assets/images/team/team-img12.jpg'

const Team2 = () => {
    return (
        <Layout>
            <SEO title="Meet The Team" />

			<NavbarStyleTwo />

			<PageBanner 
                pageTitle="Meet The Last Humans In Marketing" 
            />  
			
            <div className="team-area-two pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <div className="image">
                                    <img src={TeamImg1} alt="Team" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Michael Wisby</h3>
                                    <span>Co-Founder, CEO</span>
                                    <i className="flaticon-share-icon"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <div className="image">
                                    <img src={TeamImg2} alt="Team" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Mirah Lucas</h3>
                                    <span>Managing Partner, COO</span>
                                    <i className="flaticon-share-icon"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <div className="image">
                                    <img src={TeamImg3} alt="Team" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Aaron Brynen</h3>
                                    <span>Digital Marketing Consultant</span>
                                    <i className="flaticon-share-icon"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <div className="image">
                                    <img src={TeamImg4} alt="Team" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Lexi Spencer</h3>
                                    <span>Digital Marketing Manager</span>
                                    <i className="flaticon-share-icon"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <div className="image">
                                    <img src={TeamImg5} alt="Team" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Abigail Bolla</h3>
                                    <span>Digital Marketing Assistant</span>
                                    <i className="flaticon-share-icon"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <div className="image">
                                    <img src={TeamImg6} alt="Team" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Cecilia Qu'in</h3>
                                    <span>Content Marketer</span>
                                    <i className="flaticon-share-icon"></i>
                                </div>
                            </div>
                        </div>

                        
                        

                        

                        

                       
                        
                    </div>
                </div>
            </div>

			<Footer />
		</Layout>
    )
}

export default Team2;