import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './manageAdmin.css';

export class ManageAdmin extends Component {
  state = {
    data: {
      email: '',
    },
    staff: [
      { firstname: 'Lara', lastname: 'Daniels', email: 'laracroft@gmail.com' },
      { firstname: 'Lara', lastname: 'Daniels', email: 'laracroft@gmail.com' },
      { firstname: 'Lara', lastname: 'Daniels', email: 'laracroft@gmail.com' },
      { firstname: 'Lara', lastname: 'Daniels', email: 'laracroft@gmail.com' },
      { firstname: 'Lara', lastname: 'Daniels', email: 'laracroft@gmail.com' },
      { firstname: 'Lara', lastname: 'Daniels', email: 'laracroft@gmail.com' },
    ],
  }

  onFormInput = (event) => {
    event.preventDefault();
    const { data } = this.state;
    data[event.target.name] = event.target.value.trim();
    this.setState(() => ({ data }));
  }

  renderStaffMember = member => {
    return (
      <div className="contain-staff-member">
        <h3>{`${member.firstname} ${member.lastname} ${member.email}`}</h3>
        <span style={{ marginLeft: '25px' }}>
          <FontAwesomeIcon icon="window-close" className="remove-btn" />
        </span>
      </div>
    );
  }

  render() {
    return (
      <div>
        <p className="page-title">Manage Staff Members</p>
        <div className="contain-manage-admin">
          <div className="contain-form">
            <form id="login-form" className="admin-form-wrapper">
              <h2 className="form-title">Add a new staff member</h2>
              <div>
                <input
                  className="form-control staff-form"
                  type="text"
                  name="email"
                  placeholder="Enter staff registered email"
                  value={this.state.email}
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
            <div className="contain-list admin-form-wrapper">
              {
                this.state.staff.map(this.renderStaffMember)
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ManageAdmin;
