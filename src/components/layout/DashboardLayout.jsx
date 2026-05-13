import { useState } from 'react';
import { cn } from '../../lib/utils';
import Sidebar from '../common/Sidebar';

const DashboardLayout = ({ children, loading = false }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] dark:bg-[#020617] font-sans overflow-hidden">

      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      <main
  style={{
    marginLeft: sidebarCollapsed ? 88 : 288,
  }}
  className="
flex-1
flex
flex-col
min-h-screen
transition-[margin]
duration-700
ease-[cubic-bezier(0.22,1,0.36,1)]
will-change-[margin]
bg-transparent
"
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