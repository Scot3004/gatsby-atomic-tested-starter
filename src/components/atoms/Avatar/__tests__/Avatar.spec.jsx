import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Avatar from '..';

const avatarSrc = 'src_stub';

test('it works', () => {
  const tree = renderer.create(<Avatar src={avatarSrc} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('it works 64px', () => {
  const tree = renderer.create(<Avatar size="64px" src={avatarSrc} />).toJSON();
  expect(tree).toMatchSnapshot();
});
