import { useState, useCallback } from 'react';
import { franchiseAdminsApi } from '../api/franchise-admins.api';

export const useFranchiseAdmins = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    total: 0,
    totalPages: 0,
  });

  const fetchAdmins = useCallback(async (page = 1, pageSize = 10, franchiseId = null) => {
    setLoading(true);
    setError(null);
    try {
      const response = await franchiseAdminsApi.getAll(page, pageSize, franchiseId);
      setAdmins(response.data?.results || []);
      setPagination({
        page,
        pageSize,
        total: response.data?.count || 0,
        totalPages: Math.ceil((response.data?.count || 0) / pageSize),
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch franchise admins');
    } finally {
      setLoading(false);
    }
  }, []);

  const createAdmin = async (data) => {
    setLoading(true);
    try {
      const response = await franchiseAdminsApi.create(data);
      await fetchAdmins(pagination.page, pagination.pageSize);
      return response;
    } catch (err) {
      throw err.response?.data?.message || 'Failed to create franchise admin';
    } finally {
      setLoading(false);
    }
  };

  const updateAdmin = async (id, data) => {
    setLoading(true);
    try {
      const response = await franchiseAdminsApi.update(id, data);
      await fetchAdmins(pagination.page, pagination.pageSize);
      return response;
    } catch (err) {
      throw err.response?.data?.message || 'Failed to update franchise admin';
    } finally {
      setLoading(false);
    }
  };

  const deleteAdmin = async (id) => {
    setLoading(true);
    try {
      const response = await franchiseAdminsApi.delete(id);
      await fetchAdmins(pagination.page, pagination.pageSize);
      return response;
    } catch (err) {
      throw err.response?.data?.message || 'Failed to delete franchise admin';
    } finally {
      setLoading(false);
    }
  };

  return {
    admins,
    loading,
    error,
    pagination,
    fetchAdmins,
    createAdmin,
    updateAdmin,
    deleteAdmin,
  };
};
