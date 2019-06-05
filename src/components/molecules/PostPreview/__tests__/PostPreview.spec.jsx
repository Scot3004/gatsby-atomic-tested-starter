import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import PostPreview from '..';

const stub = {
  title: 'Title stub',
  excerpt: 'Excerpt stub',
  image: 'image_stub',
  slug: 'slug_stub'
};

test('it works', () => {
  const tree = renderer.create(<PostPreview {...stub} />).toJSON();
  expect(tree).toMatchSnapshot();
});
