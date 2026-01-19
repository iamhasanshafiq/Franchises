import { useState, useCallback } from 'react';
import { citiesApi } from '../api/cities.api';

export const useCities = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    total: 0,
    totalPages: 0,
  });

  const fetchCities = useCallback(async (page = 1, pageSize = 10) => {
    setLoading(true);
    setError(null);
    try {
      const response = await citiesApi.getAll(page, pageSize);
      setCities(response.data?.results || []);
      setPagination({
        page,
        pageSize,
        total: response.data?.count || 0,
        totalPages: Math.ceil((response.data?.count || 0) / pageSize),
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch cities');
    } finally {
      setLoading(false);
    }
  }, []);

  const createCity = async (data) => {
    setLoading(true);
    try {
      const response = await citiesApi.create(data);
      await fetchCities(pagination.page, pagination.pageSize);
      return response;
    } catch (err) {
      throw err.response?.data?.message || 'Failed to create city';
    } finally {
      setLoading(false);
    }
  };

  const updateCity = async (id, data) => {
    setLoading(true);
    try {
      const response = await citiesApi.update(id, data);
      await fetchCities(pagination.page, pagination.pageSize);
      return response;
    } catch (err) {
      throw err.response?.data?.message || 'Failed to update city';
    } finally {
      setLoading(false);
    }
  };

  const deactivateCity = async (id) => {
    setLoading(true);
    try {
      const response = await citiesApi.deactivate(id);
      await fetchCities(pagination.page, pagination.pageSize);
      return response;
    } catch (err) {
      throw err.response?.data?.message || 'Failed to deactivate city';
    } finally {
      setLoading(false);
    }
  };

  const activateCity = async (id) => {
    setLoading(true);
    try {
      const response = await citiesApi.activate(id);
      await fetchCities(pagination.page, pagination.pageSize);
      return response;
    } catch (err) {
      throw err.response?.data?.message || 'Failed to activate city';
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
    activateCity,
  };
};
