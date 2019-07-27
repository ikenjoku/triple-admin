import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout, Menu, Icon } from 'antd';
import './header.css';

const { Sider } = Layout;
const MenuItem = Menu.Item;
const ItemGroup = Menu.ItemGroup;
const MenuDivider = Menu.Divider;

const selectedKeys = pathname => pathname.split('/')[2]
const mainRoutes = [
  {
    key:'orders',
    path: '/app/orders',
    message: 'Incoming Orders',
    icon: 'history',
    requirePermission:['staff', 'manager'],
    exact: true,
  },
  {
    key:'manage-menu',
    path: '/app/manage-menu',
    message: 'Manage Menu',
    icon: 'bread-slice',
    requirePermission:['manager'],
    exact: true,
  },
  {
    key:'manage-highlights',
    path: '/app/manage-highlights',
    message: 'Manage Highlights',
    icon: 'newspaper',
    requirePermission:['manager'],
    exact: true,
  },
  {
    key:'manage-admin',
    path: '/app/manage-admin',
    message: 'Manage Admin',
    icon: 'headset',
    requirePermission:['manager'],
    exact: true,
  },
  {
    key:'dashboard',
    path: '/app/dashboard',
    message: 'Dashboard',
    icon: 'chart-bar',
    requirePermission:['manager'],
    exact: true,
  },
]

const topMenuItems = (mainRoutes) => mainRoutes.map((route) => {
    return (
      <MenuItem key={route.key}>
        <NavLink to={route.path} >
          <Icon component={() => (<FontAwesomeIcon icon={route.icon}/>)}/>
          <span>{route.message}</span>
        </NavLink>
      </MenuItem>
    )
})


class SideNavbar extends Component {

  render() {
    const { trigger, collapsed } = this.props;

    const selectedkey = selectedKeys(window.location.pathname);
    return (
      <Sider trigger={trigger} collapsible collapsed={collapsed} className='sidebar-color'>
        <Link to='/app'><div className='small-logo'></div></Link>
        <Menu theme='light' mode='vertical' className='sidebar-menu sidebar-color' selectedKeys={[selectedkey]}>
          <ItemGroup>
            <MenuDivider />
            { topMenuItems(mainRoutes) }
          </ItemGroup>
          <ItemGroup>
            <MenuDivider />
          </ItemGroup>
        </Menu>
      </Sider>
    )
  }
}

export default SideNavbar;
