import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';

// ─── Mocks ────────────────────────────────────────────────────────────────────
vi.mock('../api/stores.api', () => ({
  storesApi: {
    getAll: vi.fn(),
    changeStatus: vi.fn(),
    hardDelete: vi.fn(),
  },
}));

vi.mock('../api/store-admins.api', () => ({
  storeAdminsApi: {
    getAll: vi.fn(),
    create: vi.fn(),
    changeStatus: vi.fn(),
    delete: vi.fn(),
  },
}));

const mockToast = vi.fn();
vi.mock('../hooks/use-toast', () => ({ toast: (...args: unknown[]) => mockToast(...args) }));

import { storesApi } from '../api/stores.api';
import { storeAdminsApi } from '../api/store-admins.api';
import { useStores } from '../hooks/useStores';
import { useStoreAdmins } from '../hooks/useStoreAdmins';

const mockStoresGetAll   = storesApi.getAll     as ReturnType<typeof vi.fn>;
const mockStoresStatus   = storesApi.changeStatus as ReturnType<typeof vi.fn>;
const mockStoresDelete   = storesApi.hardDelete  as ReturnType<typeof vi.fn>;

const mockAdminsGetAll   = storeAdminsApi.getAll        as ReturnType<typeof vi.fn>;
const mockAdminsCreate   = storeAdminsApi.create        as ReturnType<typeof vi.fn>;
const mockAdminsStatus   = storeAdminsApi.changeStatus  as ReturnType<typeof vi.fn>;
const mockAdminsDelete   = storeAdminsApi.delete        as ReturnType<typeof vi.fn>;

const storeList = [
  { id: 's1', name: 'Hub A', status: 'ACTIVE' },
  { id: 's2', name: 'Hub B', status: 'SUSPENDED' },
];

const adminList = [
  { id: 'a1', fullName: 'Ali Khan', status: 'ACTIVE' },
  { id: 'a2', fullName: 'Sara Ahmed', status: 'SUSPENDED' },
];

beforeEach(() => {
  vi.clearAllMocks();
  mockToast.mockClear();
});

// ─────────────────────────────────────────────────────────────────────────────
// useStores
// ─────────────────────────────────────────────────────────────────────────────
describe('useStores', () => {

  describe('fetchStores', () => {
    it('populates stores on success (nested data.items)', async () => {
      mockStoresGetAll.mockResolvedValueOnce({ data: { items: storeList } });
      const { result } = renderHook(() => useStores());
      await act(() => result.current.fetchStores());
      expect(result.current.stores).toEqual(storeList);
      expect(result.current.loading).toBe(false);
    });

    it('populates stores when response is flat array', async () => {
      mockStoresGetAll.mockResolvedValueOnce(storeList);
      const { result } = renderHook(() => useStores());
      await act(() => result.current.fetchStores());
      expect(result.current.stores).toEqual(storeList);
    });

    it('sets stores to empty array on empty response', async () => {
      mockStoresGetAll.mockResolvedValueOnce({ data: { items: [] } });
      const { result } = renderHook(() => useStores());
      await act(() => result.current.fetchStores());
      expect(result.current.stores).toEqual([]);
    });

    it('shows error toast and clears loading on failure', async () => {
      mockStoresGetAll.mockRejectedValueOnce({
        response: { data: { message: 'Network error' } },
      });
      const { result } = renderHook(() => useStores());
      await act(() => result.current.fetchStores());
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({ variant: 'destructive' }));
      expect(result.current.loading).toBe(false);
    });

    it('sets loading true while fetching then false after', async () => {
      let resolve: (v: unknown) => void;
      const pending = new Promise(r => { resolve = r; });
      mockStoresGetAll.mockReturnValueOnce(pending);
      const { result } = renderHook(() => useStores());

      act(() => { result.current.fetchStores(); });
      expect(result.current.loading).toBe(true);

      await act(async () => { resolve!({ data: { items: [] } }); });
      expect(result.current.loading).toBe(false);
    });
  });

  describe('changeStoreStatus', () => {
    it('updates matching store status in state optimistically', async () => {
      mockStoresGetAll.mockResolvedValueOnce({ data: { items: storeList } });
      mockStoresStatus.mockResolvedValueOnce({});
      const { result } = renderHook(() => useStores());
      await act(() => result.current.fetchStores());

      await act(() => result.current.changeStoreStatus('s1', 'SUSPENDED'));
      const updated = result.current.stores.find(s => s.id === 's1');
      expect(updated?.status).toBe('SUSPENDED');
    });

    it('does not change other stores status', async () => {
      mockStoresGetAll.mockResolvedValueOnce({ data: { items: storeList } });
      mockStoresStatus.mockResolvedValueOnce({});
      const { result } = renderHook(() => useStores());
      await act(() => result.current.fetchStores());

      await act(() => result.current.changeStoreStatus('s1', 'SUSPENDED'));
      const s2 = result.current.stores.find(s => s.id === 's2');
      expect(s2?.status).toBe('SUSPENDED'); // unchanged
    });

    it('shows success toast on status change', async () => {
      mockStoresGetAll.mockResolvedValueOnce({ data: { items: storeList } });
      mockStoresStatus.mockResolvedValueOnce({});
      const { result } = renderHook(() => useStores());
      await act(() => result.current.fetchStores());
      await act(() => result.current.changeStoreStatus('s1', 'ACTIVE'));
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({ title: 'Status Updated' }));
    });

    it('shows error toast and rethrows on failure', async () => {
      mockStoresGetAll.mockResolvedValueOnce({ data: { items: storeList } });
      mockStoresStatus.mockRejectedValueOnce({ response: { data: { message: 'Forbidden' } } });
      const { result } = renderHook(() => useStores());
      await act(() => result.current.fetchStores());
      await expect(
        act(() => result.current.changeStoreStatus('s1', 'SUSPENDED'))
      ).rejects.toThrow('Forbidden');
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({ variant: 'destructive' }));
    });
  });

  describe('hardDeleteStore', () => {
    it('removes deleted store from state', async () => {
      mockStoresGetAll.mockResolvedValueOnce({ data: { items: storeList } });
      mockStoresDelete.mockResolvedValueOnce({});
      const { result } = renderHook(() => useStores());
      await act(() => result.current.fetchStores());

      await act(() => result.current.hardDeleteStore('s1'));
      expect(result.current.stores.find(s => s.id === 's1')).toBeUndefined();
      expect(result.current.stores).toHaveLength(1);
    });

    it('shows success toast after deletion', async () => {
      mockStoresGetAll.mockResolvedValueOnce({ data: { items: storeList } });
      mockStoresDelete.mockResolvedValueOnce({});
      const { result } = renderHook(() => useStores());
      await act(() => result.current.fetchStores());
      await act(() => result.current.hardDeleteStore('s1'));
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({ title: 'Store Deleted' }));
    });

    it('shows error toast when store has linked admins (409 conflict)', async () => {
      mockStoresGetAll.mockResolvedValueOnce({ data: { items: storeList } });
      mockStoresDelete.mockRejectedValueOnce({
        response: { data: { message: 'Cannot delete store with linked admins' } },
      });
      const { result } = renderHook(() => useStores());
      await act(() => result.current.fetchStores());
      await expect(
        act(() => result.current.hardDeleteStore('s1'))
      ).rejects.toThrow('Cannot delete store with linked admins');
      // store should NOT be removed from state
      expect(result.current.stores.find(s => s.id === 's1')).toBeDefined();
    });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// useStoreAdmins
// ─────────────────────────────────────────────────────────────────────────────
describe('useStoreAdmins', () => {

  describe('fetchAdmins', () => {
    it('populates admins on success', async () => {
      mockAdminsGetAll.mockResolvedValueOnce({ data: { items: adminList } });
      const { result } = renderHook(() => useStoreAdmins());
      await act(() => result.current.fetchAdmins());
      expect(result.current.admins).toEqual(adminList);
      expect(result.current.loading).toBe(false);
    });

    it('sets admins to empty array on empty response', async () => {
      mockAdminsGetAll.mockResolvedValueOnce({ data: { items: [] } });
      const { result } = renderHook(() => useStoreAdmins());
      await act(() => result.current.fetchAdmins());
      expect(result.current.admins).toEqual([]);
    });

    it('shows error toast on failure', async () => {
      mockAdminsGetAll.mockRejectedValueOnce({ response: { data: { message: 'Server error' } } });
      const { result } = renderHook(() => useStoreAdmins());
      await act(() => result.current.fetchAdmins());
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({ variant: 'destructive' }));
    });
  });

  describe('createAdmin', () => {
    it('refetches admins after creation', async () => {
      mockAdminsCreate.mockResolvedValueOnce({ data: {} });
      mockAdminsGetAll
        .mockResolvedValueOnce({ data: { items: adminList } })  // after create
      const { result } = renderHook(() => useStoreAdmins());
      await act(() => result.current.createAdmin({ fullName: 'New Admin' }));
      expect(mockAdminsGetAll).toHaveBeenCalledTimes(1);
    });

    it('shows success toast after creation', async () => {
      mockAdminsCreate.mockResolvedValueOnce({ data: {} });
      mockAdminsGetAll.mockResolvedValueOnce({ data: { items: [] } });
      const { result } = renderHook(() => useStoreAdmins());
      await act(() => result.current.createAdmin({ fullName: 'New Admin' }));
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({ title: 'Success' }));
    });

    it('shows error toast and rethrows on failure', async () => {
      mockAdminsCreate.mockRejectedValueOnce({ response: { data: { message: 'Email exists' } } });
      const { result } = renderHook(() => useStoreAdmins());
      await expect(
        act(() => result.current.createAdmin({ email: 'dup@test.com' }))
      ).rejects.toThrow('Email exists');
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({ variant: 'destructive' }));
    });
  });

  describe('changeStatus', () => {
    it('suspends an active admin in state', async () => {
      mockAdminsGetAll.mockResolvedValueOnce({ data: { items: adminList } });
      mockAdminsStatus.mockResolvedValueOnce({});
      const { result } = renderHook(() => useStoreAdmins());
      await act(() => result.current.fetchAdmins());

      await act(() => result.current.changeStatus('a1', 'SUSPENDED'));
      expect(result.current.admins.find(a => a.id === 'a1')?.status).toBe('SUSPENDED');
    });

    it('activates a suspended admin in state', async () => {
      mockAdminsGetAll.mockResolvedValueOnce({ data: { items: adminList } });
      mockAdminsStatus.mockResolvedValueOnce({});
      const { result } = renderHook(() => useStoreAdmins());
      await act(() => result.current.fetchAdmins());

      await act(() => result.current.changeStatus('a2', 'ACTIVE'));
      expect(result.current.admins.find(a => a.id === 'a2')?.status).toBe('ACTIVE');
    });

    it('shows correct toast message for suspension', async () => {
      mockAdminsGetAll.mockResolvedValueOnce({ data: { items: adminList } });
      mockAdminsStatus.mockResolvedValueOnce({});
      const { result } = renderHook(() => useStoreAdmins());
      await act(() => result.current.fetchAdmins());
      await act(() => result.current.changeStatus('a1', 'SUSPENDED'));
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({ description: expect.stringContaining('suspended') })
      );
    });

    it('shows correct toast message for activation', async () => {
      mockAdminsGetAll.mockResolvedValueOnce({ data: { items: adminList } });
      mockAdminsStatus.mockResolvedValueOnce({});
      const { result } = renderHook(() => useStoreAdmins());
      await act(() => result.current.fetchAdmins());
      await act(() => result.current.changeStatus('a2', 'ACTIVE'));
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({ description: expect.stringContaining('activated') })
      );
    });

    it('shows error toast and rethrows on failure', async () => {
      mockAdminsGetAll.mockResolvedValueOnce({ data: { items: adminList } });
      mockAdminsStatus.mockRejectedValueOnce({ response: { data: { message: 'Forbidden' } } });
      const { result } = renderHook(() => useStoreAdmins());
      await act(() => result.current.fetchAdmins());
      await expect(
        act(() => result.current.changeStatus('a1', 'SUSPENDED'))
      ).rejects.toThrow('Forbidden');
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({ variant: 'destructive' }));
    });

    it('does not change other admins in state on failure', async () => {
      mockAdminsGetAll.mockResolvedValueOnce({ data: { items: adminList } });
      mockAdminsStatus.mockRejectedValueOnce(new Error('fail'));
      const { result } = renderHook(() => useStoreAdmins());
      await act(() => result.current.fetchAdmins());
      try {
        await act(() => result.current.changeStatus('a1', 'SUSPENDED'));
      } catch {}
      // a1 should still be ACTIVE (optimistic update is NOT applied on error)
      expect(result.current.admins.find(a => a.id === 'a1')?.status).toBe('ACTIVE');
    });
  });

  describe('deleteAdmin', () => {
    it('removes deleted admin from state', async () => {
      mockAdminsGetAll.mockResolvedValueOnce({ data: { items: adminList } });
      mockAdminsDelete.mockResolvedValueOnce({});
      const { result } = renderHook(() => useStoreAdmins());
      await act(() => result.current.fetchAdmins());

      await act(() => result.current.deleteAdmin('a1'));
      expect(result.current.admins.find(a => a.id === 'a1')).toBeUndefined();
      expect(result.current.admins).toHaveLength(1);
    });

    it('keeps other admins after deletion', async () => {
      mockAdminsGetAll.mockResolvedValueOnce({ data: { items: adminList } });
      mockAdminsDelete.mockResolvedValueOnce({});
      const { result } = renderHook(() => useStoreAdmins());
      await act(() => result.current.fetchAdmins());
      await act(() => result.current.deleteAdmin('a1'));
      expect(result.current.admins.find(a => a.id === 'a2')).toBeDefined();
    });

    it('shows success toast after deletion', async () => {
      mockAdminsGetAll.mockResolvedValueOnce({ data: { items: adminList } });
      mockAdminsDelete.mockResolvedValueOnce({});
      const { result } = renderHook(() => useStoreAdmins());
      await act(() => result.current.fetchAdmins());
      await act(() => result.current.deleteAdmin('a1'));
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({ title: 'Removed' }));
    });

    it('shows error toast and rethrows on failure', async () => {
      mockAdminsGetAll.mockResolvedValueOnce({ data: { items: adminList } });
      mockAdminsDelete.mockRejectedValueOnce({ response: { data: { message: 'Not found' } } });
      const { result } = renderHook(() => useStoreAdmins());
      await act(() => result.current.fetchAdmins());
      await expect(
        act(() => result.current.deleteAdmin('a1'))
      ).rejects.toThrow('Not found');
      // admin should NOT be removed from state
      expect(result.current.admins.find(a => a.id === 'a1')).toBeDefined();
    });
  });
});
