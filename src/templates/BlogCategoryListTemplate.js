import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/App/Footer';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BlogIndex from '../components/Blog/BlogIndex';


const BlogCategoryListTemplate = (props) => {
  const { data } = props
  const { currentPage, numPages } = props.pageContext  
  const { edges: blogsData } = data.Blogs

  if (!blogsData) return null;
  return (
    <Layout>
        <SEO title="Blog One" />
        <NavbarStyleTwo />

        <PageBanner 
            pageTitle="Blog" 
        />
        <BlogIndex data={blogsData} currentPage={currentPage} numPages={numPages}/>  
        <Footer />
    </Layout>
  );
};

BlogCategoryListTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogCategoryListTemplate;

export const data = graphql`
query ($skip: Int!, $limit: Int!) {
  Blogs: allContentfulBlogPost(
      skip: $skip
      limit: $limit
      sort: {fields: publishdate, order: DESC}
    ) {
      edges {
        node {
          id
          slug
          title
          publishdate
          featuredimage {
            gatsbyImageData(quality: 100, layout: CONSTRAINED, width: 400, height: 350)
          }
          author {
            name
            picture {
              gatsbyImageData(width: 58, height: 58, layout: FIXED, quality: 100)
            }
          }
        }
      }
    }
  }
`;
