import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatsCards from '../components/dashboard/StatsCards';
import { LoadingCard } from '../components/common/LoadingSpinner';
import { Building2, Store, Bike, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { useStats } from '../hooks/useStats';
import { useCities } from '../hooks/useCities';
import { useFranchises } from '../hooks/useFranchises';
import StatusBadge from '../components/common/StatusBadge';

const Dashboard = () => {
  const { user, isAdmin, isFranchiseAdmin } = useAuth();
  const { stats, loading, error, fetchAdminStats, fetchFranchiseStats } = useStats();
  const { cities, fetchCities } = useCities();
  const { franchises, fetchFranchises } = useFranchises();

  useEffect(() => {
    if (isAdmin()) {
      fetchAdminStats();
      fetchCities(1, 5); // Get 5 recent cities
      fetchFranchises(1, 5); // Get 5 recent franchises
    } else if (isFranchiseAdmin()) {
      const franchiseId = user?.franchiseId || user?.franchise?.id;
      if (franchiseId) {
        fetchFranchiseStats(franchiseId);
      }
    }
  }, [isAdmin, isFranchiseAdmin, user, fetchAdminStats, fetchFranchiseStats, fetchCities, fetchFranchises]);

  // Parse stats for admin - API returns: { cities, franchises, franchiseAdmins, riders }
  const adminStats = isAdmin() && stats ? {
    cities: stats.cities || 0,
    franchises: stats.franchises || {},
    franchiseAdmins: stats.franchiseAdmins || {},
    riders: stats.riders || {},
  } : null;

  // Parse stats for franchise admin
  const franchiseStats = (isFranchiseAdmin() && stats) ? {
    franchiseName: stats.franchiseName || user?.franchise?.name || 'Unknown',
    cityName: stats.cityName || user?.city?.name || 'Unknown',
    ridersByStatus: stats.ridersByStatus || {},
  } : null;

  const adminCards = adminStats ? [
    {
      title: 'Total Cities',
      value: adminStats.cities,
      icon: Building2,
      color: 'primary',
      change: 'All cities',
    },
    {
      title: 'Total Franchises',
      value: adminStats.franchises.total || 0,
      icon: Store,
      color: 'accent',
      change: `${adminStats.franchises.active || 0} active`,
    },
    {
      title: 'Franchise Admins',
      value: adminStats.franchiseAdmins.total || 0,
      icon: Users,
      color: 'info',
      change: 'All admins',
    },
    {
      title: 'Active Riders',
      value: adminStats.riders.active || 0,
      icon: CheckCircle,
      color: 'success',
      change: `${adminStats.riders.total || 0} total`,
    },
  ] : [];

  const franchiseCards = franchiseStats ? [
    {
      title: 'Franchise',
      value: franchiseStats.franchiseName,
      icon: Store,
      color: 'primary',
      change: franchiseStats.cityName,
    },
    {
      title: 'Active Riders',
      value: franchiseStats.ridersByStatus?.ACTIVE || 0,
      icon: CheckCircle,
      color: 'success',
      change: 'Currently active',
    },
    {
      title: 'Pending Approval',
      value: (franchiseStats.ridersByStatus?.APPLIED || 0) + (franchiseStats.ridersByStatus?.INTERVIEWED || 0),
      icon: TrendingUp,
      color: 'warning',
      change: 'Needs attention',
    },
    {
      title: 'Total Riders',
      value: franchiseStats.ridersByStatus?.total || 
            Object.values(franchiseStats.ridersByStatus).reduce((sum, val) => sum + (val.total || val), 0) || 0,
      icon: Bike,
      color: 'info',
      change: 'All riders',
    },
  ] : [];

  const cards = isAdmin() ? adminCards : franchiseCards;

  return (
    <DashboardLayout>
      <Header
        title="Dashboard"
        subtitle={`Welcome back, ${user?.email?.split('@')[0] || 'User'}`}
      />
      <div className="p-6">
        {loading ? (
          <LoadingCard message="Loading statistics..." />
        ) : error ? (
          <div className="text-center text-red-500 py-8">
            Failed to load statistics. Please try again.
          </div>
        ) : (
          <StatsCards cards={cards} />
        )}

        {/* Recent Items Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Cities */}
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
                <Building2 size={20} className="text-primary" />
                Recent Cities
              </h3>
              <a href="/cities" className="text-sm text-primary hover:underline">
                View All
              </a>
            </div>
            {cities.length > 0 ? (
              <div className="space-y-3">
                {cities.slice(0, 5).map((city) => (
                  <div key={city.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium text-foreground">{city.name}</p>
                      <p className="text-xs text-muted-foreground">{city.code}</p>
                    </div>
                    <StatusBadge status={city.status} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm text-center py-4">No cities found</p>
            )}
          </div>

          {/* Recent Franchises */}
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
                <Store size={20} className="text-accent" />
                Recent Franchises
              </h3>
              <a href="/franchises" className="text-sm text-primary hover:underline">
                View All
              </a>
            </div>
            {franchises.length > 0 ? (
              <div className="space-y-3">
                {franchises.slice(0, 5).map((franchise) => (
                  <div key={franchise.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium text-foreground">{franchise.name}</p>
                      <p className="text-xs text-muted-foreground">{franchise.code}</p>
                    </div>
                    <StatusBadge status={franchise.status} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm text-center py-4">No franchises found</p>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
