import React, { Component } from 'react';

import Header from '../header/header';
import './resetPassword.scss'

export class Login extends Component {
  state = {
    data: {
      password: '',
      confrimPassword: '',
    }
  }

  onFormInput = (event) => {
    event.preventDefault();
    const { data } = this.state;
    data[event.target.name] = event.target.value.trim();
    this.setState(() => ({ data }));
  }

  // onSubmit = (event) => {
  //   event.preventDefault();
  //   const { data: { email, password } } = this.state;
  //   if (email && password) {
  //     this.setState(() => ({ error: '' }));

  //     this.props.loginAUser({ email, password });
  //   } else {
  //     this.setState(() => ({ error: 'email and password are required' }));
  //   }
  // }

  render() {
    return (
      <div>
        <Header />
        <main className="main-content login-bg">
        <form id="login-form" className="form-wrapper">
          <h2 className="center">Change your password</h2>
          {this.state.error &&
          <div className="alert alert-danger">
            {this.state.error}
          </div>}
          <div>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Enter your new password"
              value={this.state.data.password}
              onChange={this.onFormInput}
            />
        </div>
          <div>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Confirm your password"
              value={this.state.data.confrimPassword}
              onChange={this.onFormInput}
            />
          </div>
          <div>
            <input
              className="btn-control loginsubmitBtn"
              type="submit"
              value="Submit"
            />
          </div>
          <hr />
        </form>
      </main>
      </div>
    );
  }
}

export default Login;
