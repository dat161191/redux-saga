// api/axiosClient.js
import axios from "axios";
import firebase from "firebase";
import queryString from "query-string";
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#requestconfig` for the full list of configs
const getFireBaseToken = async () => {
  const currentUser = await firebase.auth().currentUser;
  if (currentUser) return currentUser.getIdToken;
};
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  // const currentUser = await firebase.auth().currentUser;
  // if (currentUser) {
  //   const token = await currentUser.getIdToken();
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  const token = await getFireBaseToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
