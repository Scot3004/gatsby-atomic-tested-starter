import React from 'react';
import 'jest-styled-components';
import ShallowRenderer from 'react-test-renderer/shallow';
import BoxedLayout from '..';

describe('When I open a page with boxed layout', () => {
  const renderer = new ShallowRenderer();
  renderer.render(
    <BoxedLayout title="title_stub" menuLinks={[]}>
      content stub
    </BoxedLayout>
  );
  test('Then the page should be wrapped by a box', () => {
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
