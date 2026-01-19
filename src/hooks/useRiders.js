import { useState, useCallback } from 'react';
import { ridersApi } from '../api/riders.api';

export const useRiders = () => {
  const [riders, setRiders] = useState([]);
  const [rider, setRider] = useState(null);
  const [statusHistory, setStatusHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    total: 0,
    totalPages: 0,
  });

  const fetchRiders = useCallback(async (page = 1, pageSize = 10, status = null, franchiseId = null) => {
    setLoading(true);
    setError(null);
    try {
      const response = await ridersApi.getAll(page, pageSize, status, franchiseId);
      setRiders(response.data?.results || []);
      setPagination({
        page,
        pageSize,
        total: response.data?.count || 0,
        totalPages: Math.ceil((response.data?.count || 0) / pageSize),
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch riders');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchRider = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await ridersApi.getById(id);
      setRider(response.data);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch rider');
    } finally {
      setLoading(false);
    }
  }, []);

  const createRider = async (data) => {
    setLoading(true);
    try {
      const response = await ridersApi.create(data);
      await fetchRiders(pagination.page, pagination.pageSize);
      return response;
    } catch (err) {
      throw err.response?.data?.message || 'Failed to create rider';
    } finally {
      setLoading(false);
    }
  };

  const updateRider = async (id, data) => {
    setLoading(true);
    try {
      const response = await ridersApi.update(id, data);
      await fetchRider(id);
      return response;
    } catch (err) {
      throw err.response?.data?.message || 'Failed to update rider';
    } finally {
      setLoading(false);
    }
  };

  const changeStatus = async (id, status, reason = '') => {
    setLoading(true);
    try {
      const response = await ridersApi.changeStatus(id, status, reason);
      await fetchRider(id);
      return response;
    } catch (err) {
      throw err.response?.data?.message || 'Failed to change rider status';
    } finally {
      setLoading(false);
    }
  };

  const fetchStatusHistory = useCallback(async (id) => {
    setLoading(true);
    try {
      const response = await ridersApi.getStatusHistory(id);
      setStatusHistory(response.data || []);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch status history');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    riders,
    rider,
    statusHistory,
    loading,
    error,
    pagination,
    fetchRiders,
    fetchRider,
    createRider,
    updateRider,
    changeStatus,
    fetchStatusHistory,
  };
};
