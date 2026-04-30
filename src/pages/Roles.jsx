import React, { useState, useEffect, useCallback } from 'react';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import ConfirmDialog from '../components/common/ConfirmDialog';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import TableSkeleton from '../components/common/TableSkeleton';
import { toast } from '../hooks/use-toast';
import { rolesApi } from '../api/roles.api';
import { Shield, Plus, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function RolesPage() {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 10, totalPages: 1 });
  const [page, setPage] = useState(1);

  const [createOpen, setCreateOpen] = useState(false);
  const [form, setForm] = useState({ code: '', name: '' });
  const [creating, setCreating] = useState(false);

  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const fetchRoles = useCallback(async () => {
    setLoading(true);
    try {
      const res = await rolesApi.getAll(page, 10);
      const inner = res?.data || res;
      setRoles(inner?.items || []);
      const pag = inner?.meta || inner?.pagination || {};
      setMeta({
        total: pag.total || 0,
        page: pag.page || page,
        limit: pag.limit || 10,
        totalPages: pag.totalPages || 1,
      });
    } catch {
      toast({ title: 'Failed to load roles', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => { fetchRoles(); }, [fetchRoles]);

  const handleCreate = async (e) => {
    e.preventDefault();
    setCreating(true);
    try {
      await rolesApi.create(form);
      toast({ title: 'Role created successfully' });
      setCreateOpen(false);
      setForm({ code: '', name: '' });
      fetchRoles();
    } catch (err) {
      const msg = err.response?.data?.data?.message || err.response?.data?.message || 'Failed to create role';
      toast({ title: Array.isArray(msg) ? msg.join(', ') : msg, variant: 'destructive' });
    } finally {
      setCreating(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await rolesApi.delete(deleteTarget.id);
      toast({ title: 'Role deleted' });
      setDeleteTarget(null);
      fetchRoles();
    } catch (err) {
      const msg = err.response?.data?.data?.message || err.response?.data?.message || 'Failed to delete role';
      toast({ title: Array.isArray(msg) ? msg.join(', ') : msg, variant: 'destructive' });
    } finally {
      setDeleting(false);
    }
  };

  const columns = [
    {
      key: 'name',
      label: 'Role',
      render: (val, row) => (
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-600">
            <Shield size={16} />
          </div>
          <div>
            <div className="font-semibold text-slate-900 text-sm">{val}</div>
            <div className="text-xs text-slate-400 font-mono">{row.code}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <Button
          variant="ghost"
          size="sm"
          className="text-slate-400 hover:text-red-600"
          onClick={() => setDeleteTarget(row)}
        >
          <Trash2 size={14} className="mr-1" /> Delete
        </Button>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <Header title="Roles" subtitle="Manage system roles and their access codes" />

      <div className="p-8 max-w-7xl mx-auto space-y-6">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-50 text-yellow-600 rounded-xl">
                <Shield size={20} />
              </div>
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-600">All Roles</h2>
              <span className="text-xs text-slate-400">({meta.total})</span>
            </div>
            <Button
              onClick={() => { setCreateOpen(true); setForm({ code: '', name: '' }); }}
              className="rounded-xl shadow-lg shadow-yellow-200 bg-yellow-500 hover:bg-yellow-600 text-white"
            >
              <Plus size={18} className="mr-2" /> Create Role
            </Button>
          </div>

          {loading ? (
            <TableSkeleton rows={4} />
          ) : (
            <DataTable columns={columns} data={roles} emptyMessage="No roles found" />
          )}

          <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
            <p className="text-sm text-slate-400">Showing {roles.length} of {meta.total}</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled={meta.page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>
                <ChevronLeft size={14} />
              </Button>
              <span className="text-sm text-slate-600">{meta.page} / {meta.totalPages}</span>
              <Button variant="outline" size="sm" disabled={meta.page >= meta.totalPages} onClick={() => setPage((p) => p + 1)}>
                <ChevronRight size={14} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={createOpen} onClose={() => setCreateOpen(false)} title="Create New Role">
        <form onSubmit={handleCreate} className="space-y-4 py-2">
          <div className="space-y-1">
            <Label className="text-xs font-bold uppercase text-slate-500">Role Code</Label>
            <Input
              className="h-11 rounded-xl font-mono uppercase"
              placeholder="e.g. STORE_MANAGER"
              value={form.code}
              onChange={(e) => setForm({ ...form, code: e.target.value.toUpperCase().replace(/\s/g, '_') })}
              required
            />
            <p className="text-[11px] text-slate-400">Uppercase, underscores only (e.g. STORE_MANAGER)</p>
          </div>
          <div className="space-y-1">
            <Label className="text-xs font-bold uppercase text-slate-500">Display Name</Label>
            <Input className="h-11 rounded-xl" placeholder="e.g. Store Manager" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          </div>
          <div className="flex gap-3 pt-4 border-t">
            <Button type="button" variant="ghost" onClick={() => setCreateOpen(false)} className="flex-1 h-11 rounded-xl">Cancel</Button>
            <Button type="submit" disabled={creating}
              className="flex-[2] h-11 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-white">
              {creating ? 'Creating...' : 'Create Role'}
            </Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete Role"
        message={`Delete role "${deleteTarget?.name}"? This may affect users assigned to this role.`}
        loading={deleting}
      />
    </DashboardLayout>
  );
}
