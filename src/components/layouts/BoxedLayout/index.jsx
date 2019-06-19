import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import Container from '../../atoms/Container';
import MainTitle from '../../atoms/MainTitle';
import MainContainer from '../../atoms/MainContainer';
import PageGrid from '../../atoms/PageGrid';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }
`;

export const BoxedLayout = ({ title, children }) => (
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
        <MainContainer>{children}</MainContainer>
      </PageGrid>
    </Container>
  </>
);

BoxedLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default BoxedLayout;
