import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Avatar from '../../atoms/Avatar';
import LinkCard from '../../atoms/LinkCard';
import CardContent from '../../atoms/CardContent';
import Excerpt from '../../atoms/Excerpt';
import Title from '../../atoms/Title';

export const PostPreview = ({ image, title, slug, excerpt }) => (
  <LinkCard>
    <Avatar src={image} alt={title} size="64px" />
    <CardContent>
      <Link to={slug}>
        <Title>{title}</Title>
      </Link>
      <Excerpt>{excerpt}</Excerpt>
    </CardContent>
  </LinkCard>
);

PostPreview.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

export default PostPreview;
