import React from 'react';
import {connect} from "react-redux";
import HeaderControl from "../../components/containers/header-control";
import HeaderPanel from "../../components/header-panel";
import BodyApp from "../../components/containers/body-app";
import {URL_SHOPS} from "../../route/url";
import ShopEditFormGroup from "../../components/shops/shop-edit-form-group";

const EditShop = props => {
  let shopForm;
  if (props.editShopId > -1) {
    const shop = props.shops[props.editShopId];

    shopForm = (
      <ShopEditFormGroup
        index={props.editShopId}
        id={shop.id}
        number={shop.number}
        address={shop.address}
        shopIndex={props.editShopId}
      />
    );
  }
  return (
    <React.Fragment>
      <HeaderControl>
        <HeaderPanel
          title="Редактирование магазина"
          subtitle="Заполните форму"
          link={URL_SHOPS}
        />
      </HeaderControl>
      <BodyApp>
        {shopForm || 'Нет данных'}
      </BodyApp>
    </React.Fragment>
  );
};

const mapStateToProps = store => {
  return {
    shops: [...store.app.shops],
    tasks: [...store.app.tasks],
    editShopId: store.app.editShopId,
  };
};

export default connect(mapStateToProps)(EditShop);