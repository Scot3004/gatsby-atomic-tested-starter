import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Container from '..';
import theme from '../../../../theme';

describe('When I open a page with content inside a container', () => {
  const tree = renderer
    .create(<Container theme={theme}>container stub</Container>)
    .toJSON();
  test('Then the content should be displayed with a width of up to 64em', () => {
    expect(tree).toMatchSnapshot();
  });
});
