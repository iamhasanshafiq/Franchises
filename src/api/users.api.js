import axios from 'axios';

const VITE_AUTH_URL = import.meta.env.VITE_AUTH_URL;

const axiosInstance = axios.create({
  baseURL: VITE_AUTH_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const usersApi = {
  getAll: async (page = 1, limit = 10) => {
    const response = await axiosInstance.get('/users/');
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`/users/${id}`);
    return response.data;
  },
};

