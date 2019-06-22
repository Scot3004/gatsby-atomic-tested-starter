import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme from '../../../../theme';
import GlobalStyles from '..';

describe('When I visit the site', () => {
  const tree = renderer.create(<GlobalStyles theme={theme} />).toJSON();
  test('Then the global styles should be added to the site', () => {
    expect(tree).toMatchSnapshot();
  });
});
