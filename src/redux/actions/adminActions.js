import { notification } from 'antd';
import {
  FETCH_STAFF,
  FETCH_STAFF_SUCCESS,
  FETCH_STAFF_FAILURE,
  ADD_STAFF,
  ADD_STAFF_SUCCESS,
  ADD_STAFF_FAILURE,
  REMOVE_STAFF,
  REMOVE_STAFF_SUCCESS,
  REMOVE_STAFF_FAILURE,
} from '../actionTypes';
import API from '../axiosConfig';

export const fetch_staff = () => ({
  type: FETCH_STAFF,
  isLoading: true,
});

export const fetch_staff_success = (staff) => ({
  type: FETCH_STAFF_SUCCESS,
  staff,
});

export const fetch_staff_failure = (error) => ({
  type: FETCH_STAFF_FAILURE,
  error,
});

export const add_staff = () => ({
  type: ADD_STAFF,
  isLoading: true,
});

export const add_staff_success = (staff) => ({
  type: ADD_STAFF_SUCCESS,
  staff,
});

export const add_staff_failure = (error) => ({
  type: ADD_STAFF_FAILURE,
  error,
});

export const remove_staff = () => ({
  type: REMOVE_STAFF,
  isLoading: true,
});

export const remove_staff_success = (staff) => ({
  type: REMOVE_STAFF_SUCCESS,
  staff,
});

export const remove_staff_failure = (error) => ({
  type: REMOVE_STAFF_FAILURE,
  error,
});

// ActionCreators
export const fetchStaff= () => (dispatch) => {
  dispatch(fetch_staff());
  return API.get('/auth/staff')
    .then(response => {
      dispatch(fetch_staff_success(response.data.staff));
    })
    .catch(error => {
      if (error.response) {
        dispatch(fetch_staff_failure(error.response.data));
        notification.error({
          message: error.response.data.message,
        });
      } else {
        dispatch(fetch_staff_failure({ message: error.message }));
        notification.error({
          message: error.message,
        });
      }
    });
};

export const addStaff= (email) => (dispatch) => {
  dispatch(add_staff());
  return API.post('/auth/staff', email)
    .then(response => {
      dispatch(fetchStaff());
      notification.info({
        message: response.data.message,
      });
    })
    .catch(error => {
      if (error.response) {
        dispatch(add_staff_failure(error.response.data));
        notification.error({
          message: error.response.data.message,
        });
      } else {
        dispatch(add_staff_failure({ message: error.message }));
        notification.error({
          message: error.message,
        });
      }
    });
};

export const removeStaff= (staffId) => (dispatch) => {
  dispatch(remove_staff());
  return API.delete(`/auth/staff/${staffId}`)
    .then(response => {
      dispatch(fetchStaff());
      notification.info({
        message: response.data.message,
      });
    })
    .catch(error => {
      if (error.response) {
        dispatch(remove_staff_failure(error.response.data));
        notification.error({
          message: error.response.data.message,
        });
      } else {
        dispatch(remove_staff_failure({ message: error.message }));
        notification.error({
          message: error.message,
        });
      }
    });
};