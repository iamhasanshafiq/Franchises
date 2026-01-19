import axiosInstance from './axios.config';

export const statsApi = {
  getAdminStats: async () => {
    const response = await axiosInstance.get('/franchise/api/stats/admin/');
    return response.data;
  },

  getFranchiseStats: async () => {
    const response = await axiosInstance.get('/franchise/api/stats/franchise/');
    return response.data;
  },
};
