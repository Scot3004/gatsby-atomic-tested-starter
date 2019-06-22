import React from 'react';
import 'jest-styled-components';
import ShallowRenderer from 'react-test-renderer/shallow';
import Navigation from '..';

const menuLinks = [
  {
    icon: 'calendar',
    name: 'name stub',
    link: 'link_stub'
  }
];

describe('When I want to navigate through the pages', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Navigation menuLinks={menuLinks} />);
  test('Then i could see a navigation bar', () => {
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
