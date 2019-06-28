import React from 'react';
import PropTypes from 'prop-types';

const InputGroup = props => {
  return (
    <div className="form-group">
      <label className="form-group__label" htmlFor={props.id}>
        {props.label}
        <input
          className="form-group__input"
          id={props.id}
          type={props.isDate ? 'datetime-local' : 'text'}
          onChange={props.onChange}
          value={props.value}
          disabled={props.disabled}
        />
      </label>
      <span className="form-group__hint">{props.hint}</span>
    </div>
  );
};

export default InputGroup;

InputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func,
  hint: PropTypes.string,
  isDate: PropTypes.bool,
  disabled: PropTypes.bool,
};

InputGroup.defaultProps = {
  onChange: () => {},
  hint: '',
  isDate: false,
  disabled: false,
};
