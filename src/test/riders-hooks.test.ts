import { describe, it, expect, vi, beforeEach } from 'vitest';

// ─── Mock ridersApi ───────────────────────────────────────────────────────────
vi.mock('../api/riders.api', () => ({
  ridersApi: {
    getAll: vi.fn(),
    getById: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    changeStatus: vi.fn(),
    getStatusHistory: vi.fn(),
  },
}));

const mockToast = vi.fn();
vi.mock('../hooks/use-toast', () => ({ toast: (...args: unknown[]) => mockToast(...args) }));

import { ridersApi } from '../api/riders.api';
import { renderHook, act } from '@testing-library/react';
import { useRiders } from '../hooks/useRiders';

const mockGetAll       = ridersApi.getAll         as ReturnType<typeof vi.fn>;
const mockGetById      = ridersApi.getById        as ReturnType<typeof vi.fn>;
const mockCreate       = ridersApi.create         as ReturnType<typeof vi.fn>;
const mockUpdate       = ridersApi.update         as ReturnType<typeof vi.fn>;
const mockChangeStatus = ridersApi.changeStatus   as ReturnType<typeof vi.fn>;
const mockGetHistory   = ridersApi.getStatusHistory as ReturnType<typeof vi.fn>;

const riderList = [
  { id: 'r1', fullName: 'Ali Raza',  status: 'ACTIVE',   phone: '03001234567' },
  { id: 'r2', fullName: 'Sara Khan', status: 'SUSPENDED', phone: '03009876543' },
];
const singleRider = { id: 'r1', fullName: 'Ali Raza', status: 'ACTIVE', phone: '03001234567' };

beforeEach(() => {
  vi.clearAllMocks();
  mockToast.mockClear();
});

// ─────────────────────────────────────────────────────────────────────────────
// fetchRiders
// ─────────────────────────────────────────────────────────────────────────────
describe('useRiders > fetchRiders', () => {
  it('populates riders list on success', async () => {
    mockGetAll.mockResolvedValueOnce({ data: { items: riderList, pagination: { page: 1, limit: 10, total: 2, totalPages: 1, hasNext: false, hasPrev: false } } });
    const { result } = renderHook(() => useRiders());
    await act(() => result.current.fetchRiders());
    expect(result.current.riders).toEqual(riderList);
    expect(result.current.loading).toBe(false);
  });

  it('sets riders to empty array when items missing', async () => {
    mockGetAll.mockResolvedValueOnce({ data: {} });
    const { result } = renderHook(() => useRiders());
    await act(() => result.current.fetchRiders());
    expect(result.current.riders).toEqual([]);
  });

  it('shows error toast and sets error message on failure', async () => {
    mockGetAll.mockRejectedValueOnce({ response: { data: { message: 'Unauthorized' } } });
    const { result } = renderHook(() => useRiders());
    await act(() => result.current.fetchRiders());
    expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({ variant: 'destructive' }));
    expect(result.current.error).toBe('Unauthorized');
  });

  it('passes status filter to API', async () => {
    mockGetAll.mockResolvedValueOnce({ data: { items: [] } });
    const { result } = renderHook(() => useRiders());
    await act(() => result.current.fetchRiders(1, 10, 'ACTIVE'));
    expect(mockGetAll).toHaveBeenCalledWith(1, 10, 'ACTIVE', null);
  });

  it('sets loading true while fetching then false after', async () => {
    let resolve: (v: unknown) => void;
    const pending = new Promise(r => { resolve = r; });
    mockGetAll.mockReturnValueOnce(pending);
    const { result } = renderHook(() => useRiders());

    act(() => { result.current.fetchRiders(); });
    expect(result.current.loading).toBe(true);

    await act(async () => { resolve!({ data: { items: [] } }); });
    expect(result.current.loading).toBe(false);
  });

  it('populates pagination metadata on success', async () => {
    mockGetAll.mockResolvedValueOnce({
      data: { items: riderList, pagination: { page: 2, limit: 5, total: 20, totalPages: 4, hasNext: true, hasPrev: true } }
    });
    const { result } = renderHook(() => useRiders());
    await act(() => result.current.fetchRiders(2, 5));
    expect(result.current.pagination.total).toBe(20);
    expect(result.current.pagination.hasNext).toBe(true);
    expect(result.current.pagination.hasPrev).toBe(true);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// fetchRider (single)
// ─────────────────────────────────────────────────────────────────────────────
describe('useRiders > fetchRider', () => {
  it('sets single rider on success', async () => {
    mockGetById.mockResolvedValueOnce({ data: { data: singleRider } });
    const { result } = renderHook(() => useRiders());
    await act(() => result.current.fetchRider('r1'));
    expect(result.current.rider).toEqual(singleRider);
  });

  it('shows error toast on failure', async () => {
    mockGetById.mockRejectedValueOnce({ response: { data: { message: 'Not found' } } });
    const { result } = renderHook(() => useRiders());
    await act(() => result.current.fetchRider('bad-id'));
    expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({ variant: 'destructive' }));
  });

  it('returns the fetched rider', async () => {
    mockGetById.mockResolvedValueOnce({ data: { data: singleRider } });
    const { result } = renderHook(() => useRiders());
    let returned: any;
    await act(async () => { returned = await result.current.fetchRider('r1'); });
    expect(returned).toEqual(singleRider);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// createRider
// ─────────────────────────────────────────────────────────────────────────────
describe('useRiders > createRider', () => {
  it('shows success toast after creation', async () => {
    mockCreate.mockResolvedValueOnce({ data: {} });
    mockGetAll.mockResolvedValueOnce({ data: { items: riderList } });
    const { result } = renderHook(() => useRiders());
    await act(() => result.current.createRider({ fullName: 'New Rider' }));
    expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({ title: 'Success' }));
  });

  it('refetches rider list after creation', async () => {
    mockCreate.mockResolvedValueOnce({ data: {} });
    mockGetAll.mockResolvedValueOnce({ data: { items: riderList } });
    const { result } = renderHook(() => useRiders());
    await act(() => result.current.createRider({ fullName: 'New Rider' }));
    expect(mockGetAll).toHaveBeenCalledTimes(1);
  });

  it('shows error toast and rethrows on failure', async () => {
    mockCreate.mockRejectedValueOnce({ response: { data: { message: 'Email already exists' } } });
    const { result } = renderHook(() => useRiders());
    await expect(act(() => result.current.createRider({ email: 'dup@test.com' }))).rejects.toThrow('Email already exists');
    expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({ variant: 'destructive' }));
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// updateRider
// ─────────────────────────────────────────────────────────────────────────────
describe('useRiders > updateRider', () => {
  it('shows success toast after update', async () => {
    mockUpdate.mockResolvedValueOnce({ data: {} });
    mockGetById.mockResolvedValueOnce({ data: { data: singleRider } });
    const { result } = renderHook(() => useRiders());
    await act(() => result.current.updateRider('r1', { fullName: 'Updated' }));
    expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({ title: 'Success' }));
  });

  it('refetches rider after update', async () => {
    mockUpdate.mockResolvedValueOnce({ data: {} });
    mockGetById.mockResolvedValueOnce({ data: { data: singleRider } });
    const { result } = renderHook(() => useRiders());
    await act(() => result.current.updateRider('r1', { fullName: 'Updated' }));
    expect(mockGetById).toHaveBeenCalledWith('r1');
  });

  it('shows error toast and rethrows on failure', async () => {
    mockUpdate.mockRejectedValueOnce({ response: { data: { message: 'Forbidden' } } });
    const { result } = renderHook(() => useRiders());
    await expect(act(() => result.current.updateRider('r1', {}))).rejects.toThrow('Forbidden');
    expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({ variant: 'destructive' }));
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// changeStatus (suspend / activate / block)
// ─────────────────────────────────────────────────────────────────────────────
describe('useRiders > changeStatus', () => {
  it('shows success toast on status change', async () => {
    mockChangeStatus.mockResolvedValueOnce({ data: {} });
    mockGetById.mockResolvedValueOnce({ data: { data: { ...singleRider, status: 'SUSPENDED' } } });
    const { result } = renderHook(() => useRiders());
    await act(() => result.current.changeStatus('r1', 'SUSPENDED', 'Violation'));
    expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({ title: 'Success' }));
  });

  it('refetches rider after status change', async () => {
    mockChangeStatus.mockResolvedValueOnce({ data: {} });
    mockGetById.mockResolvedValueOnce({ data: { data: singleRider } });
    const { result } = renderHook(() => useRiders());
    await act(() => result.current.changeStatus('r1', 'BLOCKED', 'Admin Action'));
    expect(mockGetById).toHaveBeenCalledWith('r1');
  });

  it('shows error toast and rethrows on failure', async () => {
    mockChangeStatus.mockRejectedValueOnce({ response: { data: { message: 'Not allowed' } } });
    const { result } = renderHook(() => useRiders());
    await expect(act(() => result.current.changeStatus('r1', 'BLOCKED', ''))).rejects.toThrow('Not allowed');
    expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({ variant: 'destructive' }));
  });

  it('passes reason correctly to API', async () => {
    mockChangeStatus.mockResolvedValueOnce({ data: {} });
    mockGetById.mockResolvedValueOnce({ data: { data: singleRider } });
    const { result } = renderHook(() => useRiders());
    await act(() => result.current.changeStatus('r1', 'SUSPENDED', 'Policy violation'));
    expect(mockChangeStatus).toHaveBeenCalledWith('r1', 'SUSPENDED', 'Policy violation');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// fetchStatusHistory
// ─────────────────────────────────────────────────────────────────────────────
describe('useRiders > fetchStatusHistory', () => {
  it('populates status history on success', async () => {
    const history = [{ id: 'h1', status: 'SUSPENDED', reason: 'Violation', createdAt: '2025-01-01' }];
    mockGetHistory.mockResolvedValueOnce({ data: { items: history } });
    const { result } = renderHook(() => useRiders());
    await act(() => result.current.fetchStatusHistory('r1'));
    expect(result.current.statusHistory).toEqual(history);
  });

  it('sets empty array when no history exists', async () => {
    mockGetHistory.mockResolvedValueOnce({ data: { items: [] } });
    const { result } = renderHook(() => useRiders());
    await act(() => result.current.fetchStatusHistory('r1'));
    expect(result.current.statusHistory).toEqual([]);
  });

  it('shows error toast on failure', async () => {
    mockGetHistory.mockRejectedValueOnce({ response: { data: { message: 'Server error' } } });
    const { result } = renderHook(() => useRiders());
    await act(() => result.current.fetchStatusHistory('r1'));
    expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({ variant: 'destructive' }));
  });
});
