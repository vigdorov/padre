import React from 'react';
import PropTypes from 'prop-types';

const SelectShopsGroup = props => {
  return (
    <div className="form-group">
      <span className="form-group__label">{props.label}</span>
      <select
        name={props.id}
        id={props.id}
        value={props.value}
        className="form-group__select"
        onChange={props.onChange}>
        {props.shops.map(shop => {
          return (
            <option key={shop.id} value={shop.id}>
              {`${shop.number} ${shop.address}`}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectShopsGroup;

SelectShopsGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  shops: PropTypes.arrayOf(PropTypes.object).isRequired,
};
