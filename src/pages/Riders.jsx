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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { uploadFiles } from '../utils/fileUpload';
import { toast } from 'sonner';

const Riders = () => {
  const navigate = useNavigate();
  const { token } = useAuth(); // Using token from auth context

  const { riders, loading: ridersLoading, fetchRiders, createRider } = useRiders();
  const { cities, fetchCities, loading: citiesLoading } = useCities();

  // --- 1. Custom Franchise Logic ---
  const [myFranchise, setMyFranchise] = useState(null);
  const [myFranchiseLoading, setMyFranchiseLoading] = useState(false);

  const fetchMyFranchise = async () => {
    setMyFranchiseLoading(true);
    // Always get the freshest token from storage to avoid closure staleness
    const accessToken = localStorage.getItem('access_token');

    try {
      const response = await axios.get('https://api.barqibazar.org/franchise/api/franchises/me/franchise', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      
      // Fixed: Accessing response.data.data based on your JSON structure
      if (response.data?.status === "success") {
        setMyFranchise(response.data.data);
      }
    } catch (error) {
      console.error("Franchise Fetch Error:", error);
      if (error.response?.status === 401) {
        toast.error("Session expired. Please login again.");
        navigate('/login');
      }
    } finally {
      setMyFranchiseLoading(false);
    }
  };

  // --- 2. Local State ---
  const [modalOpen, setModalOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [docLoading, setDocLoading] = useState(false);
  const fileInputRef = useRef(null);

  const initialFormState = {
    fullName: '', phone: '', vehicleType: 'BIKE',
    franchiseId: '', cityId: '', email: '',
    password: '', identityNumber: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [riderDocuments, setRiderDocuments] = useState([]);
  const [selectedDocType, setSelectedDocType] = useState('CNIC');

  // --- 3. Initial Load ---
  useEffect(() => {
    fetchRiders();
    fetchCities({ page: 1, limit: 100 });
    fetchMyFranchise();
  }, []);

  // --- 4. Handlers ---
  const openModal = () => {
    // Fixed: Correctly mapping from the nested 'data' object structure
    setFormData({
      ...initialFormState,
      franchiseId: myFranchise?.id || '',
      cityId: myFranchise?.cityId || '' 
    });
    setRiderDocuments([]);
    setModalOpen(true);
  };

  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    setDocLoading(true);
    try {
      const uploadedFiles = await uploadFiles(files);
      const newDocs = uploadedFiles.map(file => ({
        documentType: selectedDocType,
        documentUrl: file.url,
        originalName: file.originalName,
        id: Math.random().toString(36).substr(2, 9)
      }));
      setRiderDocuments(prev => [...prev, ...newDocs]);
      toast.success("Document attached");
    } catch (error) {
      toast.error("Upload failed");
    } finally {
      setDocLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.franchiseId || !formData.cityId) {
      return toast.error("Franchise and City assignment is required.");
    }

    setFormLoading(true);
    try {
      await createRider({
        ...formData,
        documents: riderDocuments.map(({ documentType, documentUrl }) => ({ documentType, documentUrl }))
      });
      setModalOpen(false);
      fetchRiders();
      toast.success("Rider initialized successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to create rider");
    } finally {
      setFormLoading(false);
    }
  };

  const columns = useMemo(() => [
    {
      key: 'fullName',
      label: 'Rider Identity',
      render: (val, row) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-green-700 font-bold uppercase">
            {val?.charAt(0) || 'R'}
          </div>
          <div>
            <span className="block font-bold text-gray-900">{val}</span>
            <span className="block text-xs text-gray-500">{row.email}</span>
          </div>
        </div>
      )
    },
    { key: 'phone', label: 'Contact', render: (val) => <span className="font-mono text-sm">{val}</span> },
    { key: 'vehicleType', label: 'Vehicle', render: (val) => <span className="text-xs font-bold uppercase bg-gray-100 px-2 py-1 rounded">{val}</span> },
    { key: 'status', label: 'Status', render: (val) => <StatusBadge status={val} /> },
    { key: 'actions', label: 'Actions', render: (_, row) => <Button size="sm" variant="ghost" onClick={() => navigate(`/riders/${row.id}`)}><Eye size={16} /></Button> }
  ], [navigate]);

  return (
    <DashboardLayout>
      <Header title="Fleet Operations" subtitle="Manage delivery personnel" />

      <div className="p-6 max-w-[1600px] mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search riders..." className="pl-10 h-10 rounded-xl bg-gray-50 border-gray-200 focus:ring-green-500" />
          </div>
          <Button onClick={openModal} className="w-full sm:w-auto rounded-xl h-10 px-6 bg-green-600 hover:bg-green-700 text-white transition-all shadow-md">
            <Plus size={18} className="mr-2" /> Initialize Rider
          </Button>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
          <DataTable columns={columns} data={riders} loading={ridersLoading} emptyMessage="No active riders found." />
        </div>
      </div>

      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="New Rider Registration" size="lg">
          <form className="space-y-5 py-2" onSubmit={handleSubmit}>

            {/* Fixed Context Section */}
            <div className="bg-green-50/50 p-4 rounded-xl border border-green-100 grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label className="text-[10px] font-bold uppercase text-green-700 tracking-wider">Assigned Franchise</Label>
                <Input
                  disabled
                  value={myFranchiseLoading ? "Loading..." : (myFranchise?.name || "Not Assigned")}
                  className="h-10 bg-white border-green-200 disabled:opacity-100 font-medium text-gray-700"
                />
              </div>

              <div className="space-y-1">
                <Label className="text-[10px] font-bold uppercase text-green-700 tracking-wider">Territory (City)</Label>
                {/* Auto-selecting the city from the Franchise Data */}
                <Input
                  disabled
                  value={myFranchise?.city?.name || "No City Assigned"}
                  className="h-10 bg-white border-green-200 disabled:opacity-100 font-medium text-gray-700"
                />
              </div>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2 space-y-1">
                <Label className="text-xs font-semibold">Full Legal Name</Label>
                <div className="relative">
                  <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input className="pl-9 h-10" placeholder="e.g. Ahmed Khan" value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} required />
                </div>
              </div>
              <div className="space-y-1">
                <Label className="text-xs font-semibold">Phone Number</Label>
                <Input className="h-10" placeholder="03xx xxxxxxx" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} required />
              </div>
              <div className="space-y-1">
                <Label className="text-xs font-semibold">Vehicle Type</Label>
                <Select value={formData.vehicleType} onValueChange={val => setFormData({ ...formData, vehicleType: val })}>
                  <SelectTrigger className="h-10"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BIKE">Bike</SelectItem>
                    <SelectItem value="MOTORBIKE">Motorbike</SelectItem>
                    <SelectItem value="VAN">Van</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1">
                <Label className="text-xs font-semibold">Rider Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input className="pl-9 h-10" type="email" placeholder="rider@barqi.pk" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                </div>
              </div>
              <div className="space-y-1">
                <Label className="text-xs font-semibold">Access Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input className="pl-9 h-10" type="password" placeholder="••••••••" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} required />
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div className="flex gap-2 mb-3">
                <Select value={selectedDocType} onValueChange={setSelectedDocType}>
                  <SelectTrigger className="w-1/3 h-9 bg-white"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CNIC">CNIC</SelectItem>
                    <SelectItem value="DRIVING_LICENSE">License</SelectItem>
                    <SelectItem value="VEHICLE_REGISTRATION">Registration</SelectItem>
                  </SelectContent>
                </Select>
                <Button type="button" variant="outline" className="flex-1 h-9 bg-white border-dashed text-gray-600 hover:bg-green-50 hover:text-green-600" onClick={() => fileInputRef.current?.click()}>
                  {docLoading ? <Loader2 className="animate-spin w-4 h-4" /> : <><Upload className="w-4 h-4 mr-2" /> Upload Proof</>}
                </Button>
                <input type="file" ref={fileInputRef} onChange={handleFileSelect} className="hidden" />
              </div>

              <div className="grid grid-cols-1 gap-2">
                {riderDocuments.map(doc => (
                  <div key={doc.id} className="flex justify-between items-center p-2.5 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <FileText size={14} className="text-blue-500 flex-shrink-0" />
                      <span className="text-xs font-medium truncate max-w-[180px]">{doc.originalName}</span>
                      <span className="text-[9px] font-bold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded uppercase">{doc.documentType}</span>
                    </div>
                    <button type="button" className="text-gray-400 hover:text-red-500" onClick={() => setRiderDocuments(prev => prev.filter(d => d.id !== doc.id))}>
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-100">
              <Button type="button" variant="ghost" onClick={() => setModalOpen(false)} className="flex-1 h-11" disabled={formLoading}>Cancel</Button>
              <Button type="submit" className="flex-[2] h-11 bg-green-600 hover:bg-green-700 text-white font-semibold" disabled={formLoading}>
                {formLoading ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : 'Confirm & Initialize Rider'}
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </DashboardLayout>
  );
};

export default Riders;