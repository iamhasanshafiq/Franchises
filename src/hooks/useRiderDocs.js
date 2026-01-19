import { useState, useCallback } from 'react';
import { riderDocsApi } from '../api/rider-docs.api';

export const useRiderDocs = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDocuments = useCallback(async (riderId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await riderDocsApi.getByRiderId(riderId);
      setDocuments(response.data || []);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch documents');
    } finally {
      setLoading(false);
    }
  }, []);

  const createDocument = async (riderId, data) => {
    setLoading(true);
    try {
      const response = await riderDocsApi.create(riderId, data);
      await fetchDocuments(riderId);
      return response;
    } catch (err) {
      throw err.response?.data?.message || 'Failed to create document';
    } finally {
      setLoading(false);
    }
  };

  const updateDocument = async (riderId, docId, data) => {
    setLoading(true);
    try {
      const response = await riderDocsApi.update(riderId, docId, data);
      await fetchDocuments(riderId);
      return response;
    } catch (err) {
      throw err.response?.data?.message || 'Failed to update document';
    } finally {
      setLoading(false);
    }
  };

  const deleteDocument = async (riderId, docId) => {
    setLoading(true);
    try {
      const response = await riderDocsApi.delete(riderId, docId);
      await fetchDocuments(riderId);
      return response;
    } catch (err) {
      throw err.response?.data?.message || 'Failed to delete document';
    } finally {
      setLoading(false);
    }
  };

  const verifyDocument = async (riderId, docId, verified) => {
    setLoading(true);
    try {
      const response = await riderDocsApi.verify(riderId, docId, verified);
      await fetchDocuments(riderId);
      return response;
    } catch (err) {
      throw err.response?.data?.message || 'Failed to verify document';
    } finally {
      setLoading(false);
    }
  };

  return {
    documents,
    loading,
    error,
    fetchDocuments,
    createDocument,
    updateDocument,
    deleteDocument,
    verifyDocument,
  };
};
