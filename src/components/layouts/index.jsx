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
  }

  div {
    min-width: 0;
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
