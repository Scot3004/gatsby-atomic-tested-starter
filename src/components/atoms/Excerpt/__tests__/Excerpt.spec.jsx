import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Excerpt from '..';

test('it works', () => {
  const tree = renderer.create(<Excerpt />).toJSON();
  expect(tree).toMatchSnapshot();
});
