import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme from '../../../../theme';
import MetadataElement from '..';

describe('When I see the metadata of a post', () => {
  const tree = renderer.create(<MetadataElement theme={theme} />).toJSON();
  test('Then the metadata should be displayed muted and inline', () => {
    expect(tree).toMatchSnapshot();
  });
});
