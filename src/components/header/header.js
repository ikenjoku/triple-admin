import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to='/'>
          <img className='logo' alt='triple-7-logo' src={require('../../assets/tripleLogoWeb.png')} />
        </Link>
      </header>
    );
  }
}

export default Header;
