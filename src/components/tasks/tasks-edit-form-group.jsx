import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InputGroup from '../forms/input-group';
import SelectGroup from '../forms/select-group';
import { PRIORITIES, STATUS_ACTIVE, STATUS_DONE } from '../../lib/const';
import * as appActions from '../../store/actions-creators';
import TextareaGroup from '../forms/textarea-group';
import { URL_TASKS } from '../../route/url';

class TaskEditFormGroup extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    taskIndex: PropTypes.number.isRequired,
    shopId: PropTypes.number.isRequired,
    shop: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    comment: PropTypes.string,
    status: PropTypes.string,
  };

  static defaultProps = {
    comment: '',
    status: STATUS_ACTIVE,
  };

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      taskIndex: props.taskIndex,
      shopId: props.shopId,
      shop: props.shop,
      priority: props.priority,
      title: props.title,
      comment: props.comment,
      date: props.date,
      status: props.status,
    };
  }

  componentWillUnmount() {
    this.props.setEditTask({
      editTaskId: -1,
    });
  }

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };

  handleSuccessTask = () => {
    const state = { ...this.state };
    state.status = STATUS_DONE;
    this.props.updateTask({ ...state });
  };

  handleSuccessEdit = () => {
    this.props.updateTask({ ...this.state });
  };

  handleDeleteTask = () => {
    this.props.deleteTask(this.state.taskIndex);
  };

  render() {
    const { id, title, comment, date, priority, shop } = this.state;
    return (
      <div className="task-form-group">
        <InputGroup label="id" value={id} id="shop-id" disabled />
        <InputGroup label="Магазин:" id="shop" value={shop} disabled />
        <InputGroup
          onChange={this.handleChange}
          id="title"
          value={title}
          label="Тема:"
        />
        <TextareaGroup
          onChange={this.handleChange}
          id="comment"
          value={comment}
          label="Комментарии:"
        />
        <InputGroup
          onChange={this.handleChange}
          id="date"
          value={date}
          label="Дата:"
          isDate
        />
        <SelectGroup
          value={priority}
          options={PRIORITIES}
          label="Приоритет:"
          id="priority"
          onChange={this.handleChange}
        />
        <div className="task-form-group__btn-wrapper">
          <Link
            to={URL_TASKS}
            className="task-form-group__success-btn"
            onClick={this.handleSuccessTask}>
            Выполнить
          </Link>
          <Link
            to={URL_TASKS}
            className="task-form-group__edit-btn"
            type="button"
            onClick={this.handleSuccessEdit}>
            Изменить
          </Link>
          <Link
            to={URL_TASKS}
            className="task-form-group__del-btn"
            onClick={this.handleDeleteTask}
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
    setEditTask: payload => dispatch(appActions.setEditTask(payload)),
    updateTask: payload => dispatch(appActions.updateTask(payload)),
    deleteTask: payload => dispatch(appActions.deleteTask(payload)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(TaskEditFormGroup);
