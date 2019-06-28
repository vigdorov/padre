import React from 'react';
import PropTypes from 'prop-types';

const SelectGroup = props => {
  return (
    <div className="form-group">
      <span className="form-group__label">{props.label}</span>
      <select
        name={props.id}
        id={props.id}
        value={props.value}
        className="form-group__select"
        onChange={props.onChange}>
        {props.options.map(value => {
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectGroup;

SelectGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
