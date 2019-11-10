import {
  FETCH_PENDING_ORDERS,
  FETCH_PENDING_ORDERS_SUCCESS,
  FETCH_PENDING_ORDERS_FAILURE,
  UPDATE_ORDERS_SUCCESS,
  UPDATE_ORDERS_FAILURE,
  CANCEL_ORDERS_SUCCESS,
  CANCEL_ORDERS_FAILURE,
  UPDATE_RESERVATION_SUCCESS,
  CANCEL_RESERVATION_SUCCESS,
  UPDATE_RESERVATION_FAILURE,
  CANCEL_RESERVATION_FAILURE,
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
    case UPDATE_ORDERS_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    case CANCEL_ORDERS_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    case UPDATE_RESERVATION_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    case CANCEL_RESERVATION_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    case UPDATE_ORDERS_SUCCESS:
      const currentStatus = action.updatedOrder.status;
      let pendingOrders = [...state.pendingOrders];

      if (currentStatus === 'cancelled' || currentStatus === 'completed') {
        pendingOrders = pendingOrders.filter(order => order._id !== action.updatedOrder._id)
      } else {
        const orderIndex = pendingOrders.findIndex((order) => action.updatedOrder._id === order._id);
        pendingOrders[orderIndex] = action.updatedOrder
      }
      return { ...state, isLoading: false, error: null, pendingOrders };
    case CANCEL_ORDERS_SUCCESS:
      const status = action.updatedOrder.status;
      let pending = [...state.pendingOrders];

      if (status === 'cancelled' || status === 'completed') {
        pending = pending.filter(order => order._id !== action.updatedOrder._id)
      } else {
        const orderIndex = pending.findIndex((order) => action.updatedOrder._id === order._id);
        pending[orderIndex] = action.updatedOrder
      }
      return { ...state, isLoading: false, error: null, pendingOrders: pending };
    case UPDATE_RESERVATION_SUCCESS:
      const currentStat = action.updatedOrder.status;
      let pendingReservations = [...state.pendingOrders];

      if (currentStat === 'cancelled' || currentStat === 'completed') {
        pendingReservations = pendingReservations.filter(order => order._id !== action.updatedOrder._id)
      } else {
        const orderIndex = pendingReservations.findIndex((order) => action.updatedOrder._id === order._id);
        pendingReservations[orderIndex] = action.updatedOrder
      }
      return { ...state, isLoading: false, error: null, pendingOrders: pendingReservations };
    case CANCEL_RESERVATION_SUCCESS:
      const stat = action.updatedOrder.status;
      let pendingReserves = [...state.pendingOrders];

      if (stat === 'cancelled' || stat === 'completed') {
        pendingReserves = pendingReserves.filter(order => order._id !== action.updatedOrder._id)
      } else {
        const orderIndex = pending.findIndex((order) => action.updatedOrder._id === order._id);
        pendingReserves[orderIndex] = action.updatedOrder
      }
      return { ...state, isLoading: false, error: null, pendingOrders: pendingReserves };
    default:
      return state;
  }
};

export default orderReducer;