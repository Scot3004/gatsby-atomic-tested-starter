import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import Container from '../atoms/Container';
import MainTitle from '../atoms/MainTitle';
import MinWidthContainer from '../atoms/MinWidthContainer';
import PageGrid from '../atoms/PageGrid';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }
`;

export const Layout = ({ title, children }) => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <GlobalStyle />
    <Container>
      <PageGrid>
        <header>
          <MainTitle>{title}</MainTitle>
        </header>
        <MinWidthContainer>{children}</MinWidthContainer>
      </PageGrid>
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
