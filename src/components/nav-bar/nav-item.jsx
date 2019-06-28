import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = props => {
  return (
    <Link
      to={props.url}
      className="nav-bar__item"
      style={{ sortOrder: props.sortOrder }}>
      {props.ico}
      <span className="nav-bar__title">{props.title}</span>
    </Link>
  );
};

export default NavItem;

NavItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sortOrder: PropTypes.number.isRequired,
  ico: PropTypes.node.isRequired,
};
