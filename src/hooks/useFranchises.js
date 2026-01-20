import { useState, useCallback } from 'react';
import { franchisesApi } from '../api/franchises.api';
import { toast } from '../hooks/use-toast';

export const useFranchises = () => {
  const [franchises, setFranchises] = useState([]);
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

  const fetchFranchises = useCallback(async (page = 1, limit = 10, cityId = null) => {
    setLoading(true);
    setError(null);
    try {
      const response = await franchisesApi.getAll(page, limit, cityId);
      const data = response.data || response;
      setFranchises(data.items || []);
      setPagination((prev) => ({
        page: data.pagination?.page || page,
        limit: data.pagination?.limit || limit,
        total: data.pagination?.total || 0,
        totalPages: data.pagination?.totalPages || 0,
        hasNext: data.pagination?.hasNext || false,
        hasPrev: data.pagination?.hasPrev || false,
      }));
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch franchises');
      toast({
        title: 'Error',
        description: err.response?.data?.message || 'Failed to fetch franchises',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const createFranchise = async (data) => {
    setLoading(true);
    try {
      const response = await franchisesApi.create(data);
      await fetchFranchises(pagination.page, pagination.limit);
      toast({
        title: 'Success',
        description: 'Franchise created successfully',
      });
      return response;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to create franchise';
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

  const updateFranchise = async (id, data) => {
    setLoading(true);
    try {
      const response = await franchisesApi.update(id, data);
      await fetchFranchises(pagination.page, pagination.limit);
      toast({
        title: 'Success',
        description: 'Franchise updated successfully',
      });
      return response;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to update franchise';
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

  const terminateFranchise = async (id) => {
    setLoading(true);
    try {
      const response = await franchisesApi.terminate(id);
      await fetchFranchises(pagination.page, pagination.limit);
      toast({
        title: 'Success',
        description: 'Franchise terminated successfully',
      });
      return response;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to terminate franchise';
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

  const [myFranchise, setMyFranchise] = useState(null);

  const fetchMyFranchise = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await franchisesApi.getMyFranchise();
      const data = response.data || response;
      // Response: { status: "success", data: { items: [{ id, cityId, name, code, city: { id, name, ... } }] } }
      setMyFranchise(data.items?.[0] || null);
      return data.items?.[0] || null;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch my franchise');
      toast({
        title: 'Error',
        description: err.response?.data?.message || 'Failed to fetch my franchise',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    franchises,
    myFranchise,
    loading,
    error,
    pagination,
    fetchFranchises,
    fetchMyFranchise,
    createFranchise,
    updateFranchise,
    terminateFranchise,
  };
};
