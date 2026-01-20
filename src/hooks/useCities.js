import { useState, useCallback } from 'react';
import { citiesApi } from '../api/cities.api';
import { toast } from '../hooks/use-toast';

export const useCities = () => {
  const [cities, setCities] = useState([]);
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

  const fetchCities = useCallback(async (page = 1, limit = 10) => {
    setLoading(true);
    setError(null);
    try {
      const response = await citiesApi.getAll(page, limit);
      const data = response.data || response;
      setCities(data.items || []);
      setPagination((prev) => ({
        page: data.pagination?.page || page,
        limit: data.pagination?.limit || limit,
        total: data.pagination?.total || 0,
        totalPages: data.pagination?.totalPages || 0,
        hasNext: data.pagination?.hasNext || false,
        hasPrev: data.pagination?.hasPrev || false,
      }));
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch cities');
      toast({
        title: 'Error',
        description: err.response?.data?.message || 'Failed to fetch cities',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const createCity = async (data) => {
    setLoading(true);
    try {
      const response = await citiesApi.create(data);
      await fetchCities(pagination.page, pagination.limit);
      toast({
        title: 'Success',
        description: 'City created successfully',
      });
      return response;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to create city';
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

  const updateCity = async (id, data) => {
    setLoading(true);
    try {
      const response = await citiesApi.update(id, data);
      await fetchCities(pagination.page, pagination.limit);
      toast({
        title: 'Success',
        description: 'City updated successfully',
      });
      return response;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to update city';
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

  const deactivateCity = async (id) => {
    setLoading(true);
    try {
      const response = await citiesApi.deactivate(id);
      await fetchCities(pagination.page, pagination.limit);
      toast({
        title: 'Success',
        description: 'City deactivated successfully',
      });
      return response;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to deactivate city';
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
    cities,
    loading,
    error,
    pagination,
    fetchCities,
    createCity,
    updateCity,
    deactivateCity,
  };
};
