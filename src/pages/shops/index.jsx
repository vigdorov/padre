import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HeaderControl from '../../components/containers/header-control';
import BodyApp from '../../components/containers/body-app';
import FooterControl from '../../components/containers/footer-control';
import NavBar from '../../components/nav-bar';
import HeaderPanel from '../../components/header-panel';
import CardShop from '../../components/shops/card-shop';

const Index = props => {
  return (
    <React.Fragment>
      <HeaderControl>
        <HeaderPanel title="Магазины" subtitle="Список всех магазинов" />
      </HeaderControl>
      <BodyApp>
        {props.shops.map(shop => {
          return <CardShop key={shop.id} {...shop} />;
        })}
      </BodyApp>
      <FooterControl>
        <NavBar />
      </FooterControl>
    </React.Fragment>
  );
};

const mapStateToProps = store => {
  return {
    shops: [...store.app.shops],
  };
};

export default connect(mapStateToProps)(Index);

Index.propTypes = {
  shops: PropTypes.array.isRequired,
};
