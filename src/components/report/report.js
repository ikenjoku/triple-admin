import React, { Component } from 'react'
import { DatePicker } from 'antd';

import './report.css';


export class Dashboard extends Component {

  handleDateChange = (date, dateString) => {
    console.log(date, dateString);
  }
  render() {
    return (
      <div>
        <p className="page-title">Daily Report</p>
        <div className="contain-date-picker">
          <DatePicker className="ant-date-picker" onChange={this.handleDateChange} />
        </div>
        <div className="contain-stats">
          <div className="contain-report">
            <div className="orders-summary report-child">
              <p><span>53</span> orders</p>
              <div>
                <p>cancelled: 5</p>
                <p>pending: 10</p>
                <p>confirmed: 5</p>
                <p>delivered: 25</p>
              </div>
            </div>
            <div className="orders-summary report-child total-amount">
              &#8358; 45,000.00
          </div>
          </div>
          <hr />
          <div className="all-time-stats">
            <div className="orders-summary all-stats ">
              <p><span>53</span> orders</p>
              <div>
                <p>cancelled: 5</p>
                <p>pending: 10</p>
                <p>confirmed: 5</p>
                <p>delivered: 25</p>
              </div>
              <div>Total: &#8358; 45,000.00</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
