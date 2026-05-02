import { useState, useCallback } from 'react';
import { ridersApi } from '../api/riders.api';
import { toast } from '../hooks/use-toast';

export const useRiders = () => {
  const [riders, setRiders] = useState([]);
  const [rider, setRider] = useState(null);
  const [statusHistory, setStatusHistory] = useState([]);
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

  const fetchRiders = useCallback(async (page = 1, limit = 10, status = null, franchiseId = null) => {
    setLoading(true);
    setError(null);
    try {
      const response = await ridersApi.getAll(page, limit, status, franchiseId);
      const data = response.data || response;
      setRiders(data.items || []);
      setPagination((prev) => ({
        page: data.pagination?.page || page,
        limit: data.pagination?.limit || limit,
        total: data.pagination?.total || 0,
        totalPages: data.pagination?.totalPages || 0,
        hasNext: data.pagination?.hasNext || false,
        hasPrev: data.pagination?.hasPrev || false,
      }));
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch riders');
      toast({
        title: 'Error',
        description: err.response?.data?.message || 'Failed to fetch riders',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchRider = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await ridersApi.getById(id);
      // Response: { status: "success", data: { id, franchiseId, cityId, fullName, phone, email, vehicleType, status, appliedAt, approvedAt, activatedAt, createdAt, updatedAt, version, documents: [...] } }
      const data = response.data?.data || response.data || response;
      setRider(data);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch rider');
      toast({
        title: 'Error',
        description: err.response?.data?.message || 'Failed to fetch rider',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const createRider = async (data) => {
    setLoading(true);
    try {
      const response = await ridersApi.create(data);
      await fetchRiders(pagination.page, pagination.limit);
      toast({
        title: 'Success',
        description: 'Rider created successfully',
      });
      return response;
    } catch (err) {
      const raw = err.response?.data?.message;
      const message = Array.isArray(raw) ? raw.join(', ') : (raw || 'Failed to create rider');
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

  const updateRider = async (id, data) => {
    setLoading(true);
    try {
      const response = await ridersApi.update(id, data);
      await fetchRider(id);
      toast({
        title: 'Success',
        description: 'Rider updated successfully',
      });
      return response;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to update rider';
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

  const changeStatus = async (id, status, reason = '') => {
    setLoading(true);
    try {
      const response = await ridersApi.changeStatus(id, status, reason);
      await fetchRider(id);
      toast({
        title: 'Success',
        description: 'Rider status changed successfully',
      });
      return response;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to change rider status';
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

  const fetchStatusHistory = useCallback(async (id) => {
    setLoading(true);
    try {
      const response = await ridersApi.getStatusHistory(id);
      const data = response.data || response;
      setStatusHistory(data.items || []);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch status history');
      toast({
        title: 'Error',
        description: err.response?.data?.message || 'Failed to fetch status history',
        variant: 'destructive',
      });
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
