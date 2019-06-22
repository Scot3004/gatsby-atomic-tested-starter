import React from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../../atoms/MainTitle';
import Avatar from '../../atoms/Avatar';
import ProfileCard from '../../atoms/ProfileCard';

export const Profile = ({ name, avatar }) => {
  return (
    <ProfileCard>
      <Avatar src={avatar} alt={name} size="96px" />
      <MainTitle>{name}</MainTitle>
    </ProfileCard>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

export default Profile;
