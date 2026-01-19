import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Cities from "./pages/Cities";
import Franchises from "./pages/Franchises";
import FranchiseAdmins from "./pages/FranchiseAdmins";
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
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/cities" element={<ProtectedRoute allowedRoles={['SUPER_ADMIN']}><Cities /></ProtectedRoute>} />
            <Route path="/franchises" element={<ProtectedRoute allowedRoles={['SUPER_ADMIN']}><Franchises /></ProtectedRoute>} />
            <Route path="/franchise-admins" element={<ProtectedRoute allowedRoles={['SUPER_ADMIN']}><FranchiseAdmins /></ProtectedRoute>} />
            <Route path="/riders" element={<ProtectedRoute><Riders /></ProtectedRoute>} />
            <Route path="/riders/:id" element={<ProtectedRoute><RiderDetail /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
