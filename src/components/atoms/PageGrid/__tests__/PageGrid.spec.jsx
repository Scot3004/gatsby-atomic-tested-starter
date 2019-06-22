import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme from '../../../../theme';
import PageGrid from '..';

describe('When I visit the site', () => {
  const tree = renderer.create(<PageGrid theme={theme} />).toJSON();
  test('Then a grid for the page should be shown', () => {
    expect(tree).toMatchSnapshot();
  });
});
