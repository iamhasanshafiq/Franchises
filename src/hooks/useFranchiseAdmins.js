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
      setAdmins(data.items || []);
      setPagination((prev) => ({
        page: data.pagination?.page || page,
        limit: data.pagination?.limit || limit,
        total: data.pagination?.total || 0,
        totalPages: data.pagination?.totalPages || 0,
        hasNext: data.pagination?.hasNext || false,
        hasPrev: data.pagination?.hasPrev || false,
      }));
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

  return {
    admins,
    loading,
    error,
    pagination,
    fetchAdmins,
    createAdmin,
    deleteAdmin,
  };
};
