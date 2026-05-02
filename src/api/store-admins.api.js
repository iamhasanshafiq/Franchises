import axiosInstance from './axios.config';
import { FRANCHISE_URL } from '../config/serviceUrls';

const BASE = FRANCHISE_URL;

export const storeAdminsApi = {
  getAll: async (page = 1, limit = 50, storeId = null) => {
    const params = { page, limit };
    if (storeId) params.storeId = storeId;
    const res = await axiosInstance.get(`${BASE}/store-admins`, { params });
    return res.data;
  },

  create: async (data) => {
    const res = await axiosInstance.post(`${BASE}/store-admins`, data);
    return res.data;
  },

  changeStatus: async (id, status) => {
    const res = await axiosInstance.patch(`${BASE}/store-admins/${id}/status`, { status });
    return res.data;
  },

  delete: async (id) => {
    const res = await axiosInstance.delete(`${BASE}/store-admins/${id}`);
    return res.data;
  },
};
