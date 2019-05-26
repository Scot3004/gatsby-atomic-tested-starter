import React from 'react'
import PropTypes from 'prop-types'
import Container from '../atoms/Container'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f5f5f5;
    width: 100%;
  }

  pre {
    white-space: pre-wrap; //css3
    white-space: moz-pre-wrap; //firefox
    white-space: -pre-wrap; //opera 4-6
    white-space: -o-pre-wrap; //opera 7
    word-wrap: break-word; //internet explorer
  }
`

export const Layout = props => (
  <>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <GlobalStyle />
    <Container>
      <header>
        <h1>{props.title}</h1>
      </header>
      {props.children}
    </Container>
  </>
)

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Layout
