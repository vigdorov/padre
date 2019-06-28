import * as ACT from './actions';
import store from './configure-store';

export function addShop(payload) {
  return {
    type: ACT.SHOP_ADD,
    payload,
  };
}

export function updateShop(payload) {
  return {
    type: ACT.SHOP_UPDATE,
    payload,
  };
}

export function deleteShop(payload) {
  return {
    type: ACT.SHOP_DELETE,
    payload,
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
  tasks.push(payload);
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
