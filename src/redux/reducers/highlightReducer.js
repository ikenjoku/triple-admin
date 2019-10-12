import {
  ADD_HIGHLIGHTS,
  ADD_HIGHLIGHTS_SUCCESS,
  ADD_HIGHLIGHTS_FAILURE,
  FETCH_HIGHLIGHTS,
  FETCH_HIGHLIGHTS_SUCCESS,
  FETCH_HIGHLIGHTS_FAILURE,
} from '../actionTypes';
import initialState from './initialState';

const highlightReducer = (state = initialState.highlightReducer, action) => {
  switch (action.type) {
    case FETCH_HIGHLIGHTS:
      return { ...state, isLoading: action.isLoading };
    case FETCH_HIGHLIGHTS_SUCCESS:
      return { ...state, isLoading: false, highlights: action.highlights, error: null };
    case FETCH_HIGHLIGHTS_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    case ADD_HIGHLIGHTS:
      return { ...state, isLoading: action.isLoading };
    case ADD_HIGHLIGHTS_SUCCESS:
      return { ...state, isLoading: false, highlights: [...state.highlights, action.highlight], error: null };
    case ADD_HIGHLIGHTS_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default highlightReducer;