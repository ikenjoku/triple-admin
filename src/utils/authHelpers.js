import API from '../redux/axiosConfig';

export const setAuthorizationToken = async (token) => {
  if (token) {
    API.defaults.headers.common['x-access-token'] = token;
  }
};
