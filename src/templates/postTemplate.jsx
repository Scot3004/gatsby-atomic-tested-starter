import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layouts';

export default function PostTemplate({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout title={frontmatter.title}>
      <h2>{frontmatter.date}</h2>
      {/* eslint-disable react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      fields {
        slug
      }
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;

PostTemplate.propTypes = {
  data: PropTypes.shape().isRequired
};
