import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${props => props.theme.textColor};
    background: ${props => props.theme.backgroundColor};
    overflow-y: scroll;
  }

  a {
    color: ${props => props.theme.primaryColor};
    &:visited {
      color: ${props => props.theme.visitedColor};
    }
  }
`;

export default GlobalStyle;
