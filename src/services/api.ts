import axios from 'axios';
import { ACCESS_TOKEN, BASE_URL } from '../constants';

const api = axios.create({
    baseURL: BASE_URL,
});


api.interceptors.request.use(async function (config) {
    const access_token = await localStorage.getItem(ACCESS_TOKEN);
    if (config.headers && access_token) {
        config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

export default api;
