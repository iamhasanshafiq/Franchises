import axiosInstance from './axios.config';
import { AUTH_URL, joinUrl } from '../config/serviceUrls';

const base = (path) => joinUrl(AUTH_URL, path);

export const rolesApi = {
  getAll: async (page = 1, limit = 100) => {
    const response = await axiosInstance.get(base('/roles'), { params: { page, limit } });
    return response.data;
  },

  create: async (data) => {
    const response = await axiosInstance.post(base('/roles'), data);
    return response.data;
  },

  delete: async (id) => {
    const response = await axiosInstance.delete(base(`/roles/${id}`));
    return response.data;
  },
};
