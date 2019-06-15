import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layouts';
import PostDate from '../components/atoms/PostDate';
import ContainerFluid from '../components/atoms/ContainerFluid';

export default function PostTemplate({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout title={frontmatter.title}>
      <PostDate>{frontmatter.date}</PostDate>
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
