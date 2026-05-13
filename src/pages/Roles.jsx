import React, {
  useState,
  useEffect,
  useCallback,
  useMemo
} from 'react';

import {
  Shield,
  Plus,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Search,
  Loader2,
  Activity,
  Layers3,
  ShieldCheck
} from 'lucide-react';

import { motion } from 'framer-motion';

import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import ConfirmDialog from '../components/common/ConfirmDialog';
import TableSkeleton from '../components/common/TableSkeleton';

import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

import { toast } from '../hooks/use-toast';
import { rolesApi } from '../api/roles.api';

const INITIAL_FORM = {
  code: '',
  name: ''
};

export default function RolesPage() {

  // =========================================
  // STATE
  // =========================================

  const [roles, setRoles] = useState([]);

  const [loading, setLoading] = useState(true);

  const [meta, setMeta] = useState({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 1
  });

  const [page, setPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState('');

  const [createOpen, setCreateOpen] = useState(false);

  const [form, setForm] = useState(INITIAL_FORM);

  const [creating, setCreating] = useState(false);

  const [deleteTarget, setDeleteTarget] = useState(null);

  const [deleting, setDeleting] = useState(false);

  // =========================================
  // FETCH
  // =========================================

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

      toast({
        title: 'Failed to load roles',
        variant: 'destructive'
      });

    } finally {

      setLoading(false);

    }

  }, [page]);

  useEffect(() => {

    fetchRoles();

  }, [fetchRoles]);

  // =========================================
  // ANALYTICS
  // =========================================

  const analytics = useMemo(() => {

    const total = meta.total || 0;

    const active = roles?.length || 0;

    const secured = roles?.filter(
      r => r.code?.includes('ADMIN')
    ).length || 0;

    return {
      total,
      active,
      secured
    };

  }, [roles, meta]);

  // =========================================
  // SEARCH
  // =========================================

  const filteredRoles = useMemo(() => {

    if (!searchTerm) return roles;

    return roles.filter(role =>

      role.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||

      role.code?.toLowerCase().includes(searchTerm.toLowerCase())

    );

  }, [roles, searchTerm]);

  // =========================================
  // CREATE
  // =========================================

  const handleCreate = async (e) => {

    e.preventDefault();

    setCreating(true);

    try {

      await rolesApi.create(form);

      toast({
        title: 'Role created successfully'
      });

      setCreateOpen(false);

      setForm(INITIAL_FORM);

      fetchRoles();

    } catch (err) {

      const msg =
        err.response?.data?.data?.message ||
        err.response?.data?.message ||
        'Failed to create role';

      toast({
        title: Array.isArray(msg)
          ? msg.join(', ')
          : msg,
        variant: 'destructive'
      });

    } finally {

      setCreating(false);

    }

  };

  // =========================================
  // DELETE
  // =========================================

  const handleDelete = async () => {

    if (!deleteTarget) return;

    setDeleting(true);

    try {

      await rolesApi.delete(deleteTarget.id);

      toast({
        title: 'Role deleted'
      });

      setDeleteTarget(null);

      fetchRoles();

    } catch (err) {

      const msg =
        err.response?.data?.data?.message ||
        err.response?.data?.message ||
        'Failed to delete role';

      toast({
        title: Array.isArray(msg)
          ? msg.join(', ')
          : msg,
        variant: 'destructive'
      });

    } finally {

      setDeleting(false);

    }

  };

  // =========================================
  // TABLE
  // =========================================

  const columns = useMemo(() => [

    {
      key: 'name',

      label: 'Role Identity',

      render: (val, row) => (

        <div className="flex items-center gap-4 group">

          <div
            className="
w-11
h-11
rounded-2xl
bg-yellow-500/10
text-yellow-500
flex
items-center
justify-center
transition-all
duration-500
group-hover:scale-110
group-hover:rotate-6
"
          >

            <Shield size={18} />

          </div>

          <div>

            <div
              className="
font-black
text-sm
text-slate-800
dark:text-white
tracking-tight
"
            >
              {val}
            </div>

            <div
              className="
text-xs
font-mono
tracking-wide
text-slate-500
dark:text-slate-400
"
            >
              {row.code}
            </div>

          </div>

        </div>

      )
    },

    {
      key: 'code',

      label: 'Access Code',

      render: (v) => (

        <span
          className="
px-3
py-1
rounded-full
bg-slate-100
dark:bg-slate-800
text-[10px]
font-black
uppercase
tracking-[0.2em]
text-slate-600
dark:text-slate-300
"
        >
          {v}
        </span>

      )
    },

    {
      key: 'actions',

      label: '',

      render: (_, row) => (

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setDeleteTarget(row)}
          className="
rounded-xl
hover:bg-red-500/10
transition-all
duration-300
"
        >

          <Trash2
            size={15}
            className="text-red-500"
          />

        </Button>

      )
    }

  ], []);

  // =========================================
  // GLASS CARD
  // =========================================

  const glassCard = `
bg-white/90
dark:bg-slate-900/70
backdrop-blur-2xl
border
border-slate-200
dark:border-slate-800
shadow-[0_10px_40px_rgba(0,0,0,0.06)]
dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
transition-all
duration-500
`;

  return (

    <DashboardLayout>

      <div
        className="
min-h-screen
bg-gradient-to-br
from-slate-50
via-white
to-slate-100
dark:from-[#03140F]
dark:via-[#041B15]
dark:to-[#020617]
transition-colors
duration-500
"
      >

        <Header
          title="Role Management"
          subtitle="Manage system roles and access permissions"
        />

        <motion.div

          initial={{
            opacity: 0,
            y: 20
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.7
          }}

          className="
p-6
lg:p-6
space-y-6
max-w-[1600px]
mx-auto
relative
overflow-hidden
"
        >

          {/* ========================================= */}
          {/* BACKGROUND EFFECTS */}
          {/* ========================================= */}

          <div className="absolute inset-0 -z-10 overflow-hidden">

            <div
              className="
absolute
top-[-10%]
left-[-10%]
w-[420px]
h-[420px]
bg-yellow-500/10
rounded-full
blur-[120px]
"
            />

            <div
              className="
absolute
bottom-[-10%]
right-[-10%]
w-[420px]
h-[420px]
bg-orange-500/10
rounded-full
blur-[120px]
"
            />

          </div>

          {/* ========================================= */}
          {/* STATS */}
          {/* ========================================= */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <motion.div
              whileHover={{ y: -4 }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <p
                    className="
text-[11px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
mb-2
"
                  >
                    Total Roles
                  </p>

                  <h2
                    className="
text-3xl
font-black
text-slate-800
dark:text-white
"
                  >
                    {analytics.total}
                  </h2>

                </div>

                <div
                  className="
w-14
h-14
rounded-2xl
bg-yellow-500/10
text-yellow-500
flex
items-center
justify-center
"
                >
                  <Layers3 size={24} />
                </div>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <p
                    className="
text-[11px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
mb-2
"
                  >
                    Loaded Roles
                  </p>

                  <h2
                    className="
text-3xl
font-black
text-slate-800
dark:text-white
"
                  >
                    {analytics.active}
                  </h2>

                </div>

                <div
                  className="
w-14
h-14
rounded-2xl
bg-emerald-500/10
text-emerald-500
flex
items-center
justify-center
"
                >
                  <Activity size={24} />
                </div>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <p
                    className="
text-[11px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
mb-2
"
                  >
                    Admin Roles
                  </p>

                  <h2
                    className="
text-3xl
font-black
text-slate-800
dark:text-white
"
                  >
                    {analytics.secured}
                  </h2>

                </div>

                <div
                  className="
w-14
h-14
rounded-2xl
bg-indigo-500/10
text-indigo-500
flex
items-center
justify-center
"
                >
                  <ShieldCheck size={24} />
                </div>

              </div>

            </motion.div>

          </div>

          {/* ========================================= */}
          {/* TABLE */}
          {/* ========================================= */}

          <motion.div

            initial={{
              opacity: 0,
              y: 30
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.8
            }}

            className={`${glassCard} rounded-[2.5rem] overflow-hidden`}
          >

            {/* TOPBAR */}

            <div
              className="
p-6
border-b
border-slate-200
dark:border-slate-800
flex
flex-col
lg:flex-row
lg:items-center
justify-between
gap-4
bg-white/60
dark:bg-slate-900/40
backdrop-blur-xl
"
            >

              <div>

                <h3
                  className="
text-lg
font-black
text-slate-800
dark:text-white
tracking-tight
"
                >
                  Access Control Matrix
                </h3>

                <p
                  className="
text-sm
text-slate-500
dark:text-slate-400
mt-1
"
                >
                  System permission roles overview
                </p>

              </div>

              <div className="flex items-center gap-3">

                <div className="relative w-72">

                  <Search
                    className="
absolute
left-3
top-1/2
-translate-y-1/2
w-4
h-4
text-slate-400
"
                  />

                  <Input
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(e.target.value)
                    }
                    placeholder="Search roles..."
                    className="
pl-10
h-11
rounded-2xl
border-slate-200
dark:border-slate-700
bg-white/70
dark:bg-slate-900/50
backdrop-blur-xl
transition-all
duration-300
focus-visible:ring-2
focus-visible:ring-yellow-500/20
"
                  />

                </div>

                <Button
                  onClick={() => {
                    setCreateOpen(true);
                    setForm(INITIAL_FORM);
                  }}
                  className="
h-11
rounded-2xl
px-5
font-bold
gap-2
bg-yellow-500
hover:bg-yellow-600
shadow-lg
shadow-yellow-500/20
transition-all
duration-500
hover:scale-[1.02]
text-white
"
                >

                  <Plus size={18} />

                  Create Role

                </Button>

              </div>

            </div>

            {/* TABLE */}

            <div className="p-4">

              {loading ? (

                <TableSkeleton rows={6} />

              ) : (

                <DataTable
                  columns={columns}
                  data={filteredRoles}
                  emptyMessage="No roles found"
                />

              )}

            </div>

            {/* FOOTER */}

            <div
              className="
flex
flex-col
md:flex-row
items-center
justify-between
gap-4
p-5
border-t
border-white/5
bg-slate-50/50
dark:bg-slate-900/20
"
            >

              <div
                className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
dark:text-slate-400
"
              >

                Showing
                {" "}
                {roles.length}
                {" "}
                of
                {" "}
                {meta.total}

              </div>

              <div className="flex items-center gap-3">

                <Button
                  size="sm"
                  variant="outline"
                  disabled={meta.page <= 1}
                  onClick={() =>
                    setPage((p) =>
                      Math.max(1, p - 1)
                    )
                  }
                  className="
rounded-xl
border-slate-200
dark:border-slate-700
"
                >

                  <ChevronLeft size={14} />

                </Button>

                <div
                  className="
px-4
py-2
rounded-xl
bg-yellow-500
text-white
text-sm
font-black
shadow-lg
shadow-yellow-500/20
"
                >

                  {meta.page}
                  {" / "}
                  {meta.totalPages}

                </div>

                <Button
                  size="sm"
                  variant="outline"
                  disabled={
                    meta.page >= meta.totalPages
                  }
                  onClick={() =>
                    setPage((p) => p + 1)
                  }
                  className="
rounded-xl
border-slate-200
dark:border-slate-700
"
                >

                  <ChevronRight size={14} />

                </Button>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

      {/* ========================================= */}
      {/* CREATE MODAL */}
      {/* ========================================= */}

      <Modal
        isOpen={createOpen}
        onClose={() => setCreateOpen(false)}
        title="Create New Role"
        size="md"
      >

        <form
          onSubmit={handleCreate}
          className="space-y-5"
        >

          <div className="space-y-2">

            <Label
              className="
text-[11px]
uppercase
tracking-[0.25em]
text-slate-500
font-black
"
            >
              Role Code
            </Label>

            <Input
              required
              value={form.code}
              placeholder="e.g. STORE_MANAGER"
              className="
h-11
rounded-2xl
font-mono
uppercase
"
              onChange={(e) =>
                setForm({
                  ...form,
                  code: e.target.value
                    .toUpperCase()
                    .replace(/\s/g, '_')
                })
              }
            />

            <p className="text-[11px] text-slate-400">

              Uppercase with underscores only

            </p>

          </div>

          <div className="space-y-2">

            <Label
              className="
text-[11px]
uppercase
tracking-[0.25em]
text-slate-500
font-black
"
            >
              Display Name
            </Label>

            <Input
              required
              value={form.name}
              placeholder="e.g. Store Manager"
              className="
h-11
rounded-2xl
"
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value
                })
              }
            />

          </div>

          {/* ACTIONS */}

          <div
            className="
flex
justify-end
gap-3
pt-5
border-t
border-slate-200
dark:border-slate-800
"
          >

            <Button
              type="button"
              variant="ghost"
              className="rounded-2xl"
              onClick={() =>
                setCreateOpen(false)
              }
            >

              Cancel

            </Button>

            <Button
              type="submit"
              disabled={creating}
              className="
min-w-[140px]
rounded-2xl
bg-yellow-500
hover:bg-yellow-600
text-white
"
            >

              {creating ? (

                <Loader2
                  className="animate-spin"
                />

              ) : (

                'Create Role'

              )}

            </Button>

          </div>

        </form>

      </Modal>

      {/* ========================================= */}
      {/* DELETE DIALOG */}
      {/* ========================================= */}

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