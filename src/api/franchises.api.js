import axiosInstance from './axios.config';

export const franchisesApi = {
  getAll: async (page = 1, pageSize = 10, cityId = null) => {
    const params = { page, page_size: pageSize };
    if (cityId) params.city_id = cityId;
    
    const response = await axiosInstance.get('/franchise/api/franchises/', { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`/franchise/api/franchises/${id}/`);
    return response.data;
  },

  create: async (data) => {
    const response = await axiosInstance.post('/franchise/api/franchises/', data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await axiosInstance.patch(`/franchise/api/franchises/${id}/`, data);
    return response.data;
  },

  terminate: async (id) => {
    const response = await axiosInstance.patch(`/franchise/api/franchises/${id}/terminate/`);
    return response.data;
  },

  activate: async (id) => {
    const response = await axiosInstance.patch(`/franchise/api/franchises/${id}/activate/`);
    return response.data;
  },
};
