import React, {
  useState,
  useEffect,
  useRef,
  useMemo
} from 'react';

import { useNavigate } from 'react-router-dom';

import {
  Plus,
  Eye,
  X,
  Loader2,
  Search,
  Bike,
  Users,
  ShieldCheck,
  Activity
} from 'lucide-react';

import { motion } from 'framer-motion';

import { toast } from 'sonner';

// Components
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
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

import { useRiders } from '../hooks/useRiders';
import { useCities } from '../hooks/useCities';
import { useFranchises } from '../hooks/useFranchises';
import { useAuth } from '../hooks/useAuth';

import { uploadFiles } from '../utils/fileUpload';

import TableSkeleton from '../components/common/TableSkeleton';

const INITIAL_FORM_STATE = {
  fullName: '',
  phone: '',
  vehicleType: 'BIKE',
  franchiseId: '',
  cityId: '',
  email: '',
  password: ''
};

const Riders = () => {

  const navigate = useNavigate();

  const { isFranchiseAdmin } = useAuth();

  const {
    riders,
    loading: ridersLoading,
    fetchRiders,
    createRider
  } = useRiders();

  const {
    cities,
    fetchCities
  } = useCities();

  const {
    franchises,
    myFranchise,
    loading: franchisesLoading,
    fetchFranchises,
    fetchMyFranchise
  } = useFranchises();

  const franchiseList = isFranchiseAdmin()
    ? (myFranchise ? [myFranchise] : [])
    : franchises;

  const [modalOpen, setModalOpen] = useState(false);

  const [formLoading, setFormLoading] = useState(false);

  const [docLoading, setDocLoading] = useState(false);

  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const [riderDocuments, setRiderDocuments] = useState([]);

  const [selectedDocType, setSelectedDocType] = useState('CNIC');

  const [searchTerm, setSearchTerm] = useState('');

  const fileInputRef = useRef(null);

  // =========================================
  // LOAD
  // =========================================

  useEffect(() => {

    fetchRiders();

    fetchCities({
      page: 1,
      limit: 100
    });

    if (isFranchiseAdmin()) {

      fetchMyFranchise();

    } else {

      fetchFranchises({
        page: 1,
        limit: 100
      });

    }

  }, []);

  // =========================================
  // ANALYTICS
  // =========================================

  const analytics = useMemo(() => {

    const total = riders?.length || 0;

    const active = riders?.filter(
      r => ['ACTIVE', 'APPROVED'].includes(r.status)
    ).length || 0;

    const pending = riders?.filter(
      r => r.status === 'APPLIED'
    ).length || 0;

    return {
      total,
      active,
      pending
    };

  }, [riders]);

  // =========================================
  // MODAL
  // =========================================

  const openModal = () => {

    const defaultFranchise = franchiseList?.[0];

    setFormData({
      ...INITIAL_FORM_STATE,
      franchiseId: defaultFranchise?.id || '',
      cityId: defaultFranchise?.cityId || ''
    });

    setRiderDocuments([]);

    setModalOpen(true);

  };

  // =========================================
  // FILE UPLOAD
  // =========================================

  const handleFileSelect = async (e) => {

    const files = Array.from(e.target.files || []);

    if (!files.length) return;

    setDocLoading(true);

    try {

      const uploaded = await uploadFiles(files);

      const mapped = uploaded.map(f => ({
        documentType: selectedDocType,
        documentUrl: f.url,
        originalName: f.originalName,
        id: crypto.randomUUID()
      }));

      setRiderDocuments(prev => [...prev, ...mapped]);

      toast.success('Document attached');

    } catch (err) {

      toast.error('Upload failed');

    } finally {

      setDocLoading(false);

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

    }

  };

  // =========================================
  // SUBMIT
  // =========================================

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!formData.franchiseId || !formData.cityId) {
      return toast.error('Franchise and City are required');
    }

    setFormLoading(true);

    try {

      await createRider({
        ...formData,
        documents: riderDocuments.map(({
          documentType,
          documentUrl
        }) => ({
          documentType,
          documentUrl
        }))
      });

      setModalOpen(false);

    } catch {

      // hook handles toast

    } finally {

      setFormLoading(false);

    }

  };

  // =========================================
  // SEARCH
  // =========================================

  const filteredRiders = useMemo(() => {

    if (!searchTerm) return riders;

    return riders.filter(r =>

      r.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||

      r.phone?.toLowerCase().includes(searchTerm.toLowerCase()) ||

      r.email?.toLowerCase().includes(searchTerm.toLowerCase())

    );

  }, [riders, searchTerm]);

  // =========================================
  // TABLE
  // =========================================

  const columns = useMemo(() => [

    {
      key: 'fullName',

      label: 'Rider',

      render: (v, r) => (

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
text-sm
transition-all
duration-500
group-hover:scale-110
">

            {v?.[0]}

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
">

              {r.email}

            </div>

          </div>

        </div>

      )
    },

    {
      key: 'phone',
      label: 'Phone'
    },

    {
      key: 'vehicleType',

      label: 'Vehicle',

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
      key: 'actions',

      label: '',

      render: (_, r) => (

        <Button
          size="sm"
          variant="ghost"
          onClick={() => navigate(`/riders/${r.id}`)}
          className="
rounded-xl
hover:bg-indigo-500/10
transition-all
duration-300
"
        >

          <Eye
            size={16}
            className="text-slate-500"
          />

        </Button>

      )
    }

  ], [navigate]);

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
          title="Fleet Operations"
          subtitle="Manage your delivery personnel"
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
                    Total Fleet
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
                    Active Riders
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
                    Pending Review
                  </p>

                  <h2 className="
text-3xl
font-black
text-slate-800
dark:text-white
">
                    {analytics.pending}
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
                  Rider Command Stream
                </h3>

                <p className="
text-sm
text-slate-500
dark:text-slate-400
mt-1
">
                  Live fleet personnel overview
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
                    placeholder="Search riders..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />

                </div>

                <Button
                  onClick={openModal}
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

                  Initialize Rider

                </Button>

              </div>

            </div>

            {/* TABLE */}

            <div className="p-4">

              {ridersLoading ? (

                <TableSkeleton rows={6} />

              ) : (

                <DataTable
                  columns={columns}
                  data={filteredRiders}
                />

              )}

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
          title="Create New Rider"
          size="lg"
        >

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div className="grid grid-cols-2 gap-4">

              <div className="space-y-2">

                <Label>Franchise</Label>

                <Select
                  value={formData.franchiseId}
                  onValueChange={(v) => {

                    const selected = franchises.find(
                      f => f.id === v
                    );

                    setFormData(p => ({
                      ...p,
                      franchiseId: v,
                      cityId: selected?.cityId || p.cityId
                    }));

                  }}
                >

                  <SelectTrigger className="rounded-2xl h-11">

                    <SelectValue placeholder="Select Franchise" />

                  </SelectTrigger>

                  <SelectContent>

                    {franchiseList.map(f => (

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

              <div className="space-y-2">

                <Label>City</Label>

                <Select
                  value={formData.cityId}
                  onValueChange={(v) =>
                    setFormData(p => ({
                      ...p,
                      cityId: v
                    }))
                  }
                >

                  <SelectTrigger className="rounded-2xl h-11">

                    <SelectValue placeholder="Select City" />

                  </SelectTrigger>

                  <SelectContent>

                    {cities.map(c => (

                      <SelectItem
                        key={c.id}
                        value={c.id}
                      >
                        {c.name}
                      </SelectItem>

                    ))}

                  </SelectContent>

                </Select>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <Input
                className="rounded-2xl h-11"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData(p => ({
                    ...p,
                    fullName: e.target.value
                  }))
                }
              />

              <Input
                className="rounded-2xl h-11"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData(p => ({
                    ...p,
                    phone: e.target.value
                  }))
                }
              />

            </div>

            <div className="grid grid-cols-3 gap-4">

              <Select
                value={formData.vehicleType}
                onValueChange={(v) =>
                  setFormData(p => ({
                    ...p,
                    vehicleType: v
                  }))
                }
              >

                <SelectTrigger className="rounded-2xl h-11">

                  <SelectValue />

                </SelectTrigger>

                <SelectContent>

                  <SelectItem value="BIKE">Bike</SelectItem>

                  <SelectItem value="MOTORBIKE">
                    Motorbike
                  </SelectItem>

                  <SelectItem value="VAN">
                    Van
                  </SelectItem>

                </SelectContent>

              </Select>

              <Input
                className="col-span-2 rounded-2xl h-11"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData(p => ({
                    ...p,
                    email: e.target.value
                  }))
                }
              />

            </div>

            <Input
              className="rounded-2xl h-11"
              type="password"
              placeholder="Account Password"
              value={formData.password}
              onChange={(e) =>
                setFormData(p => ({
                  ...p,
                  password: e.target.value
                }))
              }
            />

            {/* DOCUMENTS */}

            <div className="
border
border-dashed
border-slate-300
dark:border-slate-700
rounded-3xl
p-5
bg-slate-50/70
dark:bg-slate-900/40
space-y-4
">

              <Label className="
text-[11px]
uppercase
tracking-[0.25em]
text-slate-500
font-black
">

                Rider Documents

              </Label>

              <div className="flex gap-3">

                <Select
                  value={selectedDocType}
                  onValueChange={setSelectedDocType}
                >

                  <SelectTrigger className="w-[220px] rounded-2xl h-11">

                    <SelectValue />

                  </SelectTrigger>

                  <SelectContent>

                    <SelectItem value="CNIC">
                      CNIC
                    </SelectItem>

                    <SelectItem value="DRIVING_LICENSE">
                      License
                    </SelectItem>

                    <SelectItem value="VEHICLE_REGISTRATION">
                      Vehicle Reg
                    </SelectItem>

                  </SelectContent>

                </Select>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current.click()}
                  disabled={docLoading}
                  className="rounded-2xl h-11"
                >

                  {docLoading ? (
                    <Loader2
                      className="animate-spin mr-2"
                      size={15}
                    />
                  ) : (
                    'Select File'
                  )}

                </Button>

                <input
                  hidden
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileSelect}
                />

              </div>

              <div className="space-y-2">

                {riderDocuments.map((d) => (

                  <motion.div

                    key={d.id}

                    initial={{
                      opacity: 0,
                      y: 10
                    }}

                    animate={{
                      opacity: 1,
                      y: 0
                    }}

                    className="
flex
justify-between
items-center
bg-white
dark:bg-slate-900/60
border
border-slate-200
dark:border-slate-800
rounded-2xl
p-3
"

                  >

                    <span className="
text-sm
font-medium
text-slate-700
dark:text-slate-300
">

                      {d.documentType}
                      :
                      {" "}
                      <span className="text-slate-500">
                        {d.originalName}
                      </span>

                    </span>

                    <X
                      size={16}
                      onClick={() =>
                        setRiderDocuments(
                          p => p.filter(x => x.id !== d.id)
                        )
                      }
                      className="
cursor-pointer
text-red-400
hover:text-red-500
transition-colors
"
                    />

                  </motion.div>

                ))}

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
min-w-[140px]
rounded-2xl
bg-indigo-600
hover:bg-indigo-700
"
              >

                {formLoading ? (

                  <Loader2 className="animate-spin" />

                ) : (

                  'Create Rider'

                )}

              </Button>

            </div>

          </form>

        </Modal>

      )}

    </DashboardLayout>

  );

};

export default Riders;