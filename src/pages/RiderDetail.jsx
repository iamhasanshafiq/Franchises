import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import axios from "axios";

import { toast } from "sonner";

import {
  ArrowLeft,
  Trash2,
  Upload,
  Wallet,
  ArrowUpCircle,
  ArrowDownCircle,
  History,
  FileText,
  ShieldCheck,
  Loader2,
  User,
  Bike,
  Mail,
  Phone,
  Sparkles,
  Activity,
} from "lucide-react";

import { motion } from "framer-motion";

import Header from "../components/common/Header";
import DashboardLayout from "../components/layout/DashboardLayout";
import StatusBadge from "../components/common/StatusBadge";

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

import { Progress } from "../components/ui/progress";

import { useAuth } from "../hooks/useAuth";
import { useRiders } from "../hooks/useRiders";
import { useRiderDocs } from "../hooks/useRiderDocs";

import { uploadFiles } from "../utils/fileUpload";

import { WALLET_URL } from "../config/serviceUrls";

const WALLET_BASE = WALLET_URL;

export default function RiderDetail() {

  const { id } = useParams();

  const navigate = useNavigate();

  const { isAdmin, isFranchiseAdmin } = useAuth();

  const canAdmin =
    isAdmin() ||
    isFranchiseAdmin();

  const {
    rider,
    fetchRider,
    updateRider,
    changeStatus,
  } = useRiders();

  const {
    createDocument,
    deleteDocument,
  } = useRiderDocs();

  const api = useMemo(
    () =>
      axios.create({
        baseURL: WALLET_BASE,
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "access_token"
          )}`,
        },
      }),
    []
  );

  const [tab, setTab] =
    useState("info");

  const [profile, setProfile] =
    useState({
      fullName: "",
      phone: "",
      email: "",
      vehicleType: "",
    });

  const [docType, setDocType] =
    useState("CNIC");

  const fileInput = useRef(null);

  const [wallet, setWallet] =
    useState(null);

  const [loadingWallet, setLoadingWallet] =
    useState(false);

  const [creditAmount, setCreditAmount] =
    useState("");

  const [creditReason, setCreditReason] =
    useState("ADMIN_TOPUP");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  // =========================================
  // GLASS STYLE
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
  // LOAD RIDER
  // =========================================

  const loadRider = useCallback(async () => {

    const data =
      await fetchRider(id);

    if (data) {

      setProfile({
        fullName:
          data.fullName || "",
        phone:
          data.phone || "",
        email:
          data.email || "",
        vehicleType:
          data.vehicleType || "",
      });

    }

  }, [id, fetchRider]);

  // =========================================
  // LOAD WALLET
  // =========================================

  const loadWallet =
    useCallback(async () => {

      setLoadingWallet(true);

      try {

        const res = await api.get(
          `/wallets/${id}?currency=PKR`
        );

        setWallet(
          res.data?.data
        );

      } catch (e) {

        if (
          e.response?.status === 404
        ) {

          const created =
            await api.post(
              "/wallets",
              {
                ownerId: id,
                ownerType: "RIDER",
                currency: "PKR",
              }
            );

          setWallet(
            created.data?.data
          );

          toast.success(
            "New wallet initialized for rider"
          );

        } else {

          toast.error(
            "Financial records unavailable"
          );

        }

      } finally {

        setLoadingWallet(false);

      }

    }, [id, api]);

  // =========================================
  // INITIAL LOAD
  // =========================================

  useEffect(() => {

    loadRider();
    loadWallet();

  }, [loadRider, loadWallet]);

  // =========================================
  // CREDIT
  // =========================================

  const handleCredit =
    async () => {

      if (
        !creditAmount ||
        parseFloat(creditAmount) <= 0
      ) {
        return toast.error(
          "Enter valid amount"
        );
      }

      setIsSubmitting(true);

      try {

        await api.post(
          `/wallets/owner/${id}/credit`,
          {
            amount:
              parseFloat(
                creditAmount
              ),
            reason:
              creditReason,
            currency: "PKR",
            referenceId: `REF-${Date.now()}`,
            idempotencyKey: `credit-${id}-${Date.now()}`,
          }
        );

        toast.success(
          `Credited PKR ${creditAmount}`
        );

        setCreditAmount("");

        loadWallet();

      } catch (e) {

        toast.error(
          "Transaction failed"
        );

      } finally {

        setIsSubmitting(false);

      }

    };

  // =========================================
  // UPLOAD
  // =========================================

  const onUpload =
    async (e) => {

      const files = Array.from(
        e.target.files || []
      );

      if (!files.length) return;

      try {

        const uploaded =
          await uploadFiles(
            files
          );

        await createDocument({
          riderId: id,
          documentType:
            docType,
          documentUrl:
            uploaded[0].url,
        });

        toast.success(
          "Document uploaded"
        );

        loadRider();

      } catch {

        toast.error(
          "Upload failed"
        );

      }

    };

  // =========================================
  // UTILIZATION
  // =========================================

  const walletUsage = Math.min(
    wallet?.balance
      ? wallet.balance / 1000
      : 0,
    100
  );

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
          title="Rider Intelligence"
          subtitle={`Live Operational Profile • ${id?.slice(
            0,
            8
          )}`}
        />

        <motion.div

          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
          }}

          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}

          transition={{
            duration: 0.7,
          }}

          className="
relative
overflow-hidden
p-6
max-w-[1600px]
mx-auto
space-y-8
"
        >

          {/* BACKGROUND */}

          <div className="absolute inset-0 -z-10 overflow-hidden">

            <div
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

            <div
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

          {/* ========================================= */}
          {/* HERO */}
          {/* ========================================= */}

          <motion.div

            whileHover={{
              y: -2,
            }}

            className={`
${glassCard}
rounded-[2.5rem]
overflow-hidden
`}
          >

            <div
              className="
p-8
flex
flex-col
lg:flex-row
justify-between
gap-8
"
            >

              <div className="flex items-start gap-5">

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    navigate("/riders")
                  }
                  className="
rounded-2xl
hover:bg-slate-100
dark:hover:bg-slate-800
"
                >
                  <ArrowLeft size={20} />
                </Button>

                <div
                  className="
w-20
h-20
rounded-[2rem]
bg-gradient-to-br
from-indigo-500
to-indigo-700
text-white
flex
items-center
justify-center
text-3xl
font-black
shadow-xl
shadow-indigo-500/20
"
                >
                  {profile.fullName?.[0]}
                </div>

                <div className="space-y-3">

                  <div>

                    <h2
                      className="
text-3xl
font-black
tracking-tight
text-slate-800
dark:text-white
"
                    >
                      {profile.fullName ||
                        "Loading..."}
                    </h2>

                    <div className="flex items-center gap-3 mt-2">

                      <StatusBadge
                        status={
                          rider?.status
                        }
                      />

                      <span
                        className="
text-xs
uppercase
font-black
tracking-[0.2em]
text-emerald-500
"
                      >
                        Fleet Active
                      </span>

                    </div>

                  </div>

                  <div
                    className="
flex
flex-wrap
gap-4
text-sm
text-slate-600
dark:text-slate-400
"
                  >

                    <div className="flex items-center gap-2">
                      <Phone size={14} />
                      {profile.phone}
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail size={14} />
                      {profile.email}
                    </div>

                    <div className="flex items-center gap-2">
                      <Bike size={14} />
                      {profile.vehicleType}
                    </div>

                  </div>

                </div>

              </div>

              {/* WALLET */}

              <div
                className="
min-w-[280px]
rounded-[2rem]
p-6
bg-gradient-to-br
from-[#081A17]
via-[#03140F]
to-black
text-white
border
border-white/10
shadow-[0_20px_80px_rgba(0,0,0,0.45)]
relative
overflow-hidden
"
              >

                <div
                  className="
absolute
top-[-30%]
right-[-20%]
w-56
h-56
bg-emerald-500/10
rounded-full
blur-[100px]
"
                />

                <div className="relative z-10">

                  <div className="flex items-center gap-2 mb-4">

                    <Sparkles
                      size={14}
                      className="text-emerald-400"
                    />

                    <span
                      className="
text-[10px]
uppercase
tracking-[0.3em]
font-black
text-emerald-400
"
                    >
                      Financial Node
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs text-slate-400">
                        Wallet Balance
                      </p>

                      <h3 className="text-3xl font-black mt-2">

                        {loadingWallet
                          ? "..."
                          : `PKR ${wallet?.balance?.toLocaleString() || 0}`}

                      </h3>

                    </div>

                    <Wallet
                      className="text-emerald-400"
                      size={32}
                    />

                  </div>

                  <div className="mt-6 space-y-2">

                    <div
                      className="
flex
justify-between
text-[10px]
uppercase
tracking-widest
font-black
text-slate-400
"
                    >
                      <span>
                        Wallet Health
                      </span>

                      <span>
                        {walletUsage}%
                      </span>
                    </div>

                    <Progress
                      value={walletUsage}
                      className="
h-1.5
bg-slate-800
"
                    />

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* ========================================= */}
          {/* TABS */}
          {/* ========================================= */}

          <Tabs
            value={tab}
            onValueChange={setTab}
            className="space-y-8"
          >

            <TabsList
              className="
bg-white
dark:bg-slate-900/70
border
border-slate-200
dark:border-slate-800
rounded-2xl
p-1
h-auto
grid
grid-cols-4
w-full
md:w-[700px]
"
            >

              <TabsTrigger value="info">
                Info
              </TabsTrigger>

              <TabsTrigger value="wallet">
                Wallet
              </TabsTrigger>

              <TabsTrigger value="docs">
                Documents
              </TabsTrigger>

              {canAdmin && (
                <TabsTrigger value="admin">
                  Admin
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
                className={`
${glassCard}
rounded-[2.5rem]
p-8
`}
              >

                <div className="flex items-center gap-3 mb-8">

                  <div
                    className="
p-3
rounded-2xl
bg-indigo-500/10
text-indigo-500
"
                  >
                    <User size={20} />
                  </div>

                  <div>

                    <h3
                      className="
text-xl
font-black
text-slate-800
dark:text-white
"
                    >
                      Rider Identity
                    </h3>

                    <p className="text-sm text-slate-500">
                      Operational profile
                      information
                    </p>

                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-6">

                  <div className="space-y-5">

                    <div className="space-y-2">

                      <Label>
                        Full Name
                      </Label>

                      <Input
                        value={
                          profile.fullName
                        }
                        onChange={(e) =>
                          setProfile(
                            (p) => ({
                              ...p,
                              fullName:
                                e.target
                                  .value,
                            })
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
                        Vehicle Type
                      </Label>

                      <Select
                        value={
                          profile.vehicleType
                        }
                        onValueChange={(
                          v
                        ) =>
                          setProfile(
                            (p) => ({
                              ...p,
                              vehicleType:
                                v,
                            })
                          )
                        }
                      >

                        <SelectTrigger
                          className="
h-12
rounded-2xl
"
                        >
                          <SelectValue />
                        </SelectTrigger>

                        <SelectContent>

                          <SelectItem value="BIKE">
                            Bike
                          </SelectItem>

                          <SelectItem value="MOTORBIKE">
                            Motorbike
                          </SelectItem>

                          <SelectItem value="CAR">
                            Car
                          </SelectItem>

                          <SelectItem value="VAN">
                            Van
                          </SelectItem>

                        </SelectContent>

                      </Select>

                    </div>

                  </div>

                  <div className="space-y-5">

                    <div className="space-y-2">

                      <Label>
                        Phone
                      </Label>

                      <Input
                        disabled
                        value={
                          profile.phone
                        }
                        className="
h-12
rounded-2xl
bg-slate-100
dark:bg-slate-800
"
                      />

                    </div>

                    <div className="space-y-2">

                      <Label>
                        Email
                      </Label>

                      <Input
                        disabled
                        value={
                          profile.email
                        }
                        className="
h-12
rounded-2xl
bg-slate-100
dark:bg-slate-800
"
                      />

                    </div>

                  </div>

                </div>

                {canAdmin && (

                  <div className="mt-8">

                    <Button
                      onClick={() =>
                        updateRider(
                          id,
                          profile
                        )
                      }
                      className="
h-12
px-8
rounded-2xl
font-bold
"
                    >
                      Update Rider
                    </Button>

                  </div>

                )}

              </motion.div>

            </TabsContent>

            {/* ========================================= */}
            {/* WALLET */}
            {/* ========================================= */}

            <TabsContent value="wallet">

              <div className="space-y-8">

                <div className="grid lg:grid-cols-3 gap-6">

                  <motion.div
                    whileHover={{
                      y: -3,
                    }}
                    className={`
${glassCard}
rounded-[2.5rem]
p-8
`}
                  >

                    <div className="flex items-center gap-3 mb-6">

                      <div
                        className="
p-3
rounded-2xl
bg-emerald-500/10
text-emerald-500
"
                      >
                        <Wallet size={20} />
                      </div>

                      <h3
                        className="
text-lg
font-black
text-slate-800
dark:text-white
"
                      >
                        Wallet Stats
                      </h3>

                    </div>

                    <h2
                      className="
text-4xl
font-black
tracking-tight
text-slate-800
dark:text-white
"
                    >
                      Rs.
                      {" "}
                      {wallet?.balance?.toLocaleString() || 0}
                    </h2>

                    <div className="mt-6 space-y-3">

                      <div
                        className="
flex
justify-between
text-sm
"
                      >
                        <span className="text-slate-500">
                          Status
                        </span>

                        <span className="font-bold text-emerald-500">
                          {wallet?.status || "ACTIVE"}
                        </span>

                      </div>

                      <div
                        className="
flex
justify-between
text-sm
"
                      >
                        <span className="text-slate-500">
                          Currency
                        </span>

                        <span className="font-bold">
                          PKR
                        </span>

                      </div>

                    </div>

                  </motion.div>

                  {canAdmin && (

                    <motion.div
                      whileHover={{
                        y: -3,
                      }}
                      className={`
${glassCard}
lg:col-span-2
rounded-[2.5rem]
p-8
`}
                    >

                      <div className="flex items-center gap-3 mb-8">

                        <div
                          className="
p-3
rounded-2xl
bg-indigo-500/10
text-indigo-500
"
                        >
                          <Activity size={20} />
                        </div>

                        <h3
                          className="
text-lg
font-black
text-slate-800
dark:text-white
"
                        >
                          Credit Wallet
                        </h3>

                      </div>

                      <div className="grid md:grid-cols-3 gap-4">

                        <div className="space-y-2">

                          <Label>
                            Amount
                          </Label>

                          <Input
                            type="number"
                            value={
                              creditAmount
                            }
                            onChange={(e) =>
                              setCreditAmount(
                                e.target
                                  .value
                              )
                            }
                            placeholder="0.00"
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
                            value={
                              creditReason
                            }
                            onValueChange={
                              setCreditReason
                            }
                          >

                            <SelectTrigger
                              className="
h-12
rounded-2xl
"
                            >
                              <SelectValue />
                            </SelectTrigger>

                            <SelectContent>

                              <SelectItem value="ADMIN_TOPUP">
                                Admin Top-up
                              </SelectItem>

                              <SelectItem value="BONUS">
                                Bonus
                              </SelectItem>

                              <SelectItem value="CORRECTION">
                                Correction
                              </SelectItem>

                              <SelectItem value="REFERRAL">
                                Referral
                              </SelectItem>

                            </SelectContent>

                          </Select>

                        </div>

                        <div className="flex items-end">

                          <Button
                            onClick={
                              handleCredit
                            }
                            disabled={
                              isSubmitting
                            }
                            className="
w-full
h-12
rounded-2xl
font-bold
"
                          >

                            {isSubmitting ? (
                              <Loader2 className="animate-spin" />
                            ) : (
                              "Credit Wallet"
                            )}

                          </Button>

                        </div>

                      </div>

                    </motion.div>

                  )}

                </div>

                {/* TRANSACTIONS */}

                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  className={`
${glassCard}
rounded-[2.5rem]
overflow-hidden
`}
                >

                  <div
                    className="
p-6
border-b
border-slate-200
dark:border-slate-800
flex
justify-between
items-center
"
                  >

                    <div className="flex items-center gap-3">

                      <div
                        className="
p-3
rounded-2xl
bg-orange-500/10
text-orange-500
"
                      >
                        <History size={18} />
                      </div>

                      <div>

                        <h3
                          className="
font-black
text-slate-800
dark:text-white
"
                        >
                          Transaction Ledger
                        </h3>

                        <p className="text-xs text-slate-500">
                          Latest financial
                          activity
                        </p>

                      </div>

                    </div>

                    <Button
                      variant="ghost"
                      onClick={
                        loadWallet
                      }
                      className="
rounded-2xl
"
                    >
                      Refresh
                    </Button>

                  </div>

                  <div className="divide-y divide-slate-100 dark:divide-slate-800">

                    {wallet?.transactions?.length ? (

                      wallet.transactions.map(
                        (tx) => (

                          <motion.div

                            whileHover={{
                              x: 4,
                            }}

                            key={tx.id}

                            className="
p-5
flex
items-center
justify-between
hover:bg-slate-50
dark:hover:bg-slate-900/40
transition-all
duration-500
"
                          >

                            <div className="flex items-center gap-4">

                              <div
                                className={`
p-3
rounded-2xl
${tx.type ===
                                    "CREDIT"
                                    ? "bg-emerald-500/10 text-emerald-500"
                                    : "bg-red-500/10 text-red-500"
                                  }
`}
                              >

                                {tx.type ===
                                  "CREDIT" ? (
                                  <ArrowUpCircle size={20} />
                                ) : (
                                  <ArrowDownCircle size={20} />
                                )}

                              </div>

                              <div>

                                <p
                                  className="
font-bold
text-slate-800
dark:text-white
"
                                >
                                  {tx.reason.replace(
                                    /_/g,
                                    " "
                                  )}
                                </p>

                                <p className="text-xs text-slate-500 mt-1">
                                  {new Date(
                                    tx.createdAt
                                  ).toLocaleString()}
                                </p>

                              </div>

                            </div>

                            <div className="text-right">

                              <p
                                className={`
font-black
${tx.type ===
                                    "CREDIT"
                                    ? "text-emerald-500"
                                    : "text-red-500"
                                  }
`}
                              >
                                {tx.type ===
                                  "CREDIT"
                                  ? "+"
                                  : "-"}
                                {" "}
                                {tx.amount.toLocaleString()}
                              </p>

                              <p className="text-xs text-slate-500 font-mono">
                                REF:
                                {" "}
                                {tx.id.slice(
                                  0,
                                  8
                                )}
                              </p>

                            </div>

                          </motion.div>

                        )
                      )

                    ) : (

                      <div
                        className="
p-16
text-center
text-slate-500
"
                      >
                        No transaction history
                      </div>

                    )}

                  </div>

                </motion.div>

              </div>

            </TabsContent>

            {/* ========================================= */}
            {/* DOCS */}
            {/* ========================================= */}

            <TabsContent value="docs">

              <motion.div
                whileHover={{
                  y: -3,
                }}
                className={`
${glassCard}
rounded-[2.5rem]
overflow-hidden
`}
              >

                <div
                  className="
p-6
border-b
border-slate-200
dark:border-slate-800
flex
justify-between
items-center
"
                >

                  <div>

                    <h3
                      className="
font-black
text-slate-800
dark:text-white
"
                    >
                      Compliance Documents
                    </h3>

                    <p className="text-xs text-slate-500 mt-1">
                      Rider verification
                      records
                    </p>

                  </div>

                  <div className="flex gap-3">

                    <Select
                      value={docType}
                      onValueChange={
                        setDocType
                      }
                    >

                      <SelectTrigger
                        className="
w-40
h-10
rounded-2xl
"
                      >
                        <SelectValue />
                      </SelectTrigger>

                      <SelectContent>

                        {[
                          "CNIC",
                          "LICENSE",
                          "VEHICLE",
                          "REGISTRATION",
                        ].map((t) => (

                          <SelectItem
                            key={t}
                            value={t}
                          >
                            {t}
                          </SelectItem>

                        ))}

                      </SelectContent>

                    </Select>

                    <Button
                      onClick={() =>
                        fileInput.current.click()
                      }
                      className="
rounded-2xl
"
                    >
                      <Upload
                        size={14}
                        className="mr-2"
                      />
                      Upload
                    </Button>

                    <input
                      hidden
                      ref={fileInput}
                      type="file"
                      onChange={onUpload}
                    />

                  </div>

                </div>

                <div className="p-6 space-y-3">

                  {rider?.documents
                    ?.length ? (

                    rider.documents.map(
                      (d) => (

                        <motion.div

                          whileHover={{
                            scale: 1.01,
                          }}

                          key={d.id}

                          className="
p-4
rounded-2xl
border
border-slate-200
dark:border-slate-800
bg-slate-50
dark:bg-slate-900/40
flex
justify-between
items-center
"
                        >

                          <div className="flex items-center gap-4">

                            <div
                              className="
p-3
rounded-2xl
bg-indigo-500/10
text-indigo-500
"
                            >
                              <FileText size={18} />
                            </div>

                            <div>

                              <p
                                className="
font-bold
text-slate-800
dark:text-white
"
                              >
                                {d.documentType}
                              </p>

                              <a
                                href={
                                  d.documentUrl
                                }
                                target="_blank"
                                rel="noreferrer"
                                className="
text-xs
text-indigo-500
hover:underline
"
                              >
                                View Attachment
                              </a>

                            </div>

                          </div>

                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              deleteDocument(
                                d.id
                              )
                            }
                            className="
rounded-2xl
hover:bg-red-500/10
"
                          >
                            <Trash2
                              size={16}
                              className="text-red-500"
                            />
                          </Button>

                        </motion.div>

                      )
                    )

                  ) : (

                    <div
                      className="
p-16
text-center
text-slate-500
"
                    >
                      No documents uploaded
                    </div>

                  )}

                </div>

              </motion.div>

            </TabsContent>

            {/* ========================================= */}
            {/* ADMIN */}
            {/* ========================================= */}

            <TabsContent value="admin">

              <motion.div
                whileHover={{
                  y: -3,
                }}
                className="
rounded-[2.5rem]
overflow-hidden
border
border-red-200
dark:border-red-900/30
bg-white
dark:bg-slate-900/70
shadow-[0_10px_40px_rgba(0,0,0,0.06)]
"
              >

                <div
                  className="
p-6
border-b
border-red-100
dark:border-red-900/20
bg-red-50/70
dark:bg-red-950/10
"
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
p-3
rounded-2xl
bg-red-500/10
text-red-500
"
                    >
                      <ShieldCheck size={18} />
                    </div>

                    <div>

                      <h3 className="font-black text-red-500">
                        System Controls
                      </h3>

                      <p className="text-xs text-red-400 mt-1">
                        Administrative rider
                        management
                      </p>

                    </div>

                  </div>

                </div>

                <div className="p-8">

                  <div className="flex flex-wrap gap-4">

                    <Button
                      variant="outline"
                      className="
rounded-2xl
border-emerald-200
text-emerald-500
hover:bg-emerald-50
hover:text-emerald-500
"
                      onClick={() =>
                        changeStatus(
                          id,
                          "ACTIVE",
                          "Admin Action"
                        )
                      }
                    >
                      Set Active
                    </Button>

                    <Button
                      variant="outline"
                      className="
rounded-2xl
border-yellow-200
text-yellow-500
hover:text-yellow-500
hover:bg-yellow-50
"
                      onClick={() =>
                        changeStatus(
                          id,
                          "SUSPENDED",
                          "Admin Action"
                        )
                      }
                    >
                      Suspend
                    </Button>

                    <Button
                      variant="outline"
                      className="
rounded-2xl
border-red-200
text-red-500
hover:text-red-500
hover:bg-red-50
"
                      onClick={() =>
                        changeStatus(
                          id,
                          "BLOCKED",
                          "Admin Action"
                        )
                      }
                    >
                      Block Account
                    </Button>

                  </div>

                </div>

              </motion.div>

            </TabsContent>

          </Tabs>

        </motion.div>

      </div>

    </DashboardLayout>

  );
}