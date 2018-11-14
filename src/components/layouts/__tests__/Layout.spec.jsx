import React from 'react'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import Layout from '..'

test('it works', () => {
  const tree = renderer.create(<Layout title='title_stub' />).toJSON()
  expect(tree).toMatchSnapshot()
})
