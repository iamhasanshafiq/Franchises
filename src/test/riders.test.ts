import { describe, it, expect, vi, beforeEach } from 'vitest';

// ─── Mock axios only — real ridersApi runs against it ─────────────────────────
vi.mock('../api/axios.config', () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn(),
  },
}));

vi.mock('../config/serviceUrls', () => ({
  FRANCHISE_URL: 'http://localhost:3001/api',
  joinUrl: (base: string, path: string) => `${base}${path}`,
}));

import axiosInstance from '../api/axios.config';
import { ridersApi } from '../api/riders.api';

const mockGet   = axiosInstance.get   as ReturnType<typeof vi.fn>;
const mockPost  = axiosInstance.post  as ReturnType<typeof vi.fn>;
const mockPatch = axiosInstance.patch as ReturnType<typeof vi.fn>;

beforeEach(() => vi.clearAllMocks());

// ─────────────────────────────────────────────────────────────────────────────
// ridersApi — axios-level tests
// ─────────────────────────────────────────────────────────────────────────────
describe('ridersApi', () => {

  describe('getAll', () => {
    it('calls GET /riders with default page and limit', async () => {
      mockGet.mockResolvedValueOnce({ data: { data: { items: [] } } });
      await ridersApi.getAll();
      expect(mockGet).toHaveBeenCalledWith(
        expect.stringContaining('/riders'),
        { params: { page: 1, limit: 10 } }
      );
    });

    it('includes status filter when provided', async () => {
      mockGet.mockResolvedValueOnce({ data: {} });
      await ridersApi.getAll(1, 10, 'ACTIVE');
      const call = mockGet.mock.calls[0][1];
      expect(call.params).toMatchObject({ status: 'ACTIVE' });
    });

    it('includes franchiseId when provided', async () => {
      mockGet.mockResolvedValueOnce({ data: {} });
      await ridersApi.getAll(1, 10, null, 'fid-1');
      const call = mockGet.mock.calls[0][1];
      expect(call.params).toMatchObject({ franchiseId: 'fid-1' });
    });

    it('omits status when null', async () => {
      mockGet.mockResolvedValueOnce({ data: {} });
      await ridersApi.getAll(1, 10, null);
      const call = mockGet.mock.calls[0][1];
      expect(call.params).not.toHaveProperty('status');
    });

    it('omits franchiseId when null', async () => {
      mockGet.mockResolvedValueOnce({ data: {} });
      await ridersApi.getAll(1, 10, null, null);
      const call = mockGet.mock.calls[0][1];
      expect(call.params).not.toHaveProperty('franchiseId');
    });
  });

  describe('getById', () => {
    it('calls GET /riders/:id', async () => {
      mockGet.mockResolvedValueOnce({ data: { data: {} } });
      await ridersApi.getById('r1');
      expect(mockGet).toHaveBeenCalledWith(expect.stringContaining('/riders/r1'));
    });
  });

  describe('create', () => {
    it('calls POST /riders with form data', async () => {
      mockPost.mockResolvedValueOnce({ data: {} });
      await ridersApi.create({ fullName: 'New Rider', phone: '03001111111' });
      expect(mockPost).toHaveBeenCalledWith(
        expect.stringContaining('/riders'),
        { fullName: 'New Rider', phone: '03001111111' }
      );
    });
  });

  describe('update', () => {
    it('calls PATCH /riders/:id with updated data', async () => {
      mockPatch.mockResolvedValueOnce({ data: {} });
      await ridersApi.update('r1', { fullName: 'Updated Name' });
      expect(mockPatch).toHaveBeenCalledWith(
        expect.stringContaining('/riders/r1'),
        { fullName: 'Updated Name' }
      );
    });
  });

  describe('changeStatus', () => {
    it('calls PATCH /riders/:id/status with SUSPENDED', async () => {
      mockPatch.mockResolvedValueOnce({ data: {} });
      await ridersApi.changeStatus('r1', 'SUSPENDED', 'Violation');
      expect(mockPatch).toHaveBeenCalledWith(
        expect.stringContaining('/riders/r1/status'),
        { status: 'SUSPENDED', reason: 'Violation' }
      );
    });

    it('calls PATCH /riders/:id/status with ACTIVE', async () => {
      mockPatch.mockResolvedValueOnce({ data: {} });
      await ridersApi.changeStatus('r1', 'ACTIVE', '');
      expect(mockPatch).toHaveBeenCalledWith(
        expect.stringContaining('/riders/r1/status'),
        { status: 'ACTIVE', reason: '' }
      );
    });

    it('calls PATCH /riders/:id/status with BLOCKED', async () => {
      mockPatch.mockResolvedValueOnce({ data: {} });
      await ridersApi.changeStatus('r1', 'BLOCKED', 'Admin Action');
      expect(mockPatch).toHaveBeenCalledWith(
        expect.stringContaining('/riders/r1/status'),
        { status: 'BLOCKED', reason: 'Admin Action' }
      );
    });

    it('defaults reason to empty string when not provided', async () => {
      mockPatch.mockResolvedValueOnce({ data: {} });
      await ridersApi.changeStatus('r1', 'SUSPENDED');
      const call = mockPatch.mock.calls[0][1];
      expect(call.reason).toBe('');
    });
  });

  describe('getStatusHistory', () => {
    it('calls GET /riders/:id/history', async () => {
      mockGet.mockResolvedValueOnce({ data: { data: { items: [] } } });
      await ridersApi.getStatusHistory('r1');
      expect(mockGet).toHaveBeenCalledWith(expect.stringContaining('/riders/r1/history'));
    });
  });
});
