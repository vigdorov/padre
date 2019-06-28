import React from 'react';
import HeaderControl from "../../components/containers/header-control";
import HeaderPanel from "../../components/header-panel";
import BodyApp from "../../components/containers/body-app";
import {URL_SHOPS} from "../../route/url";
import ShopAddFormGroup from "../../components/shops/shop-add-form-group";

const AddShop = () => {
  return (
    <React.Fragment>
      <HeaderControl>
        <HeaderPanel
          title="Добавление магазина"
          subtitle="Заполните форму"
          link={URL_SHOPS}
        />
      </HeaderControl>
      <BodyApp>
        <ShopAddFormGroup />
      </BodyApp>
    </React.Fragment>
  );
};

export default AddShop;