import {
  FETCH_PENDING_ORDERS,
  FETCH_PENDING_ORDERS_SUCCESS,
  FETCH_PENDING_ORDERS_FAILURE,
} from '../actionTypes';
import initialState from './initialState';

const orderReducer = (state = initialState.orderReducer, action) => {
  switch (action.type) {
    case FETCH_PENDING_ORDERS:
      return { ...state, isLoading: true };
    case FETCH_PENDING_ORDERS_SUCCESS:
      return { ...state, isLoading: false, pendingOrders: action.pendingOrders, error: null };
    case FETCH_PENDING_ORDERS_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default orderReducer;