import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme from '../../../../theme';
import NavigationCard from '..';

describe('When I want to see the navigation elements', () => {
  const tree = renderer.create(<NavigationCard theme={theme} />).toJSON();
  test('Then they should not have space from the parent', () => {
    expect(tree).toMatchSnapshot();
  });
});
