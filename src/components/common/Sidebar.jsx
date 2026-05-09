import React, { useState, useMemo } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { useAuth } from '../../hooks/useAuth';
import { LayoutDashboard, Building2, Store, Bike, UserCog, ChevronLeft, ChevronRight, LogOut, ShieldCheck, Activity, Users, Shield } from 'lucide-react';
import logo from '../../../public/barqibazarimg.jpeg';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { useLayoutEffect } from 'react';


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user, logout, isAdmin, isLoading } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const menuItems = useMemo(() => {
    const base = [{ path: '/dashboard', label: 'Overview', icon: LayoutDashboard }];

    if (isAdmin()) {
      return [
        ...base,
        { path: '/cities', label: 'City Network', icon: Building2 },
        { path: '/franchises', label: 'Franchise Nodes', icon: Store },
        { path: '/franchise-admins', label: 'Franchise Admins', icon: UserCog },
        { path: '/stores', label: 'Stores', icon: Store },
        { path: '/storesAdmin', label: 'Store Admins', icon: UserCog },
        { path: '/riders', label: 'Fleet Management', icon: Bike },
        { path: '/users', label: 'IAM Users', icon: Users },
        { path: '/roles', label: 'IAM Roles', icon: Shield },
      ];
    }

    return [
      ...base,
      { path: '/riders', label: 'My Riders', icon: Bike },
      { path: '/stores', label: 'My Stores', icon: Store }, // Aligns with GET /api/stores
      { path: '/storesAdmin', label: 'Store Admin', icon: Store }, // Aligns with GET /api/stores
    ];
  }, [isAdmin]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: -12 }}
      animate={{
        opacity: 1,
        x: 0,
        width: collapsed ? 88 : 288,
      }}
      transition={{
        opacity: {
          duration: 0.25,
        },
        x: {
          duration: 0.25,
        },
        width: {
          duration: 0.28,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      style={{
        willChange: 'transform, opacity, width',
        backfaceVisibility: 'hidden',
      }}
      className={cn(
        'fixed left-0 top-0 h-screen z-50 flex flex-col antialiased transform-gpu [transform:translateZ(0)] ',
        'bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-r border-white/20 dark:border-slate-800/80 shadow-2xl shadow-black/5 dark:shadow-black/30',

      )}
    >
      {/* Brand Header with Logo Palette */}
      <div className="relative flex items-center h-24 px-6 shrink-0 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="flex items-center gap-4">
          <div className="relative group">
            {/* Logo Shadow using Yellow and Orange */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-orange-400 to-yellow-400 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
            <div className="relative w-10 h-10 rounded-xl bg-white p-1 shadow-sm ring-1 ring-emerald-100">
              <img src={logo} alt="Barqi" className="w-full h-full object-contain rounded-lg" />
            </div>
          </div>

          <span className="font-black text-slate-900 dark:text-white leading-none tracking-tight">BARQI OPS</span>
          <div className="flex items-center gap-1.5 mt-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">Command Node</span>
          </div>
          <motion.div
            animate={{
              opacity: collapsed ? 0 : 1,
              x: collapsed ? -10 : 0,
              width: collapsed ? 0 : 'auto',
            }}
            transition={{
              duration: 0.2,
            }}
            className="flex flex-col overflow-hidden whitespace-nowrap"
          ></motion.div>
        </div>
      </div>

      {/* Navigation - Emerald and Orange Accents */}
      <nav className="flex-1 px-4 py-4 space-y-1.5 overflow-y-auto overflow-x-hidden custom-scrollbar">
        {!collapsed && (
          <p className="px-4 mb-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Operations Menu</p>
        )}

        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                'group flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 relative overflow-hidden',
                'before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-500/0 before:to-yellow-500/0 hover:before:from-orange-500/5 hover:before:to-yellow-500/5 before:transition-all before:duration-500',
                isActive
                  ? 'bg-gradient-to-r from-emerald-50 to-orange-50 dark:from-emerald-900/20 dark:to-orange-900/10 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800 shadow-lg shadow-emerald-500/10'
                  : 'text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50/70 dark:hover:bg-slate-800/80 '
              )}
            >
              <Icon
                size={20}
                className={cn('shrink-0 transition-all duration-500 ease-out', isActive ? 'scale-110 text-emerald-600' : 'group-hover:scale-[1.08] group-hover:text-orange-500')}
              />
              <motion.span
                animate={{
                  opacity: collapsed ? 0 : 1,
                  x: collapsed ? -8 : 0,
                  width: collapsed ? 0 : 'auto',
                }}
                transition={{
                  duration: 0.2,
                  ease: 'easeOut',
                }}
                className="text-sm font-bold tracking-tight whitespace-nowrap overflow-hidden"
              >
                {item.label}
              </motion.span>

              {isActive && !collapsed && (
                <div className="absolute right-3 w-1 h-4 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* User Artifact - Highlighted with Logo Yellow/Orange/Green */}
      <div className="p-4 mt-auto shrink-0">
        <div className={cn(
          "rounded-[1.7rem] bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/30 dark:border-slate-800 p-4 transition-all duration-500 shadow-xl shadow-black/5",
          collapsed ? "flex flex-col items-center gap-4" : "space-y-4"
        )}>
          {!collapsed && (
            isLoading ? (
              <div className="space-y-3 animate-pulse">
                <div className="h-10 bg-muted rounded-lg"></div>
                <div className="h-8 bg-muted rounded-lg"></div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-200 shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] text-emerald-700 font-black uppercase tracking-widest">Operator</p>
                    <p className="text-sm font-black text-slate-800 dark:text-white truncate leading-none mt-1">
                      {user?.fullName || user?.email?.split('@')[0]}
                    </p>
                  </div>
                </div>

                {/* Status Badge with Yellow Accent */}
                <div className="flex items-center justify-between bg-white/80 dark:bg-slate-800/80 border border-yellow-200/60 dark:border-slate-700 px-3 py-2 rounded-xl shadow-sm backdrop-blur-md">
                  <span className="text-[10px] font-black text-orange-600 uppercase tracking-tighter">
                    {user?.role?.replace('_', ' ')}
                  </span>
                  <div className="flex items-center gap-1">
                    <Activity size={10} className="text-emerald-500" />
                    <span className="text-[9px] font-bold text-emerald-600 uppercase">Live</span>
                  </div>
                </div>
              </div>
            )
          )}
          <button
            onClick={toggleTheme}
            className={cn(
              'flex items-center justify-center gap-3 w-full py-2.5 rounded-xl transition-all duration-300',
              'text-[11px] font-black uppercase tracking-widest border',
              'bg-white border-slate-200 text-slate-500',
              'hover:bg-slate-100 hover:text-slate-800',
              'dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300',
              'dark:hover:bg-slate-800',
              'shadow-sm active:scale-95'
            )}
          >
            {theme === 'dark' ? (
              <Sun size={16} className="text-yellow-400" />
            ) : (
              <Moon size={16} className="text-slate-700" />
            )}

            {!collapsed && (
              <span>
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </span>
            )}
          </button>
          <button
            onClick={handleLogout}
            className={cn(
              'flex items-center justify-center gap-3 w-full py-2.5 rounded-xl transition-all duration-300',
              'text-[11px] font-black uppercase tracking-widest border transition-all',
              'bg-white border-slate-200 text-slate-400 hover:text-red-600 hover:bg-red-50 hover:border-red-100 shadow-sm active:scale-95'
            )}
          >
            <LogOut size={16} />
            {!collapsed && <span>Terminate Session</span>}
          </button>
        </div>
      </div>

      {/* Collapse Trigger - Emerald Highlight */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-10 w-8 h-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-400 flex items-center justify-center shadow-xl hover:text-emerald-500 hover:border-emerald-500 hover:scale-110 transition-all duration-300 z-50 active:scale-95"

      >
        {collapsed ? <ChevronRight size={14} strokeWidth={3} /> : <ChevronLeft size={14} strokeWidth={3} />}
      </button>
    </motion.aside>
  );
};

export default React.memo(Sidebar);