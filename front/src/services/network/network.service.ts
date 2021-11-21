import axios from 'axios';

let _onUnauthorized: () => void;

const apiAddress =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:7000/v1/'
    : 'https://api.ebiblo.com/v1/';

export const network = axios.create({
  baseURL: apiAddress,
  headers: {
    'Content-Type': 'application/json',
  },
});

network.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && _onUnauthorized) {
      _onUnauthorized();
    }
    return Promise.reject(error);
  },
);

export const addOnNotAuthenticated = (cb: () => void) => {
  _onUnauthorized = cb;
};
