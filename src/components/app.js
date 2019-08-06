import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import history from './history';
import appRoutes from '../routes/appRoutes';

const routes = appRoutes.map((appRoute,key) =>
  <Route
    key={key}
    path={appRoute.path}
    component={appRoute.component}
    exact={appRoute.exact}
  />
);

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        {routes}
      </Switch>
    </Router>
  </Provider>
);
