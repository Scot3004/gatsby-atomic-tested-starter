import React from 'react'
import 'jest-styled-components'
import { graphql, StaticQuery } from 'gatsby'
import renderer from 'react-test-renderer'
import PostTemplate from '../postTemplate'

const data = {
  "markdownRemark": {
    "fields": {
      "slug": "/blog/my-first-post/"
    },
    "html": "<p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>",
    "frontmatter": {
      "date": "November 07, 2017",
      "title": "My first blog post"
    }
  }
}

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Default Starter`,
        },
      },
    })
  )
})


test('query correctly', () => {
  const tree = renderer.create(<PostTemplate data={data}/>).toJSON()
  expect(graphql).toBeCalled()
  expect(tree).toMatchSnapshot()
})
