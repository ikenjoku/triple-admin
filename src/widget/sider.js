import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout, Menu, Icon } from 'antd';
import './header.css';

const { Sider } = Layout;
const MenuItem = Menu.Item;
const ItemGroup = Menu.ItemGroup;
const MenuDivider = Menu.Divider;

const selectedKeys = pathname => pathname.split('/')[2]
const staffRoutes = [
  {
    key: 'orders',
    path: '/app/orders',
    message: 'Incoming Orders',
    icon: 'history',
    requirePermission: ['staff', 'manager'],
    exact: true,
  },
];

const managerRoutes = [
  {
    key: 'manage-menu',
    path: '/app/manage-menu',
    message: 'Manage Menu',
    icon: 'bread-slice',
    requirePermission: ['manager'],
    exact: true,
  },
  {
    key: 'manage-highlights',
    path: '/app/manage-highlights',
    message: 'Manage Highlights',
    icon: 'newspaper',
    requirePermission: ['manager'],
    exact: true,
  },
  {
    key: 'manage-admin',
    path: '/app/manage-admin',
    message: 'Manage Admin',
    icon: 'headset',
    requirePermission: ['manager'],
    exact: true,
  },
  {
    key: 'reports',
    path: '/app/reports',
    message: 'Reports',
    icon: 'chart-bar',
    requirePermission: ['manager'],
    exact: true,
  },
];

const staffMenuItems = (staffRoutes, userRoles) => staffRoutes.map((route) => {
  const hasPermission = userRoles.some(role => route.requirePermission.includes(role));
  if (!hasPermission) return null;
  return (
    <MenuItem key={route.key}>
      <NavLink to={route.path} >
        <Icon component={() => (<FontAwesomeIcon icon={route.icon} />)} />
        <span>{route.message}</span>
      </NavLink>
    </MenuItem>
  )
});

const managerMenuItems = (managerRoutes, userRoles) => managerRoutes.map((route) => {
  const hasPermission = userRoles.some(role => route.requirePermission.includes(role));
  if (!hasPermission) return null;
  return (
    <MenuItem key={route.key}>
      <NavLink to={route.path} >
        <Icon component={() => (<FontAwesomeIcon icon={route.icon} />)} />
        <span>{route.message}</span>
      </NavLink>
    </MenuItem>
  )
});


class SideNavbar extends Component {

  render() {
    const { trigger, collapsed, user, location } = this.props;

    const selectedkey = selectedKeys(location.pathname);
    return (
      <Sider trigger={trigger} collapsible collapsed={collapsed} className='sidebar-color'>
        <Link to='/app'><div className='small-logo'></div></Link>
        <Menu theme='light' mode='vertical' className='sidebar-menu sidebar-color' selectedKeys={[selectedkey]}>
        <MenuDivider />
          <ItemGroup>
            {staffMenuItems(staffRoutes, user.role)}
            {managerMenuItems(managerRoutes, user.role)}
          </ItemGroup>
        <MenuDivider />
        </Menu>
      </Sider>
    )
  }
};

const mapStateToProps = ({ authReducer }) => ({
  user: authReducer.user,
});

const connectedSider = connect(mapStateToProps, {})(SideNavbar);

export default withRouter(connectedSider);
