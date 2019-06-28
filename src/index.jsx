import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store, { history } from './store/configure-store';
import AppContainer from './app-container';
import theRoutes from './route/routes';
import * as serviceWorker from './serviceWorker';

// блок авторизации на сервисе облачного хранилища
// import Auth from './functions/drive-auth';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <AppContainer>{theRoutes}</AppContainer>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
