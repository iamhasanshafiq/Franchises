import React, { useEffect, useMemo } from 'react';
import { useAuth } from '../hooks/useAuth';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatsCards from '../components/dashboard/StatsCards';
import { LoadingCard } from '../components/common/LoadingSpinner';
import { 
  Building2, Store, Bike, Users, 
  TrendingUp, CheckCircle, MapPin, 
  AlertCircle, ArrowRight, PieChart,
  Activity
} from 'lucide-react';
import { useCities } from '../hooks/useCities';
import { useFranchises } from '../hooks/useFranchises';
import { useRiders } from '../hooks/useRiders';
import StatusBadge from '../components/common/StatusBadge';

const Dashboard = () => {
  const { user, isAdmin, isFranchiseAdmin } = useAuth();
  
  const { cities, loading: citiesLoading, fetchCities } = useCities();
  const { franchises, loading: franchisesLoading, fetchFranchises } = useFranchises();
  const { riders, loading: ridersLoading, fetchRiders } = useRiders();

  useEffect(() => {
    if (isAdmin()) {
      fetchCities();
      fetchFranchises();
      fetchRiders(); 
    } else if (isFranchiseAdmin()) {
      const franchiseId = user?.franchiseId || user?.franchise?.id;
      if (franchiseId) {
        fetchRiders(null, null, null, franchiseId);
      }
    }
  }, [isAdmin, isFranchiseAdmin, user]);

  /**
   * Advanced Data Intelligence 
   * Computes complex metrics once per data update
   */
  const operationalIntelligence = useMemo(() => {
    const metrics = {
      admin: {},
      franchise: {}
    };

    if (isAdmin()) {
      metrics.admin = {
        totalCities: cities?.length || 0,
        totalFranchises: franchises?.length || 0,
        activeFranchises: franchises?.filter(f => f.status === 'ACTIVE').length || 0,
        totalRiders: riders?.length || 0,
        activeRiders: riders?.filter(r => r.status === 'APPROVED' || r.status === 'ACTIVE').length || 0,
        pendingRiders: riders?.filter(r => r.status === 'APPLIED').length || 0,
        // Regional Concentration
        topCity: cities?.map(c => ({
          name: c.name,
          count: franchises?.filter(f => f.cityId === c.id).length
        })).sort((a, b) => b.count - a.count)[0]?.name || 'N/A'
      };
    } else {
      const fleet = riders || [];
      metrics.franchise = {
        total: fleet.length,
        active: fleet.filter(r => r.status === 'APPROVED' || r.status === 'ACTIVE').length,
        pending: fleet.filter(r => r.status === 'APPLIED').length,
        bikeCount: fleet.filter(r => r.vehicleType === 'BIKE').length,
        motoCount: fleet.filter(r => r.vehicleType === 'MOTORBIKE').length,
        utilization: Math.round((fleet.filter(r => r.status === 'ACTIVE').length / (user?.franchise?.maxActiveRiders || 1)) * 100)
      };
    }
    return metrics;
  }, [cities, franchises, riders, isAdmin, user]);

  const cards = useMemo(() => {
    if (isAdmin()) {
      const { admin } = operationalIntelligence;
      return [
        { title: 'Global Cities', value: admin.totalCities, icon: MapPin, color: 'blue', change: `Focus: ${admin.topCity}` },
        { title: 'Active Nodes', value: admin.activeFranchises, icon: Store, color: 'purple', change: `${admin.totalFranchises} Registered` },
        { title: 'Live Fleet', value: admin.activeRiders, icon: Bike, color: 'emerald', change: `${admin.totalRiders} Total Units` },
        { title: 'Pending Audit', value: admin.pendingRiders, icon: TrendingUp, color: 'orange', change: 'Awaiting Verification' }
      ];
    }

    const { franchise } = operationalIntelligence;
    return [
      { title: 'Fleet Strength', value: franchise.total, icon: Bike, color: 'blue', change: `${franchise.bikeCount} Bikes | ${franchise.motoCount} Moto` },
      { title: 'Operational', value: franchise.active, icon: CheckCircle, color: 'emerald', change: 'Fully Verified' },
      { title: 'Audit Queue', value: franchise.pending, icon: TrendingUp, color: 'orange', change: 'Immediate Action' },
      { title: 'Node Capacity', value: `${franchise.utilization}%`, icon: Activity, color: 'slate', change: `Limit: ${user?.franchise?.maxActiveRiders || 0}` }
    ];
  }, [isAdmin, operationalIntelligence, user]);

  const isDataLoading = citiesLoading || franchisesLoading || ridersLoading;

  const DetailSection = ({ title, icon: Icon, children }) => (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center gap-2 px-1">
        <div className="p-1.5 bg-slate-100 text-slate-600 rounded-lg">
          <Icon size={18} />
        </div>
        <h2 className="text-sm font-black text-slate-800 uppercase tracking-[0.15em]">{title}</h2>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {children}
      </div>
    </div>
  );

  return (
    <DashboardLayout>
      <Header 
        title="Operations Command" 
        subtitle={`Live Intelligence Portal • ${user?.role?.replace('_', ' ')}: ${user?.fullName || user?.email?.split('@')[0]}`} 
      />
      
      <div className="p-8 max-w-[1600px] mx-auto space-y-10 animate-in fade-in duration-700">
        {isDataLoading ? (
          <LoadingCard message="Syncing with Barqi Global Network..." />
        ) : (
          <>
            <StatsCards cards={cards} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Primary Data Feed */}
              <div className="lg:col-span-2 space-y-8">
                <DetailSection title="Recent Fleet Activity" icon={Activity}>
                  <div className="divide-y divide-slate-100">
                    {riders?.slice(0, 6).map((rider) => (
                      <div key={rider.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-all group">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                            {rider.fullName?.charAt(0) || 'R'}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-700">{rider.fullName}</span>
                            <span className="text-[11px] text-slate-400 font-mono uppercase tracking-tighter">
                              {rider.vehicleType} • {rider.phone}
                            </span>
                          </div>
                        </div>
                        <StatusBadge status={rider.status} />
                      </div>
                    ))}
                    {(!riders || riders.length === 0) && (
                      <div className="py-20 text-center text-slate-400 italic text-sm">No rider activity detected.</div>
                    )}
                  </div>
                </DetailSection>
              </div>

              {/* Side Intelligence Panel */}
              <div className="space-y-8">
                {isAdmin() ? (
                  <DetailSection title="Infrastructure Distribution" icon={PieChart}>
                    <div className="p-6 space-y-6">
                      {cities?.slice(0, 5).map(city => {
                        const count = franchises?.filter(f => f.cityId === city.id).length || 0;
                        const percentage = Math.round((count / (franchises?.length || 1)) * 100);
                        return (
                          <div key={city.id} className="space-y-2">
                            <div className="flex justify-between text-xs font-bold">
                              <span className="text-slate-600 uppercase tracking-tighter">{city.name}</span>
                              <span className="text-slate-400">{count} Nodes ({percentage}%)</span>
                            </div>
                            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-blue-500 h-full rounded-full" style={{ width: `${percentage}%` }} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </DetailSection>
                ) : (
                  <DetailSection title="Fleet Mix" icon={PieChart}>
                    <div className="p-6 space-y-6">
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <div className="flex items-center gap-3">
                          <Bike className="text-blue-600" size={20} />
                          <span className="text-sm font-bold text-blue-900">Bikes</span>
                        </div>
                        <span className="text-lg font-black text-blue-600">{operationalIntelligence.franchise.bikeCount}</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                        <div className="flex items-center gap-3">
                          <Activity className="text-indigo-600" size={20} />
                          <span className="text-sm font-bold text-indigo-900">Motorbikes</span>
                        </div>
                        <span className="text-lg font-black text-indigo-600">{operationalIntelligence.franchise.motoCount}</span>
                      </div>
                    </div>
                  </DetailSection>
                )}
                
                <div className="bg-slate-900 rounded-2xl p-6 text-white overflow-hidden relative group">
                  <div className="relative z-10">
                    <p className="text-[10px] font-black uppercase text-blue-400 tracking-[0.2em] mb-2">Network Health</p>
                    <h3 className="text-xl font-bold mb-4">Node: {user?.franchise?.code || 'Global-Root'}</h3>
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Syncing with Mainframe
                    </div>
                  </div>
                  <Activity className="absolute -right-4 -bottom-4 text-white/5 group-hover:text-white/10 transition-colors" size={120} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;