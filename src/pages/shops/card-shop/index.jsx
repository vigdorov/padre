import React from 'react';

import { NewReleases, CheckCircle, Info} from '@material-ui/icons';

import dateWorker from '../../../functions/date-worker';

import CardBrief from '../../../components/card-brief';

export default class CardShop extends React.Component {
  render () {
    let { shop } = this.props,
        { date } = shop.tasks.to,
        { low, normal, high } = shop.tasks.order,
          icon = <CheckCircle />,
          iconColor = 'text-success';

    if (low && low.length) {
      icon = <Info />;
      iconColor = 'text-active';
    }

    if (dateWorker.isPast(date)) {
      icon = <Info />;
      iconColor = 'text-warning';
    }

    if (normal && normal.length) {
      icon = <Info />;
      iconColor = 'text-warning';
    }

    if (high && high.length) {
      icon = <NewReleases />;
      iconColor = 'text-danger';
    }

    return (
      <CardBrief title={String(shop.id)}
                 body={shop.address}
                 footerTitle="Ближайшее ТО:"
                 footerBody={date}
                 notifyIcon={icon}
                 notifyColor={iconColor}
                 onClick={() => console.log(0)}
      />
    );
  }
}