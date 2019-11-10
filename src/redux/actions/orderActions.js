import {
  FETCH_PENDING_ORDERS,
  FETCH_PENDING_ORDERS_SUCCESS,
  FETCH_PENDING_ORDERS_FAILURE,
  UPDATE_ORDERS,
  UPDATE_ORDERS_SUCCESS,
  UPDATE_ORDERS_FAILURE,
  CANCEL_ORDERS,
  CANCEL_ORDERS_SUCCESS,
  CANCEL_ORDERS_FAILURE,
  UPDATE_RESERVATION,
  CANCEL_RESERVATION,
  UPDATE_RESERVATION_SUCCESS,
  CANCEL_RESERVATION_SUCCESS,
  UPDATE_RESERVATION_FAILURE,
  CANCEL_RESERVATION_FAILURE,
} from '../actionTypes';
import API from '../axiosConfig';

export const fetch_pending_orders= () => ({
  type: FETCH_PENDING_ORDERS,
  isLoading: true,
});

export const fetch_pending_orders_success = (pendingOrders) => ({
  type: FETCH_PENDING_ORDERS_SUCCESS,
  pendingOrders,
});

export const fetch_pending_orders_failure = (error) => ({
  type: FETCH_PENDING_ORDERS_FAILURE,
  error,
});

export const update_order= () => ({
  type: UPDATE_ORDERS,
  isLoading: true,
});

export const update_order_success = (updatedOrder) => ({
  type: UPDATE_ORDERS_SUCCESS,
  updatedOrder,
});

export const update_order_failure = (error) => ({
  type: UPDATE_ORDERS_FAILURE,
  error,
});

export const cancel_pending_order = () => ({
  type: CANCEL_ORDERS,
  isLoading: true,
});

export const cancel_pending_order_success = (updatedOrder) => ({
  type: CANCEL_ORDERS_SUCCESS,
  updatedOrder,
});

export const cancel_pending_order_failure = (error) => ({
  type: CANCEL_ORDERS_FAILURE,
  error,
});

export const update_reservation = () => ({
  type: UPDATE_RESERVATION,
  isLoading: true,
});

export const update_reservation_success = (updatedOrder) => ({
  type: UPDATE_RESERVATION_SUCCESS,
  updatedOrder,
});

export const update_reservation_failure = (error) => ({
  type: UPDATE_RESERVATION_FAILURE,
  error,
});

export const cancel_pending_reservation = () => ({
  type: CANCEL_RESERVATION,
  isLoading: true,
});

export const cancel_pending_reservation_success = (updatedOrder) => ({
  type: CANCEL_RESERVATION_SUCCESS,
  updatedOrder,
});

export const cancel_pending_reservation_failure = (error) => ({
  type: CANCEL_RESERVATION_FAILURE,
  error,
});

// ActionCreators
export const fetchPendingOrders = () => (dispatch) => {
  dispatch(fetch_pending_orders());
  return API.get('/incoming-orders')
    .then(response => {
      dispatch(fetch_pending_orders_success(response.data.orders));
    })
    .catch(error => {
      if (error.response) {
        dispatch(fetch_pending_orders_failure(error.response.data));
      } else {
        dispatch(fetch_pending_orders_failure({ message: error.message }));
      }
    });
};

export const handleUpdateOrder = (orderId) => (dispatch) => {
  dispatch(update_order());
  return API.put(`/orders/${orderId}`)
    .then(response => {
      dispatch(update_order_success(response.data.order));
    })
    .catch(error => {
      if (error.response) {
        dispatch(update_order_failure(error.response.data));
      } else {
        dispatch(update_order_failure({ message: error.message }));
      }
    });
};

export const handleCancelOrder = (orderId) => (dispatch) => {
  dispatch(cancel_pending_order());
  return API.put(`/orders/${orderId}`, { cancel: true })
    .then(response => {
      dispatch(cancel_pending_order_success(response.data.order));
    })
    .catch(error => {
      if (error.response) {
        dispatch(cancel_pending_order_failure(error.response.data));
      } else {
        dispatch(cancel_pending_order_failure({ message: error.message }));
      }
    });
};

export const handleCancelReservation = (reservationId) => (dispatch) => {
  dispatch(cancel_pending_reservation());
  return API.put(`/reservations/${reservationId}`, { cancel: true })
    .then(response => {
      dispatch(cancel_pending_reservation_success(response.data.reservation));
    })
    .catch(error => {
      if (error.response) {
        dispatch(cancel_pending_reservation_failure(error.response.data));
      } else {
        dispatch(cancel_pending_reservation_failure({ message: error.message }));
      }
    });
};

export const handleUpdateReservation = (reservationId) => (dispatch) => {
  dispatch(update_reservation());
  return API.put(`/reservations/${reservationId}`)
    .then(response => {
      dispatch(update_reservation_success(response.data.reservation));
    })
    .catch(error => {
      if (error.response) {
        dispatch(update_reservation_failure(error.response.data));
      } else {
        dispatch(update_reservation_failure({ message: error.message }));
      }
    });
};