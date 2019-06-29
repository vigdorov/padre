import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as appActions from '../../store/actions-creators';
import WarningIcon from '../icons/warning-icon';
import { STATUS_DONE } from '../../lib/const';
import SuccessIcon from '../icons/success-icon';

const CardTask = props => {
  const handleClickTask = () => {
    props.setEditTask({
      editTaskId: props.index,
    });
  };

  const allShops = props.allShops.slice();
  const filterShop = allShops.filter(shop => {
    return shop.id === props.shopId;
  });
  let currentShop = filterShop[0];

  if (filterShop.length === 0) {
    currentShop = {
      id: -1,
      number: '[Магазин удален]',
      address: '[Магазин удален]',
    };
  }

  let icon = <WarningIcon />;
  if (props.status === STATUS_DONE) {
    icon = <SuccessIcon />;
  }

  const date = moment(props.date).calendar();

  return (
    <Link to="/edit-task" className="card-task" onClick={handleClickTask}>
      <span className="card-task__title">{props.title}</span>
      <span className="card-task__shop-address">
        <b>Адрес:</b> {currentShop.address}
      </span>
      <span className="card-task__comment">
        <b>Комментарии:</b> {props.comment}
      </span>
      <span className="card-task__priority">{props.priority}</span>
      <span className="card-task__priority-icon">{icon}</span>
      <span className="card-task__date">{date}</span>
    </Link>
  );
};

const mapStateToProps = store => {
  return {
    allShops: [...store.app.shops],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setEditTask: payload => dispatch(appActions.setEditTask(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardTask);

CardTask.propTypes = {
  index: PropTypes.number.isRequired,
  shopId: PropTypes.number.isRequired,
  priority: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  allShops: PropTypes.arrayOf(PropTypes.object).isRequired,
  setEditTask: PropTypes.func.isRequired,
};
