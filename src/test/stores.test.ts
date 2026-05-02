import { describe, it, expect, vi, beforeEach } from 'vitest';

// ─── Mock axios instance ───────────────────────────────────────────────────────
vi.mock('../api/axios.config', () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn(),
  },
}));

vi.mock('../config/serviceUrls', () => ({
  FRANCHISE_URL: 'http://localhost:3000',
  joinUrl: (base: string, path: string) => `${base}${path}`,
}));

import axiosInstance from '../api/axios.config';
import { storesApi } from '../api/stores.api';
import { storeAdminsApi } from '../api/store-admins.api';

const mockGet = axiosInstance.get as ReturnType<typeof vi.fn>;
const mockPost = axiosInstance.post as ReturnType<typeof vi.fn>;
const mockPatch = axiosInstance.patch as ReturnType<typeof vi.fn>;
const mockDelete = axiosInstance.delete as ReturnType<typeof vi.fn>;

beforeEach(() => vi.clearAllMocks());

// ─────────────────────────────────────────────────────────────────────────────
// stores.api.js
// ─────────────────────────────────────────────────────────────────────────────
describe('storesApi', () => {
  const fakeStore = { id: 's1', name: 'Hub A', status: 'ACTIVE' };

  describe('getAll', () => {
    it('calls GET /stores with default page/limit', async () => {
      mockGet.mockResolvedValueOnce({ data: { data: { items: [fakeStore] } } });
      const res = await storesApi.getAll();
      expect(mockGet).toHaveBeenCalledWith(
        'http://localhost:3000/stores',
        { params: { page: 1, limit: 100 } }
      );
      expect(res).toEqual({ data: { items: [fakeStore] } });
    });

    it('includes franchiseId when provided', async () => {
      mockGet.mockResolvedValueOnce({ data: {} });
      await storesApi.getAll(1, 10, 'fid-123');
      expect(mockGet).toHaveBeenCalledWith(
        'http://localhost:3000/stores',
        { params: { page: 1, limit: 10, franchiseId: 'fid-123' } }
      );
    });

    it('omits franchiseId when null', async () => {
      mockGet.mockResolvedValueOnce({ data: {} });
      await storesApi.getAll(1, 10, null);
      const call = mockGet.mock.calls[0][1];
      expect(call.params).not.toHaveProperty('franchiseId');
    });
  });

  describe('create', () => {
    it('calls POST /stores with data', async () => {
      mockPost.mockResolvedValueOnce({ data: fakeStore });
      await storesApi.create({ name: 'Hub B' });
      expect(mockPost).toHaveBeenCalledWith('http://localhost:3000/stores', { name: 'Hub B' });
    });
  });

  describe('update', () => {
    it('calls PATCH /stores/:id with data', async () => {
      mockPatch.mockResolvedValueOnce({ data: fakeStore });
      await storesApi.update('s1', { name: 'Updated' });
      expect(mockPatch).toHaveBeenCalledWith('http://localhost:3000/stores/s1', { name: 'Updated' });
    });
  });

  describe('changeStatus', () => {
    it('calls PATCH /stores/:id/status with status body', async () => {
      mockPatch.mockResolvedValueOnce({ data: fakeStore });
      await storesApi.changeStatus('s1', 'SUSPENDED');
      expect(mockPatch).toHaveBeenCalledWith(
        'http://localhost:3000/stores/s1/status',
        { status: 'SUSPENDED' }
      );
    });

    it('works for ACTIVE status', async () => {
      mockPatch.mockResolvedValueOnce({ data: fakeStore });
      await storesApi.changeStatus('s1', 'ACTIVE');
      expect(mockPatch).toHaveBeenCalledWith(
        'http://localhost:3000/stores/s1/status',
        { status: 'ACTIVE' }
      );
    });
  });

  describe('hardDelete', () => {
    it('calls DELETE /stores/:id/hard', async () => {
      mockDelete.mockResolvedValueOnce({ data: {} });
      await storesApi.hardDelete('s1');
      expect(mockDelete).toHaveBeenCalledWith('http://localhost:3000/stores/s1/hard');
    });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// store-admins.api.js
// ─────────────────────────────────────────────────────────────────────────────
describe('storeAdminsApi', () => {
  describe('getAll', () => {
    it('calls GET /store-admins with default params', async () => {
      mockGet.mockResolvedValueOnce({ data: {} });
      await storeAdminsApi.getAll();
      expect(mockGet).toHaveBeenCalledWith(
        'http://localhost:3000/store-admins',
        { params: { page: 1, limit: 50 } }
      );
    });

    it('includes storeId when provided', async () => {
      mockGet.mockResolvedValueOnce({ data: {} });
      await storeAdminsApi.getAll(1, 50, 'store-99');
      const call = mockGet.mock.calls[0][1];
      expect(call.params).toMatchObject({ storeId: 'store-99' });
    });

    it('omits storeId when null', async () => {
      mockGet.mockResolvedValueOnce({ data: {} });
      await storeAdminsApi.getAll(1, 50, null);
      const call = mockGet.mock.calls[0][1];
      expect(call.params).not.toHaveProperty('storeId');
    });
  });

  describe('create', () => {
    it('calls POST /store-admins with form data', async () => {
      mockPost.mockResolvedValueOnce({ data: {} });
      await storeAdminsApi.create({ fullName: 'Ali', email: 'ali@test.com' });
      expect(mockPost).toHaveBeenCalledWith(
        'http://localhost:3000/store-admins',
        { fullName: 'Ali', email: 'ali@test.com' }
      );
    });
  });

  describe('changeStatus', () => {
    it('calls PATCH /store-admins/:id/status with SUSPENDED', async () => {
      mockPatch.mockResolvedValueOnce({ data: {} });
      await storeAdminsApi.changeStatus('a1', 'SUSPENDED');
      expect(mockPatch).toHaveBeenCalledWith(
        'http://localhost:3000/store-admins/a1/status',
        { status: 'SUSPENDED' }
      );
    });

    it('calls PATCH /store-admins/:id/status with ACTIVE', async () => {
      mockPatch.mockResolvedValueOnce({ data: {} });
      await storeAdminsApi.changeStatus('a1', 'ACTIVE');
      expect(mockPatch).toHaveBeenCalledWith(
        'http://localhost:3000/store-admins/a1/status',
        { status: 'ACTIVE' }
      );
    });
  });

  describe('delete', () => {
    it('calls DELETE /store-admins/:id (hard delete)', async () => {
      mockDelete.mockResolvedValueOnce({ data: {} });
      await storeAdminsApi.delete('a1');
      expect(mockDelete).toHaveBeenCalledWith('http://localhost:3000/store-admins/a1');
    });
  });
});
