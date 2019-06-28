import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InputGroup from '../forms/input-group';
import SelectGroup from '../forms/select-group';
import { PRIORITIES, PRIORITY_TO, STATUS_ACTIVE } from '../../lib/const';
import * as appActions from '../../store/actions-creators';
import TextareaGroup from '../forms/textarea-group';
import { URL_TASKS } from '../../route/url';
import SelectShopsGroup from '../forms/select-shops-form-group';

class TaskAddFormGroup extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    shops: PropTypes.arrayOf(PropTypes.object).isRequired,
    addTask: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      shopId: props.shops[0].id,
      priority: PRIORITY_TO,
      title: '',
      comment: '',
      date: '',
      status: STATUS_ACTIVE,
    };
  }

  handleChange = e => {
    const { id } = e.target;
    let { value } = e.target;
    if (id === 'shopId') {
      value = Number(value);
    }
    this.setState({
      [id]: value,
    });
  };

  handleAddTask = () => {
    this.props.addTask({ ...this.state });
  };

  render() {
    const { id, title, comment, date, priority, shopId } = this.state;
    return (
      <div className="task-form-group">
        <InputGroup label="id" value={id} id="shop-id" disabled />
        <SelectShopsGroup
          label="Магазин:"
          id="shopId"
          value={shopId}
          shops={this.props.shops}
          onChange={this.handleChange}
        />
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
        <Link
          to={URL_TASKS}
          onClick={this.handleAddTask}
          className="task-form-group__success-btn">
          Создать
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: payload => dispatch(appActions.addTask(payload)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(TaskAddFormGroup);
