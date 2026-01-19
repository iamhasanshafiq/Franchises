import { useState, useCallback } from 'react';
import { franchisesApi } from '../api/franchises.api';

export const useFranchises = () => {
  const [franchises, setFranchises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    total: 0,
    totalPages: 0,
  });

  const fetchFranchises = useCallback(async (page = 1, pageSize = 10, cityId = null) => {
    setLoading(true);
    setError(null);
    try {
      const response = await franchisesApi.getAll(page, pageSize, cityId);
      setFranchises(response.data?.results || []);
      setPagination({
        page,
        pageSize,
        total: response.data?.count || 0,
        totalPages: Math.ceil((response.data?.count || 0) / pageSize),
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch franchises');
    } finally {
      setLoading(false);
    }
  }, []);

  const createFranchise = async (data) => {
    setLoading(true);
    try {
      const response = await franchisesApi.create(data);
      await fetchFranchises(pagination.page, pagination.pageSize);
      return response;
    } catch (err) {
      throw err.response?.data?.message || 'Failed to create franchise';
    } finally {
      setLoading(false);
    }
  };

  const updateFranchise = async (id, data) => {
    setLoading(true);
    try {
      const response = await franchisesApi.update(id, data);
      await fetchFranchises(pagination.page, pagination.pageSize);
      return response;
    } catch (err) {
      throw err.response?.data?.message || 'Failed to update franchise';
    } finally {
      setLoading(false);
    }
  };

  const terminateFranchise = async (id) => {
    setLoading(true);
    try {
      const response = await franchisesApi.terminate(id);
      await fetchFranchises(pagination.page, pagination.pageSize);
      return response;
    } catch (err) {
      throw err.response?.data?.message || 'Failed to terminate franchise';
    } finally {
      setLoading(false);
    }
  };

  const activateFranchise = async (id) => {
    setLoading(true);
    try {
      const response = await franchisesApi.activate(id);
      await fetchFranchises(pagination.page, pagination.pageSize);
      return response;
    } catch (err) {
      throw err.response?.data?.message || 'Failed to activate franchise';
    } finally {
      setLoading(false);
    }
  };

  return {
    franchises,
    loading,
    error,
    pagination,
    fetchFranchises,
    createFranchise,
    updateFranchise,
    terminateFranchise,
    activateFranchise,
  };
};
