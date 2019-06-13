import React from 'react';

import './style.scss';

export default class TopPanel extends React.Component {
  render () {
    let { header, subtitle, left, right } = this.props;
    return (
      <div className="top-panel">
        <div className="top-panel__left">
          { left }
        </div>

        <div className="top-panel__header">
          <div className="top-panel__title">
            { header }
          </div>
          <div className="top-panel__subtitle text-secondary">
            { subtitle }
          </div>
        </div>

        <div className="top-panel__right">
          { right }
        </div>
      </div>
    );
  }
}