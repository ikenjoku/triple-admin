import React from 'react';
import jwtDecode from 'jwt-decode';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import history from './history';
import appRoutes from '../routes/appRoutes';
import { setAuthorizationToken } from '../utils/authHelpers';
import { login_user_success } from '../redux/actions/authActions';

if (localStorage.triple7) {
  const decoded = jwtDecode(localStorage.triple7);
  const { user } = decoded;
  setAuthorizationToken(localStorage.triple7);
  store.dispatch(login_user_success({
      id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      role: user.role,
    })
  );
}

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
