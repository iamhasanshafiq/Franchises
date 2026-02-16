import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Page Imports
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Cities from "./pages/Cities";
import Franchises from "./pages/Franchises";
import FranchiseAdmins from "./pages/FranchiseAdmins";
import Stores from "./pages/Stores"; 
import StoreDetail from "./pages/StoreDetails"; // Added StoreDetail Import
import StoreAdmins from "./pages/StoreAdmin"; 
import Riders from "./pages/Riders";
import RiderDetail from "./pages/RiderDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />

          {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            {/* Core Dashboard */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

            {/* Super Admin Only Routes */}
            <Route path="/cities" element={<ProtectedRoute allowedRoles={['SUPER_ADMIN']}><Cities /></ProtectedRoute>} />
            <Route path="/franchises" element={<ProtectedRoute allowedRoles={['SUPER_ADMIN']}><Franchises /></ProtectedRoute>} />
            <Route path="/franchise-admins" element={<ProtectedRoute allowedRoles={['SUPER_ADMIN']}><FranchiseAdmins /></ProtectedRoute>} />

            {/* Store Hub Management */}
            <Route path="/stores" element={
              <ProtectedRoute allowedRoles={['SUPER_ADMIN', 'FRANCHISE_ADMIN']}>
                <Stores />
              </ProtectedRoute>
            } />
            
            {/* Added: Specific Store/Hub Detail with Wallet Management */}
            <Route path="/stores/:id" element={
              <ProtectedRoute allowedRoles={['SUPER_ADMIN', 'FRANCHISE_ADMIN']}>
                <StoreDetail />
              </ProtectedRoute>
            } />

            <Route path="/storesAdmin" element={
              <ProtectedRoute allowedRoles={['SUPER_ADMIN', 'FRANCHISE_ADMIN']}>
                <StoreAdmins />
              </ProtectedRoute>
            } />

            {/* Rider Management */}
            <Route path="/riders" element={
              <ProtectedRoute allowedRoles={['SUPER_ADMIN', 'FRANCHISE_ADMIN']}>
                <Riders />
              </ProtectedRoute>
            } />

            <Route path="/riders/:id" element={
              <ProtectedRoute allowedRoles={['SUPER_ADMIN', 'FRANCHISE_ADMIN']}>
                <RiderDetail />
              </ProtectedRoute>
            } />

            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;