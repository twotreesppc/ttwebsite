import React, { useState } from "react";
import {Link} from 'gatsby'

import Logo from "../../assets/images/white-logo.png"
import BlackLogo from "../../assets/images/logo.png"

import InstagramImg1 from '../../assets/images/team/mike-sq.jpg'
import InstagramImg2 from '../../assets/images/team/mirah-sq.jpg'
import InstagramImg3 from '../../assets/images/team/aaron-sq.jpg'
import InstagramImg4 from '../../assets/images/team/lexi-sq.jpg'
import InstagramImg5 from '../../assets/images/team/abigail-sq.jpg'
import InstagramImg6 from '../../assets/images/team/cecilia-sq.jpg'


const NavbarStyleTwo = () => {
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0); 
    })

    // Search Modal
    const [isActiveSearchModal, setActiveSearchModal] = useState("false");
    const handleToggleSearchModal = () => {
        setActiveSearchModal(!isActiveSearchModal);
    };

    // Sidebar Modal
    const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
    const handleToggleSidebarModal = () => {
        setActiveSidebarModal(!isActiveSidebarModal);
    };
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area navbar-color-white">
                <div className="main-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link to="/" onClick={toggleNavbar} className="navbar-brand">
                                <img src={Logo} alt="logo" />
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                

                                    <li className="nav-item">
                                        <Link to="/about-us-1" onClick={e => e.preventDefault()} className="nav-link">
                                            About <i className='bx bx-chevron-down'></i>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            
                                            <li className="nav-item">
                                                <Link to="/team-2" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Meet The Team
                                                </Link>
                                            </li> 
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/services-2" onClick={e => e.preventDefault()} className="nav-link">
                                            Solutions 
                                        </Link>
                                     </li>
     
                                    <li className="nav-item">
                                        <Link to="/portfolio-5" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                            Case Studies
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/blog-2" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                            Blog                                        
                                        </Link>                                                                          
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/contact" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                            Get Started
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="others-option d-flex align-items-center">
                                <div className="option-item">
                                   <a href="tel:19166341570">(916) 634-1570</a>
                                </div>
                                                           </div>
                        </nav>
                    </div>
                </div>
            </div>
 
           
        </React.Fragment>
    );
}

export default NavbarStyleTwo;
