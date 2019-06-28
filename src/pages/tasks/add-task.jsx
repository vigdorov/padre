import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderControl from '../../components/containers/header-control';
import HeaderPanel from '../../components/header-panel';
import { URL_TASKS } from '../../route/url';
import BodyApp from '../../components/containers/body-app';
import TaskAddFormGroup from '../../components/tasks/tasks-add-form-group';

const AddTask = props => {
  return (
    <React.Fragment>
      <HeaderControl>
        <HeaderPanel
          title="Добавление задачи"
          subtitle="Заполните форму"
          link={URL_TASKS}
        />
      </HeaderControl>
      <BodyApp>
        <TaskAddFormGroup id={props.tasksCounter} shops={props.shops} />
      </BodyApp>
    </React.Fragment>
  );
};

const mapStateToProps = store => {
  return {
    shops: [...store.app.shops],
    tasksCounter: store.app.tasksCounter,
  };
};

export default connect(mapStateToProps)(AddTask);

AddTask.propTypes = {
  shops: PropTypes.arrayOf(PropTypes.object).isRequired,
  tasksCounter: PropTypes.number.isRequired,
};
