import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import PostPreview from '..';

const stub = {
  title: 'Title stub',
  image: 'image_stub',
  frontmatter: {
    date: 'date stub'
  },
  excerpt: 'html stub'
};

test('it works', () => {
  const tree = renderer.create(<PostPreview {...stub} />).toJSON();
  expect(tree).toMatchSnapshot();
});
