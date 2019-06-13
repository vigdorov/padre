import React from 'react';
import { Link } from 'react-router-dom';

import TopPanel from "../../components/top-panel";
import FloatingButton from '../../components/floating-button';
import CardShop from './card-shop';

import  { PlaylistAdd, LowPriority } from '@material-ui/icons';

import './style.scss';

export default class Shops extends React.Component {
  render () {
    let { shops, onEdit } = this.props;

    let cardShops = shops.map( (shop, i) => {
      return (
        <Link to="/edit-shop" key={i} className="card-shop" onClick={() => onEdit(i)}>
          <CardShop shop={shop} />
        </Link>
      );
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