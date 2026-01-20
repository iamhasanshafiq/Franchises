import axiosInstance from './axios.config';

const API_BASE_URL = import.meta.env.VITE_FRANCHISE_URL || '';

export const citiesApi = {
  getAll: async (page = 1, limit = 10) => {
    const response = await axiosInstance.get(`${API_BASE_URL}/cities`, {
      params: { page, limit },
    });
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`${API_BASE_URL}/cities/${id}`);
    return response.data;
  },

  create: async (data) => {
    const response = await axiosInstance.post(`${API_BASE_URL}/cities`, data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await axiosInstance.patch(`${API_BASE_URL}/cities/${id}`, data);
    return response.data;
  },

  deactivate: async (id) => {
    const response = await axiosInstance.delete(`${API_BASE_URL}/cities/${id}`);
    return response.data;
  },
};
