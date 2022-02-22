import React from 'react';
import { Link } from "gatsby"
import BlogItem from "../../components/Blog/BlogItem";
import BlogImg1 from '../../assets/images/blog/blog-img1.jpg'
import BlogImg2 from '../../assets/images/blog/blog-img2.jpg'
import BlogImg3 from '../../assets/images/blog/blog-img3.jpg'

import User1 from '../../assets/images/user1.jpg'
import User2 from '../../assets/images/user2.jpg'
import User3 from '../../assets/images/user3.jpg'


const LatestBlogPost = ({data, currentPage, numPages}) => {
    return(
       <div className="blog-area bg-f9f9f9 ptb-100">
          <div className="container">
                 <div className="row">
                 { data && data.map((item,index)=> <BlogItem key={index} data={item}/>)}   
                </div>
            </div>
         </div>
    );
    };

export default LatestBlogPost;