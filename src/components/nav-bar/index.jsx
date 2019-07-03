import React from 'react';
import { withRouter } from 'react-router';
import NavItem from './nav-item';
import { NAVI } from '../../route/url';

const NavBar = props => {
  return (
    <div className="nav-bar">
      {NAVI.map(menuItem => {
        return (
          <NavItem
            active={props.location.pathname === menuItem.url}
            key={menuItem.sortOrder}
            {...menuItem}
          />
        );
      })}
    </div>
  );
};

export default withRouter(NavBar);
