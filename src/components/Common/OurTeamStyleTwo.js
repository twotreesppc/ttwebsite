import React from 'react';

import TeamImg1 from '../../assets/images/team/mike-sq.jpg'
import TeamImg2 from '../../assets/images/team/mirah-sq.jpg'
import TeamImg3 from '../../assets/images/team/aaron-sq.jpg'
import TeamImg4 from '../../assets/images/team/lexi-sq.jpg'
import TeamImg5 from '../../assets/images/team/abigail-sq.jpg'
import TeamImg6 from '../../assets/images/team/cecilia-sq.jpg'
import Shape17 from "../../assets/images/shape/shape17.png"

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        992: {
            items: 4,
        }
    }
};

const OurTeamStyleTwo = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="team-area-two ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Our Team</span>
                    <h2>Human Powered Success</h2>
                    <p>Don't leave your marketing to the automated software all the big agencies use to save on costs. We have a highly talented crew of marketing nerds working hard for our clients. We're all based in Sacramento, CA and we work very well together in a positive work environment!</p>
                </div>

                {display ? <OwlCarousel 
                    className="team-slides owl-carousel owl-theme"
                    {...options}
                >
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
                            <span>CEO</span>
                            <i className="flaticon-share-icon"></i>
                        </div>
                    </div>

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
                        <span>Chief Operations Officer</span>
                            <i className="flaticon-share-icon"></i>
                        </div>
                    </div>

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
                </OwlCarousel> : ''}
            </div>

            <div className="shape17">
                <img src={Shape17} alt="Shape" />
            </div>
        </div>
    )
}

export default OurTeamStyleTwo;