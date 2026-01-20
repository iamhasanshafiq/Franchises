import axiosInstance from './axios.config';

const API_BASE_URL = import.meta.env.VITE_FRANCHISE_URL || '';

export const statsApi = {
  getAdminStats: async () => {
    const response = await axiosInstance.get(`${API_BASE_URL}/stats/overview`);
    return response.data;
  },

  getFranchiseStats: async (franchiseId) => {
    const response = await axiosInstance.get(`${API_BASE_URL}/stats/franchise/${franchiseId}`);
    return response.data;
  },
};
