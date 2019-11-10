import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchPendingOrders,
  handleUpdateOrder,
  handleCancelOrder,
  handleUpdateReservation,
  handleCancelReservation,
} from '../../redux/actions/orderActions';
import moment from 'moment';


import './incomingOrders.css';

const ActionButtons = ({ orderId, orderStatus, handleUpdateOrder, handleCancelOrder }) => {
  const nextState = {
    cancelled: '',
    pending: ['Cancel', 'Confirm'],
    confirmed: 'Complete',
    completed: '',
  };

  if (orderStatus === 'pending') {
    const [Cancel, Confirm] = nextState[orderStatus];

    return (
      <div className="contain-pending-buttons">
        <button onClick={() => handleUpdateOrder(orderId)} className="action-btn">{Confirm}</button>
        <button onClick={() => handleCancelOrder(orderId)} className="action-btn">{Cancel}</button>
      </div>
    );
  } else {
    if (orderStatus === 'cancelled' || orderStatus === 'completed' ) {
      return (
      <div className="contain-pending-buttons">
      </div>
    );
  }
  return (
    <div className="contain-pending-buttons">
      <button className="action-btn" onClick={() => handleUpdateOrder(orderId)}>{nextState[orderStatus]}</button>
    </div>
  );
};
}

class IncomingOrders extends Component {

  componentDidMount() {
    this.props.fetchPendingOrders();
  }

  renderPendingOrder = (pendingOrder) => {
    const { handleCancelOrder, handleUpdateOrder, handleCancelReservation, handleUpdateReservation } = this.props;

    if (pendingOrder.seats === undefined) {
      return (
        <div key={pendingOrder._id} className="contain-order">
          <div className="order-box">
            <p>{pendingOrder.customerName}</p>
            <p>{pendingOrder.phone}</p>
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
            pendingOrder.homeDelivery && (
              <div className="deliver-box">
                <p className="delivery-address-text"><b>Deliver to:</b>{pendingOrder.deliveryAddress}</p>
              </div>
            )
          }
          <div className="order-box">
            <p>{pendingOrder.status}</p>
          </div>
          <ActionButtons
            orderId={pendingOrder._id}
            orderStatus={pendingOrder.status}
            handleCancelOrder={handleCancelOrder}
            handleUpdateOrder={handleUpdateOrder}
          />
        </div>
      );
    }
    return (
      <div key={pendingOrder._id} className="contain-order">
        <div className="order-box">
          <p>{pendingOrder.customerName}</p>
          <p>{pendingOrder.phone}</p>
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
        <ActionButtons
          orderId={pendingOrder._id}
          orderStatus={pendingOrder.status}
          handleCancelOrder={handleCancelReservation}
          handleUpdateOrder={handleUpdateReservation}
        />
      </div>
    );
  }

  render() {
    const { pendingOrders } = this.props;
    return (
      <div className="orders-container">
        <p className="page-title">Incoming Orders</p>
        {pendingOrders.length ? pendingOrders.map(this.renderPendingOrder) : 'Waiting for orders...'}
      </div>
    );
  }
}

const mapStateToProps = ({ orderReducer }) => ({
  pendingOrders: orderReducer.pendingOrders,
  isLoading: orderReducer.isLoading,
  error: orderReducer.error,
});


export default connect(mapStateToProps, {
  fetchPendingOrders,
  handleUpdateOrder,
  handleCancelOrder,
  handleCancelReservation,
  handleUpdateReservation,
})(IncomingOrders);
