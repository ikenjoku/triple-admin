import { notification } from 'antd';
import API from '../axiosConfig';

import {
  ADD_HIGHLIGHTS,
  ADD_HIGHLIGHTS_SUCCESS,
  ADD_HIGHLIGHTS_FAILURE,
  FETCH_HIGHLIGHTS,
  FETCH_HIGHLIGHTS_SUCCESS,
  FETCH_HIGHLIGHTS_FAILURE,
  EDIT_HIGHLIGHTS,
  EDIT_HIGHLIGHTS_SUCCESS,
  EDIT_HIGHLIGHTS_FAILURE,
  DELETE_HIGHLIGHTS,
  DELETE_HIGHLIGHTS_SUCCESS,
  DELETE_HIGHLIGHTS_FAILURE,
} from '../actionTypes';

export const edit_highlight = () => ({
  type: EDIT_HIGHLIGHTS,
  isLoading: true,
});

export const edit_highlight_success = (updatedHighlight, highlightId) => ({
  type: EDIT_HIGHLIGHTS_SUCCESS,
  updatedHighlight,
  highlightId,
});

export const edit_highlight_failure = (error) => ({
  type: EDIT_HIGHLIGHTS_FAILURE,
  error,
});

export const add_highlight = () => ({
  type: ADD_HIGHLIGHTS,
  isLoading: true,
});

export const add_highlight_success = (newHighlight) => ({
  type: ADD_HIGHLIGHTS_SUCCESS,
  highlight: newHighlight,
});

export const add_highlight_failure = (error) => ({
  type: ADD_HIGHLIGHTS_FAILURE,
  error,
});

export const fetch_highlight = () => ({
  type: FETCH_HIGHLIGHTS,
  isLoading: true,
});

export const fetch_highlight_success = (highlights) => ({
  type: FETCH_HIGHLIGHTS_SUCCESS,
  highlights,
});

export const fetch_highlight_failure = (error) => ({
  type: FETCH_HIGHLIGHTS_FAILURE,
  error,
});

export const delete_highlight = () => ({
  type: DELETE_HIGHLIGHTS,
  isLoading: true,
});

export const delete_highlight_success = (highlightId) => ({
  type: DELETE_HIGHLIGHTS_SUCCESS,
  highlightId,
});

export const delete_highlight_failure = (error) => ({
  type: DELETE_HIGHLIGHTS_FAILURE,
  error,
});

// ActionCreators
export const addHighlight = (highlightData) => (dispatch) => {
  dispatch(add_highlight());
  return API.post('/highlights', highlightData)
    .then(response => {
      dispatch(add_highlight_success(response.data.highlight));
    })
    .catch(error => {
      if (error.response) {
        dispatch(add_highlight_failure(error.response.data));
        notification.error({
          message: error.response.data.message,
        });
      } else {
        dispatch(add_highlight_failure({ message: error.message }));
        notification.error({
          message: error.message,
        });
      }
    });
};

export const fetchHighlights = () => (dispatch) => {
  dispatch(fetch_highlight());
  return API.get('/highlights')
    .then(response => {
      dispatch(fetch_highlight_success(response.data.highlights));
    })
    .catch(error => {
      if (error.response) {
        dispatch(fetch_highlight_failure(error.response.data));
        notification.error({
          message: error.response.data.message,
        });
      } else {
        dispatch(fetch_highlight_failure({ message: error.message }));
        notification.error({
          message: error.message,
        });
      }
    });
};

export const editHighlight = (updates, highlightId) => (dispatch) => {
  dispatch(edit_highlight());
  return API.put(`/highlights/${highlightId}`, updates)
    .then(response => {
      dispatch(fetchHighlights());
    })
    .catch(error => {
      if (error.response) {
        dispatch(edit_highlight_failure(error.response.data));
      } else {
        dispatch(edit_highlight_failure({ message: error.message }));
      }
    });
};

export const deleteHighlight = (highlightId) => (dispatch) => {
  dispatch(delete_highlight());
  return API.delete(`/highlights/${highlightId}`)
    .then(response => {
      dispatch(delete_highlight_success(highlightId));
    })
    .catch(error => {
      if (error.response) {
        dispatch(delete_highlight_failure(error.response.data));
      } else {
        dispatch(delete_highlight_failure({ message: error.message }));
      }
    });
};