import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Title from '..';

describe('When I want to see a list of posts', () => {
  const tree = renderer.create(<Title />).toJSON();
  test('Then the title should be highlighted', () => {
    expect(tree).toMatchSnapshot();
  });
});
