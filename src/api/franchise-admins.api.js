import axiosInstance from './axios.config';

const API_BASE_URL = import.meta.env.VITE_FRANCHISE_URL || '';

export const franchiseAdminsApi = {
  getAll: async (page = 1, limit = 10, franchiseId = null) => {
    const params = { page, limit };
    if (franchiseId) params.franchiseId = franchiseId;
    
    const response = await axiosInstance.get(`${API_BASE_URL}/franchise-admins`, { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`${API_BASE_URL}/franchise-admins/${id}`);
    return response.data;
  },

  create: async (data) => {
    const response = await axiosInstance.post(`${API_BASE_URL}/franchise-admins`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await axiosInstance.delete(`${API_BASE_URL}/franchise-admins/${id}`);
    return response.data;
  },

  changeStatus: async (id, status) => {
    const response = await axiosInstance.patch(`${API_BASE_URL}/franchise-admins/${id}/status`, { status });
    return response.data;
  },
};
