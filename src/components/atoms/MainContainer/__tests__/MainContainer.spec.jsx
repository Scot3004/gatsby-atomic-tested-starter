import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme from '../../../../theme';
import MainContainer from '..';

describe('When I visit the site', () => {
  const tree = renderer.create(<MainContainer theme={theme} />).toJSON();
  test('Then I can see a wrapper without scrolls', () => {
    expect(tree).toMatchSnapshot();
  });
});
