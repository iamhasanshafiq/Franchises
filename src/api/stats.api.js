import axiosInstance from './axios.config';

const API_BASE_URL = import.meta.env.VITE_FRANCHISE_URL || '';

export const statsApi = {
  getAdminStats: async () => {
    const response = await axiosInstance.get(`${API_BASE_URL}/stats/overview`);
    return response.data;
  },

  getFranchiseStats: async () => {
    const response = await axiosInstance.get(`${API_BASE_URL}/stats/my-franchise`);
    return response.data;
  },
};
