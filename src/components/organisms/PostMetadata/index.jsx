import React from 'react';
import PropTypes from 'prop-types';
import MetadataElement from '../../atoms/MetadataElement';
import MetadataText from '../../atoms/MetadataText';
import MetadataContainer from '../../atoms/MetadataContainer';
import FeatherIcon from '../../molecules/FeatherIcon';

export const PostMetadata = ({ date, timeToRead }) => {
  return (
    <MetadataContainer>
      <MetadataElement>
        <FeatherIcon name="calendar" size={16} />
        <MetadataText>{date}</MetadataText>
      </MetadataElement>
      <MetadataElement>
        <FeatherIcon name="clock" size={16} />
        <MetadataText>{timeToRead} minutes to read</MetadataText>
      </MetadataElement>
    </MetadataContainer>
  );
};

PostMetadata.propTypes = {
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired
};

export default PostMetadata;
