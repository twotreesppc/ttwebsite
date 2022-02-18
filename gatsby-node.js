const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  
    const { data } = await graphql(`
    query {    
        Blogs: allContentfulBlogPost {
            edges {
                node {
                    id
                    slug
                    title
                }
            }
        }
    }
  `)
  const DEFAULT_BLOG_BASE_PATH = '/blog';
  const DEFAULT_BLOG_POSTS_PER_PAGE = 6;

  const basePath = DEFAULT_BLOG_BASE_PATH;
  const blogs = data.Blogs.edges;

  const templatesDir = path.resolve(__dirname, './src/templates');
  const postsPerPage = DEFAULT_BLOG_POSTS_PER_PAGE;

  const numPages = Math.ceil(blogs.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
  createPage({
    path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
    component:  path.resolve(templatesDir, 'BlogListTemplate.js'),
    context: {
      limit: postsPerPage,
      skip: i * postsPerPage,
      numPages,
      currentPage: i + 1,
    },
  })
  })

  blogs.forEach(({ node }) => {     
    let blogURL = `${basePath}/${node.slug}`;

    createPage({
      path: blogURL,
      component: path.resolve(templatesDir, 'BlogTemplate.js'),
      context: {
        slug: node.slug,
        basePath,
      },
    });
  })
}