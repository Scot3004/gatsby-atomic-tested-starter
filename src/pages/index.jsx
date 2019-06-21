import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import BoxedLayout from '../components/layouts/BoxedLayout';
import PostList from '../components/organisms/PostList';

export const IndexPage = ({ data }) => (
  <BoxedLayout
    title={data.site.siteMetadata.title}
    menuLinks={data.site.siteMetadata.menuLinks}
  >
    <PostList data={data.allMarkdownRemark.edges} />
  </BoxedLayout>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
              icon
              partiallyActive
            }
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
