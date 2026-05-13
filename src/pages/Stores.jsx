import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

import {
  Plus,
  Search,
  MapPin,
  Eye,
  Loader2,
  Hash,
  Navigation,
  Trash2,
  SquarePen,
  Store,
  Activity,
  Globe,
  ShieldCheck,
  ArrowRight,
  BarChart3,
  Sparkles,
  Radar,
  Building2,
} from "lucide-react";

import { toast } from "sonner";

import { motion } from "framer-motion";

import Header from "../components/common/Header";
import DashboardLayout from "../components/layout/DashboardLayout";
import DataTable from "../components/common/DataTable";
import Modal from "../components/common/Modal";
import ConfirmDialog from "../components/common/ConfirmDialog";
import StatusBadge from "../components/common/StatusBadge";
import TableSkeleton from "../components/common/TableSkeleton";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Progress } from "../components/ui/progress";

import { FRANCHISE_URL, joinUrl } from "../config/serviceUrls";

import { useAuth } from "../hooks/useAuth";
import { useStores } from "../hooks/useStores";

import { storesApi } from "../api/stores.api";

const BASE_URL = FRANCHISE_URL;

const GOOGLE_MAPS_API_KEY =
  "AIzaSyDP6KnwXJ9tyIbT4qAC7XIX3rdmqABnVco";

const LIBRARIES = ["places"];

const Stores = () => {

  const navigate = useNavigate();

  const { isFranchiseAdmin, isAdmin } = useAuth();

  const {
    stores,
    loading: storesLoading,
    fetchStores,
    hardDeleteStore,
  } = useStores();

  const [modalOpen, setModalOpen] = useState(false);

  const [formLoading, setFormLoading] = useState(false);

  const [myFranchise, setMyFranchise] = useState(null);

  const [franchiseLoading, setFranchiseLoading] =
    useState(false);

  const [deleteConfirmOpen, setDeleteConfirmOpen] =
    useState(false);

  const [selectedStore, setSelectedStore] =
    useState(null);

  const [deleteLoading, setDeleteLoading] =
    useState(false);

  const [currentPage, setCurrentPage] =
    useState(1);

  const [itemsPerPage, setItemsPerPage] =
    useState(10);

  const [pageLoaded, setPageLoaded] =
    useState(false);

  const [searchTerm, setSearchTerm] =
    useState("");

  const loading =
    storesLoading || franchiseLoading;

  const autocompleteRef = useRef(null);

  const [formData, setFormData] = useState({
    localStoreid: "",
    name: "",
    address: "",
    latitude: 33.6844,
    longitude: 73.0479,
  });

  // =========================================
  // GOOGLE MAP
  // =========================================

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: LIBRARIES,
  });

  // =========================================
  // PAGE LOAD
  // =========================================

  useEffect(() => {

    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 300);

    return () => clearTimeout(timer);

  }, []);

  // =========================================
  // RESET FORM
  // =========================================

  useEffect(() => {

    if (!modalOpen) {

      setFormData({
        localStoreid: "",
        name: "",
        address: "",
        latitude: 33.6844,
        longitude: 73.0479,
      });

    }

  }, [modalOpen]);

  // =========================================
  // API CALL
  // =========================================

  const apiCall = useCallback(
    async (
      endpoint,
      method = "GET",
      data = null
    ) => {

      const token =
        localStorage.getItem("access_token");

      return axios({
        method,
        url: joinUrl(BASE_URL, endpoint),
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data,
      });

    },
    []
  );

  // =========================================
  // FETCH FRANCHISE
  // =========================================

  const fetchMyFranchise =
    useCallback(async () => {

      if (!isFranchiseAdmin()) return;

      setFranchiseLoading(true);

      try {

        const meRes = await apiCall(
          "/franchises/me/franchise"
        );

        if (
          meRes.data?.status === "success"
        ) {
          setMyFranchise(meRes.data.data);
        }

      } catch (err) {

        toast.error(
          "Failed to load franchise data"
        );

      } finally {

        setFranchiseLoading(false);

      }

    }, [apiCall, isFranchiseAdmin]);

  // =========================================
  // FETCH DATA
  // =========================================

  useEffect(() => {

    fetchStores();

    fetchMyFranchise();

  }, [fetchStores, fetchMyFranchise]);

  // =========================================
  // MAP CLICK
  // =========================================

  const handleMapClick = (e) => {

    if (!window.google || !e?.latLng)
      return;

    const lat = e.latLng.lat();

    const lng = e.latLng.lng();

    setFormData(prev => ({
      ...prev,
      latitude: lat,
      longitude: lng,
    }));

    const geocoder =
      new window.google.maps.Geocoder();

    geocoder.geocode(
      {
        location: { lat, lng },
      },
      (results, status) => {

        if (
          status === "OK" &&
          results?.[0]
        ) {

          setFormData(prev => ({
            ...prev,
            address:
              results[0]
                .formatted_address,
          }));

        }

      }
    );

  };

  // =========================================
  // PLACE SEARCH
  // =========================================

  const onPlaceSelected = () => {

    if (!autocompleteRef.current)
      return;

    const place =
      autocompleteRef.current.getPlace();

    if (!place?.geometry) return;

    const lat =
      place.geometry.location.lat();

    const lng =
      place.geometry.location.lng();

    setFormData(prev => ({
      ...prev,
      latitude: lat,
      longitude: lng,
      address:
        place.formatted_address ||
        prev.address,
    }));

  };

  // =========================================
  // CREATE STORE
  // =========================================

  const UUID_REGEX =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  const handleCreate = async (e) => {

    e.preventDefault();

    if (!myFranchise?.id) {

      toast.error(
        "Franchise not loaded. Please refresh and try again."
      );

      return;

    }

    if (
      formData.localStoreid &&
      !UUID_REGEX.test(
        formData.localStoreid
      )
    ) {

      toast.error(
        "Store Identifier must be valid UUID"
      );

      return;

    }

    setFormLoading(true);

    try {

      await storesApi.create({
        ...formData,
        latitude: Number(
          formData.latitude
        ),
        longitude: Number(
          formData.longitude
        ),
        franchiseId: myFranchise.id,
        cityId: myFranchise.cityId,
      });

      toast.success(
        "New Hub Provisioned Successfully"
      );

      setModalOpen(false);

      fetchStores();

    } catch (err) {

      toast.error(
        err?.response?.data?.message ||
        err?.message ||
        "Provisioning failed"
      );

    } finally {

      setFormLoading(false);

    }

  };

  // =========================================
  // FILTERED STORES
  // =========================================

  const filteredStores = useMemo(() => {

    if (!searchTerm) return stores;

    return stores.filter(store =>
      store.name
        ?.toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        ) ||

      store.address
        ?.toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        ) ||

      String(
        store.localStoreid || ""
      )
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
    );

  }, [stores, searchTerm]);

  // =========================================
  // PAGINATION
  // =========================================

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const totalPages = Math.ceil(
    filteredStores.length /
      itemsPerPage
  );

  const currentItems = useMemo(() => {

    const start =
      (currentPage - 1) *
      itemsPerPage;

    return filteredStores.slice(
      start,
      start + itemsPerPage
    );

  }, [
    filteredStores,
    currentPage,
    itemsPerPage,
  ]);

  // =========================================
  // ANALYTICS
  // =========================================

  const analytics = useMemo(() => {

    const total =
      stores?.length || 0;

    const active =
      stores?.filter(
        s =>
          s.status === "ACTIVE"
      ).length || 0;

    const inactive =
      total - active;

    const efficiency =
      total > 0
        ? Math.round(
            (active / total) * 100
          )
        : 0;

    return {
      total,
      active,
      inactive,
      efficiency,
    };

  }, [stores]);

  // =========================================
  // DELETE
  // =========================================

  const handleDeleteClick = (
    store
  ) => {

    setSelectedStore(store);

    setDeleteConfirmOpen(true);

  };

  const handleConfirmDelete =
    async () => {

      if (!selectedStore) return;

      try {

        setDeleteLoading(true);

        await hardDeleteStore(
          selectedStore.id
        );

      } catch {

      } finally {

        setDeleteLoading(false);

        setDeleteConfirmOpen(false);

        setSelectedStore(null);

      }

    };

  // =========================================
  // TABLE COLUMNS
  // =========================================

  const columns = useMemo(
    () => [
      {
        key: "name",
        label: "Store Hub",

        render: (v, r) => (

          <div className="flex items-center gap-4">

            <div
              className="
w-12
h-12
rounded-2xl
bg-orange-500/10
text-orange-500
flex
items-center
justify-center
shadow-lg
shadow-orange-500/10
group-hover:scale-110
transition-all
duration-500
"
            >

              <Store size={20} />

            </div>

            <div>

              <p
                className="
font-black
text-sm
text-slate-800
dark:text-white
tracking-tight
"
              >
                {v}
              </p>

              <p
                className="
text-xs
text-slate-500
dark:text-slate-400
mt-1
"
              >
                {r.localStoreid ||
                  "No UUID"}
              </p>

            </div>

          </div>

        ),
      },

      {
        key: "address",
        label: "Location",

        render: (v) => (

          <div className="max-w-[280px]">

            <p
              className="
text-sm
text-slate-600
dark:text-slate-300
truncate
"
            >
              {v}
            </p>

          </div>

        ),
      },

      {
        key: "status",
        label: "Status",

        render: (v) => (
          <StatusBadge status={v} />
        ),
      },

      {
        key: "actions",
        label: "",

        render: (_, r) => (

          <div className="flex items-center gap-2">

            <Button
              size="sm"
              variant="ghost"
              onClick={() =>
                navigate(`/stores/${r.id}`)
              }
              className="
rounded-xl
hover:bg-orange-500/10
hover:text-orange-500
transition-all
duration-300
"
            >

              <Eye size={16} />

            </Button>

            {isFranchiseAdmin() && (

              <Button
                size="sm"
                variant="ghost"
                onClick={() =>
                  navigate(
                    `/stores/${r.id}`,
                    {
                      state: {
                        editMode: true,
                      },
                    }
                  )
                }
                className="
rounded-xl
hover:bg-indigo-500/10
hover:text-indigo-500
transition-all
duration-300
"
              >

                <SquarePen
                  size={16}
                />

              </Button>

            )}

            {isAdmin() && (

              <Button
                size="sm"
                variant="ghost"
                onClick={() =>
                  handleDeleteClick(r)
                }
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

            )}

          </div>

        ),
      },
    ],
    [navigate, isAdmin]
  );

  // =========================================
  // GLASS
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

  // =========================================
  // LOADER
  // =========================================

  if (!pageLoaded) {

    return (

      <div
        className="
min-h-screen
flex
items-center
justify-center
bg-[#03140F]
"
      >

        <div
          className="
w-14
h-14
rounded-full
border-4
border-orange-500/20
border-t-orange-500
animate-spin
"
        />

      </div>

    );

  }

  return (

    <DashboardLayout>

      <div
        className="
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
"
      >

        <Header
          title="Franchise Infrastructure"
          subtitle="Manage intelligent store ecosystem"
        />

        <motion.div

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          className="
relative
overflow-hidden
p-6
lg:p-8
space-y-8
max-w-[1600px]
mx-auto
"
        >

          {/* BACKGROUND */}

          <div className="absolute inset-0 -z-10 overflow-hidden">

            <div
              className="
absolute
top-[-10%]
left-[-10%]
w-[420px]
h-[420px]
bg-orange-500/10
rounded-full
blur-[120px]
"
            />

            <div
              className="
absolute
bottom-[-10%]
right-[-10%]
w-[420px]
h-[420px]
bg-indigo-500/10
rounded-full
blur-[120px]
"
            />

          </div>

          {/* STATS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <motion.div
              whileHover={{
                y: -4,
              }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <p
                    className="
text-[11px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
mb-2
"
                  >
                    Total Hubs
                  </p>

                  <h2
                    className="
text-3xl
font-black
text-slate-800
dark:text-white
"
                  >
                    {analytics.total}
                  </h2>

                </div>

                <div
                  className="
w-14
h-14
rounded-2xl
bg-orange-500/10
text-orange-500
flex
items-center
justify-center
"
                >

                  <Building2 size={24} />

                </div>

              </div>

            </motion.div>

            <motion.div
              whileHover={{
                y: -4,
              }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <p
                    className="
text-[11px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
mb-2
"
                  >
                    Active Stores
                  </p>

                  <h2
                    className="
text-3xl
font-black
text-slate-800
dark:text-white
"
                  >
                    {analytics.active}
                  </h2>

                </div>

                <div
                  className="
w-14
h-14
rounded-2xl
bg-emerald-500/10
text-emerald-500
flex
items-center
justify-center
"
                >

                  <ShieldCheck
                    size={24}
                  />

                </div>

              </div>

            </motion.div>

            <motion.div
              whileHover={{
                y: -4,
              }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="flex items-center justify-between">

                <div className="flex-1">

                  <p
                    className="
text-[11px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
mb-3
"
                  >
                    Efficiency
                  </p>

                  <div className="flex items-center justify-between mb-3">

                    <h2
                      className="
text-3xl
font-black
text-slate-800
dark:text-white
"
                    >
                      {analytics.efficiency}%
                    </h2>

                    <Radar
                      size={20}
                      className="text-indigo-500"
                    />

                  </div>

                  <Progress
                    value={
                      analytics.efficiency
                    }
                    className="
h-2
bg-slate-200
dark:bg-slate-800
"
                  />

                </div>

              </div>

            </motion.div>

          </div>

          {/* TABLE */}

          <motion.div

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
            }}

            className={`${glassCard} rounded-[2.5rem] overflow-hidden`}
          >

            {/* HEADER */}

            <div
              className="
p-6
border-b
border-slate-200
dark:border-slate-800
flex
flex-col
lg:flex-row
justify-between
lg:items-center
gap-5
bg-white/60
dark:bg-slate-900/40
backdrop-blur-xl
"
            >

              <div className="flex items-center gap-4">

                <div
                  className="
p-3
rounded-2xl
bg-gradient-to-br
from-orange-500
to-orange-600
text-white
shadow-lg
shadow-orange-500/20
"
                >

                  <Sparkles size={20} />

                </div>

                <div>

                  <h3
                    className="
text-lg
font-black
tracking-tight
text-slate-800
dark:text-white
"
                  >
                    Franchise Store Matrix
                  </h3>

                  <p
                    className="
text-sm
text-slate-500
dark:text-slate-400
mt-1
"
                  >
                    Real-time infrastructure overview
                  </p>

                </div>

              </div>

              <div
                className="
flex
flex-col
md:flex-row
items-center
gap-3
w-full
lg:w-auto
"
              >

                <div className="relative w-full md:w-80">

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
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(
                        e.target.value
                      )
                    }
                    placeholder="Search stores..."
                    className="
pl-10
h-11
rounded-2xl
border-slate-200
dark:border-slate-700
bg-white/70
dark:bg-slate-900/50
"
                  />

                </div>

                <select
                  value={itemsPerPage}
                  onChange={(e) => {

                    setItemsPerPage(
                      Number(
                        e.target.value
                      )
                    );

                    setCurrentPage(1);

                  }}
                  className="
h-11
px-4
rounded-2xl
border
border-slate-200
dark:border-slate-700
bg-white
dark:bg-slate-900
font-bold
text-sm
outline-none
"
                >

                  {[5, 10, 20, 50].map(
                    (val) => (

                      <option
                        key={val}
                        value={val}
                      >
                        {val}
                      </option>

                    )
                  )}

                </select>

                {isFranchiseAdmin() && (

                  <Button
                    onClick={() =>
                      setModalOpen(true)
                    }
                    className="
h-11
rounded-2xl
px-5
font-bold
gap-2
bg-orange-500
hover:bg-orange-600
shadow-lg
shadow-orange-500/20
transition-all
duration-500
hover:scale-[1.02]
"
                  >

                    <Plus size={18} />

                    Initialize Hub

                  </Button>

                )}

              </div>

            </div>

            {/* TABLE */}

            <div className="p-4">

              {loading ? (

                <TableSkeleton rows={6} />

              ) : (

                <DataTable
                  columns={columns}
                  data={currentItems}
                />

              )}

            </div>

            {/* FOOTER */}

            <div
              className="
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
"
            >

              <div
                className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
dark:text-slate-400
"
              >

                Showing
                {" "}
                {(currentPage - 1) *
                  itemsPerPage +
                  1}

                {" - "}

                {Math.min(
                  currentPage *
                    itemsPerPage,
                  filteredStores.length
                )}

                {" "}
                of
                {" "}
                {filteredStores.length}

              </div>

              <div className="flex items-center gap-3">

                <Button
                  size="sm"
                  variant="outline"
                  disabled={
                    currentPage === 1
                  }
                  onClick={() =>
                    setCurrentPage(
                      prev =>
                        prev - 1
                    )
                  }
                  className="
rounded-xl
border-slate-200
dark:border-slate-700
"
                >

                  Prev

                </Button>

                <div
                  className="
px-4
py-2
rounded-xl
bg-orange-500
text-white
text-sm
font-black
shadow-lg
shadow-orange-500/20
"
                >

                  {currentPage}
                  {" / "}
                  {totalPages}

                </div>

                <Button
                  size="sm"
                  variant="outline"
                  disabled={
                    currentPage ===
                    totalPages
                  }
                  onClick={() =>
                    setCurrentPage(
                      prev =>
                        prev + 1
                    )
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

      {/* DELETE */}

      <ConfirmDialog

        isOpen={deleteConfirmOpen}

        onClose={() => {

          setDeleteConfirmOpen(false);

          setSelectedStore(null);

        }}

        onConfirm={handleConfirmDelete}

        title="Delete Store Hub"

        message={`This will permanently remove "${selectedStore?.name}". Continue?`}

        confirmText="Delete"

        variant="destructive"

        loading={deleteLoading}

      />

      {/* MODAL */}

      {modalOpen &&
        isFranchiseAdmin() && (

        <Modal
          isOpen
          onClose={() =>
            setModalOpen(false)
          }
          title="Initialize Store Hub"
          size="xl"
        >

          <form
            onSubmit={handleCreate}
            className="
grid
grid-cols-1
lg:grid-cols-12
gap-8
"
          >

            {/* LEFT */}

            <div
              className="
lg:col-span-5
space-y-5
"
            >

              <div
                className="
rounded-[2rem]
border
border-slate-200
dark:border-slate-800
bg-slate-50/80
dark:bg-slate-900/40
p-5
space-y-5
"
              >

                <div className="space-y-2">

                  <Label
                    className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
flex
items-center
gap-2
"
                  >

                    <Hash size={14} />

                    Store UUID

                  </Label>

                  <Input
                    placeholder="UUID..."
                    className="
h-11
rounded-2xl
font-mono
"
                    value={
                      formData.localStoreid
                    }
                    onChange={(e) =>
                      setFormData(prev => ({
                        ...prev,
                        localStoreid:
                          e.target.value,
                      }))
                    }
                  />

                </div>

                <div className="space-y-2">

                  <Label
                    className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
flex
items-center
gap-2
"
                  >

                    <Store size={14} />

                    Store Name

                  </Label>

                  <Input
                    placeholder="DHA Hub"
                    className="
h-11
rounded-2xl
"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData(prev => ({
                        ...prev,
                        name:
                          e.target.value,
                      }))
                    }
                    required
                  />

                </div>

                <div className="space-y-2">

                  <Label
                    className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
flex
items-center
gap-2
"
                  >

                    <MapPin size={14} />

                    Address

                  </Label>

                  <textarea
                    value={
                      formData.address
                    }
                    onChange={(e) =>
                      setFormData(prev => ({
                        ...prev,
                        address:
                          e.target.value,
                      }))
                    }
                    required
                    className="
w-full
min-h-[120px]
rounded-2xl
border
border-slate-200
dark:border-slate-700
bg-white
dark:bg-slate-900
p-4
outline-none
focus:ring-2
focus:ring-orange-500/20
"
                  />

                </div>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div
                  className="
rounded-2xl
bg-slate-900
text-white
p-4
"
                >

                  <p
                    className="
text-[10px]
uppercase
tracking-[0.25em]
text-orange-500
font-black
mb-2
"
                  >
                    Latitude
                  </p>

                  <p className="font-mono text-sm">

                    {Number(
                      formData.latitude
                    ).toFixed(6)}

                  </p>

                </div>

                <div
                  className="
rounded-2xl
bg-slate-900
text-white
p-4
"
                >

                  <p
                    className="
text-[10px]
uppercase
tracking-[0.25em]
text-orange-500
font-black
mb-2
"
                  >
                    Longitude
                  </p>

                  <p className="font-mono text-sm">

                    {Number(
                      formData.longitude
                    ).toFixed(6)}

                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    setModalOpen(false)
                  }
                  className="
flex-1
h-11
rounded-2xl
"
                >

                  Cancel

                </Button>

                <Button
                  type="submit"
                  disabled={formLoading}
                  className="
flex-1
h-11
rounded-2xl
bg-orange-500
hover:bg-orange-600
shadow-lg
shadow-orange-500/20
"
                >

                  {formLoading ? (

                    <Loader2
                      className="animate-spin"
                    />

                  ) : (

                    "Provision Store"

                  )}

                </Button>

              </div>

            </div>

            {/* RIGHT */}

            <div
              className="
lg:col-span-7
space-y-4
"
            >

              <div className="flex items-center justify-between">

                <Label
                  className="
text-[11px]
uppercase
tracking-[0.25em]
font-black
text-slate-500
flex
items-center
gap-2
"
                >

                  <Navigation
                    size={14}
                    className="text-orange-500"
                  />

                  Geo Positioning

                </Label>

                {isLoaded && (

                  <Autocomplete
                    onLoad={(ref) =>
                      autocompleteRef.current =
                        ref
                    }
                    onPlaceChanged={
                      onPlaceSelected
                    }
                  >

                    <div className="relative w-64">

                      <Search
                        className="
absolute
left-3
top-1/2
-translate-y-1/2
w-3
h-3
text-slate-400
"
                      />

                      <Input
                        placeholder="Search location..."
                        className="
h-10
pl-8
rounded-full
bg-slate-100
dark:bg-slate-900
border-none
text-xs
"
                      />

                    </div>

                  </Autocomplete>

                )}

              </div>

              <div
                className="
h-[460px]
rounded-[2rem]
overflow-hidden
border-[10px]
border-slate-50
dark:border-slate-900
shadow-2xl
relative
"
              >

                {isLoaded ? (

                  <GoogleMap
                    mapContainerStyle={{
                      width: "100%",
                      height: "100%",
                    }}
                    center={{
                      lat: formData.latitude,
                      lng: formData.longitude,
                    }}
                    zoom={14}
                    onClick={
                      handleMapClick
                    }
                    options={{
                      mapTypeControl:
                        false,
                      streetViewControl:
                        false,
                      styles: mapStyles,
                    }}
                  >

                    <Marker
                      position={{
                        lat: formData.latitude,
                        lng: formData.longitude,
                      }}
                    />

                  </GoogleMap>

                ) : (

                  <div
                    className="
h-full
flex
items-center
justify-center
bg-slate-100
dark:bg-slate-900
"
                  >

                    Initializing Maps...

                  </div>

                )}

                <div
                  className="
absolute
bottom-4
left-4
right-4
bg-white/90
dark:bg-slate-900/80
backdrop-blur-xl
rounded-2xl
p-4
border
border-white/20
"
                >

                  <p
                    className="
text-[10px]
uppercase
tracking-[0.25em]
font-black
text-slate-500
mb-2
"
                  >
                    Current Position
                  </p>

                  <p
                    className="
text-sm
truncate
text-slate-700
dark:text-slate-300
"
                  >

                    {formData.address ||
                      "Click map to select location"}

                  </p>

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
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

export default Stores;