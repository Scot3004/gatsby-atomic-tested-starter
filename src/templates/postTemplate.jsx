import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layouts';
import ContainerFluid from '../components/atoms/ContainerFluid';
import PostMetadata from '../components/molecules/PostMetadata';

export default function PostTemplate({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html, timeToRead } = markdownRemark;
  return (
    <Layout title={frontmatter.title}>
      <PostMetadata frontmatter={frontmatter} timeToRead={timeToRead} />
      {/* eslint-disable react/no-danger */}
      <ContainerFluid dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      fields {
        slug
      }
      timeToRead
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
