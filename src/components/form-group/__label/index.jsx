import React, { Component } from 'react';

export default class Label extends Component {
  render () {
    let { id, value, isFilled } = this.props;
    let inputClass = 'form-group__label';
    if (isFilled) {
      inputClass += ' focus';
    }
    return (
      <label className={inputClass}
             htmlFor={ id }
      >
        { value }
      </label>
    );
  }
}