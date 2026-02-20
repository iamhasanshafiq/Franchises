import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import TableSkeleton from '../components/common/TableSkeleton';
import { Store, ArrowUpCircle, ArrowDownCircle, History, MapPin, ShieldCheck, Loader2, RefreshCw } from "lucide-react";
import Header from "../components/common/Header";
import DashboardLayout from "../components/layout/DashboardLayout";
import StatusBadge from "../components/common/StatusBadge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const WALLET_BASE = "https://api.barqibazar.org/wallet";
const STORE_BASE = "https://api.barqibazar.org/franchise/api";

export default function StoreDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const walletApi = useMemo(() => axios.create({
    baseURL: WALLET_BASE,
    headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
  }), []);

  const storeApi = useMemo(() => axios.create({
    baseURL: STORE_BASE,
    headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
  }), []);

  const [tab, setTab] = useState("info");
  const [store, setStore] = useState(null);
  const [loadingStore, setLoadingStore] = useState(true);

  const [wallet, setWallet] = useState(null);
  const [loadingWallet, setLoadingWallet] = useState(false);
  const [creditAmount, setCreditAmount] = useState("");
  const [creditReason, setCreditReason] = useState("STORE_TOPUP");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loadStoreData = useCallback(async () => {
    setLoadingStore(true);
    try {
      const res = await storeApi.get(`/stores/${id}`);
      setStore(res.data?.data);
    } catch (e) {
      toast.error("Failed to load store details");
    } finally {
      setLoadingStore(false);
    }
  }, [id, storeApi]);

  const loadWalletData = useCallback(async () => {
    setLoadingWallet(true);
    try {
      const res = await walletApi.get(`/wallets/${id}?currency=PKR`);
      setWallet(res.data?.data);
    } catch (e) {
      if (e.response?.status === 404) {
        const created = await walletApi.post("/wallets", {
          ownerId: id,
          ownerType: "STORE",
          currency: "PKR",
        });
        setWallet(created.data?.data);
        toast.success("Store wallet initialized");
      } else {
        toast.error("Wallet data currently unavailable");
      }
    } finally {
      setLoadingWallet(false);
    }
  }, [id, walletApi]);

  useEffect(() => {
    if (id) {
      loadStoreData();
      loadWalletData();
    }
  }, [id, loadStoreData, loadWalletData]);

  const handleUpdateStore = async () => {
    try {
      await storeApi.put(`/stores/${id}`, {
        name: store.name,
        address: store.address,
      });
      toast.success("Store details updated");
      loadStoreData();
    } catch (e) {
      toast.error("Update failed");
    }
  };

  const handleCredit = async () => {
    if (!creditAmount || parseFloat(creditAmount) <= 0) return toast.error("Enter a valid amount");
    setIsSubmitting(true);

    try {
      await walletApi.post(`/wallets/owner/${id}/credit`, {
        amount: parseFloat(creditAmount),
        reason: creditReason,
        currency: "PKR",
        referenceId: `STORE-REF-${Date.now()}`,
        idempotencyKey: `credit-store-${id}-${Date.now()}`,
      });

      toast.success(`PKR ${creditAmount} added to store wallet`);
      setCreditAmount("");
      loadWalletData();
    } catch (e) {
      toast.error("Credit failed: " + (e.response?.data?.message || "Server error"));
    } finally {
      setIsSubmitting(false);
    }
  };
  if (loadingStore) {
    return (
      <DashboardLayout>
        <Header title="Hub Management" subtitle="Loading store details..." />
        <div className="p-6">
          <TableSkeleton rows={4} />
        </div>
      </DashboardLayout>
    );
  }
  return (
    <DashboardLayout>
      <div className="p-6 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-6 rounded-2xl border shadow-sm">
          <div className="flex items-center gap-5">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Store size={32} />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-gray-900">{store?.name}</h2>
                <StatusBadge status={store?.status || "ACTIVE"} />
              </div>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <MapPin size={14} /> {store?.address}
              </p>
            </div>
          </div>

          <Card className="border-none bg-slate-900 text-white min-w-[240px]">
            <CardContent className="p-4 flex flex-col items-end">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Hub Balance</p>
              {loadingWallet ? (
                <div className="h-8 w-32 bg-muted animate-pulse rounded" />
              ) : (
                <p className="text-3xl font-mono font-bold text-emerald-400">
                  PKR {wallet?.balance?.toLocaleString() ?? "0.00"}
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="bg-muted/50 p-1 mb-6">
            <TabsTrigger value="info">Hub Information</TabsTrigger>
            <TabsTrigger value="wallet">Wallet & Finance</TabsTrigger>
            <TabsTrigger value="settings">Admin Controls</TabsTrigger>
          </TabsList>

          <TabsContent value="info">
            <Card>
              <CardHeader><CardTitle className="text-lg">Edit Hub Details</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Store Name</Label>
                    <Input
                      value={store?.name}
                      onChange={e => setStore(p => ({ ...p, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Local Store ID</Label>
                    <Input disabled value={store?.localStoreid} className="bg-muted font-mono" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Full Address</Label>
                  <Input
                    value={store?.address}
                    onChange={e => setStore(p => ({ ...p, address: e.target.value }))}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2"><Label>Latitude</Label><Input disabled value={store?.latitude} /></div>
                  <div className="space-y-2"><Label>Longitude</Label><Input disabled value={store?.longitude} /></div>
                </div>
                <Button onClick={handleUpdateStore} className="mt-4">Save Hub Information</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wallet" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Quick Credit Card */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ArrowUpCircle className="text-emerald-500" /> Credit Hub Wallet
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 space-y-2">
                    <Label>Top-up Amount (PKR)</Label>
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={creditAmount}
                      onChange={e => setCreditAmount(e.target.value)}
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Label>Adjustment Reason</Label>
                    <Select value={creditReason} onValueChange={setCreditReason}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="STORE_TOPUP">Standard Store Top-up</SelectItem>
                        <SelectItem value="REVENUE_SHARE">Monthly Revenue Share</SelectItem>
                        <SelectItem value="CORRECTION">Ledger Rectification</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="md:mt-8 h-10 px-10" onClick={handleCredit} disabled={isSubmitting || loadingWallet}>
                    {isSubmitting ? <Loader2 className="animate-spin" /> : "Apply Credit"}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle className="text-sm uppercase text-gray-500 font-bold">Wallet Health</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between border-b pb-2"><span className="text-sm text-gray-500">Status</span><StatusBadge status={wallet?.isActive ? "ACTIVE" : "LOCKED"} /></div>
                  <div className="flex justify-between border-b pb-2"><span className="text-sm text-gray-500">Currency</span><span className="font-mono font-bold">PKR</span></div>
                  <div className="flex justify-between"><span className="text-sm text-gray-500">Last Synced</span><span className="text-xs">{new Date().toLocaleTimeString()}</span></div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between border-b">
                <CardTitle className="text-md font-bold flex items-center gap-2">
                  <History size={18} className="text-primary" /> Financial History
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={loadWalletData}
                  disabled={loadingWallet}
                >
                  {loadingWallet ? (
                    <Loader2 size={14} className="mr-2 animate-spin" />
                  ) : (
                    <RefreshCw size={14} className="mr-2" />
                  )}
                  Refresh Ledger
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                {loadingWallet ? (
                  <TableSkeleton rows={6} />
                ) : !wallet?.transactions?.length ? (
                  <div className="p-20 text-center text-gray-400 italic">
                    No financial activity recorded.
                  </div>
                ) : (
                  <div className="divide-y max-h-[600px] overflow-y-auto">
                    {wallet.transactions.map((tx) => (
                      <div key={tx.id} className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className={`p-2.5 rounded-full ${tx.type === 'CREDIT' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                            {tx.type === 'CREDIT' ? <ArrowUpCircle size={20} /> : <ArrowDownCircle size={20} />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900">{tx.reason.replace(/_/g, ' ')}</p>
                            <p className="text-[11px] text-gray-500 uppercase tracking-tighter">{new Date(tx.createdAt).toLocaleString()}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-extrabold font-mono ${tx.type === 'CREDIT' ? 'text-emerald-600' : 'text-rose-600'}`}>
                            {tx.type === 'CREDIT' ? '+' : '-'} {tx.amount.toLocaleString()}
                          </p>
                          <p className="text-[10px] text-slate-400 font-mono">TXID: {tx.id.slice(0, 8)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="border-rose-100">
              <CardHeader className="bg-rose-50/50">
                <CardTitle className="text-rose-700 flex items-center gap-2 text-lg">
                  <ShieldCheck size={20} /> Critical Hub Controls
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="text-sm text-slate-600">Modify the operational status of this Hub. This will affect order routing and rider pickups instantly.</p>
                <div className="flex gap-3">
                  <Button variant="outline" className="text-emerald-600 border-emerald-200">Re-Activate Hub</Button>
                  <Button variant="outline" className="text-amber-600 border-amber-200">Maintenance Mode</Button>
                  <Button variant="outline" className="text-rose-600 border-rose-200">De-commission Hub</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}