import React from 'react';

import FormGroup from '../form-group';

import './style.scss';

export default class ShopTopPanel extends React.Component {
  render () {
    let { onChange, id, address, to } = this.props;
    return (
      <div className="shop-top-panel">
        <FormGroup value={id}
                     id="id"
                     onChange={onChange}
                     label="Номер магазина:"
        />
        <FormGroup value={address}
                     id="address"
                     onChange={onChange}
                     label="Адрес магазина:"
        />
        <FormGroup value={to}
                     id="to"
                     onChange={onChange}
                     label="Дата ТО:"
        />
      </div>
    );
  }
}