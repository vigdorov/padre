import React, { Component } from 'react';

export default class Hint extends Component {
  render () {
    let { value } = this.props;
    return (
      <small className="form-group__hint">
        { value }
      </small>
    );
  }
}
