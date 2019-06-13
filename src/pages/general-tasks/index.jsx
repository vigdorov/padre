import React from 'react';

import TopPanel from '../../components/top-panel';

export default class GeneralTasks extends React.Component {
  render () {
    return (
      <React.Fragment>
        <TopPanel header="Задачи"
                  subtitle="Внеплановое обслуживание"/>
                  Текст задач
      </React.Fragment>
    );
  }
}