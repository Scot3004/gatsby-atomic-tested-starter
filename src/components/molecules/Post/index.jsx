import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../../atoms/Avatar';
import Card from '../../atoms/Card';
import CardContent from '../../atoms/CardContent';

// eslint-disable react/no-danger
export const Post = ({ image, title, frontmatter, excerpt }) => (
  <Card>
    <Avatar src={image} alt={title} size="64px" />
    <CardContent>
      <small>{frontmatter.date}</small>
      <div>{excerpt}</div>
    </CardContent>
  </Card>
);
// eslint-enable react/no-danger

Post.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  frontmatter: PropTypes.shape({
    date: PropTypes.string.isRequired
  }).isRequired,
  excerpt: PropTypes.string.isRequired
};

export default Post;
