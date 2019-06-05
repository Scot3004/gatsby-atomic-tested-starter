import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
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

test('it works', () => {
  const tree = renderer.create(<PostList data={stub} />).toJSON();
  expect(tree).toMatchSnapshot();
});
