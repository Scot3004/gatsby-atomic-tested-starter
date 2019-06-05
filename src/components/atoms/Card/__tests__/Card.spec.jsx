import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Card from '..';

test('it works', () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});
