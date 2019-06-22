import styled from 'styled-components';

export const Avatar = styled.img`
  flex: 0 0 ${props => props.size};
  width: ${props => props.size};
  height: ${props => props.size};
  padding: 0.6rem;
`;

export default Avatar;
