import React from 'react';
import { withRouter } from 'react-router';
import {Refresh} from "@material-ui/icons";
import NavItem from './nav-item';
import { NAVI } from '../../route/url';

import Auth from '../../lib/server';

const NavBar = props => {
  return (
    <div className="nav-bar">
      {NAVI.map(menuItem => {
        return <NavItem active={props.location.pathname === menuItem.url} key={menuItem.sortOrder} {...menuItem} />;
      })}
      <button type="button" onClick={() => Auth.setContent()} className="btn-refresh">
        <Refresh/>
        Обновить</button>
    </div>
  );
};

export default withRouter(NavBar);
