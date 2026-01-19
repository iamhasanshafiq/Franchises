import axiosInstance from './axios.config';

export const citiesApi = {
  getAll: async (page = 1, pageSize = 10) => {
    const response = await axiosInstance.get('/franchise/api/cities/', {
      params: { page, page_size: pageSize },
    });
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`/franchise/api/cities/${id}/`);
    return response.data;
  },

  create: async (data) => {
    const response = await axiosInstance.post('/franchise/api/cities/', data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await axiosInstance.patch(`/franchise/api/cities/${id}/`, data);
    return response.data;
  },

  deactivate: async (id) => {
    const response = await axiosInstance.patch(`/franchise/api/cities/${id}/deactivate/`);
    return response.data;
  },

  activate: async (id) => {
    const response = await axiosInstance.patch(`/franchise/api/cities/${id}/activate/`);
    return response.data;
  },
};
