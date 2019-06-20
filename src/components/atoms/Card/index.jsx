import styled from 'styled-components';

export const Card = styled.div`
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  display: flex;
  margin: 0 0 1rem 0;
  padding: 0.6rem;
  transition: 0.3s;
  width: 100%;

  &:last-child {
    margin: 0;
  }
`;

export default Card;
