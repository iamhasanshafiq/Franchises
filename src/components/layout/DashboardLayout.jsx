import { useState } from 'react';
import { cn } from '../../lib/utils';
import Sidebar from '../common/Sidebar';

const DashboardLayout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Fixed Sidebar 
         The sidebar is fixed to the left. We pass the collapsed state 
         to match the width in the main content area.
      */}
      <Sidebar 
        collapsed={sidebarCollapsed} 
        setCollapsed={setSidebarCollapsed} 
      />

      {/* Main Content Area
         - ml-20 or ml-72: Matches the width of the sidebar exactly.
         - w-full: Takes up remaining space.
         - transition-all: Ensures smooth expansion/contraction.
      */}
      <main
        className={cn(
          'flex-1 flex flex-col min-h-screen transition-all duration-500 ease-in-out',
          sidebarCollapsed ? 'ml-20' : 'ml-72'
        )}
      >
        {/* Inner Container 
           Provides consistent padding and a maximum width for readability.
        */}
        <div className="flex-1 w-full max-w-[1600px] mx-auto overflow-x-hidden">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;