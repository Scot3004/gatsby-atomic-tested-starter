import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Navigation from '..';

const menuLinks = [
  {
    icon: 'calendar',
    name: 'name stub',
    link: 'link_stub'
  }
];

test('it works', () => {
  const tree = renderer.create(<Navigation menuLinks={menuLinks} />).toJSON();
  expect(tree).toMatchSnapshot();
});
