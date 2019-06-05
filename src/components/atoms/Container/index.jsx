import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainStyle = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 64em);
  justify-content: center;
  padding: 1rem;
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Main = ({ children }) => (
  <MainStyle>
    <MainContainer>{children}</MainContainer>
  </MainStyle>
);

export default Main;

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
