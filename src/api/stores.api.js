import axiosInstance from './axios.config';
import { FRANCHISE_URL } from '../config/serviceUrls';

const BASE = FRANCHISE_URL;

export const storesApi = {
  getAll: async (page = 1, limit = 100, franchiseId = null) => {
    const params = { page, limit };
    if (franchiseId) params.franchiseId = franchiseId;
    const res = await axiosInstance.get(`${BASE}/stores`, { params });
    return res.data;
  },

  create: async (data) => {
    const res = await axiosInstance.post(`${BASE}/stores`, data);
    return res.data;
  },

  update: async (id, data) => {
    const res = await axiosInstance.patch(`${BASE}/stores/${id}`, data);
    return res.data;
  },

  changeStatus: async (id, status) => {
    const res = await axiosInstance.patch(`${BASE}/stores/${id}/status`, { status });
    return res.data;
  },

  hardDelete: async (id) => {
    const res = await axiosInstance.delete(`${BASE}/stores/${id}/hard`);
    return res.data;
  },
};
