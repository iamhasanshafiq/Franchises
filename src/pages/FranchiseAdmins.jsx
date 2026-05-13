import React, {
  useState,
  useEffect,
  useMemo,
} from 'react';

import {
  Plus,
  Trash2,
  Mail,
  Phone,
  ShieldCheck,
  Activity,
  ArrowRight,
  Search,
  UserCog,
  Building2,
  X,
  Loader2,
  Sparkles,
  Globe2,
  Shield,
  Cpu,
} from 'lucide-react';

import { motion } from 'framer-motion';

import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import ConfirmDialog from '../components/common/ConfirmDialog';
import StatusBadge from '../components/common/StatusBadge';
import TableSkeleton from '../components/common/TableSkeleton';

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

const INITIAL_FORM = {
  franchiseId: '',
  fullName: '',
  email: '',
  password: '',
  phone: ''
};

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

  const [searchTerm, setSearchTerm] = useState('');

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const [formData, setFormData] = useState(INITIAL_FORM);

  // =========================================
  // LOAD
  // =========================================

  useEffect(() => {

    fetchFranchises();

    fetchAdmins();

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

    const suspended = total - active;

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
  // SEARCH
  // =========================================

  const filteredAdmins = useMemo(() => {

    if (!searchTerm) return admins;

    return admins.filter(admin =>

      admin?.fullName
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      admin?.email
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      admin?.phone
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      admin?.franchise?.name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase())

    );

  }, [admins, searchTerm]);

  // =========================================
  // PAGINATION
  // =========================================

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredAdmins.length / itemsPerPage
    )
  );

  const paginatedAdmins = useMemo(() => {

    const start =
      (currentPage - 1) * itemsPerPage;

    return filteredAdmins.slice(
      start,
      start + itemsPerPage
    );

  }, [
    filteredAdmins,
    currentPage
  ]);

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

      setFormData(INITIAL_FORM);

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
  // TABLE
  // =========================================

  const columns = useMemo(() => [

    {
      key: 'fullName',

      label: 'Administrator',

      render: (_, row) => (

        <div className="flex items-center gap-4 group">

          <div className="
w-11
h-11
rounded-2xl
bg-indigo-500/10
text-indigo-500
flex
items-center
justify-center
font-black
transition-all
duration-500
group-hover:scale-110
group-hover:rotate-3
">

            <UserCog size={18} />

          </div>

          <div>

            <div className="
font-black
text-sm
tracking-tight
text-slate-800
dark:text-white
">

              {row?.fullName || 'N/A'}

            </div>

            <div className="
text-xs
text-slate-500
dark:text-slate-400
">

              Franchise Administrator

            </div>

          </div>

        </div>

      )
    },

    {
      key: 'email',

      label: 'Email',

      render: (_, row) => (

        <div className="
flex
items-center
gap-2
text-slate-600
dark:text-slate-300
">

          <Mail
            size={14}
            className="text-indigo-500"
          />

          <span className="font-medium">
            {row?.email || '-'}
          </span>

        </div>

      )
    },

    {
      key: 'phone',

      label: 'Phone',

      render: (_, row) => (

        <div className="
flex
items-center
gap-2
text-slate-600
dark:text-slate-300
">

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

      label: 'Franchise',

      render: (_, row) => (

        <div className="flex items-center gap-2">

          <Building2
            size={14}
            className="text-orange-500"
          />

          <span className="
font-semibold
text-slate-700
dark:text-slate-200
">

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
py-1
rounded-full
bg-indigo-500/10
text-indigo-500
text-[10px]
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

      label: 'Status',

      render: (val, row) => (

        <button
          onClick={() =>
            handleStatusClick(row)
          }
          className="
transition-all
duration-300
hover:scale-105
"
        >

          <StatusBadge status={val} />

        </button>

      )
    },

    {
      key: 'actions',

      label: '',

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

  ], []);

  // =========================================
  // STYLES
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
          subtitle="Manage franchise-level operational administrators"
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
relative
overflow-hidden
p-6
lg:p-8
space-y-8
max-w-[1600px]
mx-auto
"
        >

          {/* BACKGROUND */}

          <div className="absolute inset-0 -z-10 overflow-hidden">

            <div className="
absolute
top-[-10%]
left-[-10%]
w-[420px]
h-[420px]
bg-indigo-500/10
rounded-full
blur-[120px]
" />

            <div className="
absolute
bottom-[-10%]
right-[-10%]
w-[420px]
h-[420px]
bg-cyan-500/10
rounded-full
blur-[120px]
" />

          </div>

          {/* STATS */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            <motion.div
              whileHover={{ y: -4 }}
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
bg-indigo-500/10
text-indigo-500
flex
items-center
justify-center
">

                  <Globe2 size={24} />

                </div>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
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
              whileHover={{ y: -4 }}
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
bg-red-500/10
text-red-500
flex
items-center
justify-center
">

                  <Shield size={24} />

                </div>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div>

                <div className="
flex
items-center
justify-between
mb-3
">

                  <div>

                    <p className="
text-[11px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
">
                      Network Stability
                    </p>

                    <h2 className="
text-3xl
font-black
text-slate-800
dark:text-white
mt-2
">
                      {analytics.efficiency}%
                    </h2>

                  </div>

                  <div className="
w-12
h-12
rounded-2xl
bg-cyan-500/10
text-cyan-500
flex
items-center
justify-center
">

                    <Cpu size={20} />

                  </div>

                </div>

                <Progress
                  value={analytics.efficiency}
                  className="h-2"
                />

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

              <div className="flex items-center gap-4">

                <div className="
w-14
h-14
rounded-3xl
bg-gradient-to-br
from-indigo-500
to-indigo-700
text-white
flex
items-center
justify-center
shadow-xl
shadow-indigo-500/30
">

                  <Sparkles size={24} />

                </div>

                <div>

                  <h3 className="
text-lg
font-black
tracking-tight
text-slate-800
dark:text-white
">

                    Franchise Control Matrix

                  </h3>

                  <p className="
text-sm
text-slate-500
dark:text-slate-400
mt-1
">

                    Live administrative infrastructure overview

                  </p>

                </div>

              </div>

              <div className="
flex
items-center
gap-3
">

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
focus-visible:ring-indigo-500/20
"
                    placeholder="Search admins..."
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(e.target.value)
                    }
                  />

                </div>

                <Button
                  onClick={() =>
                    setModalOpen(true)
                  }
                  className="
h-11
rounded-2xl
px-5
font-bold
gap-2
bg-indigo-600
hover:bg-indigo-700
shadow-lg
shadow-indigo-500/20
transition-all
duration-500
hover:scale-[1.02]
"
                >

                  <Plus size={18} />

                  Provision Admin

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
                  emptyMessage="No administrative nodes found"
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
                {(currentPage - 1) * itemsPerPage + 1}

                {" - "}

                {Math.min(
                  currentPage * itemsPerPage,
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
                  disabled={
                    currentPage === totalPages
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

      {/* MODAL */}

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

            <div className="
flex
items-center
justify-between
">

              <div>

                <DialogTitle className="
text-2xl
font-black
tracking-tight
text-slate-800
dark:text-white
">

                  Initialize Administrator

                </DialogTitle>

                <p className="
text-sm
text-slate-500
mt-1
">

                  Provision new franchise admin access

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

                  Franchise Node

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

                    <SelectValue placeholder="Select franchise" />

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

              <div className="
grid
grid-cols-1
md:grid-cols-2
gap-5
">

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

                    Phone Number

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
                  placeholder="admin@company.com"
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
to-cyan-500/5
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

                  <h4 className="
font-black
text-slate-800
dark:text-white
text-sm
">

                    Administrative Access

                  </h4>

                  <p className="
text-xs
leading-relaxed
text-slate-500
dark:text-slate-400
mt-1
">

                    Administrators inherit operational permissions and
                    access controls from the assigned franchise node.

                  </p>

                </div>

              </div>

              {/* ACTIONS */}

              <div className="
flex
gap-4
pt-2
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
"
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
bg-indigo-600
hover:bg-indigo-700
shadow-xl
shadow-indigo-500/20
"
                >

                  {formLoading ? (

                    <Loader2 className="animate-spin" />

                  ) : (

                    <>
                      Confirm Provision
                      <ArrowRight
                        size={16}
                        className="ml-2"
                      />
                    </>
                  )}

                </Button>

              </div>

            </form>

          </div>

        </DialogContent>

      </Dialog>

      {/* DELETE */}

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

      {/* STATUS */}

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
            ? `Suspend access for ${selectedAdmin?.fullName}?`
            : `Reactivate access for ${selectedAdmin?.fullName}?`
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