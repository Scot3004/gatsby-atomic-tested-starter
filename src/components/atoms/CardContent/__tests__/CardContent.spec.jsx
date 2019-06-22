import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import CardContent from '..';
import theme from '../../../../theme';

describe('When I want to see a card element', () => {
  const tree = renderer.create(<CardContent theme={theme} />).toJSON();
  test('Then the content should not exceed the card dimensions', () => {
    expect(tree).toMatchSnapshot();
  });
});
