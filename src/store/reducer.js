import { combineReducers } from 'redux';
import * as ACT from './actions';
import Auth from '../lib/server';

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
    case ACT.SHOP_ADD: {
      const newStore = { ...store, ...action.payload };
      Auth.setContent(newStore);
      return { ...newStore };
    }

    case ACT.SHOP_UPDATE: {
      const newStore = { ...store, ...action.payload };
      Auth.setContent(newStore);
      return { ...newStore };
    }

    case ACT.SHOP_DELETE: {
      const newStore = { ...store, ...action.payload };
      Auth.setContent(newStore);
      return { ...newStore };
    }

    case ACT.SET_EDIT_SHOP: {
      return { ...store, ...action.payload };
    }

    case ACT.TASK_ADD: {
      const newStore = { ...store, ...action.payload };
      Auth.setContent(newStore);
      return { ...newStore };
    }

    case ACT.TASK_UPDATE: {
      const newStore = { ...store, ...action.payload };
      Auth.setContent(newStore);
      return { ...newStore };
    }

    case ACT.TASK_DELETE: {
      const newStore = { ...store, ...action.payload };
      Auth.setContent(newStore);
      return { ...newStore };
    }

    case ACT.SET_EDIT_TASK: {
      return { ...store, ...action.payload };
    }

    case ACT.GET_STATE_FROM_SERVER: {
      return { ...store, ...action.payload };
    }

    default:
      return store;
  }
}

export default () =>
  combineReducers({
    app: reducer,
  });
