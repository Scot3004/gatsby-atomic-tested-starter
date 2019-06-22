import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Excerpt from '..';

describe('When I want to see a list of posts', () => {
  const tree = renderer.create(<Excerpt />).toJSON();
  test('Then i can see the excerpt without margins', () => {
    expect(tree).toMatchSnapshot();
  });
});
