import styled from 'styled-components';
import Card from '../Card';

const ProfileCard = styled(Card)`
  justify-content: center;
  flex-flow: column;

  @media only screen and (min-width: 48em) {
    height: 95vh;
    margin: 0;
  }
`;

export default ProfileCard;
