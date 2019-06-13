import React from 'react';
import PropTypes from 'prop-types';

import { ArrowForwardIos } from '@material-ui/icons';

import './style.scss'

export default class CardBrief extends React.Component {
  render () {
    let { title, body, footerTitle, footerBody} = this.props,
        { time, notifyIcon, notifyColor} = this.props;

    return (
      <div className="card-brief">
        <div className="card-brief__title">
          { title }
          <span className="card-brief__date-time active">
            { time }
                </span>
        </div>
        <div className="card-brief__body">
          { body }
        </div>
        <div className="card-brief__footer">
          <span className="card-brief__footer-title">
            { footerTitle }
          </span>
          <span className="card-brief__footer-body text-secondary">
            { footerBody }
          </span>
        </div>
        <div className={ 'card-brief__notify ' + notifyColor}>
          { notifyIcon }
        </div>
        <div className="card-brief__more-arrow">
          <ArrowForwardIos className="card-brief__more-arrow_img"/>
        </div>
      </div>
    );
  }
}

CardBrief.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  footerTitle: PropTypes.string,
  footerBody: PropTypes.string,
  time: PropTypes.string,
  notifyIcon: PropTypes.node,
  notifyColor: PropTypes.string
};