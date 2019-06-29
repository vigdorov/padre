import * as ACT from './actions';
import store from './configure-store';

export function getStateFromServer(payload) {
  return {
    type: ACT.GET_STATE_FROM_SERVER,
    payload,
  };
}

export function addShop(payload) {
  const state = store.getState().app;
  const shops = state.shops.slice();
  const shopsCounter = state.shopsCounter + 1;
  shops.push({
    id: payload.id,
    number: Number(payload.number),
    address: payload.address,
  });
  return {
    type: ACT.SHOP_ADD,
    payload: {
      shops: [...shops],
      shopsCounter,
    },
  };
}

export function updateShop(payload) {
  const state = store.getState().app;
  const shops = state.shops.slice();
  const { editShopId } = state;
  shops[editShopId] = {
    ...payload,
  };
  return {
    type: ACT.SHOP_UPDATE,
    payload: {
      shops,
    },
  };
}

export function deleteShop(payload) {
  const shops = store.getState().app.shops.slice();
  shops.splice(payload, 1);
  return {
    type: ACT.SHOP_DELETE,
    payload: {
      shops: [...shops],
    },
  };
}

export function setEditShop(payload) {
  return {
    type: ACT.SET_EDIT_SHOP,
    payload,
  };
}

export function addTask(payload) {
  const state = store.getState().app;
  const tasks = state.tasks.slice();
  const tasksCounter = state.tasksCounter + 1;
  tasks.push({ ...payload });
  return {
    type: ACT.TASK_ADD,
    payload: {
      tasks: [...tasks],
      tasksCounter,
    },
  };
}

export function updateTask(payload) {
  const tasks = store.getState().app.tasks.slice();
  tasks[payload.taskIndex] = {
    id: payload.id,
    shopId: payload.shopId,
    priority: payload.priority,
    status: payload.status,
    title: payload.title,
    comment: payload.comment,
    date: payload.date,
  };
  return {
    type: ACT.TASK_UPDATE,
    payload: {
      tasks: [...tasks],
    },
  };
}

export function deleteTask(payload) {
  const tasks = store.getState().app.tasks.slice();
  tasks.splice(payload, 1);

  return {
    type: ACT.TASK_DELETE,
    payload: {
      tasks: [...tasks],
    },
  };
}

export function setEditTask(payload) {
  return {
    type: ACT.SET_EDIT_TASK,
    payload,
  };
}
