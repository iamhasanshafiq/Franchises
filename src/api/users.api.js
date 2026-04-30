import axiosInstance from './axios.config';
import { AUTH_URL, joinUrl } from '../config/serviceUrls';

const base = (path) => joinUrl(AUTH_URL, path);

export const usersApi = {
  getAll: async (page = 1, limit = 10) => {
    const response = await axiosInstance.get(base('/users'), { params: { page, limit } });
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(base(`/users/${id}`));
    return response.data;
  },

  create: async (data) => {
    const response = await axiosInstance.post(base('/users'), data);
    return response.data;
  },

  createStaff: async (data) => {
    const response = await axiosInstance.post(base('/users/staff'), data);
    return response.data;
  },

  updateStatus: async (userId, isActive) => {
    const response = await axiosInstance.patch(base(`/users/${userId}/status`), { isActive });
    return response.data;
  },

  assignRole: async (userId, roleCode) => {
    const response = await axiosInstance.post(base(`/users/${userId}/role`), { roleCode });
    return response.data;
  },

  assignScope: async (userId, scopeType, scopeId) => {
    const response = await axiosInstance.post(base(`/users/${userId}/scope`), {
      scopeType,
      scopeId: scopeType === 'GLOBAL' ? null : scopeId,
    });
    return response.data;
  },

  getScope: async (userId) => {
    const response = await axiosInstance.get(base(`/users/${userId}/scope`));
    return response.data;
  },

  removeScope: async (userId) => {
    const response = await axiosInstance.delete(base(`/users/${userId}/scope`));
    return response.data;
  },
};
