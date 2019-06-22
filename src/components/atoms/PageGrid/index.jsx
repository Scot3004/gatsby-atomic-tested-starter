import styled from 'styled-components';

const PageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'navigation' 'sidebar' 'main';

  @media only screen and (min-width: 48em) {
    grid-template-columns: 1fr 3fr;
    grid-template-areas: 'sidebar navigation' 'sidebar main';
    grid-gap: 2rem;
    grid-row-gap: 0.5em;
  }
`;

export default PageGrid;
