import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from "@react-google-maps/api";
import { Plus, Search, MapPin, Eye, Map as MapIcon, Loader2, Hash, Navigation } from "lucide-react";
import { toast } from "sonner";

import Header from "../components/common/Header";
import DashboardLayout from "../components/layout/DashboardLayout";
import DataTable from "../components/common/DataTable";
import Modal from "../components/common/Modal";
import StatusBadge from "../components/common/StatusBadge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
//   Loding
import TableSkeleton from '../components/common/TableSkeleton';

const BASE_URL = "https://api.barqibazar.org/franchise/api";
const GOOGLE_MAPS_API_KEY = "AIzaSyDP6KnwXJ9tyIbT4qAC7XIX3rdmqABnVco";
const LIBRARIES = ["places"];

const Stores = () => {
  const navigate = useNavigate();
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [myFranchise, setMyFranchise] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const autocompleteRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    localStoreid: "", // Manual UUID entry
    name: "",
    address: "",
    latitude: 33.6844,
    longitude: 73.0479,
  });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: LIBRARIES,
  });

  const apiCall = useCallback(async (endpoint, method = "GET", data = null) => {
    const token = localStorage.getItem("access_token");
    return axios({
      method,
      url: `${BASE_URL}${endpoint}`,
      headers: { Authorization: `Bearer ${token}` },
      data,
    });
  }, []);

  const refreshData = useCallback(async () => {
    setLoading(true);
    try {
      const [storeRes, meRes] = await Promise.all([
        apiCall("/stores?page=1&limit=100"),
        apiCall("/franchises/me/franchise"),
      ]);
      setStores(storeRes.data?.data?.items || storeRes.data?.data || []);
      if (meRes.data?.status === "success") setMyFranchise(meRes.data.data);
    } catch (err) {
      toast.error("Network synchronization failed");
    } finally {
      setLoading(false);
    }
  }, [apiCall]);

  useEffect(() => { refreshData(); }, [refreshData]);

  // --- MAP LOGIC ---
  const handleMapClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setFormData((prev) => ({ ...prev, latitude: lat, longitude: lng }));

    // Auto-fill address from click
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === "OK" && results[0]) {
        setFormData(prev => ({ ...prev, address: results[0].formatted_address }));
      }
    });
  };

  const onPlaceSelected = () => {
    const place = autocompleteRef.current.getPlace();
    if (place.geometry) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setFormData(prev => ({
        ...prev,
        latitude: lat,
        longitude: lng,
        address: place.formatted_address || prev.address
      }));
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      await apiCall("/stores", "POST", {
        ...formData,
        latitude: Number(formData.latitude),
        longitude: Number(formData.longitude),
        franchiseId: myFranchise?.id,
        cityId: myFranchise?.cityId,
      });
      toast.success("New Hub Provisioned Successfully");
      setModalOpen(false);
      refreshData();
    } catch (err) {
      toast.error(err.response?.data?.message || "Provisioning failed");
    } finally {
      setFormLoading(false);
    }
  };
  const filteredStores = useMemo(() => {
    if (!searchTerm) return stores;

    return stores.filter((store) =>
      store.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.localStoreid?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [stores, searchTerm]);
  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStores.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredStores.length / itemsPerPage);

  const columns = useMemo(() => [
    {
      key: "name",
      label: "Hub Identity",
      render: (v, r) => (
        <div className="flex gap-3 items-center">
          <div className="p-2.5 bg-orange-100 text-orange-700 rounded-xl">
            <MapIcon size={18} />
          </div>
          <div>
            <div className="font-bold text-gray-900 leading-none">{v}</div>
            <div className="text-[10px] font-mono text-gray-400 mt-1 uppercase tracking-tighter">
              Store ID: {r.localStoreid || "NO-ID"}
            </div>
          </div>
        </div>
      ),
    },
    { key: "address", label: "Address", render: (v) => <span className="text-xs text-gray-500 truncate max-w-[200px] block">{v}</span> },
    { key: "status", label: "Status", render: (v) => <StatusBadge status={v} /> },
    {
      key: "actions",
      label: "",
      render: (_, r) => (
        <Button variant="ghost" size="sm" onClick={() => navigate(`/stores/${r.id}`)}>
          <Eye size={16} className="mr-2" /> Details
        </Button>
      ),
    },
  ], [navigate]);

  return (
    <DashboardLayout>
      <Header title="Hub Control" subtitle="Provision and localize franchise store operations" />

      <div className="p-6 space-y-6 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
          <div className="relative flex gap-5 w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
            <Input
              className="pl-10 h-11 bg-gray-50 border-none rounded-xl"
              placeholder="Filter hub registry..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex items-center gap-3 bg-slate-50/80 px-4 py-1.5 rounded-2xl border border-slate-100">
              <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">Show</Label>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="bg-transparent font-bold text-slate-700 outline-none cursor-pointer text-sm"
              >
                {[5, 10, 20, 50].map(val => <option key={val} value={val}>{val}</option>)}
              </select>
            </div>

          </div>
          <Button onClick={() => setModalOpen(true)} className="w-full md:w-auto bg-orange-600 hover:bg-orange-700 h-11 px-8 rounded-xl shadow-lg shadow-orange-100 transition-all">
            <Plus size={18} className="mr-2" /> Register New Store
          </Button>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
          {loading ? (
            <TableSkeleton rows={6} />
          ) : (
            // <DataTable columns={columns} data={filteredStores} />
            <DataTable columns={columns} data={currentItems} />

          )}
        </div>
        {!loading && totalPages > 1 && (
          <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-b-3xl">

            <div className="text-sm text-gray-500 font-medium">
              Showing <span className="text-gray-900">{indexOfFirstItem + 1}</span> to{" "}
              <span className="text-gray-900">
                {Math.min(indexOfLastItem, filteredStores.length)}
              </span>{" "}
              of <span className="text-gray-900">{filteredStores.length}</span> entries
            </div>

            <div className="flex items-center gap-2">

              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-lg border text-sm disabled:opacity-40"
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 rounded text-sm ${currentPage === i + 1
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100"
                    }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage(prev => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-lg border text-sm disabled:opacity-40"
              >
                Next
              </button>

            </div>
          </div>
        )}

      </div>

      {modalOpen && (
        <Modal isOpen onClose={() => setModalOpen(false)} title="Register Store Hub" size="xl">
          <form onSubmit={handleCreate} className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-1">

            {/* Left: Configuration Details (5 units) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Store Identifier (Manual)</Label>
                  <div className="relative">
                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
                    <Input
                      placeholder="e.g. f3c4ece7-9bb5..."
                      className="pl-10 h-11 bg-white font-mono text-xs"
                      value={formData.localStoreid}
                      onChange={e => setFormData(p => ({ ...p, localStoreid: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Store Display Name</Label>
                  <Input
                    placeholder="Barqi DHA Store"
                    className="h-11 bg-white"
                    value={formData.name}
                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5 px-1">
                <Label className="text-xs font-bold text-slate-600">Physical Address</Label>
                <textarea
                  className="w-full min-h-[90px] p-3 text-sm border border-slate-200 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                  placeholder="Street, Block, Phase..."
                  value={formData.address}
                  onChange={e => setFormData(p => ({ ...p, address: e.target.value }))}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-900 rounded-2xl text-white">
                  <label className="text-[8px] font-black text-orange-500 uppercase">Latitude</label>
                  <p className="text-xs font-mono">{formData.latitude.toFixed(6)}</p>
                </div>
                <div className="p-3 bg-slate-900 rounded-2xl text-white">
                  <label className="text-[8px] font-black text-orange-500 uppercase">Longitude</label>
                  <p className="text-xs font-mono">{formData.longitude.toFixed(6)}</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="button" variant="ghost" onClick={() => setModalOpen(false)} className="flex-1">Cancel</Button>
                <Button type="submit" disabled={formLoading} className="flex-[2] bg-orange-600 hover:bg-orange-700 shadow-orange-200 shadow-lg">
                  {formLoading ? <Loader2 className="animate-spin" /> : "Confirm Hub Registry"}
                </Button>
              </div>
            </div>

            {/* Right: Map Integration (7 units) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between px-1">
                <Label className="text-xs font-black uppercase text-slate-400 tracking-widest flex items-center gap-2">
                  <Navigation size={14} className="text-orange-500" /> Geographical Positioning
                </Label>
                {isLoaded && (
                  <Autocomplete onLoad={ref => autocompleteRef.current = ref} onPlaceChanged={onPlaceSelected}>
                    <div className="relative w-64">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3 text-slate-400" />
                      <Input placeholder="Search area/city..." className="h-8 pl-8 text-xs bg-slate-100 border-none rounded-full" />
                    </div>
                  </Autocomplete>
                )}
              </div>

              <div className="h-[420px] rounded-[2rem] overflow-hidden border-8 border-slate-50 shadow-2xl relative group">
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={{ lat: formData.latitude, lng: formData.longitude }}
                    zoom={14}
                    onClick={handleMapClick}
                    options={{
                      disableDefaultUI: false,
                      mapTypeControl: false,
                      streetViewControl: false,
                      styles: mapStyles
                    }}
                  >
                    <Marker position={{ lat: formData.latitude, lng: formData.longitude }} />
                  </GoogleMap>
                ) : <div className="h-full bg-slate-50 animate-pulse flex items-center justify-center text-xs">Initializing Maps...</div>}

                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-white shadow-lg pointer-events-none">
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Current Coordinates Locked To:</p>
                  <p className="text-[11px] text-slate-800 font-medium truncate">{formData.address || "Click on map to pick location"}</p>
                </div>
              </div>
            </div>

          </form>
        </Modal>
      )}
    </DashboardLayout>
  );
};

const mapStyles = [
  { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }
];

export default Stores;


