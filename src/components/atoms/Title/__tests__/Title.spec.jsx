import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Title from '..';

test('it works', () => {
  const tree = renderer.create(<Title />).toJSON();
  expect(tree).toMatchSnapshot();
});
