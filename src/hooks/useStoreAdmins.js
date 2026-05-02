import { useState, useCallback } from 'react';
import { storeAdminsApi } from '../api/store-admins.api';
import { toast } from '../hooks/use-toast';

export const useStoreAdmins = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAdmins = useCallback(async (page = 1, limit = 50, storeId = null) => {
    setLoading(true);
    try {
      const res = await storeAdminsApi.getAll(page, limit, storeId);
      const data = res.data || res;
      setAdmins(data.items || data || []);
    } catch (err) {
      toast({
        title: 'Error',
        description: err.response?.data?.message || 'Failed to fetch store admins',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const createAdmin = async (data) => {
    try {
      const res = await storeAdminsApi.create(data);
      await fetchAdmins();
      toast({ title: 'Success', description: 'Store admin created successfully' });
      return res;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to create store admin';
      toast({ title: 'Error', description: message, variant: 'destructive' });
      throw new Error(message);
    }
  };

  const changeStatus = async (id, status) => {
    try {
      await storeAdminsApi.changeStatus(id, status);
      setAdmins(prev => prev.map(a => a.id === id ? { ...a, status } : a));
      toast({
        title: 'Status Updated',
        description: `Admin has been ${status === 'ACTIVE' ? 'activated' : 'suspended'} successfully`,
      });
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to update admin status';
      toast({ title: 'Error', description: message, variant: 'destructive' });
      throw new Error(message);
    }
  };

  const deleteAdmin = async (id) => {
    try {
      await storeAdminsApi.delete(id);
      setAdmins(prev => prev.filter(a => a.id !== id));
      toast({ title: 'Removed', description: 'Store admin permanently deleted' });
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to delete store admin';
      toast({ title: 'Error', description: message, variant: 'destructive' });
      throw new Error(message);
    }
  };

  return { admins, loading, fetchAdmins, createAdmin, changeStatus, deleteAdmin };
};
