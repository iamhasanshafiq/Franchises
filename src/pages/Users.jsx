import React, { useState, useEffect, useCallback } from 'react';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import StatusBadge from '../components/common/StatusBadge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import TableSkeleton from '../components/common/TableSkeleton';
import { toast } from '../hooks/use-toast';
import { usersApi } from '../api/users.api';
import { rolesApi } from '../api/roles.api';
import {
  Users as UsersIcon,
  Plus,
  UserCog,
  Target,
  Eye,
  ShieldCheck,
  Mail,
  Lock,
  Phone,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const SCOPE_TYPES = ['GLOBAL', 'CITY', 'FRANCHISE', 'STORE'];

const EMPTY_FORM = { email: '', password: '', fullName: '', phone: '' };
const EMPTY_STAFF = { roleCode: '', scopeType: 'GLOBAL', scopeId: '' };

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 10, totalPages: 1 });
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  // create
  const [createOpen, setCreateOpen] = useState(false);
  const [isStaff, setIsStaff] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [staffForm, setStaffForm] = useState(EMPTY_STAFF);
  const [creating, setCreating] = useState(false);

  // view
  const [viewUser, setViewUser] = useState(null);

  // assign role
  const [roleModal, setRoleModal] = useState(false);
  const [roleTarget, setRoleTarget] = useState(null);
  const [selectedRole, setSelectedRole] = useState('');
  const [assigningRole, setAssigningRole] = useState(false);

  // assign scope
  const [scopeModal, setScopeModal] = useState(false);
  const [scopeTarget, setScopeTarget] = useState(null);
  const [scopeType, setScopeType] = useState('GLOBAL');
  const [scopeId, setScopeId] = useState('');
  const [assigningScope, setAssigningScope] = useState(false);

  const fetchRoles = useCallback(async () => {
    try {
      const res = await rolesApi.getAll();
      const inner = res?.data || res;
      setRoles(inner?.items || []);
    } catch {
      toast({ title: 'Failed to load roles', variant: 'destructive' });
    }
  }, []);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const res = await usersApi.getAll(page, limit);
      const inner = res?.data || res;
      setUsers(inner?.items || []);
      const pag = inner?.meta || inner?.pagination || {};
      setMeta({
        total: pag.total || 0,
        page: pag.page || page,
        limit: pag.limit || limit,
        totalPages: pag.totalPages || 1,
      });
    } catch {
      toast({ title: 'Failed to load users', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  }, [page, limit]);

  useEffect(() => { fetchUsers(); fetchRoles(); }, [fetchUsers]);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (isStaff) {
      if (!staffForm.roleCode) {
        toast({ title: 'Role is required for staff user', variant: 'destructive' });
        return;
      }
      if (staffForm.scopeType !== 'GLOBAL' && !staffForm.scopeId) {
        toast({ title: 'Scope ID required for non-global scope', variant: 'destructive' });
        return;
      }
    }
    setCreating(true);
    try {
      if (isStaff) {
        await usersApi.createStaff({
          ...form,
          ...staffForm,
          phone: form.phone || undefined,
          scopeId: staffForm.scopeType === 'GLOBAL' ? undefined : staffForm.scopeId,
        });
      } else {
        await usersApi.create({ ...form, phone: form.phone || undefined });
      }
      toast({ title: 'User created successfully' });
      setCreateOpen(false);
      setForm(EMPTY_FORM);
      setStaffForm(EMPTY_STAFF);
      setIsStaff(false);
      fetchUsers();
    } catch (err) {
      const msg = err.response?.data?.data?.message
        || err.response?.data?.message
        || 'Failed to create user';
      toast({ title: Array.isArray(msg) ? msg.join(', ') : msg, variant: 'destructive' });
    } finally {
      setCreating(false);
    }
  };

  const handleStatusToggle = async (user) => {
    try {
      await usersApi.updateStatus(user.id, !user.isActive);
      toast({ title: `User ${user.isActive ? 'deactivated' : 'activated'}` });
      fetchUsers();
    } catch {
      toast({ title: 'Failed to update status', variant: 'destructive' });
    }
  };

  const openRoleModal = (user) => {
    setRoleTarget(user);
    setSelectedRole('');
    setRoleModal(true);
  };

  const handleAssignRole = async () => {
    if (!roleTarget || !selectedRole) return;
    setAssigningRole(true);
    try {
      await usersApi.assignRole(roleTarget.id, selectedRole);
      toast({ title: 'Role assigned successfully' });
      setRoleModal(false);
      setRoleTarget(null);
      fetchUsers();
    } catch {
      toast({ title: 'Failed to assign role', variant: 'destructive' });
    } finally {
      setAssigningRole(false);
    }
  };

  const openScopeModal = async (user) => {
    setScopeTarget(user);
    setScopeType('GLOBAL');
    setScopeId('');
    setScopeModal(true);
    try {
      const res = await usersApi.getScope(user.id);
      const scope = res?.data || res;
      if (scope?.scopeType) {
        setScopeType(scope.scopeType);
        setScopeId(scope.scopeId || '');
      }
    } catch {
      // no scope yet — that's fine
    }
  };

  const handleAssignScope = async () => {
    if (!scopeTarget) return;
    setAssigningScope(true);
    try {
      await usersApi.assignScope(scopeTarget.id, scopeType, scopeId);
      toast({ title: 'Scope assigned successfully' });
      setScopeModal(false);
      setScopeTarget(null);
    } catch {
      toast({ title: 'Failed to assign scope', variant: 'destructive' });
    } finally {
      setAssigningScope(false);
    }
  };

  const handleRemoveScope = async (userId) => {
    try {
      await usersApi.removeScope(userId);
      toast({ title: 'Scope removed' });
      setScopeModal(false);
      setScopeTarget(null);
    } catch {
      toast({ title: 'Failed to remove scope', variant: 'destructive' });
    }
  };

  const columns = [
    {
      key: 'fullName',
      label: 'User',
      render: (val, row) => (
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs uppercase">
            {val?.split(' ').map((n) => n[0]).join('').slice(0, 2) || 'U'}
          </div>
          <div>
            <div className="font-semibold text-slate-900 text-sm">{val}</div>
            <div className="text-xs text-slate-400">{row.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'role',
      label: 'Role',
      render: (val) =>
        val ? (
          <span className="rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 px-2.5 py-0.5 text-xs font-semibold">
            {val}
          </span>
        ) : (
          <span className="text-xs text-slate-400">—</span>
        ),
    },
    {
      key: 'scopeType',
      label: 'Scope',
      render: (val) =>
        val ? (
          <span className="rounded-full bg-orange-50 text-orange-700 border border-orange-100 px-2.5 py-0.5 text-xs font-semibold">
            {val}
          </span>
        ) : (
          <span className="text-xs text-slate-400">—</span>
        ),
    },
    {
      key: 'isActive',
      label: 'Active',
      render: (val, row) => (
        <Switch checked={!!val} onCheckedChange={() => handleStatusToggle(row)} />
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-indigo-600 text-xs"
            onClick={() => setViewUser(row)}
          >
            <Eye size={14} className="mr-1" /> View
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-indigo-600 text-xs"
            onClick={() => openRoleModal(row)}
          >
            <UserCog size={14} className="mr-1" /> Role
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-orange-600 text-xs"
            onClick={() => openScopeModal(row)}
          >
            <Target size={14} className="mr-1" /> Scope
          </Button>
        </div>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <Header title="User Management" subtitle="Provision and manage system-wide user accounts and permissions" />

      <div className="p-8 max-w-7xl mx-auto space-y-6">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                <UsersIcon size={20} />
              </div>
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-600">
                All Users
              </h2>
              <span className="text-xs text-slate-400">({meta.total})</span>
            </div>
            <Button
              onClick={() => { setCreateOpen(true); setForm(EMPTY_FORM); setStaffForm(EMPTY_STAFF); setIsStaff(false); }}
              className="rounded-xl shadow-lg shadow-indigo-200"
            >
              <Plus size={18} className="mr-2" /> Create User
            </Button>
          </div>

          {loading ? (
            <TableSkeleton rows={6} />
          ) : (
            <DataTable columns={columns} data={users} emptyMessage="No users found" />
          )}

          <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
            <p className="text-sm text-slate-400">
              Showing {users.length} of {meta.total}
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={meta.page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                <ChevronLeft size={14} />
              </Button>
              <span className="text-sm text-slate-600">
                {meta.page} / {meta.totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                disabled={meta.page >= meta.totalPages}
                onClick={() => setPage((p) => p + 1)}
              >
                <ChevronRight size={14} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Create User Modal */}
      <Modal isOpen={createOpen} onClose={() => setCreateOpen(false)} title="Create New User">
        <form onSubmit={handleCreate} className="space-y-4 py-2">
          <div className="space-y-1">
            <Label className="text-xs font-bold uppercase text-slate-500">Full Name</Label>
            <div className="relative">
              <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
              <Input className="pl-10 h-11 rounded-xl" placeholder="Ali Khan" value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })} required />
            </div>
          </div>
          <div className="space-y-1">
            <Label className="text-xs font-bold uppercase text-slate-500">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
              <Input type="email" className="pl-10 h-11 rounded-xl" placeholder="ali@barqi.pk" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </div>
          </div>
          <div className="space-y-1">
            <Label className="text-xs font-bold uppercase text-slate-500">Phone (optional)</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
              <Input className="pl-10 h-11 rounded-xl" placeholder="03001234567" value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
          </div>
          <div className="space-y-1">
            <Label className="text-xs font-bold uppercase text-slate-500">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
              <Input type="password" className="pl-10 h-11 rounded-xl" placeholder="••••••••" value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })} required />
            </div>
          </div>

          <div className="flex items-center gap-3 py-2">
            <Switch id="staff-toggle" checked={isStaff} onCheckedChange={setIsStaff} />
            <Label htmlFor="staff-toggle" className="text-sm cursor-pointer">
              Assign role &amp; scope (staff user)
            </Label>
          </div>

          {isStaff && (
            <div className="space-y-4 border-t border-slate-100 pt-4">
              <div className="space-y-1">
                <Label className="text-xs font-bold uppercase text-slate-500">Role *</Label>
                <Select value={staffForm.roleCode} onValueChange={(v) => setStaffForm({ ...staffForm, roleCode: v })}>
                  <SelectTrigger className="h-11 rounded-xl">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((r) => (
                      <SelectItem key={r.id} value={r.code}>{r.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label className="text-xs font-bold uppercase text-slate-500">Scope Type *</Label>
                <Select
                  value={staffForm.scopeType}
                  onValueChange={(v) => setStaffForm({ ...staffForm, scopeType: v, scopeId: '' })}
                >
                  <SelectTrigger className="h-11 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {SCOPE_TYPES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              {staffForm.scopeType !== 'GLOBAL' && (
                <div className="space-y-1">
                  <Label className="text-xs font-bold uppercase text-slate-500">Scope ID *</Label>
                  <Input className="h-11 rounded-xl" placeholder="UUID of city / franchise / store"
                    value={staffForm.scopeId}
                    onChange={(e) => setStaffForm({ ...staffForm, scopeId: e.target.value })} />
                </div>
              )}
            </div>
          )}

          <div className="flex gap-3 pt-4 border-t">
            <Button type="button" variant="ghost" onClick={() => setCreateOpen(false)} className="flex-1 h-12 rounded-xl">Cancel</Button>
            <Button type="submit" disabled={creating} className="flex-[2] h-12 rounded-xl bg-indigo-600 hover:bg-indigo-700">
              {creating ? 'Creating...' : 'Create User'}
            </Button>
          </div>
        </form>
      </Modal>

      {/* Assign Role Modal */}
      <Modal isOpen={roleModal} onClose={() => { setRoleModal(false); setRoleTarget(null); }} title="Assign Role">
        <div className="space-y-4 py-2">
          <p className="text-sm text-slate-500">
            Assign a role to <span className="font-semibold text-slate-800">{roleTarget?.fullName}</span>
          </p>
          <div className="space-y-1">
            <Label className="text-xs font-bold uppercase text-slate-500">Role</Label>
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger className="h-11 rounded-xl">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((r) => <SelectItem key={r.id} value={r.code}>{r.name}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-3 pt-4 border-t">
            <Button variant="ghost" onClick={() => setRoleModal(false)} className="flex-1 h-11 rounded-xl">Cancel</Button>
            <Button
              disabled={!selectedRole || assigningRole}
              onClick={handleAssignRole}
              className="flex-[2] h-11 rounded-xl bg-indigo-600 hover:bg-indigo-700"
            >
              {assigningRole ? 'Assigning...' : 'Assign Role'}
            </Button>
          </div>
        </div>
      </Modal>

      {/* Assign Scope Modal */}
      <Modal isOpen={scopeModal} onClose={() => { setScopeModal(false); setScopeTarget(null); }} title="Assign Scope">
        <div className="space-y-4 py-2">
          <p className="text-sm text-slate-500">
            Set access scope for <span className="font-semibold text-slate-800">{scopeTarget?.fullName}</span>
          </p>
          <div className="space-y-1">
            <Label className="text-xs font-bold uppercase text-slate-500">Scope Type</Label>
            <Select value={scopeType} onValueChange={(v) => { setScopeType(v); if (v === 'GLOBAL') setScopeId(''); }}>
              <SelectTrigger className="h-11 rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {SCOPE_TYPES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          {scopeType !== 'GLOBAL' && (
            <div className="space-y-1">
              <Label className="text-xs font-bold uppercase text-slate-500">Scope ID</Label>
              <Input className="h-11 rounded-xl" placeholder="UUID" value={scopeId}
                onChange={(e) => setScopeId(e.target.value)} />
            </div>
          )}
          {scopeTarget?.scopeType && (
            <p className="text-xs text-slate-400 bg-slate-50 rounded-lg p-2">
              Current scope: <strong>{scopeTarget.scopeType}</strong>
            </p>
          )}
          <div className="flex gap-3 pt-4 border-t">
            {scopeTarget?.scopeType && (
              <Button variant="outline" className="h-11 rounded-xl text-red-600 border-red-200 hover:bg-red-50"
                onClick={() => handleRemoveScope(scopeTarget.id)}>
                Remove
              </Button>
            )}
            <Button variant="ghost" onClick={() => setScopeModal(false)} className="flex-1 h-11 rounded-xl">Cancel</Button>
            <Button
              disabled={assigningScope || (scopeType !== 'GLOBAL' && !scopeId)}
              onClick={handleAssignScope}
              className="flex-[2] h-11 rounded-xl bg-orange-600 hover:bg-orange-700"
            >
              {assigningScope ? 'Saving...' : 'Save Scope'}
            </Button>
          </div>
        </div>
      </Modal>

      {/* View User Modal */}
      <Modal isOpen={!!viewUser} onClose={() => setViewUser(null)} title="User Details">
        {viewUser && (
          <div className="space-y-3 py-2 text-sm">
            {[
              ['Full Name', viewUser.fullName],
              ['Email', viewUser.email],
              ['Phone', viewUser.phone || '—'],
              ['Role', viewUser.role || 'Not assigned'],
              ['Scope', viewUser.scopeType || 'Not assigned'],
              ['Provider', viewUser.provider],
              ['Verified', viewUser.isVerified ? 'Yes' : 'No'],
              ['Status', viewUser.isActive ? 'Active' : 'Inactive'],
            ].map(([label, value]) => (
              <div key={label} className="grid grid-cols-3 gap-2">
                <span className="font-semibold text-slate-500">{label}</span>
                <span className="col-span-2 text-slate-800">{value}</span>
              </div>
            ))}
            <div className="pt-4 border-t">
              <Button className="w-full rounded-xl" onClick={() => setViewUser(null)}>Close</Button>
            </div>
          </div>
        )}
      </Modal>
    </DashboardLayout>
  );
}
