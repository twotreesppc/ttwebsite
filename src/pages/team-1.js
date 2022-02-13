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

const Team = () => {
    return (
        <Layout>
            <SEO title="Team" />

			<NavbarStyleTwo />

			<PageBanner 
                pageTitle="Team" 
            />  
			
            <div className="team-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-box">
                                <img src={TeamImg1} alt="Team" />

                                <div className="content">
                                    <h3>James Anderson</h3>
                                    <span>CEO</span>
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
                                <img src={TeamImg2} alt="Team" />

                                <div className="content">
                                    <h3>Sarah Taylor</h3>
                                    <span>Marketing Lead</span>
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
                                <img src={TeamImg3} alt="Team" />

                                <div className="content">
                                    <h3>Taylor Sopia</h3>
                                    <span>Web Designer</span>
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
                                <img src={TeamImg4} alt="Team" />

                                <div className="content">
                                    <h3>Harry Steve</h3>
                                    <span>Web Developer</span>
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
                                <img src={TeamImg5} alt="Team" />

                                <div className="content">
                                    <h3>Alina Smith</h3>
                                    <span>Advisor</span>
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
                                <img src={TeamImg6} alt="Team" />

                                <div className="content">
                                    <h3>David Warner</h3>
                                    <span>Support</span>
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
               

			<Footer />
		</Layout>
    )
}

export default Team;