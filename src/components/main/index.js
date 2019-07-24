import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import NoMatch from '../noMatch';
import SideNavbar from '../../widget/sider';
import Header from '../../widget/header';
import { mainRouteConfig } from "../../routes/mainRoutes";
import './main.css';

const { Content } = Layout;

const mainRoutes = mainRouteConfig.map((appRoute,key) => (
  <Route
    key={key}
    path={appRoute.path}
    component={appRoute.component}
    exact={appRoute.exact}/>)
  );

class Main extends Component {
  state = {
    collapsed: false,
  };

  toggleSideBar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const  { collapsed } = this.state;
    return (
      <Layout className='mainapp-layout'>
        <SideNavbar trigger={null} collapsed={collapsed} />
        <Layout>
          <Content className='mainapp-content'>
            <Header onClick={this.toggleSideBar} collapsed={collapsed}/>
            <Switch>
              {mainRoutes}
              <Route component={NoMatch}/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Main;
