import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import StatusBadge from '../components/common/StatusBadge';
import TableSkeleton from '../components/common/TableSkeleton';

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

import { motion } from 'framer-motion';

import { toast } from '../hooks/use-toast';

import { usersApi } from '../api/users.api';
import { rolesApi } from '../api/roles.api';
import { citiesApi } from '../api/cities.api';
import { franchisesApi } from '../api/franchises.api';

import axiosInstance from '../api/axios.config';
import { FRANCHISE_URL } from '../config/serviceUrls';

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
  Activity,
  Globe,
  ArrowRight,
  BarChart3,
  UserPlus,
} from 'lucide-react';

const SCOPE_TYPES = ['GLOBAL', 'CITY', 'FRANCHISE', 'STORE'];

const EMPTY_FORM = {
  email: '',
  password: '',
  fullName: '',
  phone: '',
};

const EMPTY_STAFF = {
  roleCode: '',
  scopeType: 'GLOBAL',
  scopeId: '',
};

export default function UsersPage() {

  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  const [loading, setLoading] = useState(true);

  const [meta, setMeta] = useState({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 1
  });

  const [page, setPage] = useState(1);

  const [limit] = useState(10);

  const [pageLoaded, setPageLoaded] = useState(false);

  // =========================================
  // CREATE
  // =========================================

  const [createOpen, setCreateOpen] = useState(false);

  const [isStaff, setIsStaff] = useState(false);

  const [form, setForm] = useState(EMPTY_FORM);

  const [staffForm, setStaffForm] = useState(EMPTY_STAFF);

  const [creating, setCreating] = useState(false);

  // =========================================
  // VIEW
  // =========================================

  const [viewUser, setViewUser] = useState(null);

  // =========================================
  // ROLE
  // =========================================

  const [roleModal, setRoleModal] = useState(false);

  const [roleTarget, setRoleTarget] = useState(null);

  const [selectedRole, setSelectedRole] = useState('');

  const [assigningRole, setAssigningRole] = useState(false);

  // =========================================
  // SCOPE
  // =========================================

  const [scopeModal, setScopeModal] = useState(false);

  const [scopeTarget, setScopeTarget] = useState(null);

  const [scopeType, setScopeType] = useState('GLOBAL');

  const [scopeId, setScopeId] = useState('');

  const [assigningScope, setAssigningScope] = useState(false);

  // =========================================
  // SCOPE ITEMS
  // =========================================

  const [scopeItems, setScopeItems] = useState([]);

  const [scopeItemsLoading, setScopeItemsLoading] = useState(false);

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
  // FETCH SCOPE ITEMS
  // =========================================

  const fetchScopeItems = useCallback(async (type) => {

    if (type === 'GLOBAL') {

      setScopeItems([]);

      return;
    }

    setScopeItemsLoading(true);

    setScopeItems([]);

    try {

      let items = [];

      if (type === 'CITY') {

        const res = await citiesApi.getAll(1, 100);

        const inner = res?.data || res;

        items = inner?.items || [];

      } else if (type === 'FRANCHISE') {

        const res = await franchisesApi.getAll(1, 100);

        const inner = res?.data || res;

        items = inner?.items || [];

      } else if (type === 'STORE') {

        const res = await axiosInstance.get(
          `${FRANCHISE_URL}/stores`,
          {
            params: {
              page: 1,
              limit: 100,
            }
          }
        );

        const inner =
          res?.data?.data ||
          res?.data ||
          {};

        items = inner?.items || [];
      }

      setScopeItems(items);

    } catch {

      setScopeItems([]);

    } finally {

      setScopeItemsLoading(false);

    }

  }, []);

  // =========================================
  // FETCH ROLES
  // =========================================

  const fetchRoles = useCallback(async () => {

    try {

      const res = await rolesApi.getAll();

      const inner = res?.data || res;

      setRoles(inner?.items || []);

    } catch {

      toast({
        title: 'Failed to load roles',
        variant: 'destructive',
      });

    }

  }, []);

  // =========================================
  // FETCH USERS
  // =========================================

  const fetchUsers = useCallback(async () => {

    setLoading(true);

    try {

      const res = await usersApi.getAll(
        page,
        limit
      );

      const inner = res?.data || res;

      setUsers(inner?.items || []);

      const pag =
        inner?.meta ||
        inner?.pagination ||
        {};

      setMeta({
        total: pag.total || 0,
        page: pag.page || page,
        limit: pag.limit || limit,
        totalPages: pag.totalPages || 1,
      });

    } catch {

      toast({
        title: 'Failed to load users',
        variant: 'destructive',
      });

    } finally {

      setLoading(false);

    }

  }, [page, limit]);

  useEffect(() => {

    fetchUsers();

    fetchRoles();

  }, [fetchUsers]);

  // =========================================
  // ANALYTICS
  // =========================================

  const analytics = useMemo(() => {

    const total = meta.total || 0;

    const active =
      users.filter(u => u.isActive)
        .length || 0;

    const inactive =
      users.filter(u => !u.isActive)
        .length || 0;

    const efficiency =
      total > 0
        ? Math.round(
            (active / total) * 100
          )
        : 0;

    return {
      total,
      active,
      inactive,
      efficiency,
    };

  }, [users, meta]);

  // =========================================
  // CREATE USER
  // =========================================

  const handleCreate = async (e) => {

    e.preventDefault();

    if (isStaff) {

      if (!staffForm.roleCode) {

        toast({
          title:
            'Role is required for staff user',
          variant: 'destructive',
        });

        return;
      }

      if (
        staffForm.scopeType !== 'GLOBAL' &&
        !staffForm.scopeId
      ) {

        toast({
          title:
            'Scope ID required for non-global scope',
          variant: 'destructive',
        });

        return;
      }
    }

    setCreating(true);

    try {

      if (isStaff) {

        await usersApi.createStaff({
          ...form,
          ...staffForm,
          phone:
            form.phone || undefined,
          scopeId:
            staffForm.scopeType ===
            'GLOBAL'
              ? undefined
              : staffForm.scopeId,
        });

      } else {

        await usersApi.create({
          ...form,
          phone:
            form.phone || undefined,
        });

      }

      toast({
        title:
          'User created successfully'
      });

      setCreateOpen(false);

      setForm(EMPTY_FORM);

      setStaffForm(EMPTY_STAFF);

      setIsStaff(false);

      fetchUsers();

    } catch (err) {

      const msg =
        err.response?.data?.data
          ?.message ||
        err.response?.data?.message ||
        'Failed to create user';

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
  // STATUS TOGGLE
  // =========================================

  const handleStatusToggle = async (
    user
  ) => {

    try {

      await usersApi.updateStatus(
        user.id,
        !user.isActive
      );

      toast({
        title: `User ${
          user.isActive
            ? 'deactivated'
            : 'activated'
        }`
      });

      fetchUsers();

    } catch {

      toast({
        title:
          'Failed to update status',
        variant: 'destructive',
      });

    }

  };

  // =========================================
  // ROLE
  // =========================================

  const openRoleModal = (user) => {

    setRoleTarget(user);

    setSelectedRole('');

    setRoleModal(true);

  };

  const handleAssignRole = async () => {

    if (
      !roleTarget ||
      !selectedRole
    ) return;

    setAssigningRole(true);

    try {

      await usersApi.assignRole(
        roleTarget.id,
        selectedRole
      );

      toast({
        title:
          'Role assigned successfully'
      });

      setRoleModal(false);

      setRoleTarget(null);

      fetchUsers();

    } catch {

      toast({
        title:
          'Failed to assign role',
        variant: 'destructive',
      });

    } finally {

      setAssigningRole(false);

    }

  };

  // =========================================
  // SCOPE
  // =========================================

  const openScopeModal = async (
    user
  ) => {

    setScopeTarget(user);

    setScopeType('GLOBAL');

    setScopeId('');

    setScopeModal(true);

    try {

      const res =
        await usersApi.getScope(
          user.id
        );

      const scope =
        res?.data || res;

      if (scope?.scopeType) {

        setScopeType(scope.scopeType);

        setScopeId(
          scope.scopeId || ''
        );

        fetchScopeItems(
          scope.scopeType
        );

      }

    } catch {

      // ignore

    }

  };

  const handleAssignScope =
    async () => {

      if (!scopeTarget) return;

      setAssigningScope(true);

      try {

        await usersApi.assignScope(
          scopeTarget.id,
          scopeType,
          scopeId
        );

        toast({
          title:
            'Scope assigned successfully'
        });

        setScopeModal(false);

        setScopeTarget(null);

      } catch {

        toast({
          title:
            'Failed to assign scope',
          variant: 'destructive',
        });

      } finally {

        setAssigningScope(false);

      }

    };

  const handleRemoveScope =
    async (userId) => {

      try {

        await usersApi.removeScope(
          userId
        );

        toast({
          title: 'Scope removed'
        });

        setScopeModal(false);

        setScopeTarget(null);

      } catch {

        toast({
          title:
            'Failed to remove scope',
          variant: 'destructive',
        });

      }

    };

  // =========================================
  // TABLE COLUMNS
  // =========================================

  const columns = [

    {
      key: 'fullName',
      label: 'Identity',

      render: (val, row) => (

        <div className="flex items-center gap-4">

          <div className="
w-11
h-11
rounded-2xl
bg-gradient-to-br
from-indigo-500/20
to-indigo-600/10
flex
items-center
justify-center
text-indigo-500
shadow-lg
shadow-indigo-500/10
font-black
text-xs
uppercase
">
            {val
              ?.split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2) || 'U'}
          </div>

          <div>

            <p className="font-black text-slate-700 dark:text-white tracking-tight">
              {val}
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-bold">
              {row.email}
            </p>

          </div>

        </div>

      )
    },

    {
      key: 'role',
      label: 'Role Access',

      render: (val) => (

        val ? (

          <div className="
inline-flex
items-center
gap-2
px-3
py-1.5
rounded-xl
bg-indigo-500/10
text-indigo-500
border
border-indigo-500/10
text-[11px]
font-black
tracking-[0.15em]
uppercase
">

            <ShieldCheck size={12} />

            {val}

          </div>

        ) : (

          <span className="text-xs text-slate-400">
            —
          </span>

        )

      )
    },

    {
      key: 'scopeType',
      label: 'Scope Layer',

      render: (val) => (

        val ? (

          <div className="
inline-flex
items-center
gap-2
px-3
py-1.5
rounded-xl
bg-orange-500/10
text-orange-500
border
border-orange-500/10
text-[11px]
font-black
tracking-[0.15em]
uppercase
">

            <Globe size={12} />

            {val}

          </div>

        ) : (

          <span className="text-xs text-slate-400">
            —
          </span>

        )

      )
    },

    {
      key: 'isActive',
      label: 'Network Status',

      render: (val, row) => (

        <div className="flex items-center gap-3">

          <Switch
            checked={!!val}
            onCheckedChange={() =>
              handleStatusToggle(row)
            }
          />

          <StatusBadge
            status={
              val
                ? 'ACTIVE'
                : 'INACTIVE'
            }
          />

        </div>

      )
    },

    {
      key: 'actions',
      label: 'Controls',

      render: (_, row) => (

        <div className="flex items-center gap-2">

          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              setViewUser(row)
            }
            className="
rounded-xl
hover:bg-indigo-500/10
hover:text-indigo-500
transition-all
duration-300
"
          >

            <Eye size={15} />

          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              openRoleModal(row)
            }
            className="
rounded-xl
hover:bg-blue-500/10
hover:text-blue-500
transition-all
duration-300
"
          >

            <UserCog size={15} />

          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              openScopeModal(row)
            }
            className="
rounded-xl
hover:bg-orange-500/10
hover:text-orange-500
transition-all
duration-300
"
          >

            <Target size={15} />

          </Button>

        </div>

      )
    }
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
hover:shadow-indigo-500/10
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
border-indigo-500/20
border-t-indigo-500
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
          title="User Management"
          subtitle="Provision and manage system-wide user accounts and permissions"
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

          {/* BG */}

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
bg-indigo-500/10
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
              whileHover={{ y: -4 }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black">
                    Total Users
                  </p>

                  <h3 className="text-3xl font-black mt-2 text-slate-800 dark:text-white">
                    {analytics.total}
                  </h3>

                </div>

                <div className="
w-14
h-14
rounded-2xl
bg-indigo-500/10
flex
items-center
justify-center
text-indigo-500
">

                  <UsersIcon size={24} />

                </div>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black">
                    Active Accounts
                  </p>

                  <h3 className="text-3xl font-black mt-2 text-slate-800 dark:text-white">
                    {analytics.active}
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

                  <ShieldCheck size={24} />

                </div>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="flex items-center justify-between">

                <div className="flex-1">

                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black mb-3">
                    System Efficiency
                  </p>

                  <div className="flex items-center justify-between">

                    <span className="text-3xl font-black text-slate-800 dark:text-white">
                      {analytics.efficiency}%
                    </span>

                    <Activity
                      size={18}
                      className="text-indigo-500"
                    />

                  </div>

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
from-indigo-500
to-indigo-700
text-white
shadow-xl
shadow-indigo-500/20
">

                  <BarChart3 size={20} />

                </div>

                <div>

                  <h3 className="text-lg font-black tracking-tight text-slate-800 dark:text-white">
                    User Directory
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Manage authenticated platform operators
                  </p>

                </div>

              </div>

              <Button

                onClick={() => {
                  setCreateOpen(true);
                  setForm(EMPTY_FORM);
                  setStaffForm(EMPTY_STAFF);
                  setIsStaff(false);
                }}

                className="
rounded-2xl
h-12
px-6
bg-indigo-600
hover:bg-indigo-700
text-white
font-black
shadow-xl
shadow-indigo-500/20
transition-all
duration-500
hover:scale-105
active:scale-95
"

              >

                <UserPlus
                  size={18}
                  className="mr-2"
                />

                Create User

                <ArrowRight
                  size={16}
                  className="ml-2"
                />

              </Button>

            </div>

            {/* TABLE */}

            <div className="overflow-hidden">

              {loading ? (

                <TableSkeleton rows={6} />

              ) : (

                <DataTable
                  columns={columns}
                  data={users}
                  emptyMessage="No users found"
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

                <div className="
px-4
py-2
rounded-xl
bg-indigo-600
text-white
text-sm
font-black
shadow-lg
shadow-indigo-500/20
">

                  {meta.page}
                  {" / "}
                  {meta.totalPages}

                </div>

                <Button

                  size="sm"

                  variant="outline"

                  disabled={
                    meta.page >=
                    meta.totalPages
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
        onClose={() =>
          setCreateOpen(false)
        }
        title="Initialize User Account"
      >

        <div className="
max-h-[85vh]
overflow-y-auto
pr-2
">

          <form
            onSubmit={handleCreate}
            className="space-y-5 py-4"
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

                <ShieldCheck size={14} />

                Full Name

              </Label>

              <div className="relative">

                <ShieldCheck className="
absolute
left-4
top-1/2
-translate-y-1/2
text-slate-400
size-4
" />

                <Input
                  className="
h-12
pl-11
rounded-2xl
border-slate-200
dark:border-slate-700
focus-visible:ring-indigo-500
"
                  placeholder="Ali Khan"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      fullName:
                        e.target.value
                    })
                  }
                  required
                />

              </div>

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

                <Mail size={14} />

                Email Address

              </Label>

              <div className="relative">

                <Mail className="
absolute
left-4
top-1/2
-translate-y-1/2
text-slate-400
size-4
" />

                <Input
                  type="email"
                  className="
h-12
pl-11
rounded-2xl
border-slate-200
dark:border-slate-700
focus-visible:ring-indigo-500
"
                  placeholder="admin@barqi.pk"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email:
                        e.target.value
                    })
                  }
                  required
                />

              </div>

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

                <Phone size={14} />

                Contact Number

              </Label>

              <div className="relative">

                <Phone className="
absolute
left-4
top-1/2
-translate-y-1/2
text-slate-400
size-4
" />

                <Input
                  className="
h-12
pl-11
rounded-2xl
border-slate-200
dark:border-slate-700
focus-visible:ring-indigo-500
"
                  placeholder="03001234567"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone:
                        e.target.value
                    })
                  }
                />

              </div>

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

                Password

              </Label>

              <div className="relative">

                <Lock className="
absolute
left-4
top-1/2
-translate-y-1/2
text-slate-400
size-4
" />

                <Input
                  type="password"
                  className="
h-12
pl-11
rounded-2xl
border-slate-200
dark:border-slate-700
focus-visible:ring-indigo-500
"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      password:
                        e.target.value
                    })
                  }
                  required
                />

              </div>

            </div>

            <div className="
rounded-2xl
border
border-slate-200
dark:border-slate-800
p-4
bg-slate-50
dark:bg-slate-900/40
">

              <div className="flex items-center justify-between">

                <div>

                  <h4 className="font-black text-sm text-slate-800 dark:text-white">
                    Staff Permissions
                  </h4>

                  <p className="text-xs text-slate-500">
                    Assign operational access
                  </p>

                </div>

                <Switch
                  checked={isStaff}
                  onCheckedChange={
                    setIsStaff
                  }
                />

              </div>

            </div>

            {isStaff && (

              <div className="
space-y-5
border-t
border-slate-200
dark:border-slate-800
pt-5
">

                <div className="space-y-2">

                  <Label className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
">
                    Role
                  </Label>

                  <Select
                    value={
                      staffForm.roleCode
                    }
                    onValueChange={(v) =>
                      setStaffForm({
                        ...staffForm,
                        roleCode: v,
                      })
                    }
                  >

                    <SelectTrigger className="
h-12
rounded-2xl
">

                      <SelectValue placeholder="Select role" />

                    </SelectTrigger>

                    <SelectContent>

                      {roles.map((r) => (

                        <SelectItem
                          key={r.id}
                          value={r.code}
                        >
                          {r.name}
                        </SelectItem>

                      ))}

                    </SelectContent>

                  </Select>

                </div>

                <div className="space-y-2">

                  <Label className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
">
                    Scope Type
                  </Label>

                  <Select
                    value={
                      staffForm.scopeType
                    }
                    onValueChange={(v) => {

                      setStaffForm({
                        ...staffForm,
                        scopeType: v,
                        scopeId: '',
                      });

                      fetchScopeItems(v);

                    }}
                  >

                    <SelectTrigger className="
h-12
rounded-2xl
">

                      <SelectValue />

                    </SelectTrigger>

                    <SelectContent>

                      {SCOPE_TYPES.map(
                        (t) => (

                          <SelectItem
                            key={t}
                            value={t}
                          >
                            {t}
                          </SelectItem>

                        )
                      )}

                    </SelectContent>

                  </Select>

                </div>

                {staffForm.scopeType !==
                  'GLOBAL' && (

                  <div className="space-y-2">

                    <Label className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
">
                      Scope ID
                    </Label>

                    <Select
                      value={
                        staffForm.scopeId
                      }
                      onValueChange={(v) =>
                        setStaffForm({
                          ...staffForm,
                          scopeId: v,
                        })
                      }
                      disabled={
                        scopeItemsLoading
                      }
                    >

                      <SelectTrigger className="
h-12
rounded-2xl
">

                        <SelectValue
                          placeholder={
                            scopeItemsLoading
                              ? 'Loading...'
                              : `Select ${staffForm.scopeType.toLowerCase()}`
                          }
                        />

                      </SelectTrigger>

                      <SelectContent>

                        {scopeItems.map(
                          (item) => (

                            <SelectItem
                              key={item.id}
                              value={item.id}
                            >
                              {item.name}
                              {item.code
                                ? ` (${item.code})`
                                : ''}
                            </SelectItem>

                          )
                        )}

                      </SelectContent>

                    </Select>

                  </div>

                )}

              </div>

            )}

            <div className="
flex
gap-4
pt-5
border-t
">

              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  setCreateOpen(false)
                }
                className="
flex-1
h-12
rounded-2xl
"
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
bg-indigo-600
hover:bg-indigo-700
text-white
font-black
shadow-xl
shadow-indigo-500/20
"
              >

                {creating
                  ? 'Processing...'
                  : 'Create User'}

              </Button>

            </div>

          </form>

        </div>

      </Modal>

      {/* ROLE MODAL */}

      <Modal
        isOpen={roleModal}
        onClose={() => {
          setRoleModal(false);
          setRoleTarget(null);
        }}
        title="Assign Role"
      >

        <div className="space-y-5 py-4">

          <div className="
rounded-2xl
bg-slate-50
dark:bg-slate-900/40
p-4
border
border-slate-200
dark:border-slate-800
">

            <p className="text-sm text-slate-500">
              Configure access role for
            </p>

            <h3 className="font-black text-lg text-slate-800 dark:text-white mt-1">
              {roleTarget?.fullName}
            </h3>

          </div>

          <div className="space-y-2">

            <Label className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
">
              Role
            </Label>

            <Select
              value={selectedRole}
              onValueChange={
                setSelectedRole
              }
            >

              <SelectTrigger className="
h-12
rounded-2xl
">

                <SelectValue placeholder="Select role" />

              </SelectTrigger>

              <SelectContent>

                {roles.map((r) => (

                  <SelectItem
                    key={r.id}
                    value={r.code}
                  >
                    {r.name}
                  </SelectItem>

                ))}

              </SelectContent>

            </Select>

          </div>

          <div className="
flex
gap-4
pt-4
border-t
">

            <Button
              variant="outline"
              onClick={() =>
                setRoleModal(false)
              }
              className="
flex-1
h-12
rounded-2xl
"
            >

              Cancel

            </Button>

            <Button
              disabled={
                !selectedRole ||
                assigningRole
              }
              onClick={handleAssignRole}
              className="
flex-1
h-12
rounded-2xl
bg-indigo-600
hover:bg-indigo-700
"
            >

              {assigningRole
                ? 'Assigning...'
                : 'Assign Role'}

            </Button>

          </div>

        </div>

      </Modal>

      {/* SCOPE MODAL */}

      <Modal
        isOpen={scopeModal}
        onClose={() => {
          setScopeModal(false);
          setScopeTarget(null);
        }}
        title="Assign Scope"
      >

        <div className="
space-y-5
py-4
max-h-[80vh]
overflow-y-auto
pr-2
">

          <div className="
rounded-2xl
bg-slate-50
dark:bg-slate-900/40
p-4
border
border-slate-200
dark:border-slate-800
">

            <p className="text-sm text-slate-500">
              Configure scope access for
            </p>

            <h3 className="font-black text-lg text-slate-800 dark:text-white mt-1">
              {scopeTarget?.fullName}
            </h3>

          </div>

          <div className="space-y-2">

            <Label className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
">
              Scope Type
            </Label>

            <Select
              value={scopeType}
              onValueChange={(v) => {

                setScopeType(v);

                setScopeId('');

                fetchScopeItems(v);

              }}
            >

              <SelectTrigger className="
h-12
rounded-2xl
">

                <SelectValue />

              </SelectTrigger>

              <SelectContent>

                {SCOPE_TYPES.map(
                  (t) => (

                    <SelectItem
                      key={t}
                      value={t}
                    >
                      {t}
                    </SelectItem>

                  )
                )}

              </SelectContent>

            </Select>

          </div>

          {scopeType !== 'GLOBAL' && (

            <div className="space-y-2">

              <Label className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
">
                Scope ID
              </Label>

              <Select
                value={scopeId}
                onValueChange={setScopeId}
                disabled={
                  scopeItemsLoading
                }
              >

                <SelectTrigger className="
h-12
rounded-2xl
">

                  <SelectValue
                    placeholder={
                      scopeItemsLoading
                        ? 'Loading...'
                        : `Select ${scopeType.toLowerCase()}`
                    }
                  />

                </SelectTrigger>

                <SelectContent>

                  {scopeItems.map(
                    (item) => (

                      <SelectItem
                        key={item.id}
                        value={item.id}
                      >
                        {item.name}
                        {item.code
                          ? ` (${item.code})`
                          : ''}
                      </SelectItem>

                    )
                  )}

                </SelectContent>

              </Select>

            </div>

          )}

          {scopeTarget?.scopeType && (

            <div className="
rounded-2xl
bg-orange-500/10
border
border-orange-500/10
p-4
">

              <p className="text-sm text-orange-500 font-bold">
                Current Scope:
                {" "}
                {scopeTarget.scopeType}
              </p>

            </div>

          )}

          <div className="
flex
flex-col
md:flex-row
gap-3
pt-4
border-t
">

            {scopeTarget?.scopeType && (

              <Button
                variant="outline"
                className="
h-12
rounded-2xl
text-red-600
border-red-200
hover:bg-red-50
"
                onClick={() =>
                  handleRemoveScope(
                    scopeTarget.id
                  )
                }
              >

                Remove Scope

              </Button>

            )}

            <Button
              variant="outline"
              onClick={() =>
                setScopeModal(false)
              }
              className="
flex-1
h-12
rounded-2xl
"
            >

              Cancel

            </Button>

            <Button
              disabled={
                assigningScope ||
                (scopeType !==
                  'GLOBAL' &&
                  !scopeId)
              }
              onClick={
                handleAssignScope
              }
              className="
flex-1
h-12
rounded-2xl
bg-orange-600
hover:bg-orange-700
"
            >

              {assigningScope
                ? 'Saving...'
                : 'Save Scope'}

            </Button>

          </div>

        </div>

      </Modal>

      {/* VIEW MODAL */}

      <Modal
        isOpen={!!viewUser}
        onClose={() =>
          setViewUser(null)
        }
        title="User Intelligence"
      >

        {viewUser && (

          <div className="
space-y-4
py-4
">

            <div className="
flex
items-center
gap-4
pb-5
border-b
">

              <div className="
w-16
h-16
rounded-3xl
bg-gradient-to-br
from-indigo-500
to-indigo-700
text-white
flex
items-center
justify-center
font-black
text-xl
shadow-xl
shadow-indigo-500/20
">

                {viewUser.fullName
                  ?.split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}

              </div>

              <div>

                <h3 className="text-xl font-black text-slate-800 dark:text-white">
                  {viewUser.fullName}
                </h3>

                <p className="text-sm text-slate-500">
                  {viewUser.email}
                </p>

              </div>

            </div>

            {[
              [
                'Phone',
                viewUser.phone || '—'
              ],
              [
                'Role',
                viewUser.role ||
                  'Not assigned'
              ],
              [
                'Scope',
                viewUser.scopeType ||
                  'Not assigned'
              ],
              [
                'Provider',
                viewUser.provider
              ],
              [
                'Verified',
                viewUser.isVerified
                  ? 'Yes'
                  : 'No'
              ],
              [
                'Status',
                viewUser.isActive
                  ? 'Active'
                  : 'Inactive'
              ],
            ].map(([label, value]) => (

              <div
                key={label}
                className="
grid
grid-cols-3
gap-4
items-center
rounded-2xl
bg-slate-50
dark:bg-slate-900/40
p-4
"
              >

                <span className="
text-xs
font-black
uppercase
tracking-[0.2em]
text-slate-500
">
                  {label}
                </span>

                <span className="
col-span-2
font-semibold
text-slate-800
dark:text-white
break-all
">
                  {value}
                </span>

              </div>

            ))}

            <div className="pt-4">

              <Button
                className="
w-full
h-12
rounded-2xl
bg-indigo-600
hover:bg-indigo-700
"
                onClick={() =>
                  setViewUser(null)
                }
              >

                Close Window

              </Button>

            </div>

          </div>

        )}

      </Modal>

    </DashboardLayout>

  );
}