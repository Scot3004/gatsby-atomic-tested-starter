import React from 'react';
import 'jest-styled-components';
import ShallowRenderer from 'react-test-renderer/shallow';
import FeatherIcon from '..';

describe('When I want to see a icon', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<FeatherIcon name="calendar" />);
  test('Then an icon is displayed', () => {
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
