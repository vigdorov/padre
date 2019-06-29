import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";
import {Link} from "react-router-dom";

import * as appActions from "../../store/actions-creators";
import InputGroup from "../forms/input-group";
import {URL_SHOPS} from "../../route/url";
import {PRIORITY_TO, STATUS_ACTIVE} from "../../lib/const";

class ShopAddFormGroup extends Component {
  static propTypes = {
    shopsCounter: PropTypes.number.isRequired,
    tasksCounter: PropTypes.number.isRequired,
    addTask: PropTypes.func.isRequired,
    addShop: PropTypes.func.isRequired,
  };

  constructor (props) {
    super(props);

    this.state = {
      id: props.shopsCounter,
      number: '',
      address: '',
      date: '',
    };
  }

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };

  handleAddShop = () => {
    const { date } = this.state;
    if (date) {
      this.props.addTask({
        id: this.props.tasksCounter,
        shopId: this.state.id,
        priority: PRIORITY_TO,
        status: STATUS_ACTIVE,
        comment: 'Выполнить плановое техническое обслуживание',
        title: 'ТО - плановое',
        date: this.state.date,
      });
      this.props.addShop({ ...this.state });
    } else {
      alert('Заполните дату ТО');
    }

  };

  render () {
    const { id, number, address, date } = this.state;
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
        <InputGroup
          onChange={this.handleChange}
          id="date"
          value={date}
          label="Дата ближайшего ТО:"
          isDate
        />
        <Link
          to={date.length > 0 && URL_SHOPS}
          onClick={this.handleAddShop}
          className="merger-form-group__success-btn">
          Создать магазин
        </Link>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    shopsCounter: store.app.shopsCounter,
    tasksCounter: store.app.tasksCounter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: payload => dispatch(appActions.addTask(payload)),
    addShop: payload => dispatch(appActions.addShop(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopAddFormGroup);
