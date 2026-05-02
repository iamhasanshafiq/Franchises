import { useState, useCallback } from 'react';
import { storesApi } from '../api/stores.api';
import { toast } from '../hooks/use-toast';

export const useStores = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStores = useCallback(async (page = 1, limit = 100, franchiseId = null) => {
    setLoading(true);
    try {
      const res = await storesApi.getAll(page, limit, franchiseId);
      const data = res.data || res;
      setStores(data.items || data || []);
    } catch (err) {
      toast({
        title: 'Error',
        description: err.response?.data?.message || 'Failed to fetch stores',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const changeStoreStatus = async (id, status) => {
    try {
      await storesApi.changeStatus(id, status);
      setStores(prev => prev.map(s => s.id === id ? { ...s, status } : s));
      toast({ title: 'Status Updated', description: `Store status set to ${status}` });
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to update store status';
      toast({ title: 'Error', description: message, variant: 'destructive' });
      throw new Error(message);
    }
  };

  const hardDeleteStore = async (id) => {
    try {
      await storesApi.hardDelete(id);
      setStores(prev => prev.filter(s => s.id !== id));
      toast({ title: 'Store Deleted', description: 'Store has been permanently removed' });
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to delete store';
      toast({ title: 'Error', description: message, variant: 'destructive' });
      throw new Error(message);
    }
  };

  return { stores, loading, fetchStores, changeStoreStatus, hardDeleteStore };
};
