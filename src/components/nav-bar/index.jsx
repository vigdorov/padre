import React from 'react';
import NavItem from './nav-item';
import { NAVI } from '../../route/url';

const NavBar = () => {
  return (
    <div className="nav-bar">
      {NAVI.map(menuItem => {
        return <NavItem key={menuItem.sortOrder} {...menuItem} />;
      })}
    </div>
  );
};

export default NavBar;
