import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationLink = styled(Link)`
  align-items: center;
  color: black;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-weight: bold;
  justify-content: center;
  padding: 0.5rem;
  text-decoration: none;

  &:hover,
  &.active {
    color: #663399;
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
