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
  ShieldCheck,
  Globe,
  Search,
  Loader2,
  ArrowRight,
  Sparkles,
  Building2,
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

  const [searchTerm, setSearchTerm] = useState('');

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const [formData, setFormData] = useState({
    cityId: '',
    name: '',
    code: '',
    maxActiveRiders: ''
  });

  // =========================================
  // LOAD
  // =========================================

  useEffect(() => {

    fetchCities();

    fetchFranchises();

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
  // SEARCH
  // =========================================

  const filteredFranchises = useMemo(() => {

    if (!searchTerm) return franchises;

    return franchises.filter((f) =>

      f.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||

      f.code?.toLowerCase().includes(searchTerm.toLowerCase()) ||

      f.city?.name?.toLowerCase().includes(searchTerm.toLowerCase())

    );

  }, [franchises, searchTerm]);

  // =========================================
  // PAGINATION
  // =========================================

  const totalPages = Math.ceil(
    filteredFranchises.length / itemsPerPage
  );

  const paginatedFranchises = useMemo(() => {

    const startIndex =
      (currentPage - 1) * itemsPerPage;

    return filteredFranchises.slice(
      startIndex,
      startIndex + itemsPerPage
    );

  }, [
    filteredFranchises,
    currentPage
  ]);

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
  // TABLE
  // =========================================

  const columns = useMemo(() => [

    {
      key: 'name',

      label: 'Franchise',

      render: (val, row) => (

        <div className="flex items-center gap-4">

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
shadow-lg
shadow-indigo-500/10
transition-all
duration-500
group-hover:scale-110
">

            <Building2 size={18} />

          </div>

          <div>

            <div className="
font-black
text-sm
text-slate-800
dark:text-white
tracking-tight
">

              {val}

            </div>

            <div className="
text-xs
text-slate-500
dark:text-slate-400
uppercase
tracking-[0.2em]
font-bold
">

              {row.code}

            </div>

          </div>

        </div>

      )
    },

    {
      key: 'city',

      label: 'Region',

      render: (val) => (

        <div className="
flex
items-center
gap-2
text-slate-600
dark:text-slate-300
font-semibold
">

          <MapPin
            size={15}
            className="text-emerald-500"
          />

          {val?.name || 'Global'}

        </div>

      )
    },

    {
      key: 'maxActiveRiders',

      label: 'Capacity',

      render: (val) => (

        <div className="
inline-flex
items-center
gap-2
px-3
py-1.5
rounded-full
bg-orange-500/10
text-orange-500
font-black
text-xs
tracking-wide
">

          <Users size={14} />

          {val}

        </div>

      )
    },

    {
      key: 'createdAt',

      label: 'Created',

      render: (val) => (

        <span className="
text-sm
font-semibold
text-slate-600
dark:text-slate-300
">

          {val
            ? new Date(val).toLocaleDateString()
            : '-'}

        </span>

      )
    },

    {
      key: 'actions',

      label: '',

      render: (_, row) => (

        <div className="flex items-center gap-2">

          <Button
            size="sm"
            variant="ghost"
            onClick={() => handleEdit(row)}
            className="
rounded-xl
hover:bg-indigo-500/10
hover:text-indigo-500
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

  ], []);

  // =========================================
  // GLASS STYLE
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
          title="Franchise Network"
          subtitle="Manage operational franchise infrastructure"
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

          {/* BACKGROUND FX */}

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
bg-emerald-500/10
rounded-full
blur-[120px]
" />

          </div>

          {/* STATS */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

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
                    Total Nodes
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
                  <Globe size={24} />
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
                    Rider Capacity
                  </p>

                  <h2 className="
text-3xl
font-black
text-slate-800
dark:text-white
">
                    {analytics.totalRiders}
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
                    Avg Capacity
                  </p>

                  <h2 className="
text-3xl
font-black
text-slate-800
dark:text-white
">
                    {analytics.avgCapacity}
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

              <div className="space-y-4">

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
                      Efficiency
                    </p>

                    <h2 className="
text-3xl
font-black
text-slate-800
dark:text-white
">
                      {analytics.efficiency}%
                    </h2>

                  </div>

                  <div className="
w-14
h-14
rounded-2xl
bg-cyan-500/10
text-cyan-500
flex
items-center
justify-center
">
                    <Activity size={24} />
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

              <div>

                <h3 className="
text-lg
font-black
text-slate-800
dark:text-white
tracking-tight
">
                  Franchise Command Center
                </h3>

                <p className="
text-sm
text-slate-500
dark:text-slate-400
mt-1
">
                  Distributed operational intelligence
                </p>

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
                    placeholder="Search franchises..."
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(e.target.value)
                    }
                  />

                </div>

                <Button
                  onClick={handleOpenModal}
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

                  Initialize Node

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
                  data={paginatedFranchises}
                  emptyMessage="No franchises found"
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
                  filteredFranchises.length
                )}

                {" "}
                of
                {" "}
                {filteredFranchises.length}

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

      {/* MODAL */}

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={
          selectedFranchise
            ? 'Update Franchise'
            : 'Create New Franchise'
        }
        size="lg"
      >

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div className="grid grid-cols-2 gap-4">

            <div className="space-y-2">

              <Label>City</Label>

              <Select
                value={formData.cityId}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    cityId: value
                  })
                }
              >

                <SelectTrigger className="rounded-2xl h-11">

                  <SelectValue placeholder="Select City" />

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

            <div className="space-y-2">

              <Label>Franchise Name</Label>

              <Input
                className="rounded-2xl h-11"
                placeholder="Enter franchise name"
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

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="space-y-2">

              <Label>Node Code</Label>

              <Input
                className="
rounded-2xl
h-11
font-mono
tracking-[0.2em]
"
                placeholder="e.g. LHR01"
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

            <div className="space-y-2">

              <Label>Rider Capacity</Label>

              <Input
                type="number"
                className="rounded-2xl h-11"
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

              <Sparkles size={18} />

            </div>

            <div>

              <h4 className="
font-black
text-slate-800
dark:text-white
text-sm
">
                Network Intelligence
              </h4>

              <p className="
text-xs
leading-relaxed
text-slate-500
dark:text-slate-400
mt-1
">
                Franchise nodes inherit operational deployment settings
                and regional scaling infrastructure automatically.
              </p>

            </div>

          </div>

          {/* ACTIONS */}

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
min-w-[150px]
rounded-2xl
bg-indigo-600
hover:bg-indigo-700
"
            >

              {formLoading ? (

                <Loader2 className="animate-spin" />

              ) : selectedFranchise ? (

                'Update Franchise'

              ) : (

                'Create Franchise'

              )}

            </Button>

          </div>

        </form>

      </Modal>

      {/* CONFIRM */}

      <ConfirmDialog
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirmTerminate}
        title="Terminate Franchise"
        message={`You are about to terminate ${selectedFranchise?.name}. This action cannot be undone.`}
        loading={terminateLoading}
      />

    </DashboardLayout>

  );

};

export default Franchises;