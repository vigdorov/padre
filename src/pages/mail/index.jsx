import React from 'react';
import TopPanel from "../../components/top-panel";

export default class Mail extends React.Component {
  render () {
    return (
      <React.Fragment>
        <TopPanel header="Почта"
                  subtitle="Сообщения из сервисного центра"/>

      </React.Fragment>
    );
  }
}