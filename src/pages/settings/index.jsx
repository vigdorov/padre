import React from 'react';
import TopPanel from "../../components/top-panel";

export default class Settings extends React.Component {
  render () {
    return (
      <React.Fragment>
        <TopPanel header="Настройки"
                  subtitle="Основные настройки приложения"/>

      </React.Fragment>
    );
  }
}