import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { ThemeContext } from 'styled-components';
import { FaCalendarAlt, FaUserClock } from 'react-icons/fa';
import MetadataElement from '../../atoms/MetadataElement';
import MetadataText from '../../atoms/MetadataText';
import MetadataContainer from '../../atoms/MetadataContainer';

export const PostMetadata = ({ date, timeToRead }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <IconContext.Provider
      value={{ style: { color: themeContext.primaryColor } }}
    >
      <MetadataContainer>
        <MetadataElement>
          <FaCalendarAlt />
          <MetadataText>{date}</MetadataText>
        </MetadataElement>
        <MetadataElement>
          <FaUserClock />
          <MetadataText>{timeToRead} minutes to read</MetadataText>
        </MetadataElement>
      </MetadataContainer>
    </IconContext.Provider>
  );
};

PostMetadata.propTypes = {
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired
};

export default PostMetadata;
