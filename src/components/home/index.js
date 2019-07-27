import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../header/header';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="login-body login-bg">
          <div className="login-content">
            <p className="welcome-text">Welcome to 3riple 7even</p>
            <p className="admin-text">Admin</p>
            <Link
              className="login-link"
              to="/login"
            >
              <button className="btn-login">Login</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
