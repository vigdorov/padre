import React from 'react';
import PropTypes from 'prop-types';

const TextareaGroup = props => {
  return (
    <div className="form-group">
      <label className="form-group__label" htmlFor={props.id}>
        {props.label}
        <textarea
          className="form-group__textarea"
          id={props.id}
          onChange={props.onChange}
          value={props.value}
          disabled={props.disabled}
        />
      </label>
      <span className="form-group__hint">{props.hint}</span>
    </div>
  );
};

export default TextareaGroup;

TextareaGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  hint: PropTypes.string,
  disabled: PropTypes.bool,
};

TextareaGroup.defaultProps = {
  onChange: () => {},
  hint: '',
  isDate: false,
  disabled: false,
};
