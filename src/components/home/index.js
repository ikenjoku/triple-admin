import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <img className='logo' alt='triple-7-logo' src={require('../../assets/tripleLogoWeb.png')} />
        </header>
        <div className="login-body login-bg">
          <div className="login-content">
            <p className="welcome-text">Welcome to 3riple 7even</p>
            <p className="admin-text">Admin</p>
            <Link
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
