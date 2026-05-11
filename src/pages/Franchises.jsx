import React, {
  useState,
  useEffect,
  useMemo,
} from 'react';

import {
  Plus,
  Edit,
  Trash2,
  Store,
  MapPin,
  Hash,
  Users,
  Activity,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Globe,
} from 'lucide-react';

import { motion } from 'framer-motion';

import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import ConfirmDialog from '../components/common/ConfirmDialog';

import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Progress } from '../components/ui/progress';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../components/ui/select';

import { useFranchises } from '../hooks/useFranchises';
import { useCities } from '../hooks/useCities';

const Franchises = () => {

  const {
    franchises,
    loading,
    fetchFranchises,
    createFranchise,
    updateFranchise,
    terminateFranchise
  } = useFranchises();

  const {
    cities,
    fetchCities
  } = useCities();

  const [modalOpen, setModalOpen] = useState(false);

  const [confirmOpen, setConfirmOpen] = useState(false);

  const [selectedFranchise, setSelectedFranchise] = useState(null);

  const [formLoading, setFormLoading] = useState(false);

  const [terminateLoading, setTerminateLoading] = useState(false);

  const [pageLoaded, setPageLoaded] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const [pageSize, setPageSize] = useState(10);

  const [formData, setFormData] = useState({
    cityId: '',
    name: '',
    code: '',
    maxActiveRiders: ''
  });

  // =========================================
  // INITIAL LOAD
  // =========================================

  useEffect(() => {

    fetchCities();
    fetchFranchises();

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

    const total = franchises?.length || 0;

    const totalRiders =
      franchises?.reduce(
        (acc, item) =>
          acc + (item.maxActiveRiders || 0),
        0
      ) || 0;

    const avgCapacity =
      total > 0
        ? Math.round(totalRiders / total)
        : 0;

    const efficiency =
      total > 0
        ? Math.min(
            Math.round((totalRiders / (total * 100)) * 100),
            100
          )
        : 0;

    return {
      total,
      totalRiders,
      avgCapacity,
      efficiency,
    };

  }, [franchises]);

  // =========================================
  // PAGINATION
  // =========================================

  const totalPages = Math.ceil(
    (franchises?.length || 0) / pageSize
  );

  const paginatedFranchises = useMemo(() => {

    const start =
      (currentPage - 1) * pageSize;

    return franchises.slice(
      start,
      start + pageSize
    );

  }, [franchises, currentPage, pageSize]);

  // =========================================
  // ACTIONS
  // =========================================

  const handleEdit = (franchise) => {

    setSelectedFranchise(franchise);

    setFormData({
      cityId: franchise.cityId || '',
      name: franchise.name || '',
      code: franchise.code || '',
      maxActiveRiders:
        franchise.maxActiveRiders?.toString() || '',
    });

    setModalOpen(true);

  };

  const handleTerminate = (franchise) => {

    setSelectedFranchise(franchise);

    setConfirmOpen(true);

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setFormLoading(true);

    try {

      const data = {
        cityId: formData.cityId,
        name: formData.name,
        code: formData.code,
        maxActiveRiders:
          parseInt(formData.maxActiveRiders) || 0,
      };

      if (selectedFranchise) {

        await updateFranchise(
          selectedFranchise.id,
          data
        );

      } else {

        await createFranchise(data);

      }

      setModalOpen(false);

      setFormData({
        cityId: '',
        name: '',
        code: '',
        maxActiveRiders: ''
      });

      setSelectedFranchise(null);

    } catch (error) {

      console.error(
        'Error saving franchise:',
        error
      );

    } finally {

      setFormLoading(false);

    }

  };

  const handleConfirmTerminate = async () => {

    if (!selectedFranchise) return;

    try {

      setTerminateLoading(true);

      await terminateFranchise(
        selectedFranchise.id
      );

    } catch (error) {

      console.error(
        'Error terminating franchise:',
        error
      );

    } finally {

      setTerminateLoading(false);

      setConfirmOpen(false);

      setSelectedFranchise(null);

    }

  };

  const handleOpenModal = () => {

    setSelectedFranchise(null);

    setFormData({
      cityId: '',
      name: '',
      code: '',
      maxActiveRiders: ''
    });

    setModalOpen(true);

  };

  // =========================================
  // TABLE COLUMNS
  // =========================================

  const columns = [

    {
      key: 'name',
      label: 'Franchise Node',

      render: (val) => (

        <div className="flex items-center gap-4">

          <div className="
w-11
h-11
rounded-2xl
bg-gradient-to-br
from-blue-500/20
to-blue-600/10
flex
items-center
justify-center
text-blue-500
shadow-lg
shadow-blue-500/10
">

            <Store size={18} />

          </div>

          <div>

            <p className="font-black text-slate-700 dark:text-white tracking-tight">
              {val}
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-bold">
              Operational Franchise
            </p>

          </div>

        </div>

      )
    },

    {
      key: 'code',
      label: 'Node ID',

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
      key: 'city',
      label: 'Region',

      render: (val) => (

        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">

          <MapPin size={14} />

          <span className="font-semibold">
            {val?.name || 'Global'}
          </span>

        </div>

      )
    },

    {
      key: 'maxActiveRiders',
      label: 'Rider Capacity',

      render: (val) => (

        <div className="
flex
items-center
gap-2
font-bold
text-slate-700
dark:text-slate-200
">

          <Users
            size={15}
            className="text-orange-500"
          />

          {val}

        </div>

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

            onClick={() => handleTerminate(row)}

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
hover:shadow-blue-500/10
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
border-blue-500/20
border-t-blue-500
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
          title="Franchise Intelligence"
          subtitle="Monitor and scale operational capacity across regional networks"
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

          {/* TOP ANALYTICS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <motion.div
              whileHover={{ y: -4 }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black">
                    Total Nodes
                  </p>

                  <h3 className="text-3xl font-black mt-2 text-slate-800 dark:text-white">
                    {analytics.total}
                  </h3>

                </div>

                <div className="
w-14
h-14
rounded-2xl
bg-blue-500/10
flex
items-center
justify-center
text-blue-500
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
                    Rider Capacity
                  </p>

                  <h3 className="text-3xl font-black mt-2 text-slate-800 dark:text-white">
                    {analytics.totalRiders}
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
from-blue-500
to-blue-700
text-white
shadow-xl
shadow-blue-500/20
">

                  <BarChart3 size={20} />

                </div>

                <div>

                  <h3 className="text-lg font-black tracking-tight text-slate-800 dark:text-white">
                    Franchise Directory
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Distributed operational network
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
bg-blue-600
hover:bg-blue-700
text-white
font-black
shadow-xl
shadow-blue-500/20
transition-all
duration-500
hover:scale-105
active:scale-95
"
              >

                <Plus size={18} className="mr-2" />

                Add Franchise

                <ArrowRight size={16} className="ml-2" />

              </Button>

            </div>

            <DataTable
              columns={columns}
              data={paginatedFranchises}
              loading={loading}
              emptyMessage="No franchise nodes found in system"
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
                  franchises?.length || 0
                )}

                {" "}
                of
                {" "}
                {franchises?.length || 0}

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
bg-blue-600
text-white
text-sm
font-black
shadow-lg
shadow-blue-500/20
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

      {/* MODAL */}

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={
          selectedFranchise
            ? 'Reconfigure Franchise'
            : 'Provision New Franchise'
        }
      >

        <form
          onSubmit={handleSubmit}
          className="space-y-6 py-4"
        >

          {/* REGION */}

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

              Assigned Region

            </Label>

            <Select
              value={formData.cityId}
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  cityId: value
                })
              }
            >

              <SelectTrigger className="
h-12
rounded-2xl
border-slate-200
dark:border-slate-700
bg-white
dark:bg-slate-900
">

                <SelectValue placeholder="Select target city" />

              </SelectTrigger>

              <SelectContent>

                {cities.map((city) => (

                  <SelectItem
                    key={city.id}
                    value={city.id}
                  >

                    {city.name}

                  </SelectItem>

                ))}

              </SelectContent>

            </Select>

          </div>

          {/* NAME + CODE */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

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

                <Store size={14} />

                Franchise Name

              </Label>

              <Input
                className="
h-12
rounded-2xl
border-slate-200
dark:border-slate-700
focus-visible:ring-blue-500
"
                placeholder="e.g. Barqi Lahore"
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

                Node Identification

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
                placeholder="e.g. BARQILHR"
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

          </div>

          {/* RIDERS */}

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

              <Users size={14} />

              Rider Operational Capacity

            </Label>

            <Input
              type="number"
              className="
h-12
rounded-2xl
border-slate-200
dark:border-slate-700
focus-visible:ring-orange-500
"
              placeholder="e.g. 50"
              value={formData.maxActiveRiders}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  maxActiveRiders: e.target.value
                })
              }
              required
            />

          </div>

          {/* INFO CARD */}

          <div className="
rounded-3xl
border
border-blue-500/10
bg-gradient-to-br
from-blue-500/5
to-indigo-500/5
p-5
flex
items-start
gap-4
">

            <div className="
w-11
h-11
rounded-2xl
bg-blue-500/10
flex
items-center
justify-center
text-blue-500
">

              <ShieldCheck size={18} />

            </div>

            <div>

              <h4 className="font-black text-slate-800 dark:text-white text-sm">
                Operational Intelligence
              </h4>

              <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 mt-1">
                Franchise nodes inherit regional deployment rules and rider
                operational thresholds from the selected city infrastructure.
              </p>

            </div>

          </div>

          {/* ACTIONS */}

          <div className="flex gap-4 pt-2">

            <Button

              type="button"

              variant="outline"

              onClick={() => setModalOpen(false)}

              className="
flex-1
h-12
rounded-2xl
border-slate-200
dark:border-slate-700
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
bg-blue-600
hover:bg-blue-700
text-white
font-bold
shadow-xl
shadow-blue-500/20
transition-all
duration-500
hover:scale-[1.02]
active:scale-[0.98]
"

            >

              {formLoading
                ? 'Processing Node...'
                : selectedFranchise
                  ? 'Commit Update'
                  : 'Initialize Node'}

            </Button>

          </div>

        </form>

      </Modal>

      {/* CONFIRM */}

      <ConfirmDialog
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirmTerminate}
        title="Decommission Franchise"
        message={`Warning: You are about to terminate operational node ${selectedFranchise?.name}. This action cannot be undone.`}
        loading={terminateLoading}
      />

    </DashboardLayout>

  );
};

export default Franchises;