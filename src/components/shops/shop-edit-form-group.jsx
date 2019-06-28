import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";
import {Link} from "react-router-dom";

import * as appActions from "../../store/actions-creators";
import InputGroup from "../forms/input-group";
import {URL_SHOPS} from "../../route/url";

class ShopEditFormGroup extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    setEditShop: PropTypes.func.isRequired,
    updateShop: PropTypes.func.isRequired,
    deleteShop: PropTypes.func.isRequired,
  };

  constructor (props) {
    super(props);

    this.state = {
      id: props.id,
      number: props.number,
      address: props.address,
    };
  }

  componentWillUnmount() {
    this.props.setEditShop({
      editShopId: -1,
    });
  }

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };

  handleSuccessEdit = () => {
    this.props.updateShop({ ...this.state });
  };

  handleDeleteShop = () => {
    this.props.deleteShop( this.props.id )
  };

  render () {
    const { id, number, address } = this.state;
    return (
      <div className="merger-form-group">
        <InputGroup label="id" value={id} id="shop-id" disabled />
        <InputGroup
          onChange={this.handleChange}
          id="number"
          value={number}
          label="Номер магазина:"
        />
        <InputGroup
          onChange={this.handleChange}
          id="address"
          value={address}
          label="Адрес магазина:"
        />
        <div className="merger-form-group__btn-wrapper">
          <Link
            to={URL_SHOPS}
            className="merger-form-group__edit-btn"
            type="button"
            onClick={this.handleSuccessEdit}>
            Изменить
          </Link>
          <Link
            to={URL_SHOPS}
            className="merger-form-group__del-btn"
            onClick={this.handleDeleteShop}
            type="button">
            Удалить
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateShop: payload => dispatch(appActions.updateShop(payload)),
    deleteShop: payload => dispatch(appActions.deleteShop(payload)),
    setEditShop: payload => dispatch(appActions.setEditShop(payload)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(ShopEditFormGroup);
