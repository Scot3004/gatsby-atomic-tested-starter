import React from 'react';
import 'jest-styled-components';
import ShallowRenderer from 'react-test-renderer/shallow';
import PostPreview from '..';

describe('When I want to see the preview of one blog post', () => {
  const renderer = new ShallowRenderer();
  renderer.render(
    <PostPreview
      title="Title stub"
      excerpt="Excerpt stub"
      image="image_stub"
      slug="slug_stub"
    />
  );

  test('Then I should be able to see the title and description', () => {
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
