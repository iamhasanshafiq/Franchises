import { useState, useCallback } from 'react';
import { statsApi } from '../api/stats.api';

export const useStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAdminStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await statsApi.getAdminStats();
      setStats(response.data);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch stats');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchFranchiseStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await statsApi.getFranchiseStats();
      setStats(response.data);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch stats');
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
