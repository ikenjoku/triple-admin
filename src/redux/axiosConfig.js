import axios from 'axios';

const API_PREFIX = '/api/v1';
let api = process.env.NODE_ENV === 'production' ?
  `${process.env.REACT_APP_API_URL}${API_PREFIX}` :
  `${process.env.REACT_APP_LOCAL_API_URL}${API_PREFIX}`;

export default axios.create({
  baseURL: api,
});