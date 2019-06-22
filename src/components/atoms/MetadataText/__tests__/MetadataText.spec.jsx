import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme from '../../../../theme';
import MetadataText from '..';

describe('When I see the metadata of a post', () => {
  const tree = renderer.create(<MetadataText theme={theme} />).toJSON();
  test('Then the text should be lighther', () => {
    expect(tree).toMatchSnapshot();
  });
});
