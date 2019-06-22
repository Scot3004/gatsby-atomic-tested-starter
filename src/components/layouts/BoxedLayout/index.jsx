import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import Container from '../../atoms/Container';
import MainTitle from '../../atoms/MainTitle';
import MainContainer from '../../atoms/MainContainer';
import PageGrid from '../../atoms/PageGrid';
import Navigation from '../../organisms/Navigation';
import GlobalStyle from '../../atoms/GlobalStyle';
import theme from '../../../theme';

export const BoxedLayout = ({ title, menuLinks, children }) => (
  <ThemeProvider theme={theme}>
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
          <Navigation menuLinks={menuLinks} />
          <MainContainer>{children}</MainContainer>
        </PageGrid>
      </Container>
    </>
  </ThemeProvider>
);

BoxedLayout.propTypes = {
  title: PropTypes.string.isRequired,
  menuLinks: PropTypes.arrayOf(PropTypes.node).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default BoxedLayout;
