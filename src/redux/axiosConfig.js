import axios from 'axios';

let api = process.env.NODE_ENV === 'production' ?
  'https://triple7-eating-house.herokuapp.com/api/v1' :
  'http://localhost:7777/api/v1';

export default axios.create({
  baseURL: api,
});