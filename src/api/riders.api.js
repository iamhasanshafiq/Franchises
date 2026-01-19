import axiosInstance from './axios.config';

export const ridersApi = {
  getAll: async (page = 1, pageSize = 10, status = null, franchiseId = null) => {
    const params = { page, page_size: pageSize };
    if (status) params.status = status;
    if (franchiseId) params.franchise_id = franchiseId;
    
    const response = await axiosInstance.get('/franchise/api/riders/', { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`/franchise/api/riders/${id}/`);
    return response.data;
  },

  create: async (data) => {
    const response = await axiosInstance.post('/franchise/api/riders/', data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await axiosInstance.patch(`/franchise/api/riders/${id}/`, data);
    return response.data;
  },

  changeStatus: async (id, status, reason = '') => {
    const response = await axiosInstance.patch(`/franchise/api/riders/${id}/status/`, {
      status,
      reason,
    });
    return response.data;
  },

  getStatusHistory: async (id) => {
    const response = await axiosInstance.get(`/franchise/api/riders/${id}/status-history/`);
    return response.data;
  },
};
