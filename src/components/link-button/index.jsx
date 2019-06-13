import React from 'react';

import { Link } from 'react-router-dom';

import './style.scss';

export default class LinkButton extends React.Component {
  render () {
    return (
      <Link className="link-button active" {...this.props}>
        {this.props.children}
      </Link>
    );
  }
}