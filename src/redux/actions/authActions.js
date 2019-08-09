import {
  notification
} from 'antd';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
} from '../actionTypes';
import API from '../axiosConfig';

export const logout_user = () => ({
  type: LOGOUT_USER,
});

export const login_user = () => ({
  type: LOGIN_USER,
});

export const login_user_success = (user) => ({
  type: LOGIN_USER_SUCCESS,
  user,
});

export const login_user_failure = (error) => ({
  type: LOGIN_USER_FAILURE,
  error,
});

// ActionCreators
export const loginUser = (loginDetails) => (dispatch) => {
  dispatch(login_user());
  return API.post('/auth/admin-signin', loginDetails)
    .then(response => {
      dispatch(login_user_success(response.data.user));
      API.defaults.headers.common['authorization'] = response.data.token;
      localStorage.setItem('triple7', response.data.token);
      notification.success({
        message: response.data.message,
      });
    })
    .catch(error => {
      if (error.response) {
        dispatch(login_user_failure(error.response.data));
        notification.error({
          message: error.response.data.message,
        });
      } else {
        dispatch(login_user_failure({ message: error.message }));
        notification.error({
          message: error.message,
        });
      }
    });
};

export const logoutAUser = () => (dispatch) => {
  API.defaults.headers.common['authorization'] = '';
  localStorage.removeItem('triple7');
  dispatch(logout_user());
};