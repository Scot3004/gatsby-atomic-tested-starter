import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import Container from '../atoms/Container';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }

  div {
    min-width: 0;
  }
`;

export const Layout = ({ title, children }) => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <GlobalStyle />
    <Container>
      <header>
        <h1>{title}</h1>
      </header>
      {children}
    </Container>
  </>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;
