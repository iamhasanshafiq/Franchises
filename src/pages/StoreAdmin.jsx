import React, {
  useState,
  useEffect,
  useMemo
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
  Users,
  Activity,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import { motion } from 'framer-motion';

import { toast } from 'sonner';

// Components
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import ConfirmDialog from '../components/common/ConfirmDialog';
import StatusBadge from '../components/common/StatusBadge';
import TableSkeleton from '../components/common/TableSkeleton';

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

// Hooks & APIs
import { useStoreAdmins } from '../hooks/useStoreAdmins';
import { storesApi } from '../api/stores.api';
import { usersApi } from '../api/users.api';

const ITEMS_PER_PAGE = 10;

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

  const [currentPage, setCurrentPage] = useState(1);

  const [formData, setFormData] = useState({
    storeId: '',
    fullName: '',
    email: '',
    password: '',
    phone: ''
  });

  // =========================================
  // LOAD
  // =========================================

  useEffect(() => {

    fetchAdmins();

    storesApi.getAll(1, 100)

      .then(res => {

        console.log("STORES:", res);

        const data = res.data || res;

        setStores(data.items || data || []);

      })

      .catch(() => toast.error('Failed to load stores'));

  }, [fetchAdmins]);

  // =========================================
  // LOAD USER DATA
  // =========================================

  useEffect(() => {

    const loadUsers = async () => {

      if (!admins || admins.length === 0) return;

      const updated = await Promise.all(

        admins.map(async (admin) => {

          console.log("ADMIN:", admin);

          console.log("AUTH USER ID:", admin.authUserId);

          try {

            const iamRes = await usersApi.getIamByAuthId(admin.authUserId);

            const userRes = await usersApi.getById(admin.authUserId);

            console.log("USER RES:", userRes);

            const user = userRes?.data;

            return {
              ...admin,
              fullName: user?.name || 'N/A',
              email: user?.email || 'N/A',
              phone: user?.phone || 'N/A',
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
  // SEARCH
  // =========================================

  const filteredAdmins = useMemo(() => {

    if (!searchTerm) return adminsWithUser;

    const s = searchTerm.toLowerCase();

    return adminsWithUser.filter(a =>

      a.fullName?.toLowerCase().includes(s) ||

      a.email?.toLowerCase().includes(s) ||

      a.phone?.toLowerCase().includes(s) ||

      a.store?.name?.toLowerCase().includes(s)

    );

  }, [adminsWithUser, searchTerm]);

  // =========================================
  // ANALYTICS
  // =========================================

  const analytics = useMemo(() => {

    const total = adminsWithUser?.length || 0;

    const active = adminsWithUser?.filter(
      a => a.status === 'ACTIVE'
    ).length || 0;

    const suspended = adminsWithUser?.filter(
      a => a.status === 'SUSPENDED'
    ).length || 0;

    return {
      total,
      active,
      suspended
    };

  }, [adminsWithUser]);

  // =========================================
  // PAGINATION
  // =========================================

  const totalPages = Math.ceil(
    filteredAdmins.length / ITEMS_PER_PAGE
  );

  const paginatedAdmins = useMemo(() => {

    const startIndex = (
      currentPage - 1
    ) * ITEMS_PER_PAGE;

    return filteredAdmins.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );

  }, [filteredAdmins, currentPage]);

  // =========================================
  // CREATE
  // =========================================

  const handleCreate = async (e) => {

    e.preventDefault();

    if (!formData.storeId) {

      toast.error('Please select a store first.');

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

    } catch {

      // hook handles toast

    } finally {

      setFormLoading(false);

    }

  };

  // =========================================
  // DETAIL
  // =========================================

  const handleViewDetail = (admin) => {

    setSelectedAdmin(admin);

    setDetailOpen(true);

  };

  // =========================================
  // STATUS
  // =========================================

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

    } catch {

      // hook handles toast

    } finally {

      setStatusLoading(false);

      setStatusConfirmOpen(false);

      setSelectedAdmin(null);

    }

  };

  // =========================================
  // DELETE
  // =========================================

  const handleDeleteClick = (admin) => {

    setSelectedAdmin(admin);

    setDeleteConfirmOpen(true);

  };

  const handleConfirmDelete = async () => {

    if (!selectedAdmin) return;

    try {

      setDeleteLoading(true);

      await deleteAdmin(selectedAdmin.id);

    } catch {

      // hook handles toast

    } finally {

      setDeleteLoading(false);

      setDeleteConfirmOpen(false);

      setSelectedAdmin(null);

    }

  };

  // =========================================
  // TABLE
  // =========================================

  const columns = useMemo(() => [

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
w-12
h-12
rounded-2xl
bg-orange-500/10
text-orange-500
flex
items-center
justify-center
font-black
text-sm
transition-all
duration-500
group-hover:scale-110
shadow-lg
shadow-orange-500/10
">

              {name !== '-' ? name.charAt(0) : '?'}

            </div>

            <div>

              <div className="
font-black
text-sm
text-slate-800
dark:text-white
tracking-tight
">

                {name}

              </div>

              <div className="
text-xs
text-slate-500
dark:text-slate-400
">

                {email}

              </div>

            </div>

          </div>

        );

      }
    },

    {
      key: 'store',

      label: 'Assigned Hub',

      render: (_, row) => (

        <div className="flex items-center gap-2">

          <div className="
w-8
h-8
rounded-xl
bg-indigo-500/10
flex
items-center
justify-center
">

            <Store
              size={14}
              className="text-indigo-500"
            />

          </div>

          <span className="
text-sm
font-bold
text-slate-700
dark:text-slate-200
">

            {row.store?.name || 'Unassigned'}

          </span>

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

          <span className="
text-xs
font-mono
font-bold
text-slate-600
dark:text-slate-300
">

            {phone}

          </span>

        );

      }
    },

    {
      key: 'status',

      label: 'Status',

      render: (val, row) => (

        <button
          onClick={() => handleStatusClick(row)}
          className="cursor-pointer"
        >

          <StatusBadge status={val} />

        </button>

      )
    },

    {
      key: 'actions',

      label: '',

      render: (_, row) => (

        <div className="flex gap-2">

          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleViewDetail(row)}
            className="
rounded-xl
hover:bg-orange-500/10
transition-all
duration-300
"
          >

            <Eye
              size={16}
              className="text-slate-500"
            />

          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleDeleteClick(row)}
            className="
rounded-xl
hover:bg-red-500/10
transition-all
duration-300
"
          >

            <Trash2
              size={16}
              className="text-slate-500"
            />

          </Button>

        </div>

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

      <div className="
min-h-screen
bg-gradient-to-br
from-orange-50
via-white
to-amber-50
dark:from-[#140903]
dark:via-[#1A0B04]
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
lg:p-8
space-y-8
max-w-[1600px]
mx-auto
relative
overflow-hidden
"
        >

          {/* BG EFFECT */}

          <div className="absolute inset-0 -z-10 overflow-hidden">

            <div className="
absolute
top-[-10%]
left-[-10%]
w-[420px]
h-[420px]
bg-orange-500/10
rounded-full
blur-[120px]
" />

            <div className="
absolute
bottom-[-10%]
right-[-10%]
w-[420px]
h-[420px]
bg-indigo-500/10
rounded-full
blur-[120px]
" />

          </div>

          {/* STATS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <motion.div
              whileHover={{ y: -3 }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="
text-[11px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
mb-2
">

                    Total Admins

                  </p>

                  <h2 className="
text-3xl
font-black
text-slate-800
dark:text-white
">

                    {analytics.total}

                  </h2>

                </div>

                <div className="
w-14
h-14
rounded-2xl
bg-orange-500/10
text-orange-500
flex
items-center
justify-center
">

                  <Users size={24} />

                </div>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="
text-[11px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
mb-2
">

                    Active Access

                  </p>

                  <h2 className="
text-3xl
font-black
text-slate-800
dark:text-white
">

                    {analytics.active}

                  </h2>

                </div>

                <div className="
w-14
h-14
rounded-2xl
bg-emerald-500/10
text-emerald-500
flex
items-center
justify-center
">

                  <ShieldCheck size={24} />

                </div>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="
text-[11px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
mb-2
">

                    Suspended

                  </p>

                  <h2 className="
text-3xl
font-black
text-slate-800
dark:text-white
">

                    {analytics.suspended}

                  </h2>

                </div>

                <div className="
w-14
h-14
rounded-2xl
bg-rose-500/10
text-rose-500
flex
items-center
justify-center
">

                  <Activity size={24} />

                </div>

              </div>

            </motion.div>

          </div>

          {/* TABLE */}

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

            {/* TOP BAR */}

            <div className="
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
">

              <div>

                <h3 className="
text-lg
font-black
text-slate-800
dark:text-white
tracking-tight
flex
items-center
gap-2
">

                  <Sparkles
                    size={18}
                    className="text-orange-500"
                  />

                  Store Authority Matrix

                </h3>

                <p className="
text-sm
text-slate-500
dark:text-slate-400
mt-1
">

                  Live overview of all administrative operators

                </p>

              </div>

              <div className="
flex
items-center
gap-3
flex-col
sm:flex-row
w-full
sm:w-auto
">

                <div className="relative w-full sm:w-72">

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
focus-visible:ring-orange-500/20
"
                    placeholder="Search administrators..."
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(e.target.value)
                    }
                  />

                </div>

                <Button
                  onClick={() => setModalOpen(true)}
                  className="
h-11
rounded-2xl
px-5
font-bold
gap-2
bg-orange-600
hover:bg-orange-700
shadow-lg
shadow-orange-500/20
transition-all
duration-500
hover:scale-[1.02]
w-full
sm:w-auto
"
                >

                  <UserPlus size={18} />

                  Add Store Admin

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
                  data={paginatedAdmins}
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
                {(currentPage - 1) * ITEMS_PER_PAGE + 1}

                {" - "}

                {Math.min(
                  currentPage * ITEMS_PER_PAGE,
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

                  <ChevronLeft size={16} />

                </Button>

                <div className="
px-4
py-2
rounded-xl
bg-orange-600
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

                  <ChevronRight size={16} />

                </Button>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

      {/* CREATE MODAL */}

      {modalOpen && (

        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Initialize Store Administrator"
          size="lg"
        >

          <form
            onSubmit={handleCreate}
            className="space-y-6 py-2"
          >

            <div className="
border
border-dashed
border-orange-200
dark:border-orange-900/40
rounded-3xl
p-5
bg-orange-50/60
dark:bg-orange-950/10
space-y-4
">

              <Label className="
text-[11px]
uppercase
tracking-[0.25em]
text-orange-600
font-black
">

                Target Store Hub

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

                <SelectTrigger className="rounded-2xl h-11">

                  <SelectValue placeholder="Select store for management" />

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="space-y-2">

                <Label>Full Name</Label>

                <div className="relative">

                  <ShieldCheck
                    className="
absolute
left-3
top-1/2
-translate-y-1/2
text-slate-400
size-4
"
                  />

                  <Input
                    className="pl-10 h-11 rounded-2xl"
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

              <div className="space-y-2">

                <Label>Phone Number</Label>

                <div className="relative">

                  <Phone
                    className="
absolute
left-3
top-1/2
-translate-y-1/2
text-slate-400
size-4
"
                  />

                  <Input
                    className="pl-10 h-11 rounded-2xl"
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

              <Label>Email Address</Label>

              <div className="relative">

                <Mail
                  className="
absolute
left-3
top-1/2
-translate-y-1/2
text-slate-400
size-4
"
                />

                <Input
                  className="pl-10 h-11 rounded-2xl"
                  type="email"
                  placeholder="store@barqi.pk"
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

              <Label>Temporary Password</Label>

              <div className="relative">

                <Lock
                  className="
absolute
left-3
top-1/2
-translate-y-1/2
text-slate-400
size-4
"
                />

                <Input
                  className="pl-10 h-11 rounded-2xl"
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

              <p className="
text-[11px]
text-slate-400
italic
">

                User will be prompted to change password after first login.

              </p>

            </div>

            <div className="
flex
justify-end
gap-3
pt-5
border-t
border-slate-200
dark:border-slate-800
">

              <Button
                type="button"
                variant="ghost"
                onClick={() => setModalOpen(false)}
                className="rounded-2xl"
              >

                Cancel

              </Button>

              <Button
                disabled={formLoading}
                type="submit"
                className="
min-w-[160px]
rounded-2xl
bg-orange-600
hover:bg-orange-700
shadow-lg
shadow-orange-500/20
"
              >

                {formLoading ? (

                  <Loader2 className="animate-spin" />

                ) : (

                  'Create Administrator'

                )}

              </Button>

            </div>

          </form>

        </Modal>

      )}

      {/* DETAIL MODAL */}

      {detailOpen && selectedAdmin && (

        <Modal
          isOpen={detailOpen}
          onClose={() => {
            setDetailOpen(false);
            setSelectedAdmin(null);
          }}
          title="Administrator Detail"
          size="md"
        >

          <div className="space-y-5 py-2">

            <div className="flex items-center gap-4">

              <div className="
size-16
rounded-3xl
bg-orange-500/10
text-orange-500
flex
items-center
justify-center
font-black
text-2xl
uppercase
shadow-lg
shadow-orange-500/10
">

                {selectedAdmin.fullName?.charAt(0)}

              </div>

              <div>

                <p className="
text-xl
font-black
text-slate-800
dark:text-white
">

                  {selectedAdmin.fullName}

                </p>

                <p className="
text-sm
text-slate-500
dark:text-slate-400
">

                  {selectedAdmin.email}

                </p>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="
bg-slate-50
dark:bg-slate-900/50
rounded-2xl
p-4
">

                <p className="
text-[10px]
uppercase
font-black
tracking-[0.2em]
text-slate-400
mb-2
">

                  Phone

                </p>

                <p className="font-semibold">

                  {selectedAdmin.phone || '-'}

                </p>

              </div>

              <div className="
bg-slate-50
dark:bg-slate-900/50
rounded-2xl
p-4
">

                <p className="
text-[10px]
uppercase
font-black
tracking-[0.2em]
text-slate-400
mb-2
">

                  Status

                </p>

                <StatusBadge status={selectedAdmin.status} />

              </div>

              <div className="
bg-slate-50
dark:bg-slate-900/50
rounded-2xl
p-4
">

                <p className="
text-[10px]
uppercase
font-black
tracking-[0.2em]
text-slate-400
mb-2
">

                  Assigned Store

                </p>

                <p className="font-semibold">

                  {selectedAdmin.store?.name || 'Unassigned'}

                </p>

              </div>

              <div className="
bg-slate-50
dark:bg-slate-900/50
rounded-2xl
p-4
">

                <p className="
text-[10px]
uppercase
font-black
tracking-[0.2em]
text-slate-400
mb-2
">

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
            ? 'Suspend Admin'
            : 'Activate Admin'
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
        title="Remove Store Admin"
        message={`Are you sure you want to permanently remove ${selectedAdmin?.fullName} as store admin?`}
        loading={deleteLoading}
      />

    </DashboardLayout>

  );

};

export default StoreAdmins;