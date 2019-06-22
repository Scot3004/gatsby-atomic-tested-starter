import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationLink = styled(Link)`
  align-items: center;
  color: ${props => props.theme.textColor};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-weight: bold;
  justify-content: center;
  padding: 0.5rem;
  text-decoration: none;

  &:visited {
    color: ${props => props.theme.textColor};
  }

  &.active {
    color: ${props => props.theme.visitedColor};
  }

  &:hover {
    color: ${props => props.theme.primaryColor};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    margin: -$border; /* !importanté */
    border-radius: inherit; /* !importanté */
    background: linear-gradient(to right, red, orange);
  }
`;

export default NavigationLink;
