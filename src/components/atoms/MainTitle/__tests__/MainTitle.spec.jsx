import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme from '../../../../theme';
import MainTitle from '..';

describe('When I visit the site', () => {
  const tree = renderer.create(<MainTitle theme={theme} />).toJSON();
  test('Then the site should have a general title', () => {
    expect(tree).toMatchSnapshot();
  });
});
