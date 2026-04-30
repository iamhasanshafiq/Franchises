import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Store, Bike, Users, TrendingUp, CheckCircle, ArrowRight, PieChart, Activity, Wallet, ShieldAlert, Zap, Globe, BarChart3, Landmark } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useCities } from '../hooks/useCities';
import { useFranchises } from '../hooks/useFranchises';
import { useRiders } from '../hooks/useRiders';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatsCards from '../components/dashboard/StatsCards';
import StatusBadge from '../components/common/StatusBadge';
import { Progress } from '../components/ui/progress';
import { Button } from '../components/ui/button';
import { WALLET_URL } from "../config/serviceUrls";

const WALLET_BASE = WALLET_URL;

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, isAdmin, isFranchiseAdmin } = useAuth();
  const [walletBalance, setWalletBalance] = useState(0);

  const { cities, loading: citiesLoading, fetchCities } = useCities();
  const { franchises, loading: franchisesLoading, fetchFranchises } = useFranchises();
  const { riders, loading: ridersLoading, fetchRiders } = useRiders();

  const loadFinancials = useCallback(async () => {
    try {
      const id = isAdmin()
        ? 'admin-root'
        : user?.franchiseId
        || user?.franchise_id
        || user?.franchise?.id;

      if (!id) {
        console.warn("Wallet ID missing:", user);
        return;
      }
      const res = await axios.get(`${WALLET_BASE}/wallets/${id}?currency=PKR`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
      });
      setWalletBalance(res.data?.data?.balance || 0);
    } catch (e) {
      console.warn("Wallet data offline");
    }
  }, [isAdmin, user]);

  useEffect(() => {
    if (isAdmin()) {
      fetchCities();
      fetchFranchises();
      fetchRiders();
    } else if (isFranchiseAdmin()) {
      const fId = user?.franchiseId || user?.franchise?.id;
      if (fId) fetchRiders(null, null, null, fId);
    }
    loadFinancials();
  }, [isAdmin, isFranchiseAdmin, user, loadFinancials]);

  const analytics = useMemo(() => {
    const fleet = riders || [];
    const total = fleet.length;
    const active = fleet.filter(r => ['ACTIVE', 'APPROVED'].includes(r.status)).length;
    const pending = fleet.filter(r => r.status === 'APPLIED').length;

    const cap = user?.franchise?.maxActiveRiders || 100;
    const utilization = Math.round((active / cap) * 100);

    return {
      fleetGrowth: total > 0 ? ((active / total) * 100).toFixed(1) : 0,
      activeCount: active,
      pendingCount: pending,
      totalCount: total,
      utilization,
      bikeMix: fleet.filter(r => r.vehicleType === 'BIKE').length,
      motoMix: fleet.filter(r => r.vehicleType === 'MOTORBIKE').length,
      nodeHealth: franchises?.filter(f => f.status === 'ACTIVE').length || 0
    };
  }, [riders, franchises, user]);

  const cards = useMemo(() => {
    if (isAdmin()) {
      return [
        { title: 'Global Liquidity', value: `Rs. ${walletBalance.toLocaleString()}`, icon: Wallet, color: 'emerald', change: 'Network Total' },
        { title: 'Active Nodes', value: analytics.nodeHealth, icon: Globe, color: 'blue', change: `${franchises?.length} Registered` },
        { title: 'Fleet Deployment', value: analytics.activeCount, icon: Bike, color: 'indigo', change: `${analytics.totalCount} Units` },
        { title: 'Audit Queue', value: analytics.pendingCount, icon: ShieldAlert, color: 'orange', change: 'Awaiting Action' }
      ];
    }
    return [
      { title: 'Node Balance', value: `Rs. ${walletBalance.toLocaleString()}`, icon: Landmark, color: 'emerald', change: 'Available Funds' },
      { title: 'Fleet Utilization', value: `${analytics.utilization}%`, icon: Zap, color: 'blue', change: 'Capacity Used' },
      { title: 'Ready Fleet', value: analytics.activeCount, icon: CheckCircle, color: 'indigo', change: 'Operational Units' },
      { title: 'Compliance Wait', value: analytics.pendingCount, icon: Activity, color: 'orange', change: 'New Applications' }
    ];
  }, [isAdmin, analytics, walletBalance, franchises]);

  return (
    <DashboardLayout>
      <Header
        title="Operations Intelligence"
        subtitle={`Live Command Data • ${user?.fullName || 'System Admin'}`}
      />

      <div className="p-8 max-w-[1600px] mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <StatsCards
          cards={cards}
          loading={citiesLoading || franchisesLoading || ridersLoading}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
              <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-100">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">Deployment Stream</h3>
                    <p className="text-xs text-slate-400">Latest fleet status updates</p>
                  </div>
                </div>
                <Button variant="ghost" onClick={() => navigate('/riders')} className="rounded-xl font-bold text-indigo-600 hover:bg-indigo-50">
                  Full Fleet <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>

              <div className="divide-y divide-slate-50">
                {ridersLoading ? (
                  <div className="p-6 space-y-4 animate-pulse">
                    <div className="h-16 bg-muted rounded-2xl"></div>
                    <div className="h-16 bg-muted rounded-2xl"></div>
                    <div className="h-16 bg-muted rounded-2xl"></div>
                  </div>
                ) : (
                  riders?.slice(0, 5).map((rider) => (
                    <div key={rider.id} className="p-5 flex items-center justify-between hover:bg-slate-50/80 transition-all cursor-pointer group" onClick={() => navigate(`/riders/${rider.id}`)}>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-lg group-hover:scale-110 transition-transform">
                          {rider.fullName?.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-700">{rider.fullName}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full font-bold text-slate-500 uppercase tracking-tighter">{rider.vehicleType}</span>
                            <span className="text-[10px] text-slate-400 font-mono tracking-widest">{rider.phone}</span>
                          </div>
                        </div>
                      </div>
                      <StatusBadge status={rider.status} />
                    </div>
                  )
                  ))}
              </div>
            </div>
            {isAdmin() && (
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-xl">
                    <BarChart3 size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">Node Concentration by Region</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {citiesLoading ? (
                    <div className="space-y-6 animate-pulse col-span-2">
                      <div className="h-12 bg-muted rounded-xl"></div>
                      <div className="h-12 bg-muted rounded-xl"></div>
                    </div>
                  ) : (
                    cities?.slice(0, 4).map((city) => {
                      const count =
                        franchises?.filter((f) => f.cityId === city.id).length || 0;
                      const percent = Math.min((count / 10) * 100, 100);

                      return (
                        <div key={city.id} className="space-y-3">
                          <div className="flex justify-between items-end">
                            <div>
                              <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">
                                {city.name}
                              </p>
                              <p className="text-sm font-bold text-slate-700">
                                {count} Active Hubs
                              </p>
                            </div>
                            <span className="text-xs font-bold text-blue-600">
                              {count > 0 ? "High Growth" : "Expansion Target"}
                            </span>
                          </div>
                          <Progress
                            value={percent}
                            className="h-2 rounded-full bg-slate-100"
                          />
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-xl">
                  <PieChart size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Fleet Mix</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Bike size={20} className="text-blue-600" />
                    <span className="text-sm font-bold text-slate-600">Standard Bikes</span>
                  </div>
                  <span className="text-lg font-black text-blue-600">{analytics.bikeMix}</span>
                </div>
                <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Zap size={20} className="text-indigo-600" />
                    <span className="text-sm font-bold text-slate-600">Motorbikes</span>
                  </div>
                  <span className="text-lg font-black text-indigo-600">{analytics.motoMix}</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group shadow-2xl">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">System Handshake: Optimal</span>
                </div>
                <h4 className="text-2xl font-bold mb-2">Node: {user?.franchise?.code || 'Barqi-Root'}</h4>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">Currently overseeing {analytics.totalCount} assets in the regional mesh network.</p>
                <div className="space-y-4">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    <span>Operational Efficiency</span>
                    <span className="text-white">{analytics.utilization}%</span>
                  </div>
                  <Progress value={analytics.utilization} className="h-1.5 bg-slate-800" />
                </div>
              </div>
              <Activity className="absolute -right-8 -bottom-8 text-white/5 group-hover:text-white/10 transition-all duration-1000 rotate-12" size={200} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button onClick={() => navigate('/stores')} variant="outline" className="h-28 rounded-[2rem] flex flex-col gap-3 border-slate-200 hover:border-indigo-500 transition-all group shadow-sm">
                <Store size={24} className="text-indigo-500 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-black uppercase tracking-widest text-slate-500 group-hover:text-indigo-600">Hubs</span>
              </Button>
              <Button onClick={() => navigate('/franchise-admins')} variant="outline" className="h-28 rounded-[2rem] flex flex-col gap-3 border-slate-200 hover:border-blue-500 transition-all group shadow-sm">
                <Users size={24} className="text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-black uppercase tracking-widest text-slate-500 group-hover:text-blue-600">Admins</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
