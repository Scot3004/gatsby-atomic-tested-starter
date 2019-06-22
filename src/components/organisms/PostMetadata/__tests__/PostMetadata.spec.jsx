import React from 'react';
import 'jest-styled-components';
import ShallowRenderer from 'react-test-renderer/shallow';
import PostMetadata from '..';

describe('When I want to see the metadata of a post', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<PostMetadata date="2019-06-22" timeToRead="3" />);
  test('Then the metadata should be displayed', () => {
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
