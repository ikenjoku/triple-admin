import { combineReducers } from 'redux';
import authReducer from './authReducer';
import mealReducer from './mealReducer';
import adminReducer from './adminReducer';
import orderReducer from './orderReducer';
import highlightReducer from './highlightReducer';
import initialState from './initialState';
import { LOGOUT_USER } from '../actionTypes';

const baseReducer = combineReducers({
  authReducer,
  mealReducer,
  adminReducer,
  orderReducer,
  highlightReducer,
});

const rootReducer = (state, action) => {
  switch (action.type) {
    case LOGOUT_USER:
      return initialState;
    default:
      return baseReducer(state, action);
  }
};

export default rootReducer;