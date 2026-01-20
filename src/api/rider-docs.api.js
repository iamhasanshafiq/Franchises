import axiosInstance from './axios.config';

const API_BASE_URL = import.meta.env.VITE_FRANCHISE_URL || '';

export const riderDocsApi = {
  getAll: async (page = 1, limit = 10) => {
    const response = await axiosInstance.get(`${API_BASE_URL}/rider-docs`, {
      params: { page, limit },
    });
    return response.data;
  },

  getByRiderId: async (riderId) => {
    const response = await axiosInstance.get(`${API_BASE_URL}/rider-docs/${riderId}`);
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`${API_BASE_URL}/rider-docs/single/${id}`);
    return response.data;
  },

  create: async (data) => {
    const response = await axiosInstance.post(`${API_BASE_URL}/rider-docs`, data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await axiosInstance.patch(`${API_BASE_URL}/rider-docs/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await axiosInstance.delete(`${API_BASE_URL}/rider-docs/${id}`);
    return response.data;
  },
};
