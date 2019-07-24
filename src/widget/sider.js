import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout, Menu, Icon } from 'antd';

//local imports
import ResourceDrawer from './resource';

const { Sider } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
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
  state = {
    contactDrawer: false,
  }
  toggleContactDrawer = () => this.setState(({contactDrawer}) => ({contactDrawer:!contactDrawer}));

  render() {

    const selectedkey = selectedKeys(window.location.pathname);
    return (
      <Sider defaultCollapsed className='sidebar'>
        <Link to='/app'><div className='small-logo'></div></Link>
        <Menu theme='dark' mode='vertical' className='sidebar-menu' selectedKeys={[selectedkey]}>
          <ItemGroup>
            <MenuDivider />
            { topMenuItems(mainRoutes) }
          </ItemGroup>
          <ItemGroup>
            <MenuDivider />
            <MenuItem key="questions" onClick={this.toggleContactDrawer}>
              <Icon component={() => (<FontAwesomeIcon icon='question-circle'/>)}/>
              <span>Resources</span>
            </MenuItem>
          </ItemGroup>
        </Menu>
        <ResourceDrawer
          open={this.state.contactDrawer}
          closeDrawer={this.toggleContactDrawer}
        />
      </Sider>
    )
  }
}

export default SideNavbar;
