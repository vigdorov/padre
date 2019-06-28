import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './reducer';

export const history = createBrowserHistory();

function configureStore() {
  return createStore(
    createRootReducer(),
    composeWithDevTools(applyMiddleware(thunk)),
  );
}

const store = configureStore();

export default store;
