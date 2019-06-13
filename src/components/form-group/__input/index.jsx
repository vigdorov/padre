import React, { Component } from 'react';

export default class Input extends Component {
  render () {
    let { id, value, onChange } = this.props;
    return (
      <input className="form-group__input"
             type="text"
             id={ id }
             value={ value }
             onChange={ onChange }
      />
    );
  }
}
