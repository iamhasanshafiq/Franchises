import {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

import axios from "axios";

import { toast } from "sonner";

import TableSkeleton from "../components/common/TableSkeleton";

import {
  Store,
  ArrowUpCircle,
  ArrowDownCircle,
  History,
  MapPin,
  ShieldCheck,
  Loader2,
  RefreshCw,
  X,
  Wallet,
  Activity,
  Radar,
  Trash2,
  Save,
  Sparkles,
  ArrowLeft
} from "lucide-react";

import { motion } from "framer-motion";

import Header from "../components/common/Header";
import DashboardLayout from "../components/layout/DashboardLayout";
import StatusBadge from "../components/common/StatusBadge";
import ConfirmDialog from "../components/common/ConfirmDialog";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import {
  FRANCHISE_URL,
  WALLET_URL,
} from "../config/serviceUrls";

import { useAuth } from "../hooks/useAuth";

const WALLET_BASE = WALLET_URL;
const STORE_BASE = FRANCHISE_URL;

export default function StoreDetail() {

  const { id } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const {
    isAdmin,
    isFranchiseAdmin,
  } = useAuth();

  // =========================================
  // API
  // =========================================

  const walletApi = useMemo(() =>
    axios.create({
      baseURL: WALLET_BASE,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }),
  []);

  const storeApi = useMemo(() =>
    axios.create({
      baseURL: STORE_BASE,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }),
  []);

  // =========================================
  // STATE
  // =========================================

  const [tab, setTab] = useState("info");

  const [store, setStore] = useState(null);

  const [loadingStore, setLoadingStore] = useState(true);

  const [wallet, setWallet] = useState(null);

  const [loadingWallet, setLoadingWallet] = useState(false);

  const [creditAmount, setCreditAmount] = useState("");

  const [creditReason, setCreditReason] =
    useState("STORE_TOPUP");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [isEditMode, setIsEditMode] =
    useState(!!location.state?.editMode);

  const [originalStore, setOriginalStore] =
    useState(null);

  const [statusConfirm, setStatusConfirm] =
    useState({
      open: false,
      status: null,
      label: "",
    });

  const [statusLoading, setStatusLoading] =
    useState(false);

  const [deleteConfirmOpen, setDeleteConfirmOpen] =
    useState(false);

  const [deleteLoading, setDeleteLoading] =
    useState(false);

  // =========================================
  // PAGINATION
  // =========================================

  const [currentPage, setCurrentPage] = useState(1);

  const transactionsPerPage = 8;

  const totalPages = Math.ceil(
    (wallet?.transactions?.length || 0) /
    transactionsPerPage
  );

  const paginatedTransactions = useMemo(() => {

    if (!wallet?.transactions) return [];

    const start =
      (currentPage - 1) * transactionsPerPage;

    return wallet.transactions.slice(
      start,
      start + transactionsPerPage
    );

  }, [wallet, currentPage]);

  // =========================================
  // LOAD STORE
  // =========================================

  const loadStoreData = useCallback(async () => {

    setLoadingStore(true);

    try {

      const res = await storeApi.get(`/stores/${id}`);

      setStore(res.data?.data);

      setOriginalStore(res.data?.data);

    } catch (e) {

      toast.error("Failed to load store details");

    } finally {

      setLoadingStore(false);

    }

  }, [id, storeApi]);

  // =========================================
  // LOAD WALLET
  // =========================================

  const loadWalletData = useCallback(async () => {

    setLoadingWallet(true);

    try {

      const res = await walletApi.get(
        `/wallets/${id}?currency=PKR`
      );

      setWallet(res.data?.data);

    } catch (e) {

      if (e.response?.status === 404) {

        const created = await walletApi.post(
          "/wallets",
          {
            ownerId: id,
            ownerType: "STORE",
            currency: "PKR",
          }
        );

        setWallet(created.data?.data);

        toast.success(
          "Store wallet initialized"
        );

      } else {

        toast.error(
          "Wallet data currently unavailable"
        );

      }

    } finally {

      setLoadingWallet(false);

    }

  }, [id, walletApi]);

  // =========================================
  // INIT
  // =========================================

  useEffect(() => {

    if (id) {

      loadStoreData();

      loadWalletData();

    }

  }, [
    id,
    loadStoreData,
    loadWalletData,
  ]);

  // =========================================
  // ANALYTICS
  // =========================================

  const analytics = useMemo(() => {

    const balance =
      wallet?.balance || 0;

    const totalTransactions =
      wallet?.transactions?.length || 0;

    const credits =
      wallet?.transactions?.filter(
        t => t.type === "CREDIT"
      ).length || 0;

    return {
      balance,
      totalTransactions,
      credits,
    };

  }, [wallet]);

  // =========================================
  // UPDATE STORE
  // =========================================

  const handleUpdateStore = async () => {

    try {

      console.log(
        "Updating Store ID:",
        id
      );

      const res = await storeApi.patch(
        `/stores/${id}`,
        {
          name: store?.name,
          address: store?.address,
        }
      );

      console.log(
        "Update Response:",
        res.data
      );

      toast.success(
        "Store details updated"
      );

      setIsEditMode(false);

      loadStoreData();

    } catch (e) {

      console.error(
        "Update Error:",
        e.response?.data || e.message
      );

      toast.error(
        e.response?.data?.message ||
        "Update failed"
      );

    }

  };

  // =========================================
  // CREDIT
  // =========================================

  const handleCredit = async () => {

    if (
      !creditAmount ||
      parseFloat(creditAmount) <= 0
    ) {
      return toast.error(
        "Enter a valid amount"
      );
    }

    setIsSubmitting(true);

    try {

      await walletApi.post(
        `/wallets/owner/${id}/credit`,
        {
          amount: parseFloat(
            creditAmount
          ),
          reason: creditReason,
          currency: "PKR",
          referenceId:
            `STORE-REF-${Date.now()}`,
          idempotencyKey:
            `credit-store-${id}-${Date.now()}`,
        }
      );

      toast.success(
        `PKR ${creditAmount} added to store wallet`
      );

      setCreditAmount("");

      loadWalletData();

    } catch (e) {

      toast.error(
        "Credit failed: " +
        (
          e.response?.data?.message ||
          "Server error"
        )
      );

    } finally {

      setIsSubmitting(false);

    }

  };

  // =========================================
  // STATUS
  // =========================================

  const handleChangeStatus = async () => {

    if (!statusConfirm.status) return;

    setStatusLoading(true);

    try {

      await storeApi.patch(
        `/stores/${id}/status`,
        {
          status:
            statusConfirm.status,
        }
      );

      toast.success(
        `Store set to ${statusConfirm.status}`
      );

      setStore(prev => ({
        ...prev,
        status:
          statusConfirm.status,
      }));

    } catch (e) {

      toast.error(
        e.response?.data?.message ||
        "Status update failed"
      );

    } finally {

      setStatusLoading(false);

      setStatusConfirm({
        open: false,
        status: null,
        label: "",
      });

    }

  };

  // =========================================
  // DELETE
  // =========================================

  const handleHardDelete = async () => {

    setDeleteLoading(true);

    try {

      await storeApi.delete(
        `/stores/${id}/hard`
      );

      toast.success(
        "Store permanently deleted"
      );

      navigate("/stores");

    } catch (e) {

      toast.error(
        e.response?.data?.message ||
        "Deletion failed"
      );

    } finally {

      setDeleteLoading(false);

      setDeleteConfirmOpen(false);

    }

  };

  // =========================================
  // LOADING
  // =========================================

  if (loadingStore) {

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
">

          <Header
            title="Hub Command Center"
            subtitle="Loading hub infrastructure..."
          />

          <div className="p-6">

            <TableSkeleton rows={6} />

          </div>

        </div>

      </DashboardLayout>

    );

  }

  // =========================================
  // GLASS CARD
  // =========================================

  const glassCard = `
bg-white/80
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
          title="Hub Command Center"
          subtitle="Advanced franchise operations"
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
            duration: 0.7,
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

          {/* BG EFFECT */}

          <div className="
absolute
inset-0
overflow-hidden
pointer-events-none
-z-10
">

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
{/* BACK BUTTON */}
{/* ========================================= */}

<motion.div
  initial={{
    opacity: 0,
    x: -20,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
>

  <Button
    variant="outline"
    onClick={() => navigate(-1)}
    className="
h-12
px-5
rounded-2xl
border-slate-200
dark:border-slate-700
bg-white/70
dark:bg-slate-900/60
backdrop-blur-xl
hover:bg-white
hover:text-slate-800
dark:hover:bg-slate-800
shadow-sm
flex
items-center
gap-2
font-bold
"
  >

    <ArrowLeft size={18} />

    Back

  </Button>

</motion.div>
          {/* ========================================= */}
          {/* HERO */}
          {/* ========================================= */}

          <motion.div
            whileHover={{
              y: -3,
            }}
            className={`${glassCard} rounded-[2.5rem] p-8`}
          >

            <div className="
flex
flex-col
xl:flex-row
justify-between
gap-8
">

              {/* LEFT */}

              <div className="
flex
items-start
gap-5
">

                <div className="
w-20
h-20
rounded-[2rem]
bg-indigo-500/10
text-indigo-500
flex
items-center
justify-center
shadow-lg
shadow-indigo-500/10
">

                  <Store size={34} />

                </div>

                <div className="space-y-3">

                  <div className="
flex
flex-wrap
items-center
gap-3
">

                    <h1 className="
text-3xl
font-black
tracking-tight
text-slate-800
dark:text-white
">

                      {store?.name}

                    </h1>

                    <StatusBadge
                      status={
                        store?.status ||
                        "ACTIVE"
                      }
                    />

                  </div>

                  <div className="
flex
items-center
gap-2
text-slate-500
dark:text-slate-400
">

                    <MapPin size={15} />

                    <span className="text-sm">

                      {store?.address}

                    </span>

                  </div>

                  <div className="
flex
items-center
gap-3
flex-wrap
">

                    <div className="
px-4
py-2
rounded-2xl
bg-slate-100
dark:bg-slate-800
text-xs
font-black
tracking-[0.2em]
uppercase
text-slate-600
dark:text-slate-300
">

                      Store ID:
                      {" "}
                      {store?.localStoreid}

                    </div>

                    <div className="
px-4
py-2
rounded-2xl
bg-emerald-500/10
text-emerald-600
text-xs
font-black
tracking-[0.2em]
uppercase
">

                      Live Operations

                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT */}

              <div className="
min-w-[320px]
rounded-[2rem]
bg-gradient-to-br
from-slate-900
to-slate-800
p-6
text-white
relative
overflow-hidden
">

                <div className="
absolute
top-[-20px]
right-[-20px]
w-32
h-32
bg-emerald-500/20
blur-3xl
rounded-full
" />

                <div className="
flex
items-center
justify-between
mb-6
">

                  <div>

                    <p className="
text-[10px]
uppercase
tracking-[0.25em]
font-black
text-slate-400
mb-2
">

                      Hub Wallet

                    </p>

                    {loadingWallet ? (

                      <div className="
w-32
h-8
rounded-xl
bg-white/10
animate-pulse
" />

                    ) : (

                      <h2 className="
text-4xl
font-black
font-mono
text-emerald-400
">

                        PKR
                        {" "}
                        {analytics.balance?.toLocaleString()}

                      </h2>

                    )}

                  </div>

                  <div className="
w-14
h-14
rounded-2xl
bg-emerald-500/10
flex
items-center
justify-center
text-emerald-400
">

                    <Wallet size={28} />

                  </div>

                </div>

                <div className="
grid
grid-cols-2
gap-4
">

                  <div className="
rounded-2xl
bg-white/5
p-4
border
border-white/5
">

                    <p className="
text-[10px]
uppercase
tracking-[0.2em]
text-slate-400
font-black
mb-2
">

                      Transactions

                    </p>

                    <h3 className="
text-2xl
font-black
">

                      {analytics.totalTransactions}

                    </h3>

                  </div>

                  <div className="
rounded-2xl
bg-white/5
p-4
border
border-white/5
">

                    <p className="
text-[10px]
uppercase
tracking-[0.2em]
text-slate-400
font-black
mb-2
">

                      Credits

                    </p>

                    <h3 className="
text-2xl
font-black
">

                      {analytics.credits}

                    </h3>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* ========================================= */}
          {/* STATS */}
          {/* ========================================= */}

          <div className="
grid
grid-cols-1
md:grid-cols-3
gap-6
">

            <motion.div
              whileHover={{
                y: -3,
              }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="
flex
items-center
justify-between
">

                <div>

                  <p className="
text-[11px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
mb-2
">

                    Wallet Balance

                  </p>

                  <h2 className="
text-3xl
font-black
text-slate-800
dark:text-white
">

                    PKR
                    {" "}
                    {analytics.balance?.toLocaleString()}

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

                  <Wallet size={24} />

                </div>

              </div>

            </motion.div>

            <motion.div
              whileHover={{
                y: -3,
              }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="
flex
items-center
justify-between
">

                <div>

                  <p className="
text-[11px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
mb-2
">

                    Financial Logs

                  </p>

                  <h2 className="
text-3xl
font-black
text-slate-800
dark:text-white
">

                    {analytics.totalTransactions}

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

                  <History size={24} />

                </div>

              </div>

            </motion.div>

            <motion.div
              whileHover={{
                y: -3,
              }}
              className={`${glassCard} rounded-[2rem] p-6`}
            >

              <div className="
flex
items-center
justify-between
">

                <div>

                  <p className="
text-[11px]
font-black
uppercase
tracking-[0.25em]
text-slate-500
mb-2
">

                    Hub Status

                  </p>

                  <h2 className="
text-3xl
font-black
text-slate-800
dark:text-white
">

                    {store?.status}

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

                  <Radar size={24} />

                </div>

              </div>

            </motion.div>

          </div>

          {/* ========================================= */}
          {/* TABS */}
          {/* ========================================= */}

          <Tabs
            value={tab}
            onValueChange={setTab}
            className="space-y-6"
          >

            <TabsList className="
h-auto
p-2
rounded-[1.5rem]
bg-white/70
dark:bg-slate-900/60
backdrop-blur-xl
border
border-slate-200
dark:border-slate-800
flex
flex-wrap
gap-2
">

              <TabsTrigger
                value="info"
                className="
rounded-xl
px-5
py-2.5
font-bold
"
              >
                Hub Information
              </TabsTrigger>

              {isEditMode && (

                <TabsTrigger
                  value="wallet"
                  className="
rounded-xl
px-5
py-2.5
font-bold
"
                >
                  Wallet & Finance
                </TabsTrigger>

              )}

              {isEditMode && (

                <TabsTrigger
                  value="settings"
                  className="
rounded-xl
px-5
py-2.5
font-bold
"
                >
                  Admin Controls
                </TabsTrigger>

              )}

            </TabsList>

            {/* ========================================= */}
            {/* INFO */}
            {/* ========================================= */}

            <TabsContent value="info">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className={`${glassCard} rounded-[2.5rem] p-8`}
              >

                <div className="
flex
items-center
justify-between
mb-8
">

                  <div>

                    <h2 className="
text-2xl
font-black
tracking-tight
text-slate-800
dark:text-white
">

                      Hub Details

                    </h2>

                    <p className="
text-sm
text-slate-500
dark:text-slate-400
mt-1
">

                      Operational store configuration

                    </p>

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

                    <Sparkles size={24} />

                  </div>

                </div>

                <div className="
grid
md:grid-cols-2
gap-6
">

                  <div className="space-y-2">

                    <Label>
                      Store Name
                    </Label>

                    {isEditMode ? (

                      <Input
                        className="
h-12
rounded-2xl
"
                        value={store?.name ?? ""}
                        onChange={(e) =>
                          setStore(p => ({
                            ...p,
                            name: e.target.value,
                          }))
                        }
                      />

                    ) : (

                      <div className="
h-12
rounded-2xl
bg-slate-100
dark:bg-slate-800
px-4
flex
items-center
text-sm
font-bold
">

                        {store?.name}

                      </div>

                    )}

                  </div>

                  <div className="space-y-2">

                    <Label>
                      Local Store ID
                    </Label>

                    <div className="
h-12
rounded-2xl
bg-slate-100
dark:bg-slate-800
px-4
flex
items-center
font-mono
text-sm
text-slate-500
">

                      {store?.localStoreid}

                    </div>

                  </div>

                </div>

                <div className="
space-y-2
mt-6
">

                  <Label>
                    Full Address
                  </Label>

                  {isEditMode ? (

                    <Input
                      className="
h-12
rounded-2xl
"
                      value={store?.address ?? ""}
                      onChange={(e) =>
                        setStore(p => ({
                          ...p,
                          address: e.target.value,
                        }))
                      }
                    />

                  ) : (

                    <div className="
h-12
rounded-2xl
bg-slate-100
dark:bg-slate-800
px-4
flex
items-center
text-sm
">

                      {store?.address}

                    </div>

                  )}

                </div>

                <div className="
grid
md:grid-cols-2
gap-6
mt-6
">

                  <div className="space-y-2">

                    <Label>
                      Latitude
                    </Label>

                    <div className="
h-12
rounded-2xl
bg-slate-100
dark:bg-slate-800
px-4
flex
items-center
font-mono
text-sm
text-slate-500
">

                      {store?.latitude}

                    </div>

                  </div>

                  <div className="space-y-2">

                    <Label>
                      Longitude
                    </Label>

                    <div className="
h-12
rounded-2xl
bg-slate-100
dark:bg-slate-800
px-4
flex
items-center
font-mono
text-sm
text-slate-500
">

                      {store?.longitude}

                    </div>

                  </div>

                </div>

                {isEditMode && (

                  <div className="
flex
justify-end
gap-3
pt-8
mt-8
border-t
border-slate-200
dark:border-slate-800
">

                    <Button
                      variant="ghost"
                      className="
rounded-2xl
"
                      onClick={() => {

                        setStore(
                          originalStore
                        );

                        setIsEditMode(false);

                        setTab("info");

                      }}
                    >

                      <X
                        size={15}
                        className="mr-2"
                      />

                      Cancel

                    </Button>

                    <Button
                      onClick={
                        handleUpdateStore
                      }
                      className="
rounded-2xl
bg-indigo-600
hover:bg-indigo-700
shadow-lg
shadow-indigo-500/20
"
                    >

                      <Save
                        size={15}
                        className="mr-2"
                      />

                      Save Changes

                    </Button>

                  </div>

                )}

              </motion.div>

            </TabsContent>

            {/* ========================================= */}
            {/* WALLET */}
            {/* ========================================= */}

            <TabsContent
              value="wallet"
              className="space-y-6"
            >

              <div className="
grid
xl:grid-cols-3
gap-6
">

                {/* CREDIT */}

                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  className={`
xl:col-span-2
${glassCard}
rounded-[2.5rem]
p-8
`}
                >

                  <div className="
flex
items-center
justify-between
mb-8
">

                    <div>

                      <h2 className="
text-2xl
font-black
tracking-tight
text-slate-800
dark:text-white
">

                        Wallet Credit Engine

                      </h2>

                      <p className="
text-sm
text-slate-500
dark:text-slate-400
mt-1
">

                        Secure balance operations

                      </p>

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

                      <ArrowUpCircle size={24} />

                    </div>

                  </div>

                  {isEditMode ? (

                    <div className="
grid
md:grid-cols-3
gap-5
">

                      <div className="space-y-2">

                        <Label>
                          Amount
                        </Label>

                        <Input
                          type="number"
                          placeholder="0.00"
                          value={creditAmount}
                          onChange={(e) =>
                            setCreditAmount(
                              e.target.value
                            )
                          }
                          className="
h-12
rounded-2xl
"
                        />

                      </div>

                      <div className="space-y-2">

                        <Label>
                          Reason
                        </Label>

                        <Select
                          value={creditReason}
                          onValueChange={
                            setCreditReason
                          }
                        >

                          <SelectTrigger className="
h-12
rounded-2xl
">

                            <SelectValue />

                          </SelectTrigger>

                          <SelectContent>

                            <SelectItem value="STORE_TOPUP">
                              Standard Store Top-up
                            </SelectItem>

                            <SelectItem value="REVENUE_SHARE">
                              Monthly Revenue Share
                            </SelectItem>

                            <SelectItem value="CORRECTION">
                              Ledger Rectification
                            </SelectItem>

                          </SelectContent>

                        </Select>

                      </div>

                      <div className="
flex
items-end
">

                        <Button
                          onClick={
                            handleCredit
                          }
                          disabled={
                            isSubmitting ||
                            loadingWallet
                          }
                          className="
w-full
h-12
rounded-2xl
bg-emerald-600
hover:bg-emerald-700
shadow-lg
shadow-emerald-500/20
"
                        >

                          {isSubmitting ? (

                            <Loader2 className="
animate-spin
" />

                          ) : (

                            <>
                              <Wallet
                                size={16}
                                className="
mr-2
"
                              />

                              Apply Credit
                            </>

                          )}

                        </Button>

                      </div>

                    </div>

                  ) : (

                    <div className="
h-[180px]
rounded-[2rem]
border
border-dashed
border-slate-300
dark:border-slate-700
flex
items-center
justify-center
text-slate-400
text-sm
">

                      Credit operations are available in edit mode only.

                    </div>

                  )}

                </motion.div>

                {/* HEALTH */}

                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  className={`${glassCard} rounded-[2.5rem] p-8`}
                >

                  <div className="
flex
items-center
justify-between
mb-8
">

                    <div>

                      <h2 className="
text-xl
font-black
tracking-tight
text-slate-800
dark:text-white
">

                        Wallet Health

                      </h2>

                    </div>

                    <Activity
                      className="
text-orange-500
"
                      size={24}
                    />

                  </div>

                  <div className="
space-y-5
">

                    <div className="
flex
items-center
justify-between
pb-4
border-b
border-slate-200
dark:border-slate-800
">

                      <span className="
text-sm
text-slate-500
">

                        Status

                      </span>

                      <StatusBadge
                        status={
                          wallet?.isActive
                            ? "ACTIVE"
                            : "LOCKED"
                        }
                      />

                    </div>

                    <div className="
flex
items-center
justify-between
pb-4
border-b
border-slate-200
dark:border-slate-800
">

                      <span className="
text-sm
text-slate-500
">

                        Currency

                      </span>

                      <span className="
font-black
font-mono
">

                        PKR

                      </span>

                    </div>

                    <div className="
flex
items-center
justify-between
">

                      <span className="
text-sm
text-slate-500
">

                        Last Sync

                      </span>

                      <span className="
text-xs
font-medium
">

                        {new Date().toLocaleTimeString()}

                      </span>

                    </div>

                  </div>

                </motion.div>

              </div>

              {/* TRANSACTIONS */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className={`${glassCard} rounded-[2.5rem] overflow-hidden`}
              >

                {/* TOP */}

                <div className="
p-6
border-b
border-slate-200
dark:border-slate-800
flex
flex-col
md:flex-row
justify-between
gap-4
bg-white/60
dark:bg-slate-900/40
backdrop-blur-xl
">

                  <div>

                    <h3 className="
text-xl
font-black
tracking-tight
text-slate-800
dark:text-white
">

                      Financial Activity Stream

                    </h3>

                    <p className="
text-sm
text-slate-500
dark:text-slate-400
mt-1
">

                      Real-time ledger operations

                    </p>

                  </div>

                  <Button
                    variant="outline"
                    onClick={loadWalletData}
                    disabled={loadingWallet}
                    className="
rounded-2xl
h-11
"
                  >

                    {loadingWallet ? (

                      <Loader2
                        size={15}
                        className="
animate-spin
mr-2
"
                      />

                    ) : (

                      <RefreshCw
                        size={15}
                        className="
mr-2
"
                      />

                    )}

                    Refresh Ledger

                  </Button>

                </div>

                {/* BODY */}

                <div className="p-4">

                  {loadingWallet ? (

                    <TableSkeleton rows={6} />

                  ) : !wallet?.transactions?.length ? (

                    <div className="
py-24
text-center
text-slate-400
italic
">

                      No financial activity recorded.

                    </div>

                  ) : (

                    <div className="
space-y-4
">

                      {paginatedTransactions.map((tx) => (

                        <motion.div

                          key={tx.id}

                          whileHover={{
                            scale: 1.01,
                          }}

                          className="
flex
items-center
justify-between
rounded-[1.8rem]
border
border-slate-200
dark:border-slate-800
bg-white/70
dark:bg-slate-900/40
backdrop-blur-xl
p-5
transition-all
duration-300
"

                        >

                          <div className="
flex
items-center
gap-4
">

                            <div className={`
w-14
h-14
rounded-2xl
flex
items-center
justify-center
${tx.type === "CREDIT"
? "bg-emerald-500/10 text-emerald-500"
: "bg-rose-500/10 text-rose-500"
}
`}>

                              {tx.type === "CREDIT" ? (

                                <ArrowUpCircle size={24} />

                              ) : (

                                <ArrowDownCircle size={24} />

                              )}

                            </div>

                            <div>

                              <h4 className="
font-black
text-slate-800
dark:text-white
">

                                {tx.reason.replace(
                                  /_/g,
                                  " "
                                )}

                              </h4>

                              <p className="
text-xs
uppercase
tracking-[0.2em]
text-slate-400
mt-1
">

                                {new Date(
                                  tx.createdAt
                                ).toLocaleString()}

                              </p>

                            </div>

                          </div>

                          <div className="
text-right
">

                            <h3 className={`
text-xl
font-black
font-mono
${tx.type === "CREDIT"
? "text-emerald-500"
: "text-rose-500"
}
`}>

                              {tx.type === "CREDIT"
                                ? "+"
                                : "-"}
                              {" "}
                              {tx.amount.toLocaleString()}

                            </h3>

                            <p className="
text-[10px]
text-slate-400
font-mono
mt-1
">

                              TXID:
                              {" "}
                              {tx.id.slice(0, 8)}

                            </p>

                          </div>

                        </motion.div>

                      ))}

                    </div>

                  )}

                </div>

                {/* PAGINATION */}

                {!!wallet?.transactions?.length && (

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
                      {(currentPage - 1) *
                        transactionsPerPage + 1}

                      {" - "}

                      {Math.min(
                        currentPage *
                        transactionsPerPage,
                        wallet?.transactions
                          ?.length
                      )}

                      {" "}
                      of
                      {" "}
                      {
                        wallet?.transactions
                          ?.length
                      }

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
                            prev => prev - 1
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
bg-indigo-600
text-white
text-sm
font-black
shadow-lg
shadow-indigo-500/20
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
                            prev => prev + 1
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

            </TabsContent>

            {/* ========================================= */}
            {/* SETTINGS */}
            {/* ========================================= */}

            <TabsContent value="settings">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
rounded-[2.5rem]
border
border-rose-200/30
bg-rose-500/5
backdrop-blur-2xl
overflow-hidden
"
              >

                <div className="
p-8
border-b
border-rose-200/20
bg-rose-500/5
">

                  <div className="
flex
items-center
justify-between
">

                    <div>

                      <h2 className="
text-2xl
font-black
tracking-tight
text-rose-600
flex
items-center
gap-3
">

                        <ShieldCheck size={24} />

                        Critical Hub Controls

                      </h2>

                      <p className="
text-sm
text-slate-500
mt-2
">

                        High-impact operational controls

                      </p>

                    </div>

                    <div className="
w-14
h-14
rounded-2xl
bg-rose-500/10
text-rose-500
flex
items-center
justify-center
">

                      <Trash2 size={24} />

                    </div>

                  </div>

                </div>

                <div className="
p-8
space-y-6
">

                  {isEditMode ? (

                    <>

                      <p className="
text-sm
text-slate-600
dark:text-slate-400
leading-relaxed
">

                        Modify operational status instantly.
                        Changes affect routing, order
                        allocation, and rider visibility.

                      </p>

                      <div className="
flex
flex-wrap
gap-4
">

                        <Button
                          variant="outline"
                          disabled={
                            store?.status ===
                            "ACTIVE"
                          }
                          onClick={() =>
                            setStatusConfirm({
                              open: true,
                              status: "ACTIVE",
                              label:
                                "Re-Activate Hub",
                            })
                          }
                          className="
rounded-2xl
border-emerald-200
text-emerald-600
hover:bg-emerald-50
"
                        >

                          Re-Activate Hub

                        </Button>

                        <Button
                          variant="outline"
                          disabled={
                            store?.status ===
                            "SUSPENDED"
                          }
                          onClick={() =>
                            setStatusConfirm({
                              open: true,
                              status:
                                "SUSPENDED",
                              label:
                                "Maintenance Mode",
                            })
                          }
                          className="
rounded-2xl
border-orange-200
text-orange-600
hover:bg-orange-50
"
                        >

                          Maintenance Mode

                        </Button>

                        {isAdmin() && (

                          <Button
                            variant="outline"
                            onClick={() =>
                              setDeleteConfirmOpen(
                                true
                              )
                            }
                            className="
rounded-2xl
border-rose-200
text-rose-600
hover:bg-rose-50
"
                          >

                            De-commission Hub

                          </Button>

                        )}

                      </div>

                    </>

                  ) : (

                    <div className="
h-[160px]
rounded-[2rem]
border
border-dashed
border-slate-300
dark:border-slate-700
flex
items-center
justify-center
text-slate-400
text-sm
">

                      Admin controls are available in edit mode only.

                    </div>

                  )}

                </div>

              </motion.div>

            </TabsContent>

          </Tabs>

        </motion.div>

      </div>

      {/* ========================================= */}
      {/* CONFIRMATIONS */}
      {/* ========================================= */}

      <ConfirmDialog
        isOpen={statusConfirm.open}
        onClose={() =>
          setStatusConfirm({
            open: false,
            status: null,
            label: "",
          })
        }
        onConfirm={handleChangeStatus}
        title={statusConfirm.label}
        message={
          statusConfirm.status === "ACTIVE"
            ? `Reactivate "${store?.name}"? It will immediately resume accepting orders.`
            : `Put "${store?.name}" into maintenance mode? Order routing will be paused.`
        }
        confirmText={statusConfirm.label}
        variant={
          statusConfirm.status === "ACTIVE"
            ? "default"
            : "destructive"
        }
        loading={statusLoading}
      />

      <ConfirmDialog
        isOpen={deleteConfirmOpen}
        onClose={() =>
          setDeleteConfirmOpen(false)
        }
        onConfirm={handleHardDelete}
        title="De-commission Hub"
        message={`Permanently delete "${store?.name}"? All linked admins must be removed first. This cannot be undone.`}
        confirmText="De-commission"
        variant="destructive"
        loading={deleteLoading}
      />

    </DashboardLayout>

  );

}