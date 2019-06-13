import React from 'react';

import { Link } from 'react-router-dom';

import './style.scss';

export default class FloatingButton extends React.Component {
  render () {
    return (
      <Link to={this.props.to} className="floating-button">
        { this.props.children }
      </Link>
    );
  }
}