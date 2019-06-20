import React from 'react';
import PropTypes from 'prop-types';
import NavigationCard from '../../atoms/NavigationCard';
import FeatherIcon from '../../molecules/FeatherIcon';
import NavigationLink from '../../atoms/NavigationLink';

export const Navigation = ({ menuLinks }) => (
  <NavigationCard>
    {menuLinks.map(link => (
      <NavigationLink to={link.link} key={link.name}>
        <FeatherIcon name={link.icon} />
        {link.name}
      </NavigationLink>
    ))}
  </NavigationCard>
);

Navigation.propTypes = {
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string
    })
  ).isRequired
};

export default Navigation;
