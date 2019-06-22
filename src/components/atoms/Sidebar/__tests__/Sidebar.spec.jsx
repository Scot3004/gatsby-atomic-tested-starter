import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme from '../../../../theme';
import Sidebar from '..';

describe('When I visit the site in a desktop', () => {
  const tree = renderer.create(<Sidebar theme={theme} />).toJSON();
  test('Then the profile of the blog owner should be shown in a sidebar', () => {
    expect(tree).toMatchSnapshot();
  });
});
