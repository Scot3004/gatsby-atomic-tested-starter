import React from 'react';
import PropTypes from 'prop-types';

import BoxedLayout from '../../layouts/BoxedLayout';
import PostList from '../../organisms/PostList';

export default function ListPage({ data }) {
  return (
    <BoxedLayout title={data.site.siteMetadata.title}>
      <PostList data={data.allMarkdownRemark.edges} />
    </BoxedLayout>
  );
}

ListPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};
