import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchStaff, addStaff, removeStaff } from '../../redux/actions/adminActions';
import './manageAdmin.css';

export class ManageAdmin extends Component {
  state = {
    data: {
      email: '',
    },
    error: '',
  }

  componentDidMount() {
    this.props.fetchStaff();
  }

  onFormInput = (event) => {
    event.preventDefault();
    const { data } = this.state;
    data[event.target.name] = event.target.value.trim();
    this.setState(() => ({ data }));
  }

  renderStaffMember = (member, index) => {
    const { removeStaff } = this.props;
    return (
      <div key={index} className="contain-staff-member">
        <h3>{`${member.firstname} ${member.lastname} ${member.email}`}</h3>
        <span style={{ marginLeft: '25px' }}>
          <FontAwesomeIcon onClick={() => removeStaff(member._id)} icon="window-close" className="remove-btn" />
        </span>
      </div>
    );
  }

  handleAddStaffMember = (event) => {
    event.preventDefault();
    const { data: { email } } = this.state;
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) {
      this.setState(() => ({ error: 'Please provide a registered email address' }));
    } else if (!re.test(email)) {
      this.setState(() => ({ error: 'Please provide a valid email address' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.addStaff({email})
    }
  }

  render() {
    const { staff } = this.props;
    return (
      <div>
        <p className="page-title">Manage Staff Members</p>
        <div className="contain-manage-admin">
          <div className="contain-form">
            <form id="login-form" className="admin-form-wrapper" onSubmit={this.handleAddStaffMember}>
              <h2 className="form-title">Add a new staff member</h2>
              {this.state.error &&
                <div className="alert alert-danger">
                  {this.state.error}
                </div>}
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
                staff.map(this.renderStaffMember)
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ adminReducer }) => ({
  staff: adminReducer.staff,
  isLoading: adminReducer.isLoading,
  error: adminReducer.error,
});

export default connect(mapStateToProps, { fetchStaff, addStaff, removeStaff })(ManageAdmin);
