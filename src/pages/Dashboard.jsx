import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatsCards from '../components/dashboard/StatsCards';
import { LoadingCard } from '../components/common/LoadingSpinner';
import { Building2, Store, Bike, Users, TrendingUp, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const { user, isAdmin } = useAuth();
  const [loading, setLoading] = useState(false);

  // Mock stats for demo - will be replaced with API call
  const adminStats = {
    totalCities: 12,
    totalFranchises: 45,
    totalRiders: 234,
    activeRiders: 189,
  };

  const franchiseStats = {
    totalRiders: 34,
    activeRiders: 28,
    pendingApproval: 4,
    documentsVerified: 26,
  };

  const stats = isAdmin() ? adminStats : franchiseStats;

  const adminCards = [
    {
      title: 'Total Cities',
      value: stats.totalCities,
      icon: Building2,
      color: 'primary',
      change: '+2 this month',
    },
    {
      title: 'Total Franchises',
      value: stats.totalFranchises,
      icon: Store,
      color: 'accent',
      change: '+5 this month',
    },
    {
      title: 'Total Riders',
      value: stats.totalRiders,
      icon: Bike,
      color: 'info',
      change: '+18 this month',
    },
    {
      title: 'Active Riders',
      value: stats.activeRiders,
      icon: CheckCircle,
      color: 'success',
      change: '81% of total',
    },
  ];

  const franchiseCards = [
    {
      title: 'Total Riders',
      value: stats.totalRiders,
      icon: Users,
      color: 'primary',
      change: '+3 this week',
    },
    {
      title: 'Active Riders',
      value: stats.activeRiders,
      icon: CheckCircle,
      color: 'success',
      change: '82% of total',
    },
    {
      title: 'Pending Approval',
      value: stats.pendingApproval,
      icon: TrendingUp,
      color: 'warning',
      change: 'Needs attention',
    },
    {
      title: 'Documents Verified',
      value: stats.documentsVerified,
      icon: Bike,
      color: 'info',
      change: '76% verified',
    },
  ];

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
        ) : (
          <StatsCards cards={cards} />
        )}

        {/* Quick overview section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              {isAdmin() ? (
                <>
                  <QuickAction
                    icon={Building2}
                    label="Add New City"
                    href="/cities"
                  />
                  <QuickAction
                    icon={Store}
                    label="Create Franchise"
                    href="/franchises"
                  />
                  <QuickAction
                    icon={Users}
                    label="Manage Admins"
                    href="/franchise-admins"
                  />
                </>
              ) : (
                <>
                  <QuickAction
                    icon={Bike}
                    label="Add New Rider"
                    href="/riders"
                  />
                  <QuickAction
                    icon={CheckCircle}
                    label="Review Documents"
                    href="/riders"
                  />
                </>
              )}
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              <ActivityItem
                title="New rider registered"
                time="2 hours ago"
                type="success"
              />
              <ActivityItem
                title="Document verified"
                time="5 hours ago"
                type="info"
              />
              <ActivityItem
                title="Status updated"
                time="1 day ago"
                type="warning"
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

const QuickAction = ({ icon: Icon, label, href }) => {
  return (
    <a
      href={href}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <Icon size={20} className="text-primary" />
      </div>
      <span className="font-medium text-foreground">{label}</span>
    </a>
  );
};

const ActivityItem = ({ title, time, type }) => {
  const colors = {
    success: 'bg-success',
    info: 'bg-info',
    warning: 'bg-warning',
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`w-2 h-2 rounded-full ${colors[type]}`} />
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  );
};

export default Dashboard;
