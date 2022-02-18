import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";
import moment from 'moment';
import SEO from "../App/SEO"
import NavbarStyleTwo from '../App/NavbarStyleTwo';
import PageBanner from '../Common/PageBanner';
import Footer from '../App/Footer';
import BlogSidebar from './BlogSidebar';
import BlogComments from './BlogComments';
import RichText from '../RichText';
import AuthorInfo from "./AuthorInfo";
import ComponentContainer from '../ComponentContainer';

import BlogImg1 from '../../assets/images/blog/blog-img4.jpg'
import BlogImg2 from '../../assets/images/blog/blog-img3.jpg'
import BlogImg3 from '../../assets/images/blog/blog-img5.jpg'

import User1 from '../../assets/images/user1.jpg'

//import Share from './Share'
const Blog = ({data, location}) => {
const {slug, title, content, publishdate, featuredimage, author, sections } = data
const stwitterHandle = "_MsLinda";
return(
  <div className="blog-details-area bg-f9f9f9 ptb-100">
      <div className="container">
          <div className="row">
              <div className="col-lg-8 col-md-12">
                  <div className="blog-details-desc">
                      <GatsbyImage image={getImage(featuredimage)} alt={title} />

                      <div className="article-content">
                          <div className="entry-meta">
                              <ul>
                                  <li>
                                      <i className='bx bx-calendar'></i>
                                      <span>Last Updated</span>
                                      {moment(publishdate).format('MMM DD, YYYY')}
                                  </li>
                              </ul>
                          </div>
                          <div className="w-100 my-4"><RichText content={content} /></div>
                          {sections.map((section, index) => (
                            <ComponentContainer data={section} key={index} />
                          ))}
                         
                       </div>

                      <div className="article-footer">

                          <div className="article-share">
                              <ul className="social">
                                  <li><span>Share:</span></li>
                                  <li><a href="#" className="facebook" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                  <li><a href="#" className="twitter" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                  <li><a href="#" className="linkedin" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                  <li><a href="#" className="instagram" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                              </ul>
                          </div>
                      </div>

                      <AuthorInfo data={author}/>

                  </div>
              </div>

              <div className="col-lg-4 col-md-12">
                  <div className="blog-right-sidebar">
                      <BlogSidebar />
                  </div>
              </div>
          </div>
      </div>
    </div>
);
};
export default Blog;