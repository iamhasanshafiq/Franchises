import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  MoreVertical,
  Loader2,
} from "lucide-react";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

import { useAuth } from "../hooks/useAuth";
import { useRiders } from "../hooks/useRiders";
import { useRiderDocs } from "../hooks/useRiderDocs";
import { uploadFiles } from "../utils/fileUpload";

const WALLET_BASE = "https://api.barqibazar.org/wallet";

export default function RiderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAdmin, isFranchiseAdmin } = useAuth();
  const canAdmin = isAdmin() || isFranchiseAdmin();

  const { rider, fetchRider, updateRider, changeStatus } = useRiders();
  const { createDocument, deleteDocument } = useRiderDocs();

  // Optimized API Instance
  const api = useMemo(() => axios.create({
    baseURL: WALLET_BASE,
    headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
  }), []);

  // UI State
  const [tab, setTab] = useState("info");
  const [profile, setProfile] = useState({ fullName: "", phone: "", email: "", vehicleType: "" });
  const [docType, setDocType] = useState("CNIC");
  const fileInput = useRef(null);

  // Wallet State
  const [wallet, setWallet] = useState(null);
  const [loadingWallet, setLoadingWallet] = useState(false);
  const [creditAmount, setCreditAmount] = useState("");
  const [creditReason, setCreditReason] = useState("ADMIN_TOPUP");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ---------------- Data Fetching ----------------

  const loadRider = useCallback(async () => {
    const data = await fetchRider(id);
    if (data) {
      setProfile({
        fullName: data.fullName || "",
        phone: data.phone || "",
        email: data.email || "",
        vehicleType: data.vehicleType || "",
      });
    }
  }, [id, fetchRider]);

  const loadWallet = useCallback(async () => {
    setLoadingWallet(true);
    try {
      // Fetching wallet and transaction history in one efficient call
      const res = await api.get(`/wallets/${id}?currency=PKR`);
      setWallet(res.data?.data);
    } catch (e) {
      if (e.response?.status === 404) {
        // Auto-create wallet if missing
        const created = await api.post("/wallets", {
          ownerId: id,
          ownerType: "RIDER",
          currency: "PKR",
        });
        setWallet(created.data?.data);
        toast.success("New wallet initialized for rider");
      } else {
        toast.error("Financial records currently unavailable");
      }
    } finally {
      setLoadingWallet(false);
    }
  }, [id, api]);

  useEffect(() => {
    loadRider();
    loadWallet();
  }, [loadRider, loadWallet]);

  // ---------------- Handlers ----------------

  const handleCredit = async () => {
    if (!creditAmount || parseFloat(creditAmount) <= 0) return toast.error("Enter a valid amount");
    setIsSubmitting(true);

    try {
      // Using idempotencyKey to prevent duplicate transactions
      await api.post(`/wallets/owner/${id}/credit`, {
        amount: parseFloat(creditAmount),
        reason: creditReason,
        currency: "PKR",
        referenceId: `REF-${Date.now()}`,
        idempotencyKey: `credit-${id}-${Date.now()}`,
      });

      toast.success(`Successfully credited PKR ${creditAmount}`);
      setCreditAmount("");
      loadWallet(); // Refresh balance and ledger
    } catch (e) {
      toast.error("Transaction failed: " + (e.response?.data?.message || "Server Error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const onUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    try {
      const uploaded = await uploadFiles(files);
      await createDocument({
        riderId: id,
        documentType: docType,
        documentUrl: uploaded[0].url,
      });
      toast.success("Document uploaded");
      loadRider();
    } catch (err) {
      toast.error("Upload failed");
    }
  };

  return (
    <DashboardLayout>
      <Header title="Rider Profile" subtitle={`ID: ${id?.slice(0, 8)}...`} />

      <div className="p-6 max-w-7xl mx-auto space-y-6">
        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 rounded-xl border">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/riders")}>
              <ArrowLeft size={20} />
            </Button>
            <div>
              <h2 className="text-xl font-bold">{profile.fullName || "Loading..."}</h2>
              <div className="flex gap-2 items-center text-sm text-muted-foreground font-mono">
                <span>{profile.phone}</span> • <StatusBadge status={rider?.status} />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Current Balance</p>
            <p className="text-2xl font-mono font-bold text-primary">
              PKR {wallet?.balance?.toLocaleString() ?? "0.00"}
            </p>
          </div>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="grid grid-cols-4 w-full md:w-[600px] mb-6">
            <TabsTrigger value="info">Info</TabsTrigger>
            <TabsTrigger value="wallet">Wallet</TabsTrigger>
            <TabsTrigger value="docs">Documents</TabsTrigger>
            {canAdmin && <TabsTrigger value="admin">Admin</TabsTrigger>}
          </TabsList>

          {/* FINANCIALS TAB */}
          <TabsContent value="wallet" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-primary text-primary-foreground border-none shadow-lg">
                <CardHeader><CardTitle className="text-sm font-medium flex items-center gap-2"><Wallet size={16}/> Account Stats</CardTitle></CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold font-mono">Rs. {wallet?.balance?.toLocaleString()}</div>
                  <div className="mt-4 space-y-1">
                     <p className="text-[10px] opacity-70">STATUS: {wallet?.isActive ? 'ACTIVE' : 'LOCKED'}</p>
                     <p className="text-[10px] opacity-70">CURRENCY: {wallet?.currency || 'PKR'}</p>
                  </div>
                </CardContent>
              </Card>

              {canAdmin && (
                <Card className="md:col-span-2">
                  <CardHeader><CardTitle className="text-sm font-medium">Add Funds to Rider Wallet</CardTitle></CardHeader>
                  <CardContent className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 space-y-2">
                      <Label className="text-xs">Amount (PKR)</Label>
                      <Input type="number" placeholder="0.00" value={creditAmount} onChange={e => setCreditAmount(e.target.value)} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <Label className="text-xs">Reason for Top-up</Label>
                      <Select value={creditReason} onValueChange={setCreditReason}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ADMIN_TOPUP">Manual Admin Top-up</SelectItem>
                          <SelectItem value="BONUS">Weekly Performance Bonus</SelectItem>
                          <SelectItem value="CORRECTION">Ledger Correction</SelectItem>
                          <SelectItem value="REFERRAL">Referral Reward</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="md:mt-6 h-10 px-8" onClick={handleCredit} disabled={isSubmitting}>
                      {isSubmitting ? <Loader2 className="animate-spin" /> : "Credit"}
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between border-b bg-muted/20">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <History size={16} className="text-primary"/> Transaction Ledger
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={loadWallet}><History size={14} className="mr-2"/> Refresh</Button>
              </CardHeader>
              <CardContent className="p-0">
                {loadingWallet ? (
                  <div className="p-12 text-center text-muted-foreground">Loading transactions...</div>
                ) : !wallet?.transactions?.length ? (
                  <div className="p-12 text-center text-muted-foreground italic">No transaction history found.</div>
                ) : (
                  <div className="divide-y max-h-[500px] overflow-y-auto">
                    {wallet.transactions.map((tx) => (
                      <div key={tx.id} className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-full ${tx.type === 'CREDIT' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {tx.type === 'CREDIT' ? <ArrowUpCircle size={18} /> : <ArrowDownCircle size={18} />}
                          </div>
                          <div>
                            <p className="text-sm font-bold">{tx.reason.replace(/_/g, ' ')}</p>
                            <p className="text-[10px] text-muted-foreground uppercase">{new Date(tx.createdAt).toLocaleString()}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-bold font-mono ${tx.type === 'CREDIT' ? 'text-green-600' : 'text-red-600'}`}>
                            {tx.type === 'CREDIT' ? '+' : '-'} {tx.amount.toLocaleString()}
                          </p>
                          <p className="text-[10px] font-mono text-muted-foreground">REF: {tx.id.slice(0, 8)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* PROFILE INFO TAB */}
          <TabsContent value="info">
            <Card>
              <CardHeader><CardTitle className="text-sm font-medium">Basic Information</CardTitle></CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2"><Label>Full Name</Label><Input value={profile.fullName} onChange={e => setProfile(p => ({ ...p, fullName: e.target.value }))} /></div>
                  <div className="space-y-2"><Label>Vehicle Type</Label>
                    <Select value={profile.vehicleType} onValueChange={v => setProfile(p => ({ ...p, vehicleType: v }))}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="BIKE">Bike</SelectItem>
                        <SelectItem value="MOTORBIKE">Motorbike</SelectItem>
                        <SelectItem value="CAR">Car</SelectItem>
                        <SelectItem value="VAN">Van</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2"><Label>Phone Number</Label><Input disabled value={profile.phone} className="bg-muted" /></div>
                  <div className="space-y-2"><Label>Email Address</Label><Input disabled value={profile.email} className="bg-muted" /></div>
                </div>
                {canAdmin && <Button className="w-full md:w-max" onClick={() => updateRider(id, profile)}>Update Identity</Button>}
              </CardContent>
            </Card>
          </TabsContent>

          {/* DOCUMENTS TAB */}
          <TabsContent value="docs">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between border-b">
                <CardTitle className="text-sm font-medium">Rider Compliance Documents</CardTitle>
                <div className="flex gap-2">
                  <Select value={docType} onValueChange={setDocType}>
                    <SelectTrigger className="w-36 h-9"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {["CNIC", "LICENSE", "VEHICLE", "REGISTRATION"].map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <Button size="sm" onClick={() => fileInput.current.click()}><Upload size={14} className="mr-2" /> Upload</Button>
                  <input hidden ref={fileInput} type="file" onChange={onUpload} />
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                {rider?.documents?.length ? rider.documents.map(d => (
                  <div key={d.id} className="flex justify-between items-center bg-muted/50 p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <FileText className="text-primary" size={20} />
                      <div>
                        <p className="text-sm font-bold">{d.documentType}</p>
                        <a href={d.documentUrl} target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline">View Attachment</a>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => deleteDocument(d.id)}><Trash2 size={16} className="text-red-500" /></Button>
                  </div>
                )) : <div className="p-8 text-center text-muted-foreground italic">No documents uploaded.</div>}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ADMIN TAB */}
          <TabsContent value="admin">
            <Card className="border-red-200">
              <CardHeader className="bg-red-50/50"><CardTitle className="text-sm font-bold text-red-600 flex items-center gap-2"><ShieldCheck size={16}/> System Management</CardTitle></CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="text-xs text-muted-foreground">Warning: Changing rider status affects their ability to take orders and receive payments immediately.</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" className="text-green-600 border-green-200 hover:bg-green-50" onClick={() => changeStatus(id, "ACTIVE", "Admin Action")}>Set Active</Button>
                  <Button variant="outline" className="text-yellow-600 border-yellow-200 hover:bg-yellow-50" onClick={() => changeStatus(id, "SUSPENDED", "Admin Action")}>Suspend</Button>
                  <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50" onClick={() => changeStatus(id, "BLOCKED", "Admin Action")}>Block Account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </DashboardLayout>
  );
}