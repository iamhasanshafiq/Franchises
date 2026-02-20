import { useState } from 'react';
import { cn } from '../../lib/utils';
import Sidebar from '../common/Sidebar';

const DashboardLayout = ({ children, loading = false }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">

      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      <main
        className={cn(
          'flex-1 flex flex-col min-h-screen transition-all duration-500 ease-in-out',
          sidebarCollapsed ? 'ml-20' : 'ml-72'
        )}
      >
        {loading ? (
          <div className="flex-1 flex items-center justify-center animate-pulse">
            <div className="h-10 w-40 bg-muted rounded"></div>
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
};

export default DashboardLayout;