import React from 'react';
import PropTypes from 'prop-types';

const CircleIcon = props => {
  return <div className={`circle-icon ${props.type}`}>{props.children}</div>;
};

export default CircleIcon;

CircleIcon.propTypes = {
  type: PropTypes.oneOf(['warning', 'danger', 'success', 'attention']).isRequired,
};
