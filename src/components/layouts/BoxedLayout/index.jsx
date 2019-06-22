import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import Container from '../../atoms/Container';
import MainContainer from '../../atoms/MainContainer';
import PageGrid from '../../atoms/PageGrid';
import Navigation from '../../organisms/Navigation';
import GlobalStyle from '../../atoms/GlobalStyle';
import theme from '../../../theme';
import Profile from '../../organisms/Profile';
import Sidebar from '../../atoms/Sidebar';

export const BoxedLayout = ({ title, menuLinks, avatar, children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <GlobalStyle />
      <Container>
        <PageGrid>
          <Navigation menuLinks={menuLinks} />
          <Sidebar>
            <Profile name={title} avatar={avatar} />
          </Sidebar>
          <MainContainer>{children}</MainContainer>
        </PageGrid>
      </Container>
    </>
  </ThemeProvider>
);

BoxedLayout.propTypes = {
  title: PropTypes.string.isRequired,
  menuLinks: PropTypes.arrayOf(PropTypes.node).isRequired,
  avatar: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default BoxedLayout;
