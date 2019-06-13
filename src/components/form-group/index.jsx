import React from 'react';

import * as PropTypes from 'prop-types';

import Label from './__label';
import Input from './__input';
import Hint from './__hint';

import './style.scss';

export default class FormGroup extends React.Component {
  render () {
    let { label, value, hint, id, onChange } = this.props;
    let isFilled = value.length > 0;
    return (
      <div className="form-group">
        <Input id={ id }
               value={ value }
               onChange={ onChange }
        />
        <Label id={ id }
               value={ label }
               isFilled={ isFilled }
        />
        <Hint value={ hint } />
      </div>
    );
  }
}

FormGroup.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};