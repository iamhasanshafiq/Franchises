import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import StatusBadge from '../components/common/StatusBadge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Plus, Eye, Upload, FileText, X, Loader2, Search, ShieldCheck, Mail, Lock
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useRiders } from '../hooks/useRiders';
import { useCities } from '../hooks/useCities';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../components/ui/select';
import { uploadFiles } from '../utils/fileUpload';
import { toast } from 'sonner';

const Riders = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  const { riders, loading: ridersLoading, fetchRiders, createRider } = useRiders();
  const { cities, fetchCities } = useCities();

  /** ---------------- Franchise ---------------- */
  const [franchises, setFranchises] = useState([]);
  const [myFranchiseLoading, setMyFranchiseLoading] = useState(false);

  const fetchMyFranchise = async () => {
    setMyFranchiseLoading(true);
    const accessToken = localStorage.getItem('access_token');

    try {
      const res = await axios.get(
        'https://api.barqibazar.org/franchise/api/franchises/me/franchise',
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      if (res.data?.status === 'success' && res.data?.data) {
        // normalize to array even if single
        setFranchises([res.data.data]);
      }
    } catch (err) {
      if (err.response?.status === 401) {
        toast.error('Session expired');
        navigate('/login');
      }
    } finally {
      setMyFranchiseLoading(false);
    }
  };

  /** ---------------- State ---------------- */
  const [modalOpen, setModalOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [docLoading, setDocLoading] = useState(false);
  const fileInputRef = useRef(null);

  const initialFormState = {
    fullName: '',
    phone: '',
    vehicleType: 'BIKE',
    franchiseId: '',
    cityId: '',
    email: '',
    password: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [riderDocuments, setRiderDocuments] = useState([]);
  const [selectedDocType, setSelectedDocType] = useState('CNIC');

  /** ---------------- Init ---------------- */
  useEffect(() => {
    fetchRiders();
    fetchCities({ page: 1, limit: 100 });
    fetchMyFranchise();
  }, []);

  /** ---------------- Modal ---------------- */
  const openModal = () => {
    const defaultFranchise = franchises[0];

    setFormData({
      ...initialFormState,
      franchiseId: defaultFranchise?.id || '',
      cityId: defaultFranchise?.cityId || ''
    });

    setRiderDocuments([]);
    setModalOpen(true);
  };

  /** ---------------- Files ---------------- */
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

      setRiderDocuments(p => [...p, ...mapped]);
      toast.success('Document attached');
    } catch {
      toast.error('Upload failed');
    } finally {
      setDocLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  /** ---------------- Submit ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.franchiseId || !formData.cityId) {
      return toast.error('Franchise & City required');
    }

    setFormLoading(true);

    try {
      await createRider({
        ...formData,
        documents: riderDocuments.map(d => ({
          documentType: d.documentType,
          documentUrl: d.documentUrl
        }))
      });

      toast.success('Rider created');
      setModalOpen(false);
      fetchRiders();
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Failed');
    } finally {
      setFormLoading(false);
    }
  };

  /** ---------------- Table ---------------- */
  const columns = useMemo(() => [
    {
      key: 'fullName',
      label: 'Rider',
      render: (v, r) => (
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center font-bold">
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
          <Eye size={16} />
        </Button>
      )
    }
  ], [navigate]);

  return (
    <DashboardLayout>
      <Header title="Fleet Operations" subtitle="Manage riders" />

      <div className="p-6 space-y-6">
        <div className="flex justify-between bg-white p-4 rounded-2xl border">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
            <Input className="pl-10" placeholder="Search..." />
          </div>

          <Button onClick={openModal}>
            <Plus size={16} className="mr-2" /> Initialize Rider
          </Button>
        </div>

        <DataTable columns={columns} data={riders} loading={ridersLoading} />
      </div>

      {modalOpen && (
        <Modal isOpen onClose={() => setModalOpen(false)} title="Create Rider" size="lg">
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Franchise + City */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Franchise</Label>
                <Select
                  value={formData.franchiseId}
                  onValueChange={(v) => {
                    const f = franchises.find(x => x.id === v);
                    setFormData(p => ({
                      ...p,
                      franchiseId: v,
                      cityId: f?.cityId || ''
                    }));
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select franchise" />
                  </SelectTrigger>
                  <SelectContent>
                    {franchises.map(f => (
                      <SelectItem key={f.id} value={f.id}>{f.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>City</Label>
                <Select
                  value={formData.cityId}
                  onValueChange={v => setFormData(p => ({ ...p, cityId: v }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map(c => (
                      <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Basic Info */}
            <Input placeholder="Full name" value={formData.fullName} onChange={e => setFormData(p => ({ ...p, fullName: e.target.value }))} />
            <Input placeholder="Phone" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} />

            <Select value={formData.vehicleType} onValueChange={v => setFormData(p => ({ ...p, vehicleType: v }))}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="BIKE">Bike</SelectItem>
                <SelectItem value="MOTORBIKE">Motorbike</SelectItem>
                <SelectItem value="VAN">Van</SelectItem>
              </SelectContent>
            </Select>

            <Input type="email" placeholder="Email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} />
            <Input type="password" placeholder="Password" value={formData.password} onChange={e => setFormData(p => ({ ...p, password: e.target.value }))} />

            {/* Docs */}
            <div className="border p-3 rounded-xl">
              <div className="flex gap-2">
                <Select value={selectedDocType} onValueChange={setSelectedDocType}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CNIC">CNIC</SelectItem>
                    <SelectItem value="DRIVING_LICENSE">License</SelectItem>
                    <SelectItem value="VEHICLE_REGISTRATION">Registration</SelectItem>
                  </SelectContent>
                </Select>

                <Button type="button" onClick={() => fileInputRef.current.click()}>
                  Upload
                </Button>

                <input hidden ref={fileInputRef} type="file" onChange={handleFileSelect} />
              </div>

              {riderDocuments.map(d => (
                <div key={d.id} className="flex justify-between mt-2 text-xs">
                  {d.originalName}
                  <X onClick={() => setRiderDocuments(p => p.filter(x => x.id !== d.id))} />
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
              <Button disabled={formLoading} type="submit">
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
