import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Card from '..';
import theme from '../../../../theme';

describe('When I want to see a card element', () => {
  const tree = renderer.create(<Card theme={theme} />).toJSON();
  test('Then the card should have borders and a good spacing', () => {
    expect(tree).toMatchSnapshot();
  });
});
