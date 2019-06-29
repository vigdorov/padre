import { combineReducers } from 'redux';
import * as ACT from './actions';

const initialState = {
  editShopId: -1,
  editTaskId: -1,
  shopsCounter: 0,
  tasksCounter: 0,
  shops: [],
  tasks: [],
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
    case ACT.GET_STATE_FROM_SERVER:
      return { ...store, ...action.payload };
    default:
      return store;
  }
}

export default () =>
  combineReducers({
    app: reducer,
  });
