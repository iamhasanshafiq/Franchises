import React, {
  useState,
  useEffect,
  useMemo
} from 'react';

import {
  Plus,
  Edit,
  Trash2,
  MapPin,
  Hash,
  Globe,
  Activity,
  ShieldCheck,
  Search,
  Loader2
} from 'lucide-react';

import { motion } from 'framer-motion';

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

import { useCities } from '../hooks/useCities';

const INITIAL_FORM_STATE = {
  name: '',
  code: ''
};

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

  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const [formLoading, setFormLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  // =========================================
  // LOAD
  // =========================================

  useEffect(() => {

    fetchCities();

  }, [fetchCities]);

  // =========================================
  // ANALYTICS
  // =========================================

  const analytics = useMemo(() => {

    const total = cities?.length || 0;

    const active = cities?.filter(
      c => ['ACTIVE', 'APPROVED'].includes(c.status)
    ).length || 0;

    const inactive = cities?.filter(
      c => ['INACTIVE', 'DEACTIVATED'].includes(c.status)
    ).length || 0;

    return {
      total,
      active,
      inactive
    };

  }, [cities]);

  // =========================================
  // SEARCH
  // =========================================

  const filteredCities = useMemo(() => {

    if (!searchTerm) return cities;

    return cities.filter(c =>

      c.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||

      c.code?.toLowerCase().includes(searchTerm.toLowerCase())

    );

  }, [cities, searchTerm]);

  // =========================================
  // PAGINATION
  // =========================================

  const totalPages = Math.ceil(filteredCities.length / itemsPerPage);

  const paginatedCities = useMemo(() => {

    const startIndex = (currentPage - 1) * itemsPerPage;

    return filteredCities.slice(
      startIndex,
      startIndex + itemsPerPage
    );

  }, [filteredCities, currentPage]);

  // =========================================
  // MODAL
  // =========================================

  const handleOpenModal = () => {

    setSelectedCity(null);

    setFormData(INITIAL_FORM_STATE);

    setModalOpen(true);

  };

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

  // =========================================
  // SUBMIT
  // =========================================

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

      setSelectedCity(null);

      setFormData(INITIAL_FORM_STATE);

    } catch (error) {

      console.error('Operation failed:', error);

    } finally {

      setFormLoading(false);

    }

  };

  // =========================================
  // STATUS TOGGLE
  // =========================================

  const handleConfirmToggle = async () => {

    if (!selectedCity) return;

    try {

      await deactivateCity(selectedCity.id);

    } catch (error) {

      console.error('Status update failed:', error);

    } finally {

      setConfirmOpen(false);

      setSelectedCity(null);

    }

  };

  // =========================================
  // TABLE
  // =========================================

  const columns = useMemo(() => [

    {
      key: 'name',

      label: 'City',

      render: (v, r) => (

        <div className="flex items-center gap-4 group">

          <div className="
w-11
h-11
rounded-2xl
bg-emerald-500/10
text-emerald-500
flex
items-center
justify-center
transition-all
duration-500
group-hover:scale-110
">

            <MapPin size={18} />

          </div>

          <div>

            <div className="
font-black
text-sm
text-slate-800
dark:text-white
tracking-tight
">

              {v}

            </div>

            <div className="
text-xs
text-slate-500
dark:text-slate-400
tracking-wide
">

              Regional Node

            </div>

          </div>

        </div>

      )
    },

    {
      key: 'code',

      label: 'Region Code',

      render: (v) => (

        <span className="
px-3
py-1
rounded-full
bg-slate-100
dark:bg-slate-800
text-[10px]
font-black
tracking-[0.2em]
uppercase
text-slate-600
dark:text-slate-300
font-mono
">

          {v}

        </span>

      )
    },

    {
      key: 'status',

      label: 'Status',

      render: (v) => (
        <StatusBadge status={v} />
      )
    },

    {
      key: 'createdAt',

      label: 'Created',

      render: (v) => (

        <span className="
text-sm
text-slate-600
dark:text-slate-300
font-medium
">

          {v
            ? new Date(v).toLocaleDateString()
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
transition-all
duration-300
"
          >

            <Edit
              size={16}
              className="text-slate-500"
            />

          </Button>

          <Button
            size="sm"
            variant="ghost"
            onClick={() => handleToggleStatus(row)}
            className="
rounded-xl
hover:bg-red-500/10
transition-all
duration-300
"
          >

            <Trash2
              size={16}
              className="text-red-400"
            />

          </Button>

        </div>

      )
    }

  ], []);

  // =========================================
  // CARD STYLE
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
          title="Regional Infrastructure"
          subtitle="Configure and manage operational city nodes"
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

          {/* ========================================= */}
          {/* BACKGROUND EFFECT */}
          {/* ========================================= */}

          <div className="absolute inset-0 -z-10 overflow-hidden">

            <div className="
absolute
top-[-10%]
left-[-10%]
w-[420px]
h-[420px]
bg-emerald-500/10
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

          {/* ========================================= */}
          {/* STATS */}
          {/* ========================================= */}

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
                    Total Cities
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
bg-emerald-500/10
text-emerald-500
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
                    Active Regions
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
bg-cyan-500/10
text-cyan-500
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
                    Disabled Nodes
                  </p>

                  <h2 className="
text-3xl
font-black
text-slate-800
dark:text-white
">
                    {analytics.inactive}
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
                  <Activity size={24} />
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
                  City Command Center
                </h3>

                <p className="
text-sm
text-slate-500
dark:text-slate-400
mt-1
">
                  Live infrastructure node management
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
focus-visible:ring-emerald-500/20
"
                    placeholder="Search cities..."
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(e.target.value)
                    }
                  />

                </div>

                <Button
                  onClick={handleOpenModal}
                  disabled={loading}
                  className="
h-11
rounded-2xl
px-5
font-bold
gap-2
bg-emerald-600
hover:bg-emerald-700
shadow-lg
shadow-emerald-500/20
transition-all
duration-500
hover:scale-[1.02]
"
                >

                  <Plus size={18} />

                  Initialize City

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
                  data={paginatedCities}
                  emptyMessage="No regional nodes established"
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
                {(currentPage - 1) * itemsPerPage + 1}

                {" - "}

                {Math.min(
                  currentPage * itemsPerPage,
                  filteredCities.length
                )}

                {" "}
                of
                {" "}
                {filteredCities.length}

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
bg-emerald-600
text-white
text-sm
font-black
shadow-lg
shadow-emerald-500/20
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

      {/* ========================================= */}
      {/* MODAL */}
      {/* ========================================= */}

      {modalOpen && (

        <Modal
          isOpen
          onClose={() => setModalOpen(false)}
          title={
            selectedCity
              ? 'Modify Regional Node'
              : 'Initialize Regional Node'
          }
          size="md"
        >

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div className="space-y-2">

              <Label className="
text-[11px]
uppercase
tracking-[0.25em]
text-slate-500
font-black
flex
items-center
gap-2
">

                <MapPin size={14} />

                City Designation

              </Label>

              <Input
                className="
rounded-2xl
h-11
"
                placeholder="e.g. Islamabad"
                value={formData.name}
                onChange={(e) =>
                  setFormData(p => ({
                    ...p,
                    name: e.target.value
                  }))
                }
                required
              />

            </div>

            <div className="space-y-2">

              <Label className="
text-[11px]
uppercase
tracking-[0.25em]
text-slate-500
font-black
flex
items-center
gap-2
">

                <Hash size={14} />

                Identification Code

              </Label>

              <Input
                className="
rounded-2xl
h-11
font-mono
tracking-[0.15em]
uppercase
"
                placeholder="e.g. ISB"
                value={formData.code}
                onChange={(e) =>
                  setFormData(p => ({
                    ...p,
                    code: e.target.value.toUpperCase()
                  }))
                }
                required
              />

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
min-w-[160px]
rounded-2xl
bg-emerald-600
hover:bg-emerald-700
"
              >

                {formLoading ? (

                  <Loader2 className="animate-spin" />

                ) : selectedCity ? (

                  'Apply Changes'

                ) : (

                  'Create City'

                )}

              </Button>

            </div>

          </form>

        </Modal>

      )}

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