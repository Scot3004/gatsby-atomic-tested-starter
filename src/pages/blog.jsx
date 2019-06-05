import { graphql } from 'gatsby';

import ListPage from '../components/pages/ListPage';

export default ListPage;

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { post_type: { eq: $path } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image
          }
        }
      }
    }
  }
`;
