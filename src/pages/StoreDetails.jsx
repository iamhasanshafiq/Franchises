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
  ArrowLeft,
  Wallet,
  Activity,
  Globe,
  BarChart3,
  Settings2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Edit3,
} from "lucide-react";

import { motion } from "framer-motion";

import TableSkeleton from "../components/common/TableSkeleton";
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

  const { isAdmin } = useAuth();

  const walletApi = useMemo(() => axios.create({
    baseURL: WALLET_BASE,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  }), []);

  const storeApi = useMemo(() => axios.create({
    baseURL: STORE_BASE,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  }), []);

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

  const transactionsPerPage = 6;

  const paginatedTransactions = useMemo(() => {

    const transactions =
      wallet?.transactions || [];

    const start =
      (currentPage - 1) *
      transactionsPerPage;

    return transactions.slice(
      start,
      start + transactionsPerPage
    );

  }, [wallet, currentPage]);

  const totalPages = Math.ceil(
    (wallet?.transactions?.length || 0) /
    transactionsPerPage
  );

  // =========================================
  // LOAD STORE
  // =========================================

  const loadStoreData = useCallback(async () => {

    setLoadingStore(true);

    try {

      const res = await storeApi.get(
        `/stores/${id}`
      );

      setStore(res.data?.data);

      setOriginalStore(res.data?.data);

    } catch (e) {

      toast.error(
        "Failed to load store details"
      );

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

        const created =
          await walletApi.post(
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
  // INITIAL LOAD
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
  // UPDATE STORE
  // =========================================

  const handleUpdateStore = async () => {

    try {

      await storeApi.patch(
        `/stores/${id}`,
        {
          name: store?.name,
          address: store?.address,
        }
      );

      toast.success(
        "Store details updated"
      );

      setIsEditMode(false);

      loadStoreData();

    } catch (e) {

      toast.error(
        e.response?.data?.message ||
        "Update failed"
      );

    }

  };

  // =========================================
  // CREDIT WALLET
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
  // ANALYTICS
  // =========================================

  const analytics = useMemo(() => {

    return {

      balance:
        wallet?.balance || 0,

      transactions:
        wallet?.transactions
          ?.length || 0,

      status:
        wallet?.isActive
          ? "ACTIVE"
          : "LOCKED",

      health:
        wallet?.isActive
          ? 92
          : 35,
    };

  }, [wallet]);

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
`;

  // =========================================
  // LOADING
  // =========================================

  if (loadingStore) {

    return (

      <DashboardLayout>

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

      </DashboardLayout>

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
          title="Hub Intelligence Center"
          subtitle="Advanced operational monitoring & financial infrastructure"
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
max-w-[1700px]
mx-auto
space-y-8
"

        >

          {/* BACKGROUND */}

          <div className="absolute inset-0 -z-10 overflow-hidden">

            <div className="
absolute inset-0
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

          {/* TOP BAR */}

          <div className="
flex
flex-col
xl:flex-row
justify-between
gap-6
">

            {/* LEFT */}

            <motion.div

              whileHover={{
                y: -4,
              }}

              className={`
${glassCard}
flex-1
rounded-[2.5rem]
p-8
`}

            >

              <div className="
flex
flex-col
lg:flex-row
justify-between
gap-6
">

                <div className="flex gap-5">

                  <div className="
w-20
h-20
rounded-[2rem]
bg-gradient-to-br
from-orange-500
to-orange-600
text-white
flex
items-center
justify-center
shadow-2xl
shadow-orange-500/30
">

                    <Store size={34} />

                  </div>

                  <div>

                    <div className="
flex
items-center
gap-3
flex-wrap
">

                      <h2 className="
text-3xl
font-black
tracking-tight
text-slate-800
dark:text-white
">
                        {store?.name}
                      </h2>

                      <StatusBadge
                        status={
                          store?.status ||
                          "ACTIVE"
                        }
                      />

                    </div>

                    <p className="
mt-2
text-sm
text-slate-500
dark:text-slate-400
flex
items-center
gap-2
">
                      <MapPin size={15} />
                      {store?.address}
                    </p>

                    <div className="
mt-5
flex
gap-3
flex-wrap
">

                      <Button
                        onClick={() =>
                          navigate(-1)
                        }
                        className="
rounded-2xl
bg-slate-900
hover:bg-slate-800
text-white
h-11
px-5
"
                      >

                        <ArrowLeft
                          size={16}
                          className="mr-2"
                        />

                        Back

                      </Button>

                      <Button
                        onClick={() =>
                          setIsEditMode(
                            !isEditMode
                          )
                        }
                        className="
rounded-2xl
bg-orange-500
hover:bg-orange-600
text-white
h-11
px-5
shadow-xl
shadow-orange-500/20
"
                      >

                        <Edit3
                          size={16}
                          className="mr-2"
                        />

                        {isEditMode
                          ? "Editing Enabled"
                          : "Enable Edit"}

                      </Button>

                    </div>

                  </div>

                </div>

                {/* WALLET */}

                <div className="
min-w-[320px]
rounded-[2rem]
bg-gradient-to-br
from-slate-900
to-slate-800
text-white
p-6
border
border-white/10
relative
overflow-hidden
">

                  <div className="
absolute
top-0
right-0
w-40
h-40
bg-orange-500/10
rounded-full
blur-3xl
" />

                  <div className="
relative
z-10
">

                    <div className="
flex
items-center
justify-between
">

                      <div>

                        <p className="
text-[11px]
uppercase
tracking-[0.3em]
text-slate-400
font-black
">
                          Hub Wallet
                        </p>

                        <h3 className="
mt-3
text-4xl
font-black
font-mono
text-emerald-400
">
                          PKR
                        </h3>

                      </div>

                      <div className="
w-14
h-14
rounded-2xl
bg-emerald-500/10
text-emerald-400
flex
items-center
justify-center
">

                        <Wallet size={24} />

                      </div>

                    </div>

                    <p className="
mt-4
text-3xl
font-black
font-mono
">

                      {loadingWallet
                        ? "Loading..."
                        : wallet?.balance?.toLocaleString() ||
                          "0.00"}

                    </p>

                    <div className="
mt-5
flex
items-center
justify-between
text-xs
text-slate-400
">

                      <span>
                        Live Financial State
                      </span>

                      <span>
                        {analytics.status}
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

          {/* ANALYTICS */}

          <div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
gap-6
">

            <motion.div
              whileHover={{ y: -5 }}
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
font-black
">
                    Transactions
                  </p>

                  <h3 className="
text-3xl
font-black
mt-2
text-slate-800
dark:text-white
">
                    {analytics.transactions}
                  </h3>

                </div>

                <div className="
w-14
h-14
rounded-2xl
bg-indigo-500/10
flex
items-center
justify-center
text-indigo-500
">

                  <History size={24} />

                </div>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
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
font-black
">
                    Wallet Health
                  </p>

                  <h3 className="
text-3xl
font-black
mt-2
text-slate-800
dark:text-white
">
                    {analytics.health}%
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

                  <Activity size={24} />

                </div>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
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
font-black
">
                    Network State
                  </p>

                  <h3 className="
text-2xl
font-black
mt-2
text-slate-800
dark:text-white
">
                    Stable
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
              whileHover={{ y: -5 }}
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
font-black
">
                    System Security
                  </p>

                  <h3 className="
text-2xl
font-black
mt-2
text-slate-800
dark:text-white
">
                    Protected
                  </h3>

                </div>

                <div className="
w-14
h-14
rounded-2xl
bg-rose-500/10
flex
items-center
justify-center
text-rose-500
">

                  <ShieldCheck size={24} />

                </div>

              </div>

            </motion.div>

          </div>

          {/* TABS */}

          <Tabs
            value={tab}
            onValueChange={setTab}
            className="w-full"
          >

            <TabsList className="
bg-white/70
dark:bg-slate-900/60
backdrop-blur-xl
rounded-2xl
p-2
border
border-slate-200
dark:border-slate-800
h-auto
flex
flex-wrap
gap-2
">

              <TabsTrigger
                value="info"
                className="rounded-xl px-5 py-3"
              >
                Hub Information
              </TabsTrigger>

              <TabsTrigger
                value="wallet"
                className="rounded-xl px-5 py-3"
              >
                Wallet & Finance
              </TabsTrigger>

              <TabsTrigger
                value="settings"
                className="rounded-xl px-5 py-3"
              >
                Admin Controls
              </TabsTrigger>

            </TabsList>

            {/* INFO */}

            <TabsContent
              value="info"
              className="mt-6"
            >

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className={`
${glassCard}
rounded-[2.5rem]
overflow-hidden
`}
              >

                <div className="
p-8
border-b
border-white/10
flex
items-center
gap-4
bg-slate-50
dark:bg-slate-900/10
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
text-xl
font-black
text-slate-800
dark:text-white
">
                      Hub Information Matrix
                    </h3>

                    <p className="
text-xs
text-slate-500
dark:text-slate-400
">
                      Infrastructure & location intelligence
                    </p>

                  </div>

                </div>

                <div className="p-8 space-y-6">

                  <div className="
grid
md:grid-cols-2
gap-6
">

                    <div className="space-y-3">

                      <Label className="
text-[10px]
uppercase
tracking-[0.25em]
font-black
text-slate-500
">
                        Store Name
                      </Label>

                      {isEditMode ? (

                        <Input
                          className="
h-14
rounded-2xl
border-slate-200
dark:border-slate-700
"
                          value={store?.name ?? ""}
                          onChange={e =>
                            setStore(p => ({
                              ...p,
                              name:
                                e.target.value,
                            }))
                          }
                        />

                      ) : (

                        <div className="
h-14
rounded-2xl
bg-slate-100
dark:bg-slate-800
flex
items-center
px-5
font-bold
">
                          {store?.name}
                        </div>

                      )}

                    </div>

                    <div className="space-y-3">

                      <Label className="
text-[10px]
uppercase
tracking-[0.25em]
font-black
text-slate-500
">
                        Local Store ID
                      </Label>

                      <div className="
h-14
rounded-2xl
bg-slate-100
dark:bg-slate-800
flex
items-center
px-5
font-mono
tracking-[0.15em]
text-slate-500
">
                        {store?.localStoreid}
                      </div>

                    </div>

                  </div>

                  <div className="space-y-3">

                    <Label className="
text-[10px]
uppercase
tracking-[0.25em]
font-black
text-slate-500
">
                      Full Address
                    </Label>

                    {isEditMode ? (

                      <Input
                        className="
h-14
rounded-2xl
border-slate-200
dark:border-slate-700
"
                        value={
                          store?.address ?? ""
                        }
                        onChange={e =>
                          setStore(p => ({
                            ...p,
                            address:
                              e.target.value,
                          }))
                        }
                      />

                    ) : (

                      <div className="
h-14
rounded-2xl
bg-slate-100
dark:bg-slate-800
flex
items-center
px-5
">
                        {store?.address}
                      </div>

                    )}

                  </div>

                  <div className="
grid
md:grid-cols-2
gap-6
">

                    <div className="space-y-3">

                      <Label className="
text-[10px]
uppercase
tracking-[0.25em]
font-black
text-slate-500
">
                        Latitude
                      </Label>

                      <div className="
h-14
rounded-2xl
bg-slate-100
dark:bg-slate-800
flex
items-center
px-5
font-mono
">
                        {store?.latitude}
                      </div>

                    </div>

                    <div className="space-y-3">

                      <Label className="
text-[10px]
uppercase
tracking-[0.25em]
font-black
text-slate-500
">
                        Longitude
                      </Label>

                      <div className="
h-14
rounded-2xl
bg-slate-100
dark:bg-slate-800
flex
items-center
px-5
font-mono
">
                        {store?.longitude}
                      </div>

                    </div>

                  </div>

                  {isEditMode && (

                    <div className="
flex
gap-4
pt-6
border-t
border-slate-200
dark:border-slate-800
">

                      <Button
                        variant="outline"
                        className="
h-12
rounded-2xl
px-6
"
                        onClick={() => {

                          setStore(
                            originalStore
                          );

                          setIsEditMode(
                            false
                          );

                        }}
                      >

                        <X
                          size={16}
                          className="mr-2"
                        />

                        Cancel

                      </Button>

                      <Button
                        onClick={
                          handleUpdateStore
                        }
                        className="
h-12
rounded-2xl
px-6
bg-orange-500
hover:bg-orange-600
text-white
shadow-xl
shadow-orange-500/20
"
                      >

                        <Sparkles
                          size={16}
                          className="mr-2"
                        />

                        Save Hub Information

                      </Button>

                    </div>

                  )}

                </div>

              </motion.div>

            </TabsContent>

            {/* WALLET */}

            <TabsContent
              value="wallet"
              className="mt-6 space-y-6"
            >

              <div className="
grid
xl:grid-cols-3
gap-6
">

                {/* CREDIT */}

                <motion.div
                  whileHover={{ y: -4 }}
                  className="
xl:col-span-2
"
                >

                  <Card className="
rounded-[2rem]
border-slate-200
dark:border-slate-800
shadow-xl
">

                    <CardHeader className="
border-b
bg-slate-50/50
dark:bg-slate-900/20
rounded-t-[2rem]
">

                      <CardTitle className="
flex
items-center
gap-3
text-xl
font-black
">

                        <div className="
p-3
rounded-2xl
bg-emerald-500/10
text-emerald-500
">

                          <ArrowUpCircle size={20} />

                        </div>

                        Credit Hub Wallet

                      </CardTitle>

                    </CardHeader>

                    <CardContent className="
p-8
grid
md:grid-cols-3
gap-5
">

                      <div className="space-y-3">

                        <Label>
                          Top-up Amount
                        </Label>

                        <Input
                          type="number"
                          className="
h-14
rounded-2xl
"
                          placeholder="0.00"
                          value={creditAmount}
                          onChange={e =>
                            setCreditAmount(
                              e.target.value
                            )
                          }
                        />

                      </div>

                      <div className="space-y-3">

                        <Label>
                          Adjustment Reason
                        </Label>

                        <Select
                          value={
                            creditReason
                          }
                          onValueChange={
                            setCreditReason
                          }
                        >

                          <SelectTrigger
                            className="
h-14
rounded-2xl
"
                          >
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

                      <Button
                        onClick={
                          handleCredit
                        }
                        disabled={
                          isSubmitting ||
                          loadingWallet
                        }
                        className="
h-14
mt-auto
rounded-2xl
bg-orange-500
hover:bg-orange-600
text-white
font-black
shadow-xl
shadow-orange-500/20
"
                      >

                        {isSubmitting ? (

                          <Loader2 className="animate-spin" />

                        ) : (

                          <>
                            <Wallet
                              size={16}
                              className="mr-2"
                            />
                            Apply Credit
                          </>

                        )}

                      </Button>

                    </CardContent>

                  </Card>

                </motion.div>

                {/* HEALTH */}

                <motion.div
                  whileHover={{ y: -4 }}
                >

                  <Card className="
rounded-[2rem]
border-slate-200
dark:border-slate-800
shadow-xl
h-full
">

                    <CardHeader>

                      <CardTitle className="
text-sm
uppercase
tracking-[0.25em]
text-slate-500
font-black
">
                        Wallet Health
                      </CardTitle>

                    </CardHeader>

                    <CardContent className="
space-y-5
">

                      <div className="
flex
justify-between
items-center
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
justify-between
items-center
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
justify-between
items-center
">

                        <span className="
text-sm
text-slate-500
">
                          Last Synced
                        </span>

                        <span className="
text-xs
font-semibold
">
                          {new Date().toLocaleTimeString()}
                        </span>

                      </div>

                    </CardContent>

                  </Card>

                </motion.div>

              </div>

              {/* TRANSACTIONS */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
              >

                <Card className="
rounded-[2.5rem]
overflow-hidden
border-slate-200
dark:border-slate-800
shadow-xl
">

                  <CardHeader className="
flex
flex-row
items-center
justify-between
border-b
bg-slate-50/50
dark:bg-slate-900/20
">

                    <CardTitle className="
flex
items-center
gap-3
text-lg
font-black
">

                      <div className="
p-3
rounded-2xl
bg-indigo-500/10
text-indigo-500
">

                        <History size={18} />

                      </div>

                      Financial Ledger

                    </CardTitle>

                    <Button
                      variant="outline"
                      size="sm"
                      className="
rounded-xl
"
                      onClick={
                        loadWalletData
                      }
                    >

                      {loadingWallet ? (

                        <Loader2
                          size={14}
                          className="
mr-2
animate-spin
"
                        />

                      ) : (

                        <RefreshCw
                          size={14}
                          className="mr-2"
                        />

                      )}

                      Refresh

                    </Button>

                  </CardHeader>

                  <CardContent className="p-0">

                    {loadingWallet ? (

                      <TableSkeleton rows={6} />

                    ) : !wallet
                      ?.transactions
                      ?.length ? (

                      <div className="
p-20
text-center
text-slate-400
italic
">
                        No financial activity recorded.
                      </div>

                    ) : (

                      <>
                        <div className="
divide-y
max-h-[700px]
overflow-y-auto
">

                          {paginatedTransactions.map(
                            (tx) => (

                              <div
                                key={tx.id}
                                className="
p-6
flex
items-center
justify-between
hover:bg-slate-50
dark:hover:bg-slate-900/30
transition-colors
"
                              >

                                <div className="
flex
items-center
gap-5
">

                                  <div className={`
p-3
rounded-2xl
${tx.type === "CREDIT"
                                      ? "bg-emerald-100 text-emerald-700"
                                      : "bg-rose-100 text-rose-700"
                                    }
`}>

                                    {tx.type ===
                                      "CREDIT" ? (
                                      <ArrowUpCircle size={22} />
                                    ) : (
                                      <ArrowDownCircle size={22} />
                                    )}

                                  </div>

                                  <div>

                                    <p className="
text-sm
font-black
text-slate-800
dark:text-white
uppercase
">
                                      {tx.reason.replace(
                                        /_/g,
                                        " "
                                      )}
                                    </p>

                                    <p className="
text-[11px]
text-slate-500
mt-1
">
                                      {new Date(
                                        tx.createdAt
                                      ).toLocaleString()}
                                    </p>

                                  </div>

                                </div>

                                <div className="text-right">

                                  <p className={`
text-lg
font-black
font-mono
${tx.type === "CREDIT"
                                      ? "text-emerald-500"
                                      : "text-rose-500"
                                    }
`}>

                                    {tx.type ===
                                      "CREDIT"
                                      ? "+"
                                      : "-"}

                                    {" "}

                                    {tx.amount.toLocaleString()}

                                  </p>

                                  <p className="
text-[10px]
text-slate-400
font-mono
mt-1
">
                                    TXID:
                                    {" "}
                                    {tx.id.slice(
                                      0,
                                      8
                                    )}
                                  </p>

                                </div>

                              </div>

                            )
                          )}

                        </div>

                        {/* PAGINATION */}

                        {totalPages > 1 && (

                          <div className="
flex
items-center
justify-between
p-5
border-t
bg-slate-50/50
dark:bg-slate-900/20
">

                            <p className="
text-xs
uppercase
tracking-[0.25em]
font-black
text-slate-500
">
                              Page
                              {" "}
                              {currentPage}
                              {" "}
                              of
                              {" "}
                              {totalPages}
                            </p>

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

                                <ChevronLeft
                                  size={15}
                                />

                              </Button>

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

                                <ChevronRight
                                  size={15}
                                />

                              </Button>

                            </div>

                          </div>

                        )}

                      </>

                    )}

                  </CardContent>

                </Card>

              </motion.div>

            </TabsContent>

            {/* SETTINGS */}

            <TabsContent
              value="settings"
              className="mt-6"
            >

              <motion.div
                whileHover={{
                  y: -3,
                }}
              >

                <Card className="
rounded-[2.5rem]
overflow-hidden
border-rose-200
shadow-xl
">

                  <CardHeader className="
bg-gradient-to-r
from-rose-500/10
to-orange-500/10
border-b
">

                    <CardTitle className="
flex
items-center
gap-3
text-xl
font-black
text-rose-600
">

                      <div className="
p-3
rounded-2xl
bg-rose-500/10
">

                        <Settings2 size={20} />

                      </div>

                      Critical Hub Controls

                    </CardTitle>

                  </CardHeader>

                  <CardContent className="
p-8
space-y-6
">

                    <p className="
text-sm
text-slate-600
dark:text-slate-400
leading-relaxed
">
                      Modify the operational state
                      of this Hub. Changes affect
                      logistics routing, rider
                      dispatching and order
                      allocation instantly across
                      the network.
                    </p>

                    <div className="
flex
gap-4
flex-wrap
">

                      <Button
                        variant="outline"
                        className="
rounded-2xl
h-12
px-6
text-emerald-600
border-emerald-200
"
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
                      >

                        Re-Activate Hub

                      </Button>

                      <Button
                        variant="outline"
                        className="
rounded-2xl
h-12
px-6
text-amber-600
border-amber-200
"
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
                      >

                        Maintenance Mode

                      </Button>

                      {isAdmin() && (

                        <Button
                          variant="outline"
                          className="
rounded-2xl
h-12
px-6
text-rose-600
border-rose-200
"
                          onClick={() =>
                            setDeleteConfirmOpen(
                              true
                            )
                          }
                        >

                          De-commission Hub

                        </Button>

                      )}

                    </div>

                  </CardContent>

                </Card>

              </motion.div>

            </TabsContent>

          </Tabs>

        </motion.div>

      </div>

      {/* STATUS CONFIRM */}

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
          statusConfirm.status ===
            "ACTIVE"
            ? `Reactivate "${store?.name}"? It will immediately resume accepting orders.`
            : `Put "${store?.name}" into maintenance mode? Order routing will be paused.`
        }
        confirmText={
          statusConfirm.label
        }
        variant={
          statusConfirm.status ===
            "ACTIVE"
            ? "default"
            : "destructive"
        }
        loading={statusLoading}
      />

      {/* DELETE CONFIRM */}

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