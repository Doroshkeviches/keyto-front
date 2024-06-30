import axios, { AxiosError, AxiosRequestHeaders } from 'axios';
const { REACT_APP_API_URL } = process.env;

const repository = axios.create({
  baseURL: REACT_APP_API_URL,
});

repository.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem('access-token');
    if (access_token) {
      config.headers = {
        Authorization: `Bearer ${access_token}`,
      } as AxiosRequestHeaders;
    }
    return config;
  },
  (error: AxiosError) => {
    console.error('Request Interceptor Error:', error);
    return Promise.reject(error);
  }
);

export default repository;