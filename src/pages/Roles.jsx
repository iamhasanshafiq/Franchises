import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

import {
  Shield,
  Plus,
  Trash2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Activity,
  BarChart3,
  ArrowRight,
  Lock,
  Hash,
  Layers3,
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
import { Progress } from '../components/ui/progress';

import { toast } from '../hooks/use-toast';
import { rolesApi } from '../api/roles.api';

export default function RolesPage() {

  const [roles, setRoles] = useState([]);

  const [loading, setLoading] = useState(true);

  const [meta, setMeta] = useState({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 1,
  });

  const [page, setPage] = useState(1);

  const [pageLoaded, setPageLoaded] = useState(false);

  const [createOpen, setCreateOpen] = useState(false);

  const [form, setForm] = useState({
    code: '',
    name: '',
  });

  const [creating, setCreating] = useState(false);

  const [deleteTarget, setDeleteTarget] = useState(null);

  const [deleting, setDeleting] = useState(false);

  // =========================================
  // FETCH ROLES
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
        variant: 'destructive',
      });

    } finally {

      setLoading(false);

    }

  }, [page]);

  useEffect(() => {

    fetchRoles();

  }, [fetchRoles]);

  // =========================================
  // PAGE LOADER
  // =========================================

  useEffect(() => {

    const timer = setTimeout(() => {

      setPageLoaded(true);

    }, 250);

    return () => clearTimeout(timer);

  }, []);

  // =========================================
  // ANALYTICS
  // =========================================

  const analytics = useMemo(() => {

    const total = meta.total || 0;

    const secured = roles?.length || 0;

    const efficiency = total > 0
      ? Math.round((secured / total) * 100)
      : 0;

    return {
      total,
      secured,
      efficiency,
    };

  }, [roles, meta]);

  // =========================================
  // CREATE ROLE
  // =========================================

  const handleCreate = async (e) => {

    e.preventDefault();

    setCreating(true);

    try {

      await rolesApi.create(form);

      toast({
        title: 'Role created successfully',
      });

      setCreateOpen(false);

      setForm({
        code: '',
        name: '',
      });

      fetchRoles();

    } catch (err) {

      const msg =
        err.response?.data?.data?.message
        || err.response?.data?.message
        || 'Failed to create role';

      toast({
        title: Array.isArray(msg)
          ? msg.join(', ')
          : msg,
        variant: 'destructive',
      });

    } finally {

      setCreating(false);

    }

  };

  // =========================================
  // DELETE ROLE
  // =========================================

  const handleDelete = async () => {

    if (!deleteTarget) return;

    setDeleting(true);

    try {

      await rolesApi.delete(deleteTarget.id);

      toast({
        title: 'Role deleted',
      });

      setDeleteTarget(null);

      fetchRoles();

    } catch (err) {

      const msg =
        err.response?.data?.data?.message
        || err.response?.data?.message
        || 'Failed to delete role';

      toast({
        title: Array.isArray(msg)
          ? msg.join(', ')
          : msg,
        variant: 'destructive',
      });

    } finally {

      setDeleting(false);

    }

  };

  // =========================================
  // TABLE COLUMNS
  // =========================================

  const columns = [

    {
      key: 'name',
      label: 'Security Role',

      render: (val, row) => (

        <div className="flex items-center gap-4">

          <div className="
w-11
h-11
rounded-2xl
bg-gradient-to-br
from-yellow-500/20
to-orange-500/10
flex
items-center
justify-center
text-yellow-600
shadow-lg
shadow-yellow-500/10
">

            <ShieldCheck size={18} />

          </div>

          <div>

            <p className="font-black text-slate-700 dark:text-white tracking-tight">
              {val}
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-bold">
              Access Authority
            </p>

          </div>

        </div>

      ),
    },

    {
      key: 'code',
      label: 'Access Code',

      render: (val) => (

        <code className="
px-3
py-1.5
rounded-xl
bg-slate-100
dark:bg-slate-800
text-[11px]
font-mono
tracking-[0.2em]
font-bold
text-indigo-500
border
border-slate-200
dark:border-slate-700
">
          {val}
        </code>

      ),
    },

    {
      key: 'createdAt',
      label: 'Initialized',

      render: (val) => (

        <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">

          {val
            ? new Date(val).toLocaleDateString()
            : '-'}

        </span>

      ),
    },

    {
      key: 'actions',
      label: 'Controls',

      render: (_, row) => (

        <div className="flex items-center gap-2">

          <Button

            size="sm"

            variant="ghost"

            onClick={() => setDeleteTarget(row)}

            className="
rounded-xl
hover:bg-red-500/10
hover:text-red-500
transition-all
duration-300
"

          >

            <Trash2 size={16} />

          </Button>

        </div>

      ),
    },

  ];

  // =========================================
  // GLASS STYLE
  // =========================================

  const glassCard = `
bg-white
dark:bg-slate-900/70
backdrop-blur-2xl
border
border-slate-200
dark:border-slate-800
shadow-[0_10px_40px_rgba(0,0,0,0.06)]
dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
transition-all
duration-500
hover:shadow-yellow-500/10
`;

  // =========================================
  // LOADER
  // =========================================

  if (!pageLoaded) {

    return (

      <div className="
min-h-screen
flex
items-center
justify-center
bg-[#03140F]
">

        <div className="
w-14
h-14
rounded-full
border-4
border-yellow-500/20
border-t-yellow-500
animate-spin
" />

      </div>

    );

  }

  return (

    <DashboardLayout>

      <div className="
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
">

        <Header
          title="Role Authority Matrix"
          subtitle="Configure and manage secure platform access roles"
        />

        <motion.div

          initial={{
            opacity: 0,
            scale: 1.02,
            filter: 'blur(12px)',
          }}

          animate={{
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
          }}

          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}

          className="
relative
overflow-hidden
p-8
max-w-[1600px]
mx-auto
space-y-8
"
        >

          {/* ========================================= */}
          {/* BACKGROUND */}
          {/* ========================================= */}

          <div className="absolute inset-0 -z-10 overflow-hidden">

            <div className="
absolute inset-0
bg-[radial-gradient(#0f172a12_1px,transparent_1px)]
dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)]
[background-size:24px_24px]
opacity-40
" />

            <motion.div

              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
              }}

              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}

              className="
absolute
top-[-10%]
left-[-10%]
w-[500px]
h-[500px]
bg-yellow-500/10
rounded-full
blur-[120px]
"
            />

            <motion.div

              animate={{
                y: [0, 40, 0],
                x: [0, -20, 0],
              }}

              transition={{
                duration: 14,
                repeat: Infinity,
                ease: 'easeInOut',
              }}

              className="
absolute
bottom-[-10%]
right-[-10%]
w-[500px]
h-[500px]
bg-orange-500/10
rounded-full
blur-[120px]
"
            />

          </div>

          {/* ========================================= */}
          {/* ANALYTICS */}
          {/* ========================================= */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <motion.div

              whileHover={{
                y: -4,
              }}

              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black">
                    Total Roles
                  </p>

                  <h3 className="text-3xl font-black mt-2 text-slate-800 dark:text-white">
                    {analytics.total}
                  </h3>

                </div>

                <div className="
w-14
h-14
rounded-2xl
bg-yellow-500/10
flex
items-center
justify-center
text-yellow-500
">

                  <Layers3 size={24} />

                </div>

              </div>

            </motion.div>

            <motion.div

              whileHover={{
                y: -4,
              }}

              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black">
                    Active Authorities
                  </p>

                  <h3 className="text-3xl font-black mt-2 text-slate-800 dark:text-white">
                    {analytics.secured}
                  </h3>

                </div>

                <div className="
w-14
h-14
rounded-2xl
bg-emerald-500/10
flex
items-center
justify-center
text-emerald-500
">

                  <Shield size={24} />

                </div>

              </div>

            </motion.div>

            <motion.div

              whileHover={{
                y: -4,
              }}

              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="flex items-center justify-between">

                <div className="flex-1">

                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black mb-3">
                    Security Coverage
                  </p>

                  <div className="flex items-center justify-between mb-2">

                    <span className="text-3xl font-black text-slate-800 dark:text-white">
                      {analytics.efficiency}%
                    </span>

                    <Activity
                      size={18}
                      className="text-indigo-500"
                    />

                  </div>

                  <Progress
                    value={analytics.efficiency}
                    className="h-2 bg-slate-200 dark:bg-slate-800"
                  />

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
              y: 40,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
            }}

            whileHover={{
              y: -2,
            }}

            className={`${glassCard} rounded-[2.5rem] overflow-hidden`}
          >

            {/* HEADER */}

            <div className="
p-8
border-b
border-white/10
flex
justify-between
items-center
bg-slate-50
dark:bg-slate-900/10
backdrop-blur-xl
">

              <div className="flex items-center gap-4">

                <div className="
p-3
rounded-2xl
bg-gradient-to-br
from-yellow-500
to-orange-600
text-white
shadow-xl
shadow-yellow-500/20
">

                  <BarChart3 size={20} />

                </div>

                <div>

                  <h3 className="text-lg font-black tracking-tight text-slate-800 dark:text-white">
                    Security Role Directory
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Centralized access control infrastructure
                  </p>

                </div>

              </div>

              <Button

                onClick={() => {
                  setCreateOpen(true);
                  setForm({
                    code: '',
                    name: '',
                  });
                }}

                disabled={loading}

                className="
rounded-2xl
h-12
px-6
bg-yellow-500
hover:bg-yellow-600
text-white
font-black
shadow-xl
shadow-yellow-500/20
transition-all
duration-500
hover:scale-105
active:scale-95
"

              >

                <Plus size={18} className="mr-2" />

                Create Role

                <ArrowRight size={16} className="ml-2" />

              </Button>

            </div>

            {/* TABLE */}

            <div className="overflow-hidden">

              {loading ? (

                <TableSkeleton rows={5} />

              ) : (

                <DataTable
                  columns={columns}
                  data={roles}
                  emptyMessage="No security roles configured"
                />

              )}

            </div>

            {/* FOOTER */}

            <div className="
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
">

              <div className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
dark:text-slate-400
">

                Showing
                {" "}
                {(meta.page - 1) * meta.limit + 1}

                {" - "}

                {Math.min(
                  meta.page * meta.limit,
                  meta.total
                )}

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
                    setPage(prev => Math.max(1, prev - 1))
                  }

                  className="
rounded-xl
border-slate-200
dark:border-slate-700
"

                >

                  <ChevronLeft size={16} />

                </Button>

                <div className="
px-4
py-2
rounded-xl
bg-yellow-500
text-white
text-sm
font-black
shadow-lg
shadow-yellow-500/20
">

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
                    setPage(prev => prev + 1)
                  }

                  className="
rounded-xl
border-slate-200
dark:border-slate-700
"

                >

                  <ChevronRight size={16} />

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

        title="Initialize Security Role"

      >

        <form
          onSubmit={handleCreate}
          className="space-y-6 py-4"
        >

          <div className="space-y-2">

            <Label className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
flex
items-center
gap-2
">

              <Hash size={14} />

              Access Code

            </Label>

            <Input

              className="
h-12
rounded-2xl
font-mono
uppercase
tracking-[0.15em]
border-slate-200
dark:border-slate-700
focus-visible:ring-yellow-500
"

              placeholder="e.g. STORE_MANAGER"

              value={form.code}

              onChange={(e) =>
                setForm({
                  ...form,
                  code: e.target.value
                    .toUpperCase()
                    .replace(/\s/g, '_'),
                })
              }

              required

            />

            <p className="text-[11px] text-slate-400">
              Uppercase letters and underscores only
            </p>

          </div>

          <div className="space-y-2">

            <Label className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
flex
items-center
gap-2
">

              <Lock size={14} />

              Role Display Name

            </Label>

            <Input

              className="
h-12
rounded-2xl
border-slate-200
dark:border-slate-700
focus-visible:ring-orange-500
"

              placeholder="e.g. Store Manager"

              value={form.name}

              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }

              required

            />

          </div>

          <div className="flex gap-4 pt-4">

            <Button

              type="button"

              variant="outline"

              onClick={() => setCreateOpen(false)}

              className="
flex-1
h-12
rounded-2xl
"

              disabled={creating}

            >

              Cancel

            </Button>

            <Button

              type="submit"

              disabled={creating}

              className="
flex-1
h-12
rounded-2xl
bg-yellow-500
hover:bg-yellow-600
text-white
font-bold
shadow-xl
shadow-yellow-500/20
"

            >

              {creating
                ? 'Processing...'
                : 'Create Role'}

            </Button>

          </div>

        </form>

      </Modal>

      {/* ========================================= */}
      {/* DELETE CONFIRM */}
      {/* ========================================= */}

      <ConfirmDialog

        isOpen={!!deleteTarget}

        onClose={() => setDeleteTarget(null)}

        onConfirm={handleDelete}

        title="Delete Security Role"

        message={`Deleting "${deleteTarget?.name}" may affect users currently assigned to this authority role. Continue?`}

        loading={deleting}

      />

    </DashboardLayout>

  );

}