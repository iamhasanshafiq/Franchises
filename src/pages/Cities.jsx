import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Store,
  Bike,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  PieChart,
  Activity,
  Wallet,
  ShieldAlert,
  Zap,
  Globe,
  BarChart3,
  Landmark,
} from 'lucide-react';

import { motion } from 'framer-motion';

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
  const [pageLoaded, setPageLoaded] = useState(false);

  const {
    cities,
    loading: citiesLoading,
    fetchCities
  } = useCities();

  const {
    franchises,
    loading: franchisesLoading,
    fetchFranchises
  } = useFranchises();

  const {
    riders,
    loading: ridersLoading,
    fetchRiders
  } = useRiders();

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

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

      const res = await axios.get(
        `${WALLET_BASE}/wallets/${id}?currency=PKR`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
          }
        }
      );

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

      if (fId) {
        fetchRiders(null, null, null, fId);
      }
    }

    loadFinancials();
  }, [
    isAdmin,
    isFranchiseAdmin,
    user,
    loadFinancials
  ]);

  const analytics = useMemo(() => {
    const fleet = riders || [];

    const total = fleet.length;

    const active = fleet.filter((r) =>
      ['ACTIVE', 'APPROVED'].includes(r.status)
    ).length;

    const pending = fleet.filter(
      (r) => r.status === 'APPLIED'
    ).length;

    const cap = user?.franchise?.maxActiveRiders || 100;

    const utilization = Math.round((active / cap) * 100);

    return {
      fleetGrowth:
        total > 0
          ? ((active / total) * 100).toFixed(1)
          : 0,

      activeCount: active,
      pendingCount: pending,
      totalCount: total,
      utilization,

      bikeMix: fleet.filter(
        (r) => r.vehicleType === 'BIKE'
      ).length,

      motoMix: fleet.filter(
        (r) => r.vehicleType === 'MOTORBIKE'
      ).length,

      nodeHealth:
        franchises?.filter(
          (f) => f.status === 'ACTIVE'
        ).length || 0,
    };
  }, [riders, franchises, user]);

  const cards = useMemo(() => {
    if (isAdmin()) {
      return [
        {
          title: 'Global Liquidity',
          value: `Rs. ${walletBalance.toLocaleString()}`,
          icon: Wallet,
          color: 'emerald',
          change: 'Network Total',
        },
        {
          title: 'Active Nodes',
          value: analytics.nodeHealth,
          icon: Globe,
          color: 'blue',
          change: `${franchises?.length} Registered`,
        },
        {
          title: 'Fleet Deployment',
          value: analytics.activeCount,
          icon: Bike,
          color: 'indigo',
          change: `${analytics.totalCount} Units`,
        },
        {
          title: 'Audit Queue',
          value: analytics.pendingCount,
          icon: ShieldAlert,
          color: 'orange',
          change: 'Awaiting Action',
        },
      ];
    }

    return [
      {
        title: 'Node Balance',
        value: `Rs. ${walletBalance.toLocaleString()}`,
        icon: Landmark,
        color: 'emerald',
        change: 'Available Funds',
      },
      {
        title: 'Fleet Utilization',
        value: `${analytics.utilization}%`,
        icon: Zap,
        color: 'blue',
        change: 'Capacity Used',
      },
      {
        title: 'Ready Fleet',
        value: analytics.activeCount,
        icon: CheckCircle,
        color: 'indigo',
        change: 'Operational Units',
      },
      {
        title: 'Compliance Wait',
        value: analytics.pendingCount,
        icon: Activity,
        color: 'orange',
        change: 'New Applications',
      },
    ];
  }, [
    isAdmin,
    analytics,
    walletBalance,
    franchises
  ]);

  if (!pageLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-14 h-14 rounded-full border-4 border-orange-500/20 border-t-orange-500 animate-spin" />
      </div>
    );
  }

  return (
    <DashboardLayout>

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
min-h-screen
relative
overflow-hidden
bg-[#03140F]
"
      >

        {/* BACKGROUND */}
        <div
          className="
absolute inset-0 z-0
bg-gradient-to-br
from-[#05281F]
via-[#03140F]
to-black
"
        />

        {/* GRID */}
        <div
          className="
absolute inset-0
bg-[radial-gradient(#ffffff10_1px,transparent_1px)]
[background-size:24px_24px]
opacity-40
pointer-events-none
z-0
"
        />

        {/* GLOW 1 */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
absolute
top-[-10%]
left-[-10%]
w-[500px]
h-[500px]
bg-emerald-500/10
rounded-full
blur-[120px]
z-0
"
        />

        {/* GLOW 2 */}
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
absolute
bottom-[-10%]
right-[-10%]
w-[500px]
h-[500px]
bg-orange-500/10
rounded-full
blur-[120px]
z-0
"
        />

        <div className="relative z-10">

          <Header
            title="Operations Intelligence"
            subtitle={`Live Command Data • ${user?.fullName || 'System Admin'}`}
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
p-8
max-w-[1600px]
mx-auto
space-y-8
"
          >

            {/* STATS */}
            <div
              className="
backdrop-blur-2xl
bg-white/5
border
border-white/10
rounded-[2.5rem]
p-6
shadow-[0_20px_80px_rgba(0,0,0,0.35)]
"
            >
              <StatsCards
                cards={cards}
                loading={
                  citiesLoading
                  || franchisesLoading
                  || ridersLoading
                }
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* LEFT */}
              <div className="lg:col-span-2 space-y-8">

                {/* RIDERS */}
                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  className="
bg-white/10
backdrop-blur-2xl
border
border-white/10
rounded-[2.5rem]
overflow-hidden
shadow-[0_20px_80px_rgba(0,0,0,0.35)]
"
                >

                  <div
                    className="
p-8
border-b
border-white/10
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
bg-indigo-500/20
border
border-indigo-400/20
"
                      >
                        <TrendingUp
                          size={20}
                          className="text-indigo-300"
                        />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white">
                          Deployment Stream
                        </h3>

                        <p className="text-xs text-slate-400">
                          Latest fleet status updates
                        </p>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      onClick={() => navigate('/riders')}
                      className="
rounded-xl
font-bold
text-indigo-300
hover:bg-white/10
hover:text-white
"
                    >
                      Full Fleet
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>

                  <div className="divide-y divide-white/5">

                    {ridersLoading ? (
                      <div className="p-6 space-y-4 animate-pulse">
                        <div className="h-16 bg-white/10 rounded-2xl"></div>
                        <div className="h-16 bg-white/10 rounded-2xl"></div>
                        <div className="h-16 bg-white/10 rounded-2xl"></div>
                      </div>
                    ) : (
                      riders?.slice(0, 5).map((rider) => (

                        <motion.div
                          whileHover={{
                            x: 6,
                          }}
                          key={rider.id}
                          className="
p-5
flex
items-center
justify-between
hover:bg-white/5
transition-all
cursor-pointer
group
"
                          onClick={() =>
                            navigate(`/riders/${rider.id}`)
                          }
                        >

                          <div className="flex items-center gap-4">

                            <div
                              className="
w-12
h-12
rounded-2xl
bg-indigo-500/20
flex
items-center
justify-center
text-indigo-200
font-bold
text-lg
group-hover:scale-110
transition-transform
"
                            >
                              {rider.fullName?.charAt(0)}
                            </div>

                            <div>
                              <p className="text-sm font-black text-white">
                                {rider.fullName}
                              </p>

                              <div className="flex items-center gap-2 mt-0.5">

                                <span
                                  className="
text-[10px]
bg-white/10
px-2
py-0.5
rounded-full
font-bold
text-slate-300
uppercase
"
                                >
                                  {rider.vehicleType}
                                </span>

                                <span
                                  className="
text-[10px]
text-slate-500
font-mono
tracking-widest
"
                                >
                                  {rider.phone}
                                </span>

                              </div>
                            </div>

                          </div>

                          <StatusBadge status={rider.status} />

                        </motion.div>

                      ))
                    )}

                  </div>

                </motion.div>

                {/* REGIONS */}
                {isAdmin() && (
                  <motion.div
                    whileHover={{
                      y: -4,
                    }}
                    className="
bg-white/10
backdrop-blur-2xl
border
border-white/10
p-8
rounded-[2.5rem]
shadow-[0_20px_80px_rgba(0,0,0,0.35)]
"
                  >

                    <div className="flex items-center gap-3 mb-8">

                      <div
                        className="
p-3
rounded-2xl
bg-blue-500/20
"
                      >
                        <BarChart3
                          size={20}
                          className="text-blue-300"
                        />
                      </div>

                      <h3 className="text-lg font-bold text-white">
                        Node Concentration by Region
                      </h3>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">

                      {citiesLoading ? (
                        <div className="space-y-6 animate-pulse col-span-2">
                          <div className="h-12 bg-white/10 rounded-xl"></div>
                          <div className="h-12 bg-white/10 rounded-xl"></div>
                        </div>
                      ) : (
                        cities?.slice(0, 4).map((city) => {

                          const count =
                            franchises?.filter(
                              (f) => f.cityId === city.id
                            ).length || 0;

                          const percent = Math.min(
                            (count / 10) * 100,
                            100
                          );

                          return (
                            <div key={city.id} className="space-y-3">

                              <div className="flex justify-between items-end">

                                <div>
                                  <p
                                    className="
text-[10px]
font-black
uppercase
text-slate-500
tracking-[0.2em]
"
                                  >
                                    {city.name}
                                  </p>

                                  <p className="text-sm font-bold text-white">
                                    {count} Active Hubs
                                  </p>
                                </div>

                                <span className="text-xs font-bold text-blue-300">
                                  {count > 0
                                    ? "High Growth"
                                    : "Expansion Target"}
                                </span>

                              </div>

                              <Progress
                                value={percent}
                                className="h-2 rounded-full bg-white/10"
                              />

                            </div>
                          );
                        })
                      )}

                    </div>

                  </motion.div>
                )}

              </div>

              {/* RIGHT */}
              <div className="space-y-8">

                {/* MIX */}
                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  className="
bg-white/10
backdrop-blur-2xl
border
border-white/10
p-8
rounded-[2.5rem]
shadow-[0_20px_80px_rgba(0,0,0,0.35)]
"
                >

                  <div className="flex items-center gap-3 mb-6">

                    <div
                      className="
p-3
rounded-2xl
bg-emerald-500/20
"
                    >
                      <PieChart
                        size={20}
                        className="text-emerald-300"
                      />
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      Fleet Mix
                    </h3>

                  </div>

                  <div className="space-y-4">

                    <div
                      className="
p-4
bg-blue-500/10
rounded-2xl
border
border-blue-500/10
flex
justify-between
items-center
"
                    >

                      <div className="flex items-center gap-3">

                        <Bike
                          size={20}
                          className="text-blue-300"
                        />

                        <span className="text-sm font-bold text-slate-200">
                          Standard Bikes
                        </span>

                      </div>

                      <span className="text-lg font-black text-blue-300">
                        {analytics.bikeMix}
                      </span>

                    </div>

                    <div
                      className="
p-4
bg-indigo-500/10
rounded-2xl
border
border-indigo-500/10
flex
justify-between
items-center
"
                    >

                      <div className="flex items-center gap-3">

                        <Zap
                          size={20}
                          className="text-indigo-300"
                        />

                        <span className="text-sm font-bold text-slate-200">
                          Motorbikes
                        </span>

                      </div>

                      <span className="text-lg font-black text-indigo-300">
                        {analytics.motoMix}
                      </span>

                    </div>

                  </div>

                </motion.div>

                {/* SYSTEM CARD */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="
bg-black/40
backdrop-blur-2xl
rounded-[2.5rem]
p-8
text-white
relative
overflow-hidden
group
border
border-white/10
shadow-[0_25px_100px_rgba(0,0,0,0.5)]
"
                >

                  <div className="relative z-10">

                    <div className="flex items-center gap-2 mb-6">

                      <div
                        className="
w-2
h-2
bg-emerald-400
rounded-full
animate-pulse
shadow-[0_0_10px_rgba(52,211,153,0.8)]
"
                      />

                      <span
                        className="
text-[10px]
font-black
uppercase
tracking-[0.3em]
text-emerald-400
"
                      >
                        System Handshake: Optimal
                      </span>

                    </div>

                    <h4 className="text-2xl font-bold mb-2">
                      Node: {user?.franchise?.code || 'Barqi-Root'}
                    </h4>

                    <p
                      className="
text-sm
text-slate-400
leading-relaxed
mb-6
"
                    >
                      Currently overseeing {analytics.totalCount} assets in the regional mesh network.
                    </p>

                    <div className="space-y-4">

                      <div
                        className="
flex
justify-between
text-[10px]
font-bold
uppercase
tracking-widest
text-slate-500
"
                      >
                        <span>Operational Efficiency</span>

                        <span className="text-white">
                          {analytics.utilization}%
                        </span>

                      </div>

                      <Progress
                        value={analytics.utilization}
                        className="h-1.5 bg-white/10"
                      />

                    </div>

                  </div>

                  <Activity
                    className="
absolute
-right-8
-bottom-8
text-white/5
group-hover:text-white/10
transition-all
duration-1000
rotate-12
"
                    size={200}
                  />

                </motion.div>

                {/* QUICK ACTIONS */}
                <div className="grid grid-cols-2 gap-4">

                  <motion.div
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                  >

                    <Button
                      onClick={() => navigate('/stores')}
                      variant="outline"
                      className="
h-28
w-full
rounded-[2rem]
flex
flex-col
gap-3
border-white/10
bg-white/5
backdrop-blur-xl
hover:bg-indigo-500/10
hover:border-indigo-500/40
transition-all
group
shadow-none
"
                    >

                      <Store
                        size={24}
                        className="
text-indigo-300
group-hover:scale-110
transition-transform
"
                      />

                      <span
                        className="
text-xs
font-black
uppercase
tracking-widest
text-slate-300
group-hover:text-indigo-300
"
                      >
                        Hubs
                      </span>

                    </Button>

                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                  >

                    <Button
                      onClick={() => navigate('/franchise-admins')}
                      variant="outline"
                      className="
h-28
w-full
rounded-[2rem]
flex
flex-col
gap-3
border-white/10
bg-white/5
backdrop-blur-xl
hover:bg-blue-500/10
hover:border-blue-500/40
transition-all
group
shadow-none
"
                    >

                      <Users
                        size={24}
                        className="
text-blue-300
group-hover:scale-110
transition-transform
"
                      />

                      <span
                        className="
text-xs
font-black
uppercase
tracking-widest
text-slate-300
group-hover:text-blue-300
"
                      >
                        Admins
                      </span>

                    </Button>

                  </motion.div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </motion.div>

    </DashboardLayout>
  );
};

export default Dashboard;