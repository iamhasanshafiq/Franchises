import axiosInstance from './axios.config';

const API_BASE_URL = import.meta.env.VITE_FRANCHISE_URL || '';

export const ridersApi = {
  getAll: async (page = 1, limit = 10, status = null, franchiseId = null) => {
    const params = { page, limit };
    if (status) params.status = status;
    if (franchiseId) params.franchiseId = franchiseId;
    
    const response = await axiosInstance.get(`${API_BASE_URL}/riders`, { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`${API_BASE_URL}/riders/${id}`);
    return response.data;
  },

  create: async (data) => {
    const response = await axiosInstance.post(`${API_BASE_URL}/riders`, data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await axiosInstance.patch(`${API_BASE_URL}/riders/${id}`, data);
    return response.data;
  },

  changeStatus: async (id, status, reason = '') => {
    const response = await axiosInstance.patch(`${API_BASE_URL}/riders/${id}/status`, {
      status,
      reason,
    });
    return response.data;
  },

  getStatusHistory: async (id) => {
    const response = await axiosInstance.get(`${API_BASE_URL}/riders/${id}/history`);
    return response.data;
  },
};
