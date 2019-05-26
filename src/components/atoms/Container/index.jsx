import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const MainStyle = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1024px);
  justify-content: center;
  padding: 1em;
`

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`

const Main = ({ children }) => (
  <MainStyle>
    <MainContainer>
      {children}
    </MainContainer>
  </MainStyle>
)

export default Main

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
