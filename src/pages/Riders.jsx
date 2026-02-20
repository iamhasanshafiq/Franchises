import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Plus, Eye, X, Loader2, Search
} from 'lucide-react';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useRiders } from '../hooks/useRiders';
import { useCities } from '../hooks/useCities';
import { useFranchises } from '../hooks/useFranchises';
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

  const { riders, loading: ridersLoading, fetchRiders, createRider } = useRiders();
  const { cities, fetchCities } = useCities();
  const { franchises, loading: franchisesLoading, fetchFranchises } = useFranchises();

  const [modalOpen, setModalOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [docLoading, setDocLoading] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [riderDocuments, setRiderDocuments] = useState([]);
  const [selectedDocType, setSelectedDocType] = useState('CNIC');
  const [searchTerm, setSearchTerm] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchRiders();
    fetchCities({ page: 1, limit: 100 });
    fetchFranchises({ page: 1, limit: 100 });
  }, []);

  const openModal = () => {
    const defaultFranchise = franchises?.[0];
    setFormData({
      ...INITIAL_FORM_STATE,
      franchiseId: defaultFranchise?.id || '',
      cityId: defaultFranchise?.cityId || ''
    });
    setRiderDocuments([]);
    setModalOpen(true);
  };

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
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.franchiseId || !formData.cityId) {
      return toast.error('Franchise and City are required');
    }

    setFormLoading(true);
    try {
      await createRider({
        ...formData,
        documents: riderDocuments.map(({ documentType, documentUrl }) => ({
          documentType,
          documentUrl
        }))
      });
      toast.success('Rider created successfully');
      setModalOpen(false);
      fetchRiders();
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Failed to create rider');
    } finally {
      setFormLoading(false);
    }
  };
  const filteredRiders = useMemo(() => {
    if (!searchTerm) return riders;

    return riders.filter(r =>
      r.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.phone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [riders, searchTerm]);

  const columns = useMemo(() => [
    {
      key: 'fullName',
      label: 'Rider',
      render: (v, r) => (
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center font-bold text-green-700">
            {v?.[0]}
          </div>
          <div>
            <div className="font-semibold">{v}</div>
            <div className="text-xs text-gray-500">{r.email}</div>
          </div>
        </div>
      )
    },
    { key: 'phone', label: 'Phone' },
    { key: 'vehicleType', label: 'Vehicle' },
    { key: 'status', label: 'Status', render: v => <StatusBadge status={v} /> },
    {
      key: 'actions',
      label: '',
      render: (_, r) => (
        <Button size="sm" variant="ghost" onClick={() => navigate(`/riders/${r.id}`)}>
          <Eye size={16} className="text-gray-500" />
        </Button>
      )
    }
  ], [navigate]);

  return (
    <DashboardLayout>
      <Header title="Fleet Operations" subtitle="Manage your delivery personnel" />

      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center bg-white p-4 rounded-2xl border shadow-sm">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              className="pl-10"
              placeholder="Search riders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

          </div>

          <Button onClick={openModal} className="gap-2">
            <Plus size={18} /> Initialize Rider
          </Button>
        </div>

        {ridersLoading ? (
          <TableSkeleton rows={6} />
        ) : (
          <DataTable columns={columns} data={filteredRiders} />

        )}

      </div>

      {modalOpen && (
        <Modal isOpen onClose={() => setModalOpen(false)} title="Create New Rider" size="lg">
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Franchise</Label>
                <Select
                  value={formData.franchiseId}
                  onValueChange={(v) => {
                    const selected = franchises.find(f => f.id === v);
                    setFormData(p => ({ ...p, franchiseId: v, cityId: selected?.cityId || p.cityId }));
                  }}
                >
                  <SelectTrigger disabled={franchisesLoading}>
                    <SelectValue placeholder="Select Franchise" />
                  </SelectTrigger>
                  <SelectContent>
                    {franchises.map(f => <SelectItem key={f.id} value={f.id}>{f.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label>City</Label>
                <Select
                  value={formData.cityId}
                  onValueChange={v => setFormData(p => ({ ...p, cityId: v }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map(c => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Full Name" value={formData.fullName} onChange={e => setFormData(p => ({ ...p, fullName: e.target.value }))} />
              <Input placeholder="Phone Number" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <Select value={formData.vehicleType} onValueChange={v => setFormData(p => ({ ...p, vehicleType: v }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BIKE">Bike</SelectItem>
                    <SelectItem value="MOTORBIKE">Motorbike</SelectItem>
                    <SelectItem value="VAN">Van</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Input className="col-span-2" type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} />
            </div>

            <Input type="password" placeholder="Account Password" value={formData.password} onChange={e => setFormData(p => ({ ...p, password: e.target.value }))} />

            <div className="border border-dashed p-4 rounded-xl bg-gray-50/50">
              <Label className="mb-2 block text-xs uppercase text-gray-500">Documents</Label>
              <div className="flex gap-2 mb-3">
                <Select value={selectedDocType} onValueChange={setSelectedDocType}>
                  <SelectTrigger className="w-[200px] bg-white"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CNIC">CNIC</SelectItem>
                    <SelectItem value="DRIVING_LICENSE">License</SelectItem>
                    <SelectItem value="VEHICLE_REGISTRATION">Vehicle Reg</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current.click()}
                  disabled={docLoading}
                >
                  {docLoading ? <Loader2 className="animate-spin mr-2" size={14} /> : 'Select File'}
                </Button>
                <input hidden ref={fileInputRef} type="file" onChange={handleFileSelect} />
              </div>

              <div className="space-y-2">
                {riderDocuments.map(d => (
                  <div key={d.id} className="flex justify-between items-center bg-white p-2 px-3 rounded-lg border text-sm">
                    <span className="font-medium">{d.documentType}: <span className="text-gray-500 font-normal">{d.originalName}</span></span>
                    <X className="cursor-pointer text-red-400 hover:text-red-600" size={14} onClick={() => setRiderDocuments(p => p.filter(x => x.id !== d.id))} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button type="button" variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
              <Button disabled={formLoading} type="submit" className="min-w-[120px]">
                {formLoading ? <Loader2 className="animate-spin" /> : 'Create Rider'}
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </DashboardLayout>
  );
};

export default Riders;