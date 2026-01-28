import React, { useState, useEffect, useMemo, useCallback } from 'react';
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
import { toast } from 'sonner';
import { 
  Plus, Search, MapPin, Loader2, Eye, Navigation, Crosshair, Map 
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

// Updated Base URL
const BASE_URL = "https://api.barqibazar.org/franchise/api";

const Stores = () => {
  const navigate = useNavigate();
  const { role } = useAuth() || {};

  // --- STATE ---
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [geoLoading, setGeoLoading] = useState(false);
  
  const [myFranchise, setMyFranchise] = useState(null);

  const initialFormState = {
    franchiseId: '',
    cityId: '',
    localStoreid: '',
    name: '',
    address: '',
    latitude: '',
    longitude: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  // --- API HELPER ---
  const apiCall = useCallback(async (endpoint, method = 'GET', data = null) => {
    const token = localStorage.getItem('access_token'); 
    const config = {
      method,
      url: `${BASE_URL}${endpoint}`,
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      data
    };
    return axios(config);
  }, []);

  // --- AUTOMATIC GEOLOCATION ---
  const autoCaptureLocation = useCallback(() => {
    if (!navigator.geolocation) return;
    
    setGeoLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setFormData(prev => ({
          ...prev,
          latitude: pos.coords.latitude.toFixed(6),
          longitude: pos.coords.longitude.toFixed(6)
        }));
        setGeoLoading(false);
        toast.success("Current location synced automatically");
      },
      (error) => {
        console.error("Geo Error:", error);
        setGeoLoading(false);
        toast.error("Location access denied. Please enter manually.");
      },
      { enableHighAccuracy: true }
    );
  }, []);

  // --- DATA FETCHING ---
  const refreshData = useCallback(async () => {
    setLoading(true);
    try {
      // 1. Fetch Stores
      const storeRes = await apiCall('/stores?page=1&limit=100');
      setStores(storeRes.data?.data?.items || storeRes.data?.data || []);

      // 2. Fetch My Franchise Info
      const meRes = await apiCall('/franchises/me/franchise');
      // Using your shared structure: response.data.data
      if (meRes.data?.status === "success") {
        setMyFranchise(meRes.data.data);
      }
    } catch (err) {
      if (err.response?.status === 401) navigate('/login');
      toast.error("Failed to fetch store data");
    } finally {
      setLoading(false);
    }
  }, [apiCall, navigate]);

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  // --- MODAL ACTIONS ---
  const openModal = () => {
    setFormData({
      ...initialFormState,
      franchiseId: myFranchise?.id || '',
      cityId: myFranchise?.cityId || '',
    });
    setModalOpen(true);
    autoCaptureLocation(); // Trigger auto-fetch of Lat/Long immediately
  };

  const handleCreate = async (e) => {
  e.preventDefault();
  setFormLoading(true);

  try {
    const payload = {
      ...formData,
      // Generate a valid UUID if the backend requires it
      localStoreid: crypto.randomUUID(), 
      latitude: parseFloat(formData.latitude),
      longitude: parseFloat(formData.longitude)
    };

    await apiCall('/stores', 'POST', payload);
    toast.success("Store successfully registered");
    setModalOpen(false);
    refreshData();
  } catch (err) {
    // This will now catch the error if the UUID is still rejected
    toast.error(err.response?.data?.data?.localStoreid || "Registration failed");
  } finally {
    setFormLoading(false);
  }
};

  return (
    <DashboardLayout>
      <Header title="Store Hubs" subtitle="Manage and monitor local distribution nodes" />

      <div className="p-6 space-y-6 max-w-[1600px] mx-auto">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
            <Input placeholder="Search store nodes..." className="pl-10 h-11 rounded-xl bg-gray-50 border-none" />
          </div>
          <Button onClick={openModal} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 h-11 px-8 rounded-xl shadow-lg shadow-blue-200 transition-all">
            <Plus size={18} className="mr-2" /> Register New Hub
          </Button>
        </div>

        {/* Store Table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <DataTable 
            data={stores} 
            loading={loading}
            columns={[
              {
                key: 'name',
                label: 'Hub Identity',
                render: (val, row) => (
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold uppercase">
                      <Map size={18} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{val}</div>
                      <div className="text-[10px] font-mono text-gray-400">LOC-ID: {row.localStoreid}</div>
                    </div>
                  </div>
                )
              },
              { key: 'address', label: 'Address', render: (val) => <span className="text-xs text-gray-500 line-clamp-1">{val}</span> },
              { key: 'status', label: 'Status', render: (val) => <StatusBadge status={val || 'ACTIVE'} /> },
              { 
                key: 'actions', 
                label: '', 
                render: (_, row) => (
                  <Button variant="ghost" size="icon" onClick={() => navigate(`/stores/${row.id}`)}>
                    <Eye size={16} className="text-gray-400 hover:text-blue-600" />
                  </Button>
                ) 
              }
            ]} 
          />
        </div>
      </div>

      {/* Register Store Modal */}
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Register Store Hub" size="lg">
          <form onSubmit={handleCreate} className="space-y-6 py-2">
            
            {/* Locked Context Information */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
              <div className="space-y-1">
                <Label className="text-[10px] font-bold uppercase text-blue-600 tracking-wider">Assigned Franchise</Label>
                <div className="h-10 px-3 flex items-center bg-white rounded-lg border border-blue-200 text-sm font-medium text-gray-700">
                  {myFranchise?.name || "Loading..."}
                </div>
              </div>
              <div className="space-y-1">
                <Label className="text-[10px] font-bold uppercase text-blue-600 tracking-wider">Territory (City)</Label>
                <div className="h-10 px-3 flex items-center bg-white rounded-lg border border-blue-200 text-sm font-medium text-gray-700">
                  {myFranchise?.city?.name || "Auto-mapped"}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label className="text-xs font-semibold text-gray-600">Store Hub Name</Label>
                <Input placeholder="e.g. Blue Area Center" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required className="h-11" />
              </div>
              <div className="space-y-1">
                <Label className="text-xs font-semibold text-gray-600">Local ID / Code</Label>
                <Input placeholder="ST-100" className="font-mono h-11" value={formData.localStoreid} onChange={e => setFormData({...formData, localStoreid: e.target.value})} required />
              </div>
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-semibold text-gray-600">Physical Address</Label>
              <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
                  <Input className="pl-10 h-11" placeholder="Street address, landmarks..." value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} required />
              </div>
            </div>

            {/* Geolocation Section */}
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-gray-500 flex items-center gap-2">
                  <Navigation size={14}/> GPS COORDINATES
                </span>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm" 
                  onClick={autoCaptureLocation} 
                  disabled={geoLoading} 
                  className="h-8 text-blue-600 hover:bg-blue-50 text-xs font-bold"
                >
                  {geoLoading ? <Loader2 className="size-3 animate-spin mr-2"/> : <Crosshair size={14} className="mr-2"/>}
                  Refresh GPS
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label className="text-[10px] text-gray-400 uppercase">Latitude</Label>
                  <Input type="number" step="any" placeholder="0.000000" className="bg-white h-10 font-mono" value={formData.latitude} onChange={e => setFormData({...formData, latitude: e.target.value})} required />
                </div>
                <div className="space-y-1">
                  <Label className="text-[10px] text-gray-400 uppercase">Longitude</Label>
                  <Input type="number" step="any" placeholder="0.000000" className="bg-white h-10 font-mono" value={formData.longitude} onChange={e => setFormData({...formData, longitude: e.target.value})} required />
                </div>
              </div>
              {geoLoading && <p className="text-[10px] text-blue-500 animate-pulse">Detecting precise satellite location...</p>}
            </div>

            <div className="flex gap-3 pt-4 border-t">
              <Button type="button" variant="ghost" onClick={() => setModalOpen(false)} className="flex-1 h-12 rounded-xl text-gray-500">Cancel</Button>
              <Button type="submit" disabled={formLoading || geoLoading} className="flex-[2] bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 font-bold shadow-lg shadow-blue-100">
                {formLoading ? <Loader2 className="animate-spin mr-2" /> : 'Confirm & Create Hub'}
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </DashboardLayout>
  );
};

export default Stores;