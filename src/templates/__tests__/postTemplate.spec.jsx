import React from 'react';
import 'jest-styled-components';
import { graphql } from 'gatsby';
import ShallowRenderer from 'react-test-renderer/shallow';
import PostTemplate from '../postTemplate';

const data = {
  site: {
    siteMetadata: {
      title: 'Molecular starter',
      menuLinks: []
    }
  },
  markdownRemark: {
    fields: {
      slug: '/blog/my-first-post/'
    },
    html:
      '<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>',
    timeToRead: '3',
    frontmatter: {
      date: 'November 07, 2017',
      title: 'My first blog post'
    }
  }
};

describe('When I want to see one blog post', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<PostTemplate data={data} />);

  test('Then the post should be fetched', () => {
    expect(graphql).toBeCalled();
  });

  test('Then the post should be displayed', () => {
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
