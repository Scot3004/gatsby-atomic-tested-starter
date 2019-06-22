import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme from '../../../../theme';
import NavIcon from '..';

describe('When I see an icon', () => {
  const tree = renderer.create(<NavIcon theme={theme} />).toJSON();
  test('Then it should be a inline element', () => {
    expect(tree).toMatchSnapshot();
  });
});
