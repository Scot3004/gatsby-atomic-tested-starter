import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BoxedLayout from '../components/layouts/BoxedLayout';
import PostMetadata from '../components/molecules/PostMetadata';

export default function PostTemplate({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html, timeToRead } = markdownRemark;
  return (
    <BoxedLayout title={frontmatter.title}>
      <PostMetadata date={frontmatter.date} timeToRead={timeToRead} />
      {/* eslint-disable react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </BoxedLayout>
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
