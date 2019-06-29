import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskEditFormGroup from '../../components/tasks/tasks-edit-form-group';
import HeaderPanel from '../../components/header-panel';
import HeaderControl from '../../components/containers/header-control';
import BodyApp from '../../components/containers/body-app';
import { URL_TASKS } from '../../route/url';

const EditTask = props => {
  let taskForm;
  if (props.editTaskId > -1) {
    const task = props.tasks[props.editTaskId];

    const allShops = props.shops.slice();

    const filterShop = allShops.filter(shop => {
      return shop.id === task.shopId;
    });

    let shop = filterShop[0];

    if (filterShop.length === 0) {
      shop = {
        id: -1,
        number: '[Магазин удален]',
        address: '[Магазин удален]',
      };
    }

    taskForm = (
      <TaskEditFormGroup
        date={task.date}
        shopId={shop.id}
        taskIndex={props.editTaskId}
        shop={`${shop.number} ${shop.address}`}
        id={task.id}
        title={task.title}
        priority={task.priority}
        comment={task.comment}
      />
    );
  }
  return (
    <React.Fragment>
      <HeaderControl>
        <HeaderPanel
          title="Редактирование задачи"
          subtitle="Внесите необходимые изменения"
          link={URL_TASKS}
        />
      </HeaderControl>
      <BodyApp>{taskForm || 'Нет данных'}</BodyApp>
    </React.Fragment>
  );
};

const mapStateToProps = store => {
  return {
    shops: [...store.app.shops],
    tasks: [...store.app.tasks],
    editTaskId: store.app.editTaskId,
  };
};

export default connect(mapStateToProps)(EditTask);

EditTask.propTypes = {
  shops: PropTypes.arrayOf(PropTypes.any),
  tasks: PropTypes.arrayOf(PropTypes.any),
  editTaskId: PropTypes.number,
};

EditTask.defaultProps = {
  shops: [],
  tasks: [],
  editTaskId: -1,
};
