import React, { useState, useMemo } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { useAuth } from '../../hooks/useAuth';
import { LayoutDashboard, Building2, Store, Bike, UserCog, ChevronLeft, ChevronRight, LogOut, ShieldCheck, Activity } from 'lucide-react';
import logo from '../../../public/barqibazarimg.jpeg';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user, logout, isAdmin, isLoading } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const menuItems = useMemo(() => {
    const base = [{ path: '/dashboard', label: 'Overview', icon: LayoutDashboard }];

    if (isAdmin()) {
      return [
        ...base,
        { path: '/cities', label: 'City Network', icon: Building2 }, // Aligns with GET /api/cities
        { path: '/franchises', label: 'Franchise Nodes', icon: Store }, // Aligns with GET /api/franchises
        { path: '/franchise-admins', label: 'System Admins', icon: UserCog }, // Aligns with GET /api/franchise-admins
        { path: '/riders', label: 'Fleet Management', icon: Bike }, // Aligns with GET /api/riders
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
    <aside
      className={cn(
        'fixed left-0 top-0 h-screen z-50 flex flex-col antialiased transition-all duration-300 ease-in-out transform-gpu',
        'bg-white border-r border-slate-200 shadow-xl shadow-slate-200/40',
        collapsed ? 'w-20' : 'w-72'
      )}
    >
      {/* Brand Header with Logo Palette */}
      <div className="relative flex items-center h-24 px-6 shrink-0">
        <div className="flex items-center gap-4">
          <div className="relative group">
            {/* Logo Shadow using Yellow and Orange */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-orange-400 to-yellow-400 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
            <div className="relative w-10 h-10 rounded-xl bg-white p-1 shadow-sm ring-1 ring-emerald-100">
              <img src={logo} alt="Barqi" className="w-full h-full object-contain rounded-lg" />
            </div>
          </div>
          {!collapsed && (
            <div className="flex flex-col animate-in fade-in slide-in-from-left-4 duration-500">
              <span className="font-black text-slate-900 leading-none tracking-tight">BARQI OPS</span>
              <div className="flex items-center gap-1.5 mt-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">Command Node</span>
              </div>
            </div>
          )}
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
                'group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 relative',
                isActive
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-100/50 shadow-sm'
                  : 'text-slate-500 hover:text-orange-600 hover:bg-orange-50/50'
              )}
            >
              <Icon
                size={20}
                className={cn('shrink-0 transition-all duration-300', isActive ? 'scale-110 text-emerald-600' : 'group-hover:scale-110 group-hover:text-orange-500')}
              />
              {!collapsed && (
                <span className="text-sm font-bold tracking-tight whitespace-nowrap animate-in fade-in slide-in-from-left-2">
                  {item.label}
                </span>
              )}
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
          "rounded-[1.5rem] bg-emerald-50/30 border border-emerald-100 p-4 transition-all duration-300",
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
                    <p className="text-sm font-black text-slate-800 truncate leading-none mt-1">
                      {user?.fullName || user?.email?.split('@')[0]}
                    </p>
                  </div>
                </div>

                {/* Status Badge with Yellow Accent */}
                <div className="flex items-center justify-between bg-white border border-yellow-200 px-3 py-2 rounded-lg shadow-sm">
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
        className="absolute -right-3 top-10 w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-400 flex items-center justify-center shadow-md hover:text-emerald-500 hover:border-emerald-500 transition-all z-50 active:scale-90"
      >
        {collapsed ? <ChevronRight size={14} strokeWidth={3} /> : <ChevronLeft size={14} strokeWidth={3} />}
      </button>
    </aside>
  );
};

export default React.memo(Sidebar);