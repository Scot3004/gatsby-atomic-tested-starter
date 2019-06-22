import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme from '../../../../theme';
import ProfileCard from '..';

describe('When I visit the site', () => {
  const tree = renderer.create(<ProfileCard theme={theme} />).toJSON();
  test('Then the profile of the blog owner should be shown', () => {
    expect(tree).toMatchSnapshot();
  });
});
