import axiosInstance from './axios.config';

export const authApi = {
  login: async (email, password) => {
    const response = await axiosInstance.post('/auth/api/auth/login', {
      email,
      password,
    });
    return response.data;
  },

  logout: async () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('access_token');
  },
};
