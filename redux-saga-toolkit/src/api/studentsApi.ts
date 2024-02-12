import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosClient = axios.create({
  baseURL: 'http//js-post-api.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default axiosClient;
