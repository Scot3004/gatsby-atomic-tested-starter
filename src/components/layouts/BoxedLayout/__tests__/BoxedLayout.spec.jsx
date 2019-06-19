import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import BoxedLayout from '..';

test('it works', () => {
  const tree = renderer
    .create(<BoxedLayout title="title_stub">content stub</BoxedLayout>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
