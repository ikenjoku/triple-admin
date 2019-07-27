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
    key:'dashboard',
    path: '/app/dashboard',
    message: 'Dashboard',
    icon: 'chart-bar',
    requirePermission:'admin',
    exact: true,
  },
  {
    key:'manager',
    path: '/app/manager',
    message: 'Files',
    icon: 'folder',
    requirePermission:'superAdmin',
    exact: true,
  }
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
