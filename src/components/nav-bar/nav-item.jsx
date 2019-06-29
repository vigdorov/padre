import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = props => {
  const itemClass = ['nav-bar__item'];
  if (props.active) {
    itemClass.push('active');
  }

  return (
    <Link
      to={props.url}
      className={itemClass.join(' ')}
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
  active: PropTypes.bool.isRequired,
};
