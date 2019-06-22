import React from 'react';
import 'jest-styled-components';
import { graphql, StaticQuery } from 'gatsby';
import ShallowRenderer from 'react-test-renderer/shallow';
import IndexPageWithQuery from '..';

const data = {
  site: {
    siteMetadata: {
      title: 'Molecular starter',
      menuLinks: []
    }
  },
  allMarkdownRemark: {
    edges: [
      {
        node: {
          id: '39cb6d6b-1bf3-5aa1-a310-b882314db77b',
          excerpt:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut…',
          frontmatter: {
            date: 'November 07, 2017',
            title: 'My first blog post',
            image: 'https://www.secorto.com/img/logo.png'
          },
          fields: {
            slug: '/blog/my-first-post'
          }
        }
      }
    ]
  }
};

describe('When I want to see the home page', () => {
  const renderer = new ShallowRenderer();
  StaticQuery.mockImplementation(({ render }) => {
    return <div>{render(data)}</div>;
  });
  renderer.render(<IndexPageWithQuery data={data} />);

  test('Then the posts should be fetched', () => {
    expect(graphql).toBeCalled();
  });

  test('Then the page should be rendered', () => {
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
