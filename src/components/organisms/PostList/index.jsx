import React from 'react';
import PropTypes from 'prop-types';
import PostPreview from '../../molecules/PostPreview';

export const PostList = ({ data }) => (
  <>
    {data.map(post => (
      <PostPreview
        key={post.node.fields.slug}
        title={post.node.frontmatter.title}
        image={post.node.frontmatter.image}
        excerpt={post.node.excerpt}
        slug={post.node.fields.slug}
      />
    ))}
  </>
);

PostList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        excerpt: PropTypes.string,
        frontmatter: PropTypes.shape({
          image: PropTypes.string,
          title: PropTypes.string
        }),
        fields: PropTypes.shape({
          slug: PropTypes.string
        })
      })
    })
  ).isRequired
};

export default PostList;
