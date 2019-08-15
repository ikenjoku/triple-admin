import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPendingOrders } from '../../redux/actions/orderActions';
import moment from 'moment';


import './incomingOrders.css';

class IncomingOrders extends Component {

  componentDidMount() {
    this.props.fetchPendingOrders();
  }

  renderPendingOrder = (pendingOrder) => {
    if (pendingOrder.seats === undefined) {
      return (
        <div className="contain-order">
          <div className="order-box">
            <p>{pendingOrder.customerName}</p>
            <p>08086082224</p>
          </div>
          <div style={{ margin: '0px auto' }}>
            {
              pendingOrder.meals.map((meal, index) => (
                <div key={index}>
                  <p><span><strong>{meal.qty}</strong>  {meal.name}</span></p>
                </div>
              ))
            }
          </div>
          <div className="order-box">
            <p>&#8358; {pendingOrder.amount}</p>
          </div>
          {
            !pendingOrder.homeDelivery && (
              <div className="deliver-box">
                <p className="delivery-address-text"><b>Deliver to:</b> 122, N.A Post Service Housing, Kingways, GRA - Ikeja</p>
              </div>
            )
          }
          <div className="order-box">
            <p>{pendingOrder.status}</p>
          </div>
          <div className="contain-pending-buttons">
          <button className="action-btn">Confirm</button>
          <button className="action-btn">Cancel</button>
          </div>
        </div>
      );
    }
    return (
      <div className="contain-order">
        <div className="order-box">
          <p>{pendingOrder.customerName}</p>
          <p>08086082224</p>
        </div>
        <div style={{ margin: 'auto' }}>
          {
            <b>{moment(pendingOrder.datetime).format('MMMM Do YYYY, h:mm a')}</b>
          }
        </div>
        <div className="order-box">
          <p>Seats: {pendingOrder.seats}</p>
        </div>
        <div className="order-box">
          <p>{pendingOrder.status}</p>
        </div>
        <div className="contain-pending-buttons">
          <button className="action-btn">Confirm</button>
          <button className="action-btn">Cancel</button>
        </div>
      </div>
    );
  }

  render() {
    const { pendingOrders } = this.props;
    return (
      <div className="orders-container">
        <p className="page-title">Incoming Orders</p>
        {pendingOrders.length && pendingOrders.map(this.renderPendingOrder)}
      </div>
    );
  }
}

const mapStateToProps = ({ orderReducer }) => ({
  pendingOrders: orderReducer.pendingOrders,
  isLoading: orderReducer.isLoading,
  error: orderReducer.error,
});


export default connect(mapStateToProps, { fetchPendingOrders })(IncomingOrders);
