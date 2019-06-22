import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme from '../../../../theme';
import MetadataContainer from '..';

describe('When I see the metadata of a post', () => {
  const tree = renderer.create(<MetadataContainer theme={theme} />).toJSON();
  test('Then the metadata should be clearly separated', () => {
    expect(tree).toMatchSnapshot();
  });
});
