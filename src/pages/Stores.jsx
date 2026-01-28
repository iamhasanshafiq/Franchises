import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
import L from "leaflet";
import { Plus, Search, MapPin, Eye, Map as MapIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";

// Components (Assuming these paths)
import Header from "../components/common/Header";
import DashboardLayout from "../components/layout/DashboardLayout";
import DataTable from "../components/common/DataTable";
import Modal from "../components/common/Modal";
import StatusBadge from "../components/common/StatusBadge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const BASE_URL = "https://api.barqibazar.org/franchise/api";

// --- Leaflet Fixes ---
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// --- Helper Components ---

// 1. Fixes the "Grey Map" issue when modal opens
function MapResizer() {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 200);
  }, [map]);
  return null;
}

// 2. Handles clicking on the map to drop a pin
function LocationPicker({ onPick }) {
  useMapEvents({
    click(e) {
      onPick(e.latlng);
    },
  });
  return null;
}

const Stores = () => {
  const navigate = useNavigate();
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [myFranchise, setMyFranchise] = useState(null);
  
  // Search state for the map
  const [mapSearch, setMapSearch] = useState("");
  const [searchingMap, setSearchingMap] = useState(false);

  const [marker, setMarker] = useState(null);
  const [mapCenter, setMapCenter] = useState([33.6844, 73.0479]); // Islamabad

  const initialFormState = {
    franchiseId: "",
    cityId: "",
    name: "",
    address: "",
    latitude: "",
    longitude: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  // API Wrapper
  const apiCall = useCallback(async (endpoint, method = "GET", data = null) => {
    const token = localStorage.getItem("access_token");
    return axios({
      method,
      url: `${BASE_URL}${endpoint}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data,
    });
  }, []);

  const refreshData = useCallback(async () => {
    setLoading(true);
    try {
      const [storeRes, meRes] = await Promise.all([
        apiCall("/stores?page=1&limit=100"),
        apiCall("/franchises/me/franchise")
      ]);
      setStores(storeRes.data?.data?.items || storeRes.data?.data || []);
      if (meRes.data?.status === "success") setMyFranchise(meRes.data.data);
    } catch (err) {
      toast.error("Failed to sync data");
    } finally {
      setLoading(false);
    }
  }, [apiCall]);

  useEffect(() => { refreshData(); }, [refreshData]);

  // Search Map logic (Nominatim API)
  const handleMapSearch = async () => {
    if (!mapSearch) return;
    setSearchingMap(true);
    try {
      const res = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${mapSearch}`);
      if (res.data && res.data.length > 0) {
        const { lat, lon } = res.data[0];
        const newPos = [parseFloat(lat), parseFloat(lon)];
        setMapCenter(newPos);
        handlePick({ lat: parseFloat(lat), lng: parseFloat(lon) });
      } else {
        toast.error("Location not found");
      }
    } catch (err) {
      toast.error("Search failed");
    } finally {
      setSearchingMap(false);
    }
  };

  const handlePick = (latlng) => {
    setMarker(latlng);
    setFormData(p => ({
      ...p,
      latitude: latlng.lat.toFixed(6),
      longitude: latlng.lng.toFixed(6)
    }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!marker) return toast.error("Please pick a location on the map");
    setFormLoading(true);
    try {
      await apiCall("/stores", "POST", {
        ...formData,
        localStoreid: crypto.randomUUID(),
        latitude: parseFloat(formData.latitude),
        longitude: parseFloat(formData.longitude),
        franchiseId: myFranchise?.id,
        cityId: myFranchise?.cityId
      });
      toast.success("Store Hub Registered");
      setModalOpen(false);
      refreshData();
    } catch (err) {
      toast.error("Creation failed");
    } finally {
      setFormLoading(false);
    }
  };

  const columns = useMemo(() => [
    {
      key: "name",
      label: "Hub Details",
      render: (v, r) => (
        <div className="flex gap-3 items-center">
          <div className="p-2 bg-primary/10 text-primary rounded-lg"><MapIcon size={18} /></div>
          <div>
            <div className="font-bold text-gray-900">{v}</div>
            <div className="text-[10px] font-mono text-gray-400">{r.localStoreid?.slice(0,8)}...</div>
          </div>
        </div>
      ),
    },
    { key: "address", label: "Address" },
    { key: "status", label: "Status", render: (v) => <StatusBadge status={v || "ACTIVE"} /> },
    {
      key: "actions",
      label: "",
      render: (_, r) => (
        <Button variant="ghost" size="sm" onClick={() => navigate(`/stores/${r.id}`)}>
          <Eye size={16} className="mr-2" /> View
        </Button>
      ),
    },
  ], [navigate]);

  return (
    <DashboardLayout>
      <Header title="Store Management" subtitle="Manage and locate your franchise hubs" />

      <div className="p-6 space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
            <Input className="pl-10" placeholder="Filter stores..." />
          </div>
          <Button onClick={() => { setMarker(null); setModalOpen(true); }} className="w-full md:w-auto">
            <Plus size={18} className="mr-2" /> Register New Hub
          </Button>
        </div>

        <DataTable columns={columns} data={stores} loading={loading} />
      </div>

      {modalOpen && (
        <Modal isOpen onClose={() => setModalOpen(false)} title="Register Store Hub" size="xl">
          <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Column: Form Fields */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Store Name</label>
                <Input 
                  placeholder="e.g. Blue Area Hub" 
                  value={formData.name} 
                  onChange={e => setFormData(p => ({...p, name: e.target.value}))} 
                  required 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Physical Address</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 size-4 text-gray-400"/>
                  <textarea 
                    className="w-full min-h-[80px] pl-10 pr-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Enter full address..."
                    value={formData.address}
                    onChange={e => setFormData(p => ({...p, address: e.target.value}))}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-gray-500 font-bold">Latitude</label>
                  <Input readOnly className="bg-gray-50" value={formData.latitude}/>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-gray-500 font-bold">Longitude</label>
                  <Input readOnly className="bg-gray-50" value={formData.longitude}/>
                </div>
              </div>

              <div className="flex gap-3 pt-6">
                <Button type="button" variant="outline" onClick={()=>setModalOpen(false)} className="flex-1">Cancel</Button>
                <Button type="submit" disabled={formLoading} className="flex-[2]">
                  {formLoading ? <Loader2 className="animate-spin" /> : "Confirm & Save Hub"}
                </Button>
              </div>
            </div>

            {/* Right Column: Interactive Map */}
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input 
                  placeholder="Search city or area..." 
                  value={mapSearch} 
                  onChange={(e) => setMapSearch(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleMapSearch())}
                />
                <Button type="button" variant="secondary" onClick={handleMapSearch} disabled={searchingMap}>
                  {searchingMap ? <Loader2 className="size-4 animate-spin" /> : <Search size={16} />}
                </Button>
              </div>

              <div className="h-[350px] rounded-xl overflow-hidden border relative group">
                <MapContainer center={mapCenter} zoom={13} style={{height:"100%", width:"100%"}}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                  <MapResizer />
                  <LocationPicker onPick={handlePick}/>
                  {marker && <Marker position={marker}/>}
                </MapContainer>
                <div className="absolute bottom-2 left-2 z-[1000] bg-white/90 px-2 py-1 rounded text-[10px] font-medium shadow-sm">
                  Click on map to set store location
                </div>
              </div>
            </div>

          </form>
        </Modal>
      )}
    </DashboardLayout>
  );
};

export default Stores;