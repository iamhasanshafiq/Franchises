import { useState, useCallback } from 'react';
import { riderDocsApi } from '../api/rider-docs.api';
import { toast } from '../hooks/use-toast';

export const useRiderDocs = () => {
  const [documents, setDocuments] = useState([]);
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

  const fetchDocuments = useCallback(async (page = 1, limit = 10) => {
    setLoading(true);
    setError(null);
    try {
      const response = await riderDocsApi.getAll(page, limit);
      const data = response.data || response;
      setDocuments(data.items || []);
      setPagination((prev) => ({
        page: data.pagination?.page || page,
        limit: data.pagination?.limit || limit,
        total: data.pagination?.total || 0,
        totalPages: data.pagination?.totalPages || 0,
        hasNext: data.pagination?.hasNext || false,
        hasPrev: data.pagination?.hasPrev || false,
      }));
      return data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch documents');
      toast({
        title: 'Error',
        description: err.response?.data?.message || 'Failed to fetch documents',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchDocumentsByRider = useCallback(async (riderId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await riderDocsApi.getByRiderId(riderId);
      const data = response.data || response;
      setDocuments(data.items || []);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch rider documents');
      toast({
        title: 'Error',
        description: err.response?.data?.message || 'Failed to fetch rider documents',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const createDocument = async (data) => {
    setLoading(true);
    try {
      const response = await riderDocsApi.create(data);
      toast({
        title: 'Success',
        description: 'Document created successfully',
      });
      return response;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to create document';
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

  const updateDocument = async (id, data) => {
    setLoading(true);
    try {
      const response = await riderDocsApi.update(id, data);
      await fetchDocuments(pagination.page, pagination.limit);
      toast({
        title: 'Success',
        description: 'Document updated successfully',
      });
      return response;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to update document';
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

  const deleteDocument = async (id) => {
    setLoading(true);
    try {
      const response = await riderDocsApi.delete(id);
      toast({
        title: 'Success',
        description: 'Document deleted successfully',
      });
      return response;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to delete document';
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
    documents,
    loading,
    error,
    pagination,
    fetchDocuments,
    fetchDocumentsByRider,
    createDocument,
    updateDocument,
    deleteDocument,
  };
};
