import React from 'react';
import 'jest-styled-components';
import ShallowRenderer from 'react-test-renderer/shallow';
import PostList from '..';

const stub = [
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
];

describe('When I want to see the list of posts', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<PostList data={stub} />);
  test('Then the list of posts should be displayed', () => {
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
