import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import NavBar from '../../components/nav-bar';
import HeaderControl from '../../components/containers/header-control';
import BodyApp from '../../components/containers/body-app';
import FooterControl from '../../components/containers/footer-control';
import HeaderPanel from '../../components/header-panel';
import CardTask from '../../components/tasks/card-task';
import AddTaskButton from '../../components/tasks/add-task-button';
import FilterWrapper from '../../components/tasks/filter-wrapper';
import { STATUS_ACTIVE, STATUS_DONE } from '../../lib/const';

const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return new Date(year, month, day);
};

const Tasks = props => {
  const expired = [
    <FilterWrapper key="exp" title="Просроченные задачи" type="danger" />,
  ];
  const today = [
    <FilterWrapper key="today" title="Задачи на сегодня" type="warning" />,
  ];
  const tomorrow = [
    <FilterWrapper key="tomorrow" title="Задачи на завтра" type="warning" />,
  ];
  const other = [
    <FilterWrapper key="other" title="Будущие задачи" type="success" />,
  ];
  const done = [
    <FilterWrapper key="done" title="Выполненные задачи" type="success" />,
  ];

  const current = moment(getCurrentDate());

  props.tasks.forEach((task, index) => {
    const diff = -current.diff(task.date, 'second');
    const renderTask = <CardTask key={task.id} {...task} index={index} />;

    if (task.status === STATUS_ACTIVE) {
      if (diff < 0) {
        expired.push(renderTask);
      } else if (diff >= 0 && diff < 86400) {
        today.push(renderTask);
      } else if (diff >= 86400 && diff < 172800) {
        tomorrow.push(renderTask);
      } else {
        other.push(renderTask);
      }
    }
    if (task.status === STATUS_DONE) {
      done.push(renderTask);
    }
  });

  return (
    <React.Fragment>
      <HeaderControl>
        <HeaderPanel title="Задачи" subtitle="Список всех задач" />
      </HeaderControl>
      <BodyApp>
        {expired.length > 1 && expired}
        {today.length > 1 && today}
        {tomorrow.length > 1 && tomorrow}
        {other.length > 1 && other}
        {done.length > 1 && done}
        <AddTaskButton />
      </BodyApp>
      <FooterControl>
        <NavBar />
      </FooterControl>
    </React.Fragment>
  );
};

const mapStateToProps = store => {
  return {
    tasks: [...store.app.tasks],
  };
};

export default connect(mapStateToProps)(Tasks);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      shopId: PropTypes.number,
      priority: PropTypes.string,
      status: PropTypes.string,
      title: PropTypes.string,
      comment: PropTypes.string,
      date: PropTypes.string,
    }),
  ).isRequired,
};
