import {
  FETCH_STAFF,
  FETCH_STAFF_SUCCESS,
  FETCH_STAFF_FAILURE,
  ADD_STAFF,
  ADD_STAFF_FAILURE,
  REMOVE_STAFF,
  REMOVE_STAFF_FAILURE,
} from '../actionTypes';
import initialState from './initialState';

const adminReducer = (state = initialState.adminReducer, action) => {
  switch (action.type) {
    case FETCH_STAFF:
      return { ...state, isLoading: true };
    case FETCH_STAFF_SUCCESS:
      return { ...state, isLoading: false, staff: action.staff, error: null };
    case FETCH_STAFF_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    case ADD_STAFF:
      return { ...state, isLoading: true };
    case ADD_STAFF_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    case REMOVE_STAFF:
      return { ...state, isLoading: true };
    case REMOVE_STAFF_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default adminReducer;