import React, {
  useState,
  useEffect,
  useMemo,
} from 'react';

import {
  Plus,
  Trash2,
  UserPlus,
  Mail,
  Phone,
  ShieldCheck,
  Activity,
  ArrowRight,
  BarChart3,
  Globe,
  UserCog,
  Building2,
  X,
} from 'lucide-react';

import { motion } from 'framer-motion';

import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import ConfirmDialog from '../components/common/ConfirmDialog';
import StatusBadge from '../components/common/StatusBadge';

import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Progress } from '../components/ui/progress';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../components/ui/select';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';

import { useFranchiseAdmins } from '../hooks/useFranchiseAdmins';
import { useFranchises } from '../hooks/useFranchises';

const FranchiseAdmins = () => {

  const {
    admins,
    loading,
    fetchAdmins,
    createAdmin,
    deleteAdmin,
    changeStatus
  } = useFranchiseAdmins();

  const {
    franchises,
    fetchFranchises
  } = useFranchises();

  const [modalOpen, setModalOpen] = useState(false);

  const [confirmOpen, setConfirmOpen] = useState(false);

  const [statusConfirmOpen, setStatusConfirmOpen] = useState(false);

  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const [formLoading, setFormLoading] = useState(false);

  const [deleteLoading, setDeleteLoading] = useState(false);

  const [statusLoading, setStatusLoading] = useState(false);

  const [pageLoaded, setPageLoaded] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const [pageSize, setPageSize] = useState(10);

  const [formData, setFormData] = useState({
    franchiseId: '',
    fullName: '',
    email: '',
    password: '',
    phone: ''
  });

  // =========================================
  // INITIAL LOAD
  // =========================================

  useEffect(() => {

    fetchFranchises();
    fetchAdmins();

  }, []);

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

    const total = admins?.length || 0;

    const active =
      admins?.filter(
        admin => admin.status === 'ACTIVE'
      ).length || 0;

    const suspended =
      total - active;

    const efficiency =
      total > 0
        ? Math.round((active / total) * 100)
        : 0;

    return {
      total,
      active,
      suspended,
      efficiency,
    };

  }, [admins]);

  // =========================================
  // PAGINATION
  // =========================================

  const totalPages = Math.max(
    1,
    Math.ceil((admins?.length || 0) / pageSize)
  );

  const paginatedAdmins = useMemo(() => {

    const start =
      (currentPage - 1) * pageSize;

    return admins.slice(
      start,
      start + pageSize
    );

  }, [admins, currentPage, pageSize]);

  // =========================================
  // ACTIONS
  // =========================================

  const handleDeleteClick = (admin) => {

    setSelectedAdmin(admin);

    setConfirmOpen(true);

  };

  const handleStatusClick = (admin) => {

    setSelectedAdmin(admin);

    setStatusConfirmOpen(true);

  };

  const handleConfirmStatusChange = async () => {

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

    } catch (error) {

      console.error(
        'Status change error:',
        error
      );

    } finally {

      setStatusLoading(false);

      setStatusConfirmOpen(false);

      setSelectedAdmin(null);

    }

  };

  const handleConfirmDelete = async () => {

    if (!selectedAdmin) return;

    try {

      setDeleteLoading(true);

      await deleteAdmin(
        selectedAdmin.id
      );

    } catch (error) {

      console.error(
        'Deletion error:',
        error
      );

    } finally {

      setDeleteLoading(false);

      setConfirmOpen(false);

      setSelectedAdmin(null);

    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!formData.franchiseId) {

      alert(
        'Please select a franchise before provisioning an admin.'
      );

      return;

    }

    setFormLoading(true);

    try {

      await createAdmin(formData);

      await fetchAdmins();

      setModalOpen(false);

      setFormData({
        franchiseId: '',
        fullName: '',
        email: '',
        password: '',
        phone: ''
      });

    } catch (error) {

      console.error(
        'Error creating admin:',
        error
      );

    } finally {

      setFormLoading(false);

    }

  };

  // =========================================
  // TABLE COLUMNS
  // =========================================

  const columns = [

    {
      key: 'fullName',
      label: 'Administrator',

      render: (_, row) => (

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
">

            <UserCog size={18} />

          </div>

          <div>

            <p className="font-black text-slate-700 dark:text-white tracking-tight">
              {row?.fullName || 'N/A'}
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-bold">
              Franchise Administrator
            </p>

          </div>

        </div>

      )
    },

    {
      key: 'email',
      label: 'Email Address',

      render: (_, row) => (

        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">

          <Mail
            size={14}
            className="text-indigo-500"
          />

          <span className="font-medium break-all">
            {row?.email || '-'}
          </span>

        </div>

      )
    },

    {
      key: 'phone',
      label: 'Contact Number',

      render: (_, row) => (

        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">

          <Phone
            size={14}
            className="text-emerald-500"
          />

          <span className="font-semibold">
            {row?.phone || '-'}
          </span>

        </div>

      )
    },

    {
      key: 'franchise',
      label: 'Franchise Node',

      render: (_, row) => (

        <div className="flex items-center gap-2">

          <Building2
            size={14}
            className="text-orange-500"
          />

          <span className="font-semibold text-slate-700 dark:text-slate-200">
            {row?.franchise?.name || 'N/A'}
          </span>

        </div>

      )
    },

    {
      key: 'role',
      label: 'Role',

      render: (_, row) => (

        <span className="
px-3
py-1.5
rounded-xl
bg-indigo-500/10
text-indigo-500
text-[11px]
font-black
uppercase
tracking-[0.2em]
">
          {row?.role || 'ADMIN'}
        </span>

      )
    },

    {
      key: 'status',
      label: 'Access Status',

      render: (val, row) => (

        <button
          onClick={() => handleStatusClick(row)}
          title={
            val === 'ACTIVE'
              ? 'Click to suspend'
              : 'Click to activate'
          }
          className="
cursor-pointer
hover:opacity-70
transition-all
duration-300
"
        >

          <StatusBadge status={val} />

        </button>

      ),
    },

    {
      key: 'actions',
      label: 'Controls',

      render: (_, row) => (

        <Button

          size="sm"

          variant="ghost"

          className="
rounded-xl
hover:bg-red-500/10
hover:text-red-500
transition-all
duration-300
"

          onClick={() =>
            handleDeleteClick(row)
          }

        >

          <Trash2 size={16} />

        </Button>

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
          title="Administrative Command"
          subtitle="Manage franchise-level operational administrators across the Barqi network"
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

          {/* ANALYTICS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

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
bg-indigo-500/10
flex
items-center
justify-center
text-indigo-500
">

                  <Globe size={24} />

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

                <div className="flex-1">

                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black mb-3">
                    Network Stability
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
                    Administrative Directory
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Franchise management infrastructure
                  </p>

                </div>

              </div>

              <Button
                onClick={() =>
                  setModalOpen(true)
                }
                disabled={loading}
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

                <Plus size={18} className="mr-2" />

                Provision Admin

                <ArrowRight
                  size={16}
                  className="ml-2"
                />

              </Button>

            </div>

            {/* TABLE */}

            <DataTable
              columns={columns}
              data={paginatedAdmins}
              loading={loading}
              emptyMessage="No administrative nodes found in network"
            />

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
                  admins?.length || 0
                )}

                {" "}
                of
                {" "}
                {admins?.length || 0}

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
bg-indigo-600
text-white
text-sm
font-black
shadow-lg
shadow-indigo-500/20
">

                  {currentPage}
                  {" / "}
                  {totalPages}

                </div>

                <Button
                  size="sm"
                  variant="outline"
                  disabled={currentPage === totalPages}
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

      {/* CUSTOM MODAL FIXED */}

      <Dialog
        open={modalOpen}
        onOpenChange={setModalOpen}
      >

        <DialogContent className="
max-w-2xl
w-full
p-0
overflow-hidden
rounded-[2rem]
border
border-slate-200
dark:border-slate-800
bg-white
dark:bg-slate-950
max-h-[92vh]
overflow-y-auto
">

          {/* HEADER */}

          <DialogHeader className="
sticky
top-0
z-20
bg-white/90
dark:bg-slate-950/90
backdrop-blur-xl
border-b
border-slate-200
dark:border-slate-800
px-8
py-6
">

            <div className="flex items-center justify-between">

              <div>

                <DialogTitle className="
text-2xl
font-black
text-slate-800
dark:text-white
tracking-tight
">
                  Provision New Administrator
                </DialogTitle>

                <p className="text-sm text-slate-500 mt-1">
                  Create and assign administrative access
                </p>

              </div>

              <button
                onClick={() =>
                  setModalOpen(false)
                }
                className="
w-11
h-11
rounded-2xl
bg-slate-100
dark:bg-slate-800
flex
items-center
justify-center
text-slate-500
hover:bg-red-500
hover:text-white
transition-all
duration-300
"
              >

                <X size={18} />

              </button>

            </div>

          </DialogHeader>

          {/* FORM */}

          <div className="p-8">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* FRANCHISE */}

              <div className="space-y-2">

                <Label className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
">

                  Target Franchise Node

                </Label>

                <Select
                  value={formData.franchiseId}
                  onValueChange={(val) =>
                    setFormData({
                      ...formData,
                      franchiseId: val
                    })
                  }
                >

                  <SelectTrigger className="
rounded-2xl
h-12
border-slate-200
dark:border-slate-700
">

                    <SelectValue placeholder="Select target node" />

                  </SelectTrigger>

                  <SelectContent>

                    {franchises.map((f) => (

                      <SelectItem
                        key={f.id}
                        value={f.id}
                      >

                        {f.name}

                      </SelectItem>

                    ))}

                  </SelectContent>

                </Select>

              </div>

              {/* NAME + PHONE */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

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

                  <Input
                    className="
rounded-2xl
h-12
border-slate-200
dark:border-slate-700
"
                    placeholder="Ali Khan"
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

                <div className="space-y-2">

                  <Label className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
">

                    Contact Number

                  </Label>

                  <Input
                    className="
rounded-2xl
h-12
border-slate-200
dark:border-slate-700
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

              {/* EMAIL */}

              <div className="space-y-2">

                <Label className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
">

                  Email Address

                </Label>

                <Input
                  type="email"
                  className="
rounded-2xl
h-12
border-slate-200
dark:border-slate-700
"
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

              {/* PASSWORD */}

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

                <Input
                  type="password"
                  className="
rounded-2xl
h-12
border-slate-200
dark:border-slate-700
"
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

              {/* INFO */}

              <div className="
rounded-3xl
border
border-indigo-500/10
bg-gradient-to-br
from-indigo-500/5
to-blue-500/5
p-5
flex
items-start
gap-4
">

                <div className="
w-11
h-11
rounded-2xl
bg-indigo-500/10
flex
items-center
justify-center
text-indigo-500
">

                  <ShieldCheck size={18} />

                </div>

                <div>

                  <h4 className="font-black text-slate-800 dark:text-white text-sm">
                    Administrative Access
                  </h4>

                  <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 mt-1">
                    Administrators inherit operational permissions and
                    access controls from the assigned franchise node.
                  </p>

                </div>

              </div>

              {/* ACTIONS */}

              <div className="
sticky
bottom-0
bg-white
dark:bg-slate-950
pt-4
flex
gap-4
">

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
border-slate-200
dark:border-slate-700
"
                >

                  Cancel

                </Button>

                <Button
                  type="submit"
                  className="
flex-1
h-12
rounded-2xl
bg-indigo-600
hover:bg-indigo-700
text-white
font-bold
shadow-xl
shadow-indigo-500/20
"
                  disabled={formLoading}
                >

                  {formLoading
                    ? 'Provisioning...'
                    : 'Confirm Provision'}

                </Button>

              </div>

            </form>

          </div>

        </DialogContent>

      </Dialog>

      {/* DELETE CONFIRM */}

      <ConfirmDialog
        isOpen={confirmOpen}
        onClose={() =>
          setConfirmOpen(false)
        }
        onConfirm={handleConfirmDelete}
        title="Revoke Admin Access"
        message={`Are you sure you want to permanently remove access for ${selectedAdmin?.fullName}?`}
        loading={deleteLoading}
      />

      {/* STATUS CONFIRM */}

      <ConfirmDialog
        isOpen={statusConfirmOpen}
        onClose={() => {

          setStatusConfirmOpen(false);

          setSelectedAdmin(null);

        }}
        onConfirm={handleConfirmStatusChange}
        title={
          selectedAdmin?.status === 'ACTIVE'
            ? 'Suspend Admin'
            : 'Activate Admin'
        }
        message={
          selectedAdmin?.status === 'ACTIVE'
            ? `Suspend access for ${selectedAdmin?.fullName}? They will not be able to log in until reactivated.`
            : `Reactivate access for ${selectedAdmin?.fullName}? They will regain full login access.`
        }
        confirmText={
          selectedAdmin?.status === 'ACTIVE'
            ? 'Suspend'
            : 'Activate'
        }
        variant={
          selectedAdmin?.status === 'ACTIVE'
            ? 'destructive'
            : 'default'
        }
        loading={statusLoading}
      />

    </DashboardLayout>

  );
};

export default FranchiseAdmins;