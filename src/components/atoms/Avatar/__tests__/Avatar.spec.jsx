import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Avatar from '..';

describe('When an avatar is displayed', () => {
  const avatarSrc = 'src_stub';

  test('Then it will be rendered in the given size', () => {
    const tree = renderer
      .create(<Avatar size="64px" src={avatarSrc} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
