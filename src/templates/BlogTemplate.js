import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/App/Footer';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Blog from '../components/Blog';


const BlogTemplate = ({data, location}) => {
const { PostData } = data
console.log('my data', PostData)

  // if (!post) return null;
  return (
    <Layout>
        <SEO title="Blog One" />
        <NavbarStyleTwo />

        <PageBanner 
            pageTitle={PostData.title} 
        />
        <Blog data={PostData}/>
        <Footer />
    </Layout>
  );
};

export default BlogTemplate;

export const query = graphql`
query BlogBySlug($slug: String!) {
  PostData: contentfulBlogPost(slug: {eq: $slug}) {
      id
      slug
      title
      publishdate
      content {
        raw
      }
      featuredimage {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
      }
      author {
        name
        picture {
          gatsbyImageData(width: 100, height: 100, layout: FIXED, quality: 100)
        }
        details {
          raw
        }
      }
      sections {
        ... on ContentfulSectionImage {
          __typename
          image {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
        ... on ContentfulSectionContent {
          __typename
          content {
            raw
          }
        }
        ... on ContentfulSectionBlockquote {
          __typename
          content {
            raw
          }
        }
      }
    }
  }
`;