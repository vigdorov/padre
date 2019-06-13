import React from 'react';

import TopPanel from "../../components/top-panel";
import FloatingButton from '../../components/floating-button';
import CardShop from './card-shop';

import  { PlaylistAdd, LowPriority } from '@material-ui/icons';

export default class Shops extends React.Component {
  render () {
    let { shops } = this.props;

    let cardShops = shops.map( (shop, i) => {
      return <CardShop key={i} shop={shop}/>;
    });

    return (
      <React.Fragment>
        <TopPanel header="Магазины"
                  subtitle="Список обслуживаемых магазинов"
                  right={<LowPriority/>}
        />
        <FloatingButton to="../add-shop/">
          <PlaylistAdd/>
        </FloatingButton>
        { cardShops }

      </React.Fragment>
    );
  }
}