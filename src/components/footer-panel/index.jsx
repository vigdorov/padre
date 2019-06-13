import React from 'react';

import './style.scss';

export default class FooterPanel extends React.Component {
  render () {
    return (
      <div className="footer-panel">
        { this.props.children }
      </div>
    );
  }
}