import { useState, useCallback } from 'react';
import { franchiseAdminsApi } from '../api/franchise-admins.api';
import { toast } from '../hooks/use-toast';

export const useFranchiseAdmins = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: false,
    hasPrev: false,
  });

  const fetchAdmins = useCallback(async (page = 1, limit = 10, franchiseId = null) => {
    setLoading(true);
    setError(null);
    try {
      const response = await franchiseAdminsApi.getAll(page, limit, franchiseId);
      const data = response.data || response;
      const paginationData = data.meta || data.pagination || {};
      setAdmins(data.items || []);
      setPagination({
        page: paginationData.page || page,
        limit: paginationData.limit || limit,
        total: paginationData.total || 0,
        totalPages: paginationData.totalPages || 0,
        hasNext: paginationData.hasNext || false,
        hasPrev: paginationData.hasPrev || false,
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch franchise admins');
      toast({
        title: 'Error',
        description: err.response?.data?.message || 'Failed to fetch franchise admins',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const createAdmin = async (data) => {
    setLoading(true);
    try {
      const response = await franchiseAdminsApi.create(data);
      await fetchAdmins(pagination.page, pagination.limit);
      toast({
        title: 'Success',
        description: 'Franchise admin created successfully',
      });
      return response;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to create franchise admin';
      toast({
        title: 'Error',
        description: message,
        variant: 'destructive',
      });
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  const deleteAdmin = async (id) => {
    setLoading(true);
    try {
      const response = await franchiseAdminsApi.delete(id);
      await fetchAdmins(pagination.page, pagination.limit);
      toast({
        title: 'Success',
        description: 'Franchise admin removed successfully',
      });
      return response;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to remove franchise admin';
      toast({
        title: 'Error',
        description: message,
        variant: 'destructive',
      });
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  const changeStatus = async (id, status) => {
    try {
      const response = await franchiseAdminsApi.changeStatus(id, status);
      setAdmins((prev) =>
        prev.map((admin) => (admin.id === id ? { ...admin, status } : admin))
      );
      toast({
        title: 'Status Updated',
        description: `Admin has been ${status === 'ACTIVE' ? 'activated' : 'suspended'} successfully`,
      });
      return response;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to update admin status';
      toast({
        title: 'Error',
        description: message,
        variant: 'destructive',
      });
      throw new Error(message);
    }
  };

  return {
    admins,
    loading,
    error,
    pagination,
    fetchAdmins,
    createAdmin,
    deleteAdmin,
    changeStatus,
  };
};
