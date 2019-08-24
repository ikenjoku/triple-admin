import { notification } from 'antd';
import API from '../axiosConfig';

import {
  FETCH_MENU,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_FAILURE,
  ADD_MEAL,
  ADD_MEAL_SUCCESS,
  ADD_MEAL_FAILURE,
  EDIT_MEAL,
  EDIT_MEAL_SUCCESS,
  EDIT_MEAL_FAILURE,
  DELETE_MEAL,
  DELETE_MEAL_SUCCESS,
  DELETE_MEAL_FAILURE,
} from '../actionTypes';

export const fetch_menu = () => ({
  type: FETCH_MENU,
  isLoading: true,
});

export const fetch_menu_success = (menu) => ({
  type: FETCH_MENU_SUCCESS,
  menu,
});

export const fetch_menu_failure = (error) => ({
  type: FETCH_MENU_FAILURE,
  error,
});

export const add_meal = () => ({
  type: ADD_MEAL,
  isLoading: true,
});

export const add_meal_success = (newMeal) => ({
  type: ADD_MEAL_SUCCESS,
  meal: newMeal,
});

export const add_meal_failure = (error) => ({
  type: ADD_MEAL_FAILURE,
  error,
});

export const edit_meal = () => ({
  type: EDIT_MEAL,
  isLoading: true,
});

export const edit_meal_success = (updatedMeal) => ({
  type: EDIT_MEAL_SUCCESS,
  meal: updatedMeal,
});

export const edit_meal_failure = (error) => ({
  type: EDIT_MEAL_FAILURE,
  error,
});

export const delete_meal = () => ({
  type: DELETE_MEAL,
  isLoading: true,
});

export const delete_meal_success = (updatedMeal) => ({
  type: DELETE_MEAL_SUCCESS,
  meal: updatedMeal,
});

export const delete_meal_failure = (error) => ({
  type: DELETE_MEAL_FAILURE,
  error,
});

// ActionCreators
export const fetchMenu = () => (dispatch) => {
  dispatch(fetch_menu());
  return API.get('/meals')
    .then(response => {
      dispatch(fetch_menu_success(response.data.meals));
    })
    .catch(error => {
      if (error.response) {
        dispatch(fetch_menu_failure(error.response.data));
        notification.error({
          message: error.response.data.message,
        });
      } else {
        dispatch(fetch_menu_failure({ message: error.message }));
        notification.error({
          message: error.message,
        });
      }
    });
};

export const addMeal = (mealData) => (dispatch) => {
  dispatch(add_meal());
  return API.post('/meals', mealData)
    .then(response => {
      dispatch(add_meal_success(response.data.meal));
    })
    .catch(error => {
      if (error.response) {
        dispatch(add_meal_failure(error.response.data));
      } else {
        dispatch(add_meal_failure({ message: error.message }));
      }
    });
};

export const editMeal = () => (dispatch) => {
  dispatch(fetch_menu());
  return API.get('/meals')
    .then(response => {
      dispatch(fetch_menu_success(response.data.meals));
    })
    .catch(error => {
      if (error.response) {
        dispatch(fetch_menu_failure(error.response.data));
      } else {
        dispatch(fetch_menu_failure({ message: error.message }));
      }
    });
};

export const deleteMeal = () => (dispatch) => {
  dispatch(fetch_menu());
  return API.get('/meals')
    .then(response => {
      dispatch(fetch_menu_success(response.data.meals));
    })
    .catch(error => {
      if (error.response) {
        dispatch(fetch_menu_failure(error.response.data));
      } else {
        dispatch(fetch_menu_failure({ message: error.message }));
      }
    });
};