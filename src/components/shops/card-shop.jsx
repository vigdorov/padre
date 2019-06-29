import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ShoppingCart } from '@material-ui/icons';
import {URL_EDIT_SHOPS} from "../../route/url";
import * as appActions from "../../store/actions-creators";

const CardShop = props => {

  const handleClickShop = () => {
    props.setEditShop({
      editShopId: props.index,
    });
  };

  const tasks = [];
  props.tasks.forEach(task => {
    if (task.shopId === props.id) tasks.push(task);
  });

  const icoClass = ['card-shop__ico'];
  if (props.note) {
    icoClass.push('text-attention');
  }

  return (
    <Link to={URL_EDIT_SHOPS} onClick={handleClickShop} className="card-shop">
      <div className={icoClass.join(' ')}>
        <ShoppingCart/>
      </div>
      <span className="card-shop__number">
        <b>Номер: </b>
        {props.number}
      </span>
      <span className="card-shop__address">
        {props.address}
      </span>
      <span className="card-shop__task">
        <b>Задач: </b> {tasks.length}
      </span>
    </Link>
  );
};

const mapStateToProps = store => {
  return {
    tasks: [...store.app.tasks],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setEditShop: payload => dispatch(appActions.setEditShop(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardShop);

CardShop.propTypes = {
  id: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
  setEditShop: PropTypes.func.isRequired,
  note: PropTypes.string,
};

CardShop.defaultProps = {
  note: ''
};
