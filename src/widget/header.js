import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Layout, Dropdown, Menu, Avatar, Icon } from 'antd';

import { logoutAUser } from '../redux/actions/authActions';
import './header.css';

const { Header } = Layout;
const MenuItem = Menu.Item;

const HeaderDropdown = ({logout})  =>(
  <Menu className='header-dropdown'>
    <MenuItem className='menu-item' key="logout" onClick={logout}>
      <span className='menu-item-text'>logout</span>
    </MenuItem>
  </Menu>
);

export class MainHeader extends Component {

  render() {
    const { onClick, collapsed, logoutAUser } = this.props;

    return (
      !this.props.user ? <Redirect to="/" /> :
      <Header className="mainapp-header">
      <Icon
        className="header-icon"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={onClick}
      />
      <Dropdown trigger={['click']} className='header-icon' placement="bottomRight" overlay={<HeaderDropdown logout={logoutAUser}/>}>
        <Avatar size='large' icon='user' />
      </Dropdown>
      </Header>
    )
  }
}

const mapStateToProps = ({ authReducer }) => ({
  user: authReducer.user,
});

export default connect(mapStateToProps, { logoutAUser })(MainHeader);