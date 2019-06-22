import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BoxedLayout from '../components/layouts/BoxedLayout';
import PostMetadata from '../components/organisms/PostMetadata';
import CardContent from '../components/atoms/CardContent';
import Card from '../components/atoms/Card';

export default function PostTemplate({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html, timeToRead } = markdownRemark;
  return (
    <BoxedLayout
      title={data.site.siteMetadata.title}
      menuLinks={data.site.siteMetadata.menuLinks}
    >
      <Card>
        <CardContent>
          <PostMetadata date={frontmatter.date} timeToRead={timeToRead} />
          {/* eslint-disable react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </CardContent>
      </Card>
    </BoxedLayout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
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
