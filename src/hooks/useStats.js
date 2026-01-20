import { useState, useCallback } from 'react';
import { statsApi } from '../api/stats.api';
import { toast } from '../hooks/use-toast';

export const useStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAdminStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await statsApi.getAdminStats();
      // API returns: { status, data: { cities, franchises, franchiseAdmins, riders } }
      const data = response.data?.data || response.data || response;
      setStats(data);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch stats');
      toast({
        title: 'Error',
        description: err.response?.data?.message || 'Failed to fetch admin stats',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchFranchiseStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await statsApi.getFranchiseStats();
      // API returns: { status: "success", data: { franchiseId, franchise, city, role, riders } }
      const data = response.data || response;
      setStats(data);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch stats');
      toast({
        title: 'Error',
        description: err.response?.data?.message || 'Failed to fetch franchise stats',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    stats,
    loading,
    error,
    fetchAdminStats,
    fetchFranchiseStats,
  };
};
