import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import NoMatch from '../noMatch';
import Header from '../../widget/header';
import SideNavbar from '../../widget/sider';
import NotificationManger from '../../utils/socket'
import { staffRouteConfig, managerRouteConfig } from "../../routes/mainRoutes";
import './main.css';

const { Content } = Layout;

const PrivateRoute = ({ component: Component, hasPermission, key, ...otherProps }) => {
  return (
    <Route
      {...otherProps}
      render={props => hasPermission ? <Component {...props} /> : <Redirect key={key} to='/' />}
    />
  );
}

const staffRoutes = (userRoles) => staffRouteConfig.map((appRoute, key) => {
  const hasPermission = userRoles.some(role => ['staff', 'manager'].includes(role));
  return <PrivateRoute
    key={key}
    path={appRoute.path}
    component={appRoute.component}
    hasPermission={hasPermission}
    exact={appRoute.exact}
  />
});

const managerRoutes = (userRoles) => managerRouteConfig.map((appRoute, key) => {
  const hasPermission = userRoles.some(role => ['manager'].includes(role));
  return <PrivateRoute
    key={key}
    path={appRoute.path}
    component={appRoute.component}
    hasPermission={hasPermission}
    exact={appRoute.exact}
  />
});

class Main extends Component {
  state = {
    collapsed: true,
  };

  componentDidMount() {
    NotificationManger(this.props.user.id);
  }

  toggleSideBar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;
    const { user } = this.props;
    return (
      !this.props.user ? <Redirect to="/" /> :
      <Layout className='mainapp-layout'>
        <SideNavbar trigger={null} collapsed={collapsed} />
        <Layout>
          <Content className='mainapp-content'>
            <Header onClick={this.toggleSideBar} collapsed={collapsed} />
            <Switch>
              {staffRoutes(user.role)}
              {managerRoutes(user.role)}
              <Route component={NoMatch} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = ({ authReducer }) => ({
  user: authReducer.user,
});

export default connect(mapStateToProps, {})(Main);