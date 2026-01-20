import { useState, useCallback } from 'react';
import { usersApi } from '../api/users.api';
import { toast } from '../hooks/use-toast';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
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

  const fetchUsers = useCallback(async (page = 1, limit = 10) => {
    setLoading(true);
    setError(null);
    try {
      const response = await usersApi.getAll(page, limit);
      const data = response.data || response;
      setUsers(data.items || []);
      setPagination((prev) => ({
        page: data.meta?.page || page,
        limit: data.meta?.limit || limit,
        total: data.meta?.total || 0,
        totalPages: data.meta?.totalPages || 0,
        hasNext: data.meta?.hasNext || false,
        hasPrev: data.meta?.hasPrev || false,
      }));
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch users');
      toast({
        title: 'Error',
        description: err.response?.data?.message || 'Failed to fetch users',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    users,
    loading,
    error,
    pagination,
    fetchUsers,
  };
};

