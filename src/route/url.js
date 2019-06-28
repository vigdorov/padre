import React from 'react';
import { Home, History } from '@material-ui/icons';

export const URL_TASKS = '/';
export const URL_ADD_TASKS = '/add-task';
export const URL_EDIT_TASKS = '/edit-task';
export const URL_SHOPS = '/shops';
export const URL_ADD_SHOPS = '/add-shop';
export const URL_EDIT_SHOPS = '/edit-shop';

export const NAVI = [
  {
    url: URL_TASKS,
    title: 'Задачи',
    sortOrder: 1,
    ico: <Home />,
  },
  {
    url: URL_SHOPS,
    title: 'Магазины',
    sortOrder: 2,
    ico: <History />,
  },
];
