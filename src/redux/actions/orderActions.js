import {
  FETCH_PENDING_ORDERS,
  FETCH_PENDING_ORDERS_SUCCESS,
  FETCH_PENDING_ORDERS_FAILURE,
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