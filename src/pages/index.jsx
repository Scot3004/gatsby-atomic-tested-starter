import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layouts';
import PostList from '../components/organisms/PostList';

export const IndexPage = ({ data }) => (
  <Layout title={data.site.siteMetadata.title}>
    <PostList data={data.allMarkdownRemark.edges} />
  </Layout>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
    `}
    render={data => <IndexPage data={data} {...props} />}
  />
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};
