import React from 'react';
import 'jest-styled-components';
import ShallowRenderer from 'react-test-renderer/shallow';
import Profile from '..';

describe('When I visit the site', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Profile name="sergio" avatar="img_stub" />);
  test('Then the profile of the blog owner should be shown', () => {
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
