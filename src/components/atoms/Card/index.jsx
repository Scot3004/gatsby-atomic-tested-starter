import styled from 'styled-components'

export const Card = styled.div`
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  box-sizing: border-box;
  display: flex;
  margin: 0 0 1rem 0;
  padding: .6rem;
  transition: 0.3s;
  width: 100%;

  &:hover {
    box-shadow: 0 6px 12px 0 rgba(0,0,0,0.2);
  }

  &:last-child {
    margin: 0;
  }
`

export default Card
