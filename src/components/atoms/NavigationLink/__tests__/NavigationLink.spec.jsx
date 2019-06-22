import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme from '../../../../theme';
import NavigationLink from '..';

describe('When I see the navigation links', () => {
  const tree = renderer.create(<NavigationLink theme={theme} />).toJSON();
  test('Then they should look neutral if the page is not the current page', () => {
    expect(tree).toMatchSnapshot();
  });
});
