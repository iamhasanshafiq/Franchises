import axiosInstance from './axios.config';

const API_BASE_URL = import.meta.env.VITE_FRANCHISE_URL || '';

export const franchisesApi = {
  getAll: async (page = 1, limit = 10, cityId = null) => {
    const params = { page, limit };
    if (cityId) params.cityId = cityId;
    
    const response = await axiosInstance.get(`${API_BASE_URL}/franchises`, { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`${API_BASE_URL}/franchises/${id}`);
    return response.data;
  },

  create: async (data) => {
    const response = await axiosInstance.post(`${API_BASE_URL}/franchises`, data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await axiosInstance.patch(`${API_BASE_URL}/franchises/${id}`, data);
    return response.data;
  },

  terminate: async (id) => {
    const response = await axiosInstance.delete(`${API_BASE_URL}/franchises/${id}`);
    return response.data;
  },
};
