import { createContext, useContext, useState, useEffect } from 'react';
import { authApi } from '../api/auth.api';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    const storedUser = authApi.getCurrentUser();
    if (storedUser && authApi.isAuthenticated()) {
      setUser(storedUser);
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await authApi.login(email, password);
    
    if (response.status === 'success') {
      const { access, refresh, email: userEmail, role } = response.data;
      
      // Store tokens
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      
      // Store user info
      const userData = { email: userEmail, role };
      localStorage.setItem('user', JSON.stringify(userData));
      
      setUser(userData);
      return { success: true, user: userData };
    }
    
    throw new Error('Login failed');
  };

  const logout = () => {
    authApi.logout();
    setUser(null);
  };

  const isAdmin = () => {
    return user?.role === 'SUPER_ADMIN';
  };

  const isFranchiseAdmin = () => {
    return user?.role === 'FRANCHISE_ADMIN';
  };

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    isAdmin,
    isFranchiseAdmin,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
