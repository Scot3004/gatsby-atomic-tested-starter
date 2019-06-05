import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import CardContent from '..';

test('it works', () => {
  const tree = renderer.create(<CardContent />).toJSON();
  expect(tree).toMatchSnapshot();
});
