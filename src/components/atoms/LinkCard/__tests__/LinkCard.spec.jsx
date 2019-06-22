import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme from '../../../../theme';
import GlobalStyles from '..';

describe('When I want to see the list of posts', () => {
  const tree = renderer.create(<GlobalStyles theme={theme} />).toJSON();
  test('Then the posts should be displayed in cards', () => {
    expect(tree).toMatchSnapshot();
  });
});
