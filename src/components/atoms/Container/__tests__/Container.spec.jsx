import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Container from '..';

test('it works', () => {
  const tree = renderer.create(<Container>container stub</Container>).toJSON();
  expect(tree).toMatchSnapshot();
});
