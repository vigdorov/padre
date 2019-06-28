import { combineReducers } from 'redux';
import * as ACT from './actions';
import { PRIORITY_LOW, STATUS_ACTIVE } from '../lib/const';

const initialState = {
  editShopId: -1,
  editTaskId: -1,
  shopsCounter: 3,
  tasksCounter: 4,
  shops: [
    { id: 0, number: 234, address: 'Гатчина' },
    { id: 1, number: 234, address: 'Москва' },
    { id: 2, number: 234, address: 'Питер' },
  ],
  tasks: [
    {
      id: 0,
      shopId: 0,
      priority: PRIORITY_LOW,
      status: STATUS_ACTIVE,
      comment: 'Сделай',
      title: 'Чото неработает',
      date: '2019-06-22T15:06',
    },
    {
      id: 1,
      shopId: 2,
      priority: PRIORITY_LOW,
      status: STATUS_ACTIVE,
      title: 'Чото неработает',
      comment: 'Не делай',
      date: '2020-05-22T19:06',
    },
    {
      id: 2,
      shopId: 1,
      priority: PRIORITY_LOW,
      status: STATUS_ACTIVE,
      title: 'Чото неработает',
      comment: 'Просто забей болт',
      date: '2019-06-27T23:06',
    },
    {
      id: 3,
      shopId: 1,
      priority: PRIORITY_LOW,
      status: STATUS_ACTIVE,
      title: 'Чото неработает',
      comment: 'Просто забей болт',
      date: '2019-06-29T11:06',
    },
  ],
};

function reducer(store = initialState, action) {
  switch (action.type) {
    case ACT.SHOP_ADD:
      return { ...store, ...action.payload };
    case ACT.SHOP_UPDATE:
      return { ...store, ...action.payload };
    case ACT.SHOP_DELETE:
      return { ...store, ...action.payload };
    case ACT.SET_EDIT_SHOP:
      return { ...store, ...action.payload };
    case ACT.TASK_ADD:
      return { ...store, ...action.payload };
    case ACT.TASK_UPDATE:
      return { ...store, ...action.payload };
    case ACT.TASK_DELETE:
      return { ...store, ...action.payload };
    case ACT.SET_EDIT_TASK:
      return { ...store, ...action.payload };
    default:
      return store;
  }
}

export default () =>
  combineReducers({
    app: reducer,
  });
