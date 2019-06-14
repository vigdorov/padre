import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Info, Check, Edit } from '@material-ui/icons';

import dateWorker from '../../../functions/date-worker';

import CardBrief from '../../../components/card-brief';

import './style.scss';
import CardDialog from "../../../components/card-dialog";

export default class CardTO extends Component {
  render () {
    let { shop, edit, onClick } = this.props,
        { date, desc } = shop.tasks.to,
          iconColor = 'text-warning';

    if (dateWorker.isPast(date)) {
      iconColor = 'text-danger';
    }

    let containerClass = 'card-to';
    if (edit) {
      containerClass = 'card-to card-to-active';
    }


    return (
      <div className={containerClass}>
        <button className="card-to__brief" onClick={onClick}>
          <CardBrief title={ String(shop.id) }
                     body={ shop.address }
                     time={ date }
                     footerTitle="Комментарии:"
                     footerBody={ desc }
                     notifyIcon={ <Info /> }
                     notifyColor={iconColor}
          />
        </button>
        <div className="card-to__dialog">
          <CardDialog data={{
            icons: [ <Check/>, <Edit/> ],
            colors: [ 'bg-success', 'bg-warning' ],
            func: []
          }}/>
        </div>
      </div>
    );
  }
}

CardBrief.propTypes = {
  shop: PropTypes.object,
};