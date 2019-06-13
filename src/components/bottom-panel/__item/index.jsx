import React from 'react';

import { Link } from 'react-router-dom';

export default class Item extends React.Component {
  handleClick = () => {
    let { link, onClickItem } = this.props;
    onClickItem(link);
  };

  render () {
    let { children, title, active, link } = this.props;
    let buttonClass = 'bottom-panel__item ' + (active && 'active');
    return (
      <Link to={link}
            className={buttonClass}
            onClick={this.handleClick}>
        <span className="bottom-panel__item-img">
          <i className="material-icons">
            { children }
          </i>
        </span>
        <span className="bottom-panel__item-title">
          { title }
        </span>
      </Link>
    );
  }
}