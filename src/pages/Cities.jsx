import React, {
  useState,
  useEffect,
  useMemo,
} from 'react';

import {
  Plus,
  Edit,
  Trash2,
  MapPin,
  Hash,
  Globe,
  Activity,
  ArrowRight,
  BarChart3,
  ShieldCheck,
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
import { Progress } from '../components/ui/progress';

import { useCities } from '../hooks/useCities';

const Cities = () => {

  const {
    cities,
    loading,
    fetchCities,
    createCity,
    updateCity,
    deactivateCity
  } = useCities();

  const [modalOpen, setModalOpen] = useState(false);

  const [confirmOpen, setConfirmOpen] = useState(false);

  const [selectedCity, setSelectedCity] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    code: ''
  });

  const [formLoading, setFormLoading] = useState(false);

  const [pageLoaded, setPageLoaded] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const [pageSize, setPageSize] = useState(10);
  // =========================================
  // INITIAL LOAD
  // =========================================

  useEffect(() => {

    fetchCities();

  }, [fetchCities]);

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

    const total = cities?.length || 0;

    const active = cities?.filter(
      c => c.status === 'ACTIVE'
    ).length || 0;

    const inactive = total - active;

    const efficiency = total > 0
      ? Math.round((active / total) * 100)
      : 0;

    return {
      total,
      active,
      inactive,
      efficiency,
    };

  }, [cities]);

  // =========================================
  // PAGINATION
  // =========================================

  const totalPages = Math.ceil(
    cities.length / pageSize
  );

  const paginatedCities = useMemo(() => {

    const start =
      (currentPage - 1) * pageSize;

    return cities.slice(
      start,
      start + pageSize
    );

  }, [cities, currentPage, pageSize]);

  // =========================================
  // TABLE COLUMNS
  // =========================================

  const columns = [

    {
      key: 'name',
      label: 'Regional Node',

      render: (val) => (

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
">

            <MapPin size={18} />

          </div>

          <div>

            <p className="font-black text-slate-700 dark:text-white tracking-tight">
              {val}
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-bold">
              Regional Infrastructure
            </p>

          </div>

        </div>

      )
    },

    {
      key: 'code',
      label: 'Node Code',

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

      )
    },

    {
      key: 'status',
      label: 'Network Status',

      render: (val) => (
        <StatusBadge status={val} />
      )
    },

    {
      key: 'createdAt',
      label: 'Deployment Date',

      render: (val) => (

        <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
          {val
            ? new Date(val).toLocaleDateString()
            : '-'}
        </span>

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

            onClick={() => handleEdit(row)}

            className="
rounded-xl
hover:bg-blue-500/10
hover:text-blue-500
transition-all
duration-300
"

          >

            <Edit size={16} />

          </Button>

          <Button

            size="sm"

            variant="ghost"

            onClick={() => handleToggleStatus(row)}

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
  ];

  // =========================================
  // ACTIONS
  // =========================================

  const handleEdit = (city) => {

    setSelectedCity(city);

    setFormData({
      name: city.name,
      code: city.code
    });

    setModalOpen(true);

  };

  const handleToggleStatus = (city) => {

    setSelectedCity(city);

    setConfirmOpen(true);

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setFormLoading(true);

    try {

      if (selectedCity) {

        await updateCity(
          selectedCity.id,
          formData
        );

      } else {

        await createCity(formData);

      }

      setModalOpen(false);

      setFormData({
        name: '',
        code: ''
      });

      setSelectedCity(null);

    } catch (error) {

      console.error(
        'Operation failed:',
        error
      );

    } finally {

      setFormLoading(false);

    }

  };

  const handleConfirmToggle = async () => {

    if (selectedCity) {

      try {

        await deactivateCity(
          selectedCity.id
        );

      } catch (error) {

        console.error(
          'Status update failed:',
          error
        );

      }

      setConfirmOpen(false);

      setSelectedCity(null);

    }

  };

  const handleOpenModal = () => {

    setSelectedCity(null);

    setFormData({
      name: '',
      code: ''
    });

    setModalOpen(true);

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
          title="Regional Infrastructure"
          subtitle="Configure and manage active city nodes within the Barqi network"
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

          {/* ========================================= */}
          {/* TOP ANALYTICS */}
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
                    Total Regions
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

                  <Globe size={24} />

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
                    Active Nodes
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

              whileHover={{
                y: -4,
              }}

              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="flex items-center justify-between">

                <div className="flex-1">

                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black mb-3">
                    Network Efficiency
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
          {/* MAIN TABLE */}
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
                    City Directory
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Active regional mesh infrastructure
                  </p>

                </div>

              </div>

              <Button

                onClick={handleOpenModal}

                disabled={loading}

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

                <Plus size={18} className="mr-2" />

                Register Node

                <ArrowRight size={16} className="ml-2" />

              </Button>

            </div>

            {/* TABLE */}

            <div className="overflow-hidden">

              <DataTable
                columns={columns}
                data={paginatedCities}
                loading={loading}
                emptyMessage="No regional nodes established"
              />

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

              {/* LEFT */}

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
                  cities.length
                )}

                {" "}
                of
                {" "}
                {cities.length}

              </div>

              {/* RIGHT */}

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

      {/* ========================================= */}
      {/* MODAL */}
      {/* ========================================= */}

      <Modal

        isOpen={modalOpen}

        onClose={() => setModalOpen(false)}

        title={
          selectedCity
            ? 'Modify Regional Node'
            : 'Initialize Regional Node'
        }

      >

        <form
          onSubmit={handleSubmit}
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

              <MapPin size={14} />

              City Designation

            </Label>

            <Input

              className="
h-12
rounded-2xl
border-slate-200
dark:border-slate-700
focus-visible:ring-orange-500
"

              placeholder="e.g. Islamabad"

              value={formData.name}

              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value
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
flex
items-center
gap-2
">

              <Hash size={14} />

              Identification Code

            </Label>

            <Input

              className="
h-12
rounded-2xl
font-mono
tracking-[0.2em]
border-slate-200
dark:border-slate-700
focus-visible:ring-indigo-500
"

              placeholder="e.g. ISB"

              value={formData.code}

              onChange={(e) =>
                setFormData({
                  ...formData,
                  code: e.target.value
                })
              }

              required

            />

          </div>

          <div className="flex gap-4 pt-4">

            <Button

              type="button"

              variant="outline"

              onClick={() => setModalOpen(false)}

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

              {formLoading
                ? 'Processing...'
                : selectedCity
                  ? 'Apply Changes'
                  : 'Confirm Registration'}

            </Button>

          </div>

        </form>

      </Modal>

      {/* ========================================= */}
      {/* CONFIRM */}
      {/* ========================================= */}

      <ConfirmDialog

        isOpen={confirmOpen}

        onClose={() => setConfirmOpen(false)}

        onConfirm={handleConfirmToggle}

        title="Deactivate Regional Node"

        message={`Warning: Deactivating ${selectedCity?.name} will restrict operational activities in this region. Continue?`}

      />

    </DashboardLayout>

  );
};

export default Cities;