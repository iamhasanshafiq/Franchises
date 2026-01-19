import axiosInstance from './axios.config';

export const franchiseAdminsApi = {
  getAll: async (page = 1, pageSize = 10, franchiseId = null) => {
    const params = { page, page_size: pageSize };
    if (franchiseId) params.franchise_id = franchiseId;
    
    const response = await axiosInstance.get('/franchise/api/franchise-admins/', { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`/franchise/api/franchise-admins/${id}/`);
    return response.data;
  },

  create: async (data) => {
    const response = await axiosInstance.post('/franchise/api/franchise-admins/', data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await axiosInstance.patch(`/franchise/api/franchise-admins/${id}/`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await axiosInstance.delete(`/franchise/api/franchise-admins/${id}/`);
    return response.data;
  },
};
