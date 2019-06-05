import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../layouts';
import PostList from '../../organisms/PostList';

export default function ListPage({ data }) {
  return (
    <Layout title={data.site.siteMetadata.title}>
      <PostList data={data.allMarkdownRemark.edges} />
    </Layout>
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
