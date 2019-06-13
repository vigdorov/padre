import React from 'react';

import { Store, AvTimer, AssignmentTurnedIn } from '@material-ui/icons';
import { MailOutline, Settings } from '@material-ui/icons';

import './style.scss';

import Item from './__item/';

export default class BottomPanel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      active: '/'
    }
  }

  handleClickItem = (link) => {
    this.setState({ active: link});
  };

  render () {
    let { active } = this.state;
    return (
      <div className="bottom-panel">

        <Item title="Магазины"
                     link="/shops"
                     active={active === '/shops'}
                     onClickItem={this.handleClickItem}>
        <Store />
      </Item>

        <Item title="ТО"
              link="/to"
              active={active === '/to'}
              onClickItem={this.handleClickItem}>
          <AvTimer />
        </Item>

        <Item title="Задачи"
              link="/"
              active={active === '/'}
              onClickItem={this.handleClickItem}>
          <AssignmentTurnedIn />
        </Item>

        <Item title="Почта"
              link="/mail"
              active={active === '/mail'}
              onClickItem={this.handleClickItem}>
          <MailOutline />
        </Item>

        <Item title="Настройки"
              link="/settings"
              active={active === '/settings'}
              onClickItem={this.handleClickItem}>
          <Settings />
        </Item>

      </div>
    );
  }
}