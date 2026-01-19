import axiosInstance from './axios.config';

export const riderDocsApi = {
  getByRiderId: async (riderId) => {
    const response = await axiosInstance.get(`/franchise/api/riders/${riderId}/documents/`);
    return response.data;
  },

  create: async (riderId, data) => {
    const response = await axiosInstance.post(`/franchise/api/riders/${riderId}/documents/`, data);
    return response.data;
  },

  update: async (riderId, docId, data) => {
    const response = await axiosInstance.patch(
      `/franchise/api/riders/${riderId}/documents/${docId}/`,
      data
    );
    return response.data;
  },

  delete: async (riderId, docId) => {
    const response = await axiosInstance.delete(
      `/franchise/api/riders/${riderId}/documents/${docId}/`
    );
    return response.data;
  },

  verify: async (riderId, docId, verified) => {
    const response = await axiosInstance.patch(
      `/franchise/api/riders/${riderId}/documents/${docId}/verify/`,
      { verified }
    );
    return response.data;
  },
};
