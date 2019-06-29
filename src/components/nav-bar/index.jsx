import React from 'react';
import {Refresh} from "@material-ui/icons";
import NavItem from './nav-item';
import { NAVI } from '../../route/url';
import store from '../../store/configure-store';
import Auth from '../../lib/server';


const NavBar = () => {
  const handleUpdate = () => {
    const state = store.getState();
    Auth.setContent({...state.app});
  };

  return (
    <div className="nav-bar">
      {NAVI.map(menuItem => {
        return <NavItem key={menuItem.sortOrder} {...menuItem} />;
      })}
      <button type="button" onClick={handleUpdate} className="btn-refresh">
        <Refresh/>
        Обновить</button>
    </div>
  );
};

export default NavBar;
