import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as URL from './url';

const Tasks = lazy(() => import('../pages/tasks/index'));
const AddTasks = lazy(() => import('../pages/tasks/add-task'));
const EditTasks = lazy(() => import('../pages/tasks/edit-task'));
const Shops = lazy(() => import('../pages/shops/index'));
const NoMatch = lazy(() => import('../pages/404'));

export default (
  <Switch>
    <Route exact path={URL.URL_TASKS} component={Tasks} />
    <Route exact path={URL.URL_ADD_TASKS} component={AddTasks} />
    <Route exact path={URL.URL_EDIT_TASKS} component={EditTasks} />
    <Route exact path={URL.URL_SHOPS} component={Shops} />

    <Route component={NoMatch} />
  </Switch>
);
