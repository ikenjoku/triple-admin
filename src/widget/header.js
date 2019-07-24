import React, { Component } from 'react'

import { Layout, Select, Dropdown, Menu, Avatar, Icon } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';

const { Header } = Layout;
const { Option } = Select;
const MenuItem = Menu.Item;
const MenuDivider = Menu.Divider;

const HeaderDropdown = ({logout})  =>(
  <Menu className='header-dropdown'>
    <MenuItem className='menu-item' key="logout" onClick={() => { }}>
      <span className='menu-item-text'>logout</span>
    </MenuItem>
  </Menu>
);

export class MainHeader extends Component {

  render() {
    const { onClick, collapsed } = this.props;

    return (
      <Header className="mainapp-header">
      <Icon
        className="header-icon"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={onClick}
      />
      <Dropdown trigger={['click']} className='header-icon' placement="bottomRight" overlay={<HeaderDropdown logout={() => {}}/>}>
        <Avatar size='large' icon='user' />
      </Dropdown>
      </Header>
    )
  }
}

export default MainHeader
