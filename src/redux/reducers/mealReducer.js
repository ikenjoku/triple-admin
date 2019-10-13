import {
  FETCH_MENU,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_FAILURE,
  ADD_MEAL,
  ADD_MEAL_SUCCESS,
  ADD_MEAL_FAILURE,
  EDIT_MEAL,
  EDIT_MEAL_FAILURE,
  DELETE_MEAL,
  DELETE_MEAL_SUCCESS,
  DELETE_MEAL_FAILURE,
} from '../actionTypes';
import initialState from './initialState';

const mealReducer = (state = initialState.mealReducer, action) => {
  switch (action.type) {
    case FETCH_MENU:
      return { ...state, isLoading: action.isLoading };
    case FETCH_MENU_SUCCESS:
      return { ...state, isLoading: false, menu: action.menu, error: null };
    case FETCH_MENU_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    case ADD_MEAL:
      return { ...state, isLoading: action.isLoading };
    case ADD_MEAL_SUCCESS:
      return { ...state, isLoading: false, menu: [...state.menu, action.meal], error: null };
    case ADD_MEAL_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    case EDIT_MEAL:
      return { ...state, isLoading: action.isLoading };
    case EDIT_MEAL_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    case DELETE_MEAL:
      return { ...state, isLoading: action.isLoading };
    case DELETE_MEAL_SUCCESS:
      const newMenu = state.menu.filter(meal => meal._id !== action.mealId)
      return { ...state, isLoading: false, menu: newMenu, error: null };
    case DELETE_MEAL_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default mealReducer;