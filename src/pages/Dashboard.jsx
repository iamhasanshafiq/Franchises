import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatsCards from '../components/dashboard/StatsCards';
import { LoadingCard } from '../components/common/LoadingSpinner';
import { Building2, Store, Bike, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { useStats } from '../hooks/useStats';
import { useCities } from '../hooks/useCities';
import { useFranchises } from '../hooks/useFranchises';
import { useRiders } from '../hooks/useRiders';
import StatusBadge from '../components/common/StatusBadge';

const Dashboard = () => {
  const { user, isAdmin, isFranchiseAdmin } = useAuth();

  const { stats, loading, error, fetchAdminStats, fetchFranchiseStats } = useStats();
  const { cities, fetchCities } = useCities();
  const { franchises, fetchFranchises } = useFranchises();
  const { riders, fetchRiders } = useRiders();
  const [recentItems, setRecentItems] = useState([]);

  useEffect(() => {
    if (isAdmin()) {
      fetchAdminStats();
      fetchCities(1, 5);
      fetchFranchises(1, 5);
      setRecentItems([
        { type: 'cities', title: 'Recent Cities', icon: Building2, color: 'primary', data: cities, href: '/cities', emptyMsg: 'No cities found' },
        { type: 'franchises', title: 'Recent Franchises', icon: Store, color: 'accent', data: franchises, href: '/franchises', emptyMsg: 'No franchises found' },
      ]);
    } else if (isFranchiseAdmin()) {

      const franchiseId = user?.franchiseId || user?.franchise?.id || "ebbeee18-271f-45e6-8955-3e7ae25725bf";
      if (franchiseId) {
        fetchFranchiseStats(franchiseId);
        fetchRiders(1, 5, null, franchiseId);
        setRecentItems([
          { type: 'riders', title: 'Recent Riders', icon: Bike, color: 'primary', data: riders, href: '/riders', emptyMsg: 'No riders found' },
        ]);
      }
    }
  }, [isAdmin, isFranchiseAdmin, user, fetchAdminStats, fetchFranchiseStats, fetchCities, fetchFranchises, fetchRiders]);

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

  const renderRecentItem = (item) => {
    const Icon = item.icon;
    const items = item.data || [];

    return (
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
            <Icon size={20} className={`text-${item.color}`} />
            {item.title}
          </h3>
          <a href={item.href} className="text-sm text-primary hover:underline">
            View All
          </a>
        </div>
        {items.length > 0 ? (
          <div className="space-y-3">
            {items.slice(0, 5).map((data) => (
              <div key={data.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium text-foreground">
                    {data.name || data.fullName || data.full_name || 'N/A'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {data.code || data.phone || data.vehicleType || data.vehicle_type || ''}
                  </p>
                </div>
                <StatusBadge status={data.status} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm text-center py-4">{item.emptyMsg}</p>
        )}
      </div>
    );
  };

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
          {recentItems.map((item) => (
            <div key={item.type}>
              {item.type === 'cities' && renderRecentItem(item)}
              {item.type === 'franchises' && renderRecentItem(item)}
              {item.type === 'riders' && renderRecentItem(item)}
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
