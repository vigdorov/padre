import React from 'react';
import PropTypes from 'prop-types';

const FilterWrapper = props => {
  return <div className={`filter-wrapper ${props.type}`}>{props.title}</div>;
};

export default FilterWrapper;

FilterWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['danger', 'warning', 'success']).isRequired,
};
