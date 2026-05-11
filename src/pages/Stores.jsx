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
  Map as MapIcon,
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

  const indexOfLastItem =
    currentPage * itemsPerPage;

  const indexOfFirstItem =
    indexOfLastItem - itemsPerPage;

  const currentItems =
    filteredStores.slice(
      indexOfFirstItem,
      indexOfLastItem
    );

  const totalPages = itemsPerPage
    ? Math.ceil(
        filteredStores.length /
          itemsPerPage
      )
    : 1;

  // =========================================
  // ANALYTICS
  // =========================================

  const analytics = useMemo(() => {

    const total =
      stores?.length || 0;

    const active =
      stores?.filter(
        s => s.status === "ACTIVE"
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
        label: "Hub Identity",

        render: (v, r) => (

          <div className="flex items-center gap-4">

            <div className="
w-11
h-11
rounded-2xl
bg-gradient-to-br
from-orange-500/20
to-orange-600/10
flex
items-center
justify-center
text-orange-500
shadow-lg
shadow-orange-500/10
">

              <Store size={18} />

            </div>

            <div>

              <p className="
font-black
text-slate-700
dark:text-white
tracking-tight
">
                {v}
              </p>

              <p className="
text-[10px]
uppercase
tracking-[0.25em]
text-slate-500
dark:text-slate-400
font-bold
">
                Hub Infrastructure
              </p>

            </div>

          </div>

        ),
      },

      {
        key: "address",
        label: "Location",

        render: (v) => (

          <div className="
max-w-[250px]
">

            <p className="
text-sm
font-medium
text-slate-600
dark:text-slate-300
truncate
">
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
        label: "Controls",

        render: (_, r) => (

          <div className="
flex
items-center
gap-2
">

            <Button
              size="sm"
              variant="ghost"
              onClick={() =>
                navigate(`/stores/${r.id}`)
              }
              className="
rounded-xl
hover:bg-indigo-500/10
hover:text-indigo-500
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
hover:bg-blue-500/10
hover:text-blue-500
"
              >

                <SquarePen size={16} />

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
  // GLASS CARD
  // =========================================

  const glassCard = `
bg-white
dark:bg-slate-900/70
backdrop-blur-2xl
border
border-slate-200
dark:border-slate-800
shadow-[0_10px_40px_rgba(0,0,0,0.06)]
dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
transition-all
duration-500
hover:shadow-orange-500/10
`;

  // =========================================
  // LOADER
  // =========================================

  if (!pageLoaded) {

    return (

      <div className="
min-h-screen
flex
items-center
justify-center
bg-[#03140F]
">

        <div className="
w-14
h-14
rounded-full
border-4
border-orange-500/20
border-t-orange-500
animate-spin
" />

      </div>

    );

  }

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
          title="Hub Control Center"
          subtitle="Provision and manage intelligent franchise store infrastructure"
        />

        <motion.div

          initial={{
            opacity: 0,
            scale: 1.02,
            filter: "blur(12px)",
          }}

          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}

          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}

          className="
relative
overflow-hidden
p-8
max-w-[1600px]
mx-auto
space-y-8
"
        >

          {/* BACKGROUND */}

          <div className="
absolute
inset-0
-z-10
overflow-hidden
">

            <div className="
absolute
inset-0
bg-[radial-gradient(#0f172a12_1px,transparent_1px)]
dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)]
[background-size:24px_24px]
opacity-40
" />

            <motion.div

              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
              }}

              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}

              className="
absolute
top-[-10%]
left-[-10%]
w-[500px]
h-[500px]
bg-orange-500/10
rounded-full
blur-[120px]
"
            />

            <motion.div

              animate={{
                y: [0, 40, 0],
                x: [0, -20, 0],
              }}

              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}

              className="
absolute
bottom-[-10%]
right-[-10%]
w-[500px]
h-[500px]
bg-indigo-500/10
rounded-full
blur-[120px]
"
            />

          </div>

          {/* ANALYTICS */}

          <div className="
grid
grid-cols-1
md:grid-cols-3
gap-6
">

            <motion.div
              whileHover={{ y: -4 }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="
flex
items-center
justify-between
">

                <div>

                  <p className="
text-xs
uppercase
tracking-[0.25em]
text-slate-500
dark:text-slate-400
font-black
">
                    Total Hubs
                  </p>

                  <h3 className="
text-3xl
font-black
mt-2
text-slate-800
dark:text-white
">
                    {analytics.total}
                  </h3>

                </div>

                <div className="
w-14
h-14
rounded-2xl
bg-orange-500/10
flex
items-center
justify-center
text-orange-500
">

                  <Globe size={24} />

                </div>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="
flex
items-center
justify-between
">

                <div>

                  <p className="
text-xs
uppercase
tracking-[0.25em]
text-slate-500
dark:text-slate-400
font-black
">
                    Active Stores
                  </p>

                  <h3 className="
text-3xl
font-black
mt-2
text-slate-800
dark:text-white
">
                    {analytics.active}
                  </h3>

                </div>

                <div className="
w-14
h-14
rounded-2xl
bg-emerald-500/10
flex
items-center
justify-center
text-emerald-500
">

                  <ShieldCheck size={24} />

                </div>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="
flex
items-center
justify-between
">

                <div className="flex-1">

                  <p className="
text-xs
uppercase
tracking-[0.25em]
text-slate-500
dark:text-slate-400
font-black
mb-3
">
                    Operational Efficiency
                  </p>

                  <div className="
flex
items-center
justify-between
mb-2
">

                    <span className="
text-3xl
font-black
text-slate-800
dark:text-white
">
                      {analytics.efficiency}%
                    </span>

                    <Activity
                      size={18}
                      className="
text-indigo-500
"
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

          {/* MAIN TABLE */}

          <motion.div

            initial={{
              opacity: 0,
              y: 40,
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

            <div className="
p-8
border-b
border-white/10
flex
flex-col
lg:flex-row
justify-between
lg:items-center
gap-5
bg-slate-50
dark:bg-slate-900/10
backdrop-blur-xl
">

              <div className="
flex
items-center
gap-4
">

                <div className="
p-3
rounded-2xl
bg-gradient-to-br
from-indigo-500
to-indigo-700
text-white
shadow-xl
shadow-indigo-500/20
">

                  <BarChart3 size={20} />

                </div>

                <div>

                  <h3 className="
text-lg
font-black
tracking-tight
text-slate-800
dark:text-white
">
                    Store Registry
                  </h3>

                  <p className="
text-xs
text-slate-600
dark:text-slate-400
">
                    Intelligent franchise network infrastructure
                  </p>

                </div>

              </div>

              <div className="
flex
flex-col
md:flex-row
items-center
gap-3
w-full
lg:w-auto
">

                <div className="
relative
w-full
md:w-80
">

                  <Search className="
absolute
left-3
top-1/2
-transform
-translate-y-1/2
text-slate-400
size-4
" />

                  <Input
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(
                        e.target.value
                      )
                    }
                    placeholder="Search store network..."
                    className="
pl-10
h-12
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
h-12
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
rounded-2xl
h-12
px-6
bg-orange-500
hover:bg-orange-600
text-white
font-black
shadow-xl
shadow-orange-500/20
transition-all
duration-500
hover:scale-105
"

                  >

                    <Plus
                      size={18}
                      className="mr-2"
                    />

                    Register Hub

                    <ArrowRight
                      size={16}
                      className="ml-2"
                    />

                  </Button>

                )}

              </div>

            </div>

            {/* TABLE */}

            <div className="
overflow-hidden
">

              {loading ? (

                <TableSkeleton rows={6} />

              ) : filteredStores.length ===
                0 ? (

                <div className="
p-20
text-center
text-slate-400
">
                  No stores found.
                </div>

              ) : (

                <DataTable
                  columns={columns}
                  data={currentItems}
                />

              )}

            </div>

            {/* PAGINATION */}

            {!loading &&
              totalPages > 1 && (

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
                  {indexOfFirstItem + 1}
                  {" - "}
                  {Math.min(
                    indexOfLastItem,
                    filteredStores.length
                  )}
                  {" "}
                  of
                  {" "}
                  {filteredStores.length}

                </div>

                <div className="
flex
items-center
gap-3
">

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
"
                  >
                    Prev
                  </Button>

                  <div className="
px-4
py-2
rounded-xl
bg-orange-500
text-white
text-sm
font-black
shadow-lg
shadow-orange-500/20
">

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
"
                  >
                    Next
                  </Button>

                </div>

              </div>

            )}

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
p-1
"
          >

            {/* LEFT */}

            <div className="
lg:col-span-5
space-y-5
">

              <div className="
bg-slate-50
dark:bg-slate-900/40
p-5
rounded-[2rem]
border
border-slate-100
dark:border-slate-800
space-y-5
">

                <div className="
space-y-2
">

                  <Label className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
flex
items-center
gap-2
">

                    <Hash size={14} />

                    Store Identifier

                  </Label>

                  <Input
                    placeholder="UUID..."
                    className="
h-12
rounded-2xl
font-mono
border-slate-200
dark:border-slate-700
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

                <div className="
space-y-2
">

                  <Label className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
flex
items-center
gap-2
">

                    <Store size={14} />

                    Store Name

                  </Label>

                  <Input
                    placeholder="Barqi DHA Store"
                    className="
h-12
rounded-2xl
border-slate-200
dark:border-slate-700
"
                    value={
                      formData.name
                    }
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

                <div className="
space-y-2
">

                  <Label className="
text-[10px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
flex
items-center
gap-2
">

                    <MapPin size={14} />

                    Address

                  </Label>

                  <textarea
                    className="
w-full
min-h-[120px]
p-4
rounded-2xl
border
border-slate-200
dark:border-slate-700
bg-white
dark:bg-slate-900
outline-none
focus:ring-2
focus:ring-orange-500
"
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
                  />

                </div>

              </div>

              <div className="
grid
grid-cols-2
gap-4
">

                <div className="
p-4
rounded-2xl
bg-slate-900
text-white
">

                  <p className="
text-[10px]
uppercase
tracking-[0.25em]
text-orange-500
font-black
mb-2
">
                    Latitude
                  </p>

                  <p className="
font-mono
text-sm
">
                    {Number(
                      formData.latitude
                    ).toFixed(6)}
                  </p>

                </div>

                <div className="
p-4
rounded-2xl
bg-slate-900
text-white
">

                  <p className="
text-[10px]
uppercase
tracking-[0.25em]
text-orange-500
font-black
mb-2
">
                    Longitude
                  </p>

                  <p className="
font-mono
text-sm
">
                    {Number(
                      formData.longitude
                    ).toFixed(6)}
                  </p>

                </div>

              </div>

              <div className="
flex
gap-4
pt-2
">

                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    setModalOpen(false)
                  }
                  className="
flex-1
h-12
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
h-12
rounded-2xl
bg-orange-500
hover:bg-orange-600
text-white
font-bold
shadow-xl
shadow-orange-500/20
"
                >

                  {formLoading ? (

                    <Loader2 className="
animate-spin
" />

                  ) : (

                    "Provision Store"

                  )}

                </Button>

              </div>

            </div>

            {/* RIGHT */}

            <div className="
lg:col-span-7
space-y-4
">

              <div className="
flex
items-center
justify-between
">

                <Label className="
text-xs
font-black
uppercase
tracking-[0.25em]
text-slate-500
flex
items-center
gap-2
">

                  <Navigation
                    size={14}
                    className="
text-orange-500
"
                  />

                  Geographical Positioning

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

                    <div className="
relative
w-64
">

                      <Search className="
absolute
left-3
top-1/2
-transform
-translate-y-1/2
size-3
text-slate-400
" />

                      <Input
                        placeholder="Search location..."
                        className="
h-9
pl-8
text-xs
bg-slate-100
border-none
rounded-full
"
                      />

                    </div>

                  </Autocomplete>

                )}

              </div>

              <div className="
h-[450px]
rounded-[2rem]
overflow-hidden
border-[10px]
border-slate-50
shadow-2xl
relative
">

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
                      disableDefaultUI:
                        false,
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

                  <div className="
h-full
bg-slate-50
animate-pulse
flex
items-center
justify-center
text-xs
">
                    Initializing Maps...
                  </div>

                )}

                <div className="
absolute
bottom-4
left-4
right-4
bg-white/90
backdrop-blur-md
p-4
rounded-2xl
border
border-white
shadow-lg
pointer-events-none
">

                  <p className="
text-[10px]
uppercase
tracking-[0.25em]
font-black
text-slate-500
mb-2
">
                    Current Position
                  </p>

                  <p className="
text-xs
font-medium
truncate
text-slate-800
">
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