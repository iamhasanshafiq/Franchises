import React, {
  useState,
  useEffect,
  useMemo,
} from 'react';

import {
  UserPlus,
  Search,
  ShieldCheck,
  Mail,
  Lock,
  Phone,
  Store,
  Loader2,
  Eye,
  Trash2,
  ArrowRight,
  Activity,
  BarChart3,
  Users,
  Globe,
} from 'lucide-react';

import { motion } from 'framer-motion';

import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import ConfirmDialog from '../components/common/ConfirmDialog';
import StatusBadge from '../components/common/StatusBadge';

import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../components/ui/select';

import { Progress } from '../components/ui/progress';

import { toast } from 'sonner';

import TableSkeleton from '../components/common/TableSkeleton';

import { useStoreAdmins } from '../hooks/useStoreAdmins';
import { storesApi } from '../api/stores.api';
import { usersApi } from '../api/users.api';

const StoreAdmins = () => {

  const {
    admins,
    loading,
    fetchAdmins,
    createAdmin,
    changeStatus,
    deleteAdmin
  } = useStoreAdmins();

  const [stores, setStores] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const [modalOpen, setModalOpen] = useState(false);

  const [formLoading, setFormLoading] = useState(false);

  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const [detailOpen, setDetailOpen] = useState(false);

  const [statusConfirmOpen, setStatusConfirmOpen] = useState(false);

  const [statusLoading, setStatusLoading] = useState(false);

  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  const [deleteLoading, setDeleteLoading] = useState(false);

  const [adminsWithUser, setAdminsWithUser] = useState([]);

  const [pageLoaded, setPageLoaded] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const [pageSize, setPageSize] = useState(10);

  const [formData, setFormData] = useState({
    storeId: '',
    fullName: '',
    email: '',
    password: '',
    phone: ''
  });

  // =========================================
  // INITIAL LOAD
  // =========================================

  useEffect(() => {

    fetchAdmins();

    storesApi
      .getAll(1, 100)

      .then(res => {

        const data = res.data || res;

        setStores(data.items || data || []);

      })

      .catch(() =>
        toast.error('Failed to load stores')
      );

  }, [fetchAdmins]);

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
  // LOAD USER INFO
  // =========================================

  useEffect(() => {

    const loadUsers = async () => {

      if (!admins || admins.length === 0)
        return;

      const updated = await Promise.all(

        admins.map(async (admin) => {

          try {

            await usersApi.getIamByAuthId(
              admin.authUserId
            );

            const userRes =
              await usersApi.getById(
                admin.authUserId
              );

            const user = userRes?.data;

            return {
              ...admin,
              fullName:
                user?.name || 'N/A',
              email:
                user?.email || 'N/A',
              phone:
                user?.phone || 'N/A',
            };

          } catch {

            return admin;

          }

        })

      );

      setAdminsWithUser(updated);

    };

    loadUsers();

  }, [admins]);

  // =========================================
  // FILTERED ADMINS
  // =========================================

  const filteredAdmins = useMemo(() => {

    if (!searchTerm)
      return adminsWithUser;

    const s = searchTerm.toLowerCase();

    return adminsWithUser.filter(a =>

      a.fullName
        ?.toLowerCase()
        .includes(s)

      ||

      a.email
        ?.toLowerCase()
        .includes(s)

      ||

      a.phone
        ?.toLowerCase()
        .includes(s)

      ||

      a.store?.name
        ?.toLowerCase()
        .includes(s)

    );

  }, [adminsWithUser, searchTerm]);

  // =========================================
  // ANALYTICS
  // =========================================

  const analytics = useMemo(() => {

    const total =
      filteredAdmins?.length || 0;

    const active =
      filteredAdmins?.filter(
        a => a.status === 'ACTIVE'
      ).length || 0;

    const suspended =
      total - active;

    const efficiency =
      total > 0
        ? Math.round(
            (active / total) * 100
          )
        : 0;

    return {
      total,
      active,
      suspended,
      efficiency,
    };

  }, [filteredAdmins]);

  // =========================================
  // PAGINATION
  // =========================================

  const totalPages = Math.ceil(
    filteredAdmins.length / pageSize
  );

  const paginatedAdmins = useMemo(() => {

    const start =
      (currentPage - 1) * pageSize;

    return filteredAdmins.slice(
      start,
      start + pageSize
    );

  }, [
    filteredAdmins,
    currentPage,
    pageSize
  ]);

  // =========================================
  // ACTIONS
  // =========================================

  const handleCreate = async (e) => {

    e.preventDefault();

    if (!formData.storeId) {

      toast.error(
        'Please select a store first.'
      );

      return;

    }

    setFormLoading(true);

    try {

      await createAdmin(formData);

      setModalOpen(false);

      setFormData({
        storeId: '',
        fullName: '',
        email: '',
        password: '',
        phone: ''
      });

    } finally {

      setFormLoading(false);

    }

  };

  const handleViewDetail = (admin) => {

    setSelectedAdmin(admin);

    setDetailOpen(true);

  };

  const handleStatusClick = (admin) => {

    setSelectedAdmin(admin);

    setStatusConfirmOpen(true);

  };

  const handleConfirmStatus = async () => {

    if (!selectedAdmin) return;

    const newStatus =
      selectedAdmin.status === 'ACTIVE'
        ? 'SUSPENDED'
        : 'ACTIVE';

    try {

      setStatusLoading(true);

      await changeStatus(
        selectedAdmin.id,
        newStatus
      );

    } finally {

      setStatusLoading(false);

      setStatusConfirmOpen(false);

      setSelectedAdmin(null);

    }

  };

  const handleDeleteClick = (admin) => {

    setSelectedAdmin(admin);

    setDeleteConfirmOpen(true);

  };

  const handleConfirmDelete = async () => {

    if (!selectedAdmin) return;

    try {

      setDeleteLoading(true);

      await deleteAdmin(selectedAdmin.id);

    } finally {

      setDeleteLoading(false);

      setDeleteConfirmOpen(false);

      setSelectedAdmin(null);

    }

  };

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
hover:shadow-orange-500/10
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
border-orange-500/20
border-t-orange-500
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
          title="Store Access Control"
          subtitle="Manage personnel authorized to oversee local hub operations"
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

          {/* BACKGROUND */}

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
bg-orange-500/10
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
bg-indigo-500/10
rounded-full
blur-[120px]
"
            />

          </div>

          {/* ANALYTICS */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            <motion.div
              whileHover={{ y: -4 }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black">
                    Total Admins
                  </p>

                  <h3 className="text-3xl font-black mt-2 text-slate-800 dark:text-white">
                    {analytics.total}
                  </h3>

                </div>

                <div className="
w-14
h-14
rounded-2xl
bg-orange-500/10
flex
items-center
justify-center
text-orange-500
">

                  <Users size={24} />

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
                    Active Access
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

                <div>

                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black">
                    Suspended
                  </p>

                  <h3 className="text-3xl font-black mt-2 text-slate-800 dark:text-white">
                    {analytics.suspended}
                  </h3>

                </div>

                <div className="
w-14
h-14
rounded-2xl
bg-red-500/10
flex
items-center
justify-center
text-red-500
">

                  <Globe size={24} />

                </div>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="flex-1">

                <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black mb-3">
                  System Stability
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

            </motion.div>

          </div>

          {/* TABLE */}

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
flex-col
lg:flex-row
justify-between
items-center
gap-5
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
                    Store Administrator Matrix
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Monitor and control operational access
                  </p>

                </div>

              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">

                <div className="relative w-full sm:w-80">

                  <Search className="
absolute
left-3
top-1/2
-translate-y-1/2
text-slate-400
size-4
" />

                  <Input
                    placeholder="Search administrators..."
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(e.target.value)
                    }
                    className="
pl-10
h-12
rounded-2xl
bg-white/70
dark:bg-slate-900/40
border-slate-200
dark:border-slate-700
focus-visible:ring-orange-500
"
                  />

                </div>

                <Button

                  onClick={() =>
                    setModalOpen(true)
                  }

                  className="
rounded-2xl
h-12
px-6
bg-orange-500
hover:bg-orange-600
text-white
font-black
shadow-xl
shadow-orange-500/20
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

                  Add Admin

                  <ArrowRight
                    size={16}
                    className="ml-2"
                  />

                </Button>

              </div>

            </div>

            {/* TABLE */}

            <div className="overflow-hidden">

              {loading ? (

                <TableSkeleton rows={6} />

              ) : (

                <DataTable

                  data={paginatedAdmins}

                  columns={[

                    {
                      key: 'fullName',
                      label: 'Administrator',

                      render: (val, row) => {

                        const name =
                          row.fullName ||
                          row.name ||
                          row.user?.fullName ||
                          row.user?.name ||
                          '-';

                        const email =
                          row.email ||
                          row.user?.email ||
                          '-';

                        return (

                          <div className="flex items-center gap-4">

                            <div className="
w-11
h-11
rounded-2xl
bg-gradient-to-br
from-orange-500/20
to-orange-600/10
flex
items-center
justify-center
text-orange-500
shadow-lg
shadow-orange-500/10
font-black
uppercase
">

                              {name !== '-'
                                ? name.charAt(0)
                                : '?'}

                            </div>

                            <div>

                              <p className="font-black text-slate-700 dark:text-white tracking-tight">
                                {name}
                              </p>

                              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-bold">
                                {email}
                              </p>

                            </div>

                          </div>

                        );

                      }
                    },

                    {
                      key: 'store',
                      label: 'Assigned Hub',

                      render: (_, row) => (

                        <div className="flex items-center gap-3">

                          <div className="
w-9
h-9
rounded-xl
bg-indigo-500/10
flex
items-center
justify-center
text-indigo-500
">

                            <Store size={16} />

                          </div>

                          <div>

                            <p className="font-bold text-slate-700 dark:text-white">
                              {row.store?.name || 'Unassigned'}
                            </p>

                            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                              Retail Node
                            </p>

                          </div>

                        </div>

                      )
                    },

                    {
                      key: 'phone',
                      label: 'Contact',

                      render: (_, row) => {

                        const phone =
                          row.phone ||
                          row.phoneNumber ||
                          row.user?.phone ||
                          row.user?.phoneNumber ||
                          '-';

                        return (

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
                            {phone}
                          </code>

                        );

                      }
                    },

                    {
                      key: 'status',
                      label: 'Access Status',

                      render: (val, row) => (

                        <button
                          onClick={() =>
                            handleStatusClick(row)
                          }
                          className="cursor-pointer"
                        >

                          <StatusBadge status={val} />

                        </button>

                      )
                    },

                    {
                      key: 'actions',
                      label: 'Controls',

                      render: (_, row) => (

                        <div className="flex items-center gap-2">

                          <Button

                            size="sm"

                            variant="ghost"

                            onClick={() =>
                              handleViewDetail(row)
                            }

                            className="
rounded-xl
hover:bg-blue-500/10
hover:text-blue-500
transition-all
duration-300
"

                          >

                            <Eye size={16} />

                          </Button>

                          <Button

                            size="sm"

                            variant="ghost"

                            onClick={() =>
                              handleDeleteClick(row)
                            }

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

                      )
                    }

                  ]}

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
                {(currentPage - 1) * pageSize + 1}

                {" - "}

                {Math.min(
                  currentPage * pageSize,
                  filteredAdmins.length
                )}

                {" "}
                of
                {" "}
                {filteredAdmins.length}

              </div>

              <div className="flex items-center gap-3">

                <Button

                  size="sm"

                  variant="outline"

                  disabled={currentPage === 1}

                  onClick={() =>
                    setCurrentPage(prev => prev - 1)
                  }

                  className="
rounded-xl
border-slate-200
dark:border-slate-700
"

                >

                  Prev

                </Button>

                <div className="
px-4
py-2
rounded-xl
bg-orange-500
text-white
text-sm
font-black
shadow-lg
shadow-orange-500/20
">

                  {currentPage}
                  {" / "}
                  {totalPages || 1}

                </div>

                <Button

                  size="sm"

                  variant="outline"

                  disabled={
                    currentPage === totalPages ||
                    totalPages === 0
                  }

                  onClick={() =>
                    setCurrentPage(prev => prev + 1)
                  }

                  className="
rounded-xl
border-slate-200
dark:border-slate-700
"

                >

                  Next

                </Button>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

      {/* CREATE MODAL */}

      <Modal

        isOpen={modalOpen}

        onClose={() =>
          setModalOpen(false)
        }

        title="Initialize Store Administrator"

        size="lg"
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
">

              Assigned Store Hub

            </Label>

            <Select

              value={formData.storeId}

              onValueChange={(val) =>
                setFormData({
                  ...formData,
                  storeId: val
                })
              }

            >

              <SelectTrigger className="
h-12
rounded-2xl
border-slate-200
dark:border-slate-700
">

                <SelectValue placeholder="Select store" />

              </SelectTrigger>

              <SelectContent>

                {stores.map(s => (

                  <SelectItem
                    key={s.id}
                    value={s.id}
                  >

                    {s.name}

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

              Full Name

            </Label>

            <div className="relative">

              <ShieldCheck className="
absolute
left-3
top-1/2
-translate-y-1/2
text-slate-400
size-4
" />

              <Input
                className="
pl-10
h-12
rounded-2xl
border-slate-200
dark:border-slate-700
focus-visible:ring-orange-500
"
                placeholder="e.g. Usman Ali"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fullName: e.target.value
                  })
                }
                required
              />

            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="space-y-2">

              <Label className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
">

                Official Email

              </Label>

              <div className="relative">

                <Mail className="
absolute
left-3
top-1/2
-translate-y-1/2
text-slate-400
size-4
" />

                <Input
                  className="
pl-10
h-12
rounded-2xl
border-slate-200
dark:border-slate-700
focus-visible:ring-orange-500
"
                  type="email"
                  placeholder="admin@barqi.pk"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value
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
">

                Phone Number

              </Label>

              <div className="relative">

                <Phone className="
absolute
left-3
top-1/2
-translate-y-1/2
text-slate-400
size-4
" />

                <Input
                  className="
pl-10
h-12
rounded-2xl
border-slate-200
dark:border-slate-700
focus-visible:ring-orange-500
"
                  placeholder="03001234567"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value
                    })
                  }
                  required
                />

              </div>

            </div>

          </div>

          <div className="space-y-2">

            <Label className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
">

              Temporary Password

            </Label>

            <div className="relative">

              <Lock className="
absolute
left-3
top-1/2
-translate-y-1/2
text-slate-400
size-4
" />

              <Input
                className="
pl-10
h-12
rounded-2xl
border-slate-200
dark:border-slate-700
focus-visible:ring-orange-500
"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value
                  })
                }
                required
              />

            </div>

          </div>

          <div className="flex gap-4 pt-4">

            <Button

              type="button"

              variant="outline"

              onClick={() =>
                setModalOpen(false)
              }

              className="
flex-1
h-12
rounded-2xl
"

              disabled={formLoading}

            >

              Cancel

            </Button>

            <Button

              type="submit"

              disabled={formLoading}

              className="
flex-1
h-12
rounded-2xl
bg-orange-500
hover:bg-orange-600
text-white
font-bold
shadow-xl
shadow-orange-500/20
"

            >

              {formLoading ? (

                <Loader2 className="animate-spin mr-2" />

              ) : (

                'Create Administrator'

              )}

            </Button>

          </div>

        </form>

      </Modal>

      {/* DETAIL MODAL */}

      {detailOpen && selectedAdmin && (

        <Modal

          isOpen={detailOpen}

          onClose={() => {
            setDetailOpen(false);
            setSelectedAdmin(null);
          }}

          title="Administrator Details"
        >

          <div className="space-y-5 py-3">

            <div className="flex items-center gap-4">

              <div className="
w-16
h-16
rounded-3xl
bg-orange-500/10
flex
items-center
justify-center
text-orange-500
font-black
text-2xl
uppercase
">

                {selectedAdmin.fullName?.charAt(0)}

              </div>

              <div>

                <p className="text-xl font-black text-slate-800 dark:text-white">
                  {selectedAdmin.fullName}
                </p>

                <p className="text-sm text-slate-500">
                  {selectedAdmin.email}
                </p>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-4">

                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Phone
                </p>

                <p className="font-semibold">
                  {selectedAdmin.phone || '-'}
                </p>

              </div>

              <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-4">

                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Status
                </p>

                <StatusBadge status={selectedAdmin.status} />

              </div>

              <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-4">

                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Assigned Store
                </p>

                <p className="font-semibold">
                  {selectedAdmin.store?.name || 'Unassigned'}
                </p>

              </div>

              <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-4">

                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Role
                </p>

                <p className="font-black uppercase">
                  {selectedAdmin.role}
                </p>

              </div>

            </div>

            <div className="flex justify-end pt-2">

              <Button
                variant="outline"
                onClick={() => {
                  setDetailOpen(false);
                  setSelectedAdmin(null);
                }}
                className="rounded-2xl"
              >

                Close

              </Button>

            </div>

          </div>

        </Modal>

      )}

      {/* STATUS CONFIRM */}

      <ConfirmDialog

        isOpen={statusConfirmOpen}

        onClose={() => {
          setStatusConfirmOpen(false);
          setSelectedAdmin(null);
        }}

        onConfirm={handleConfirmStatus}

        title={
          selectedAdmin?.status === 'ACTIVE'
            ? 'Suspend Administrator'
            : 'Activate Administrator'
        }

        message={`Are you sure you want to ${
          selectedAdmin?.status === 'ACTIVE'
            ? 'suspend'
            : 'activate'
        } ${selectedAdmin?.fullName}?`}

        loading={statusLoading}

      />

      {/* DELETE CONFIRM */}

      <ConfirmDialog

        isOpen={deleteConfirmOpen}

        onClose={() => {
          setDeleteConfirmOpen(false);
          setSelectedAdmin(null);
        }}

        onConfirm={handleConfirmDelete}

        title="Remove Store Administrator"

        message={`Are you sure you want to permanently remove ${selectedAdmin?.fullName}?`}

        loading={deleteLoading}

      />

    </DashboardLayout>

  );

};

export default StoreAdmins;