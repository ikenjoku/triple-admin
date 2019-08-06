import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../header/header';
import './noMatch.scss';

class NoMatch extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="login-body login-bg">
          <div className="login-content">
            <p className="welcome-text space-bottom">No Page Here</p>
            <Link
              className="login-link"
              to="/"
            >
              <button className="btn-login">Return Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NoMatch;
