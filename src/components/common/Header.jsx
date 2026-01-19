import { Bell, Search } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const Header = ({ title, subtitle }) => {
  const { user } = useAuth();

  return (
    <header className="h-16 bg-card border-b border-border px-6 flex items-center justify-between sticky top-0 z-40">
      <div>
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
          <Search size={16} className="text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-sm w-40 placeholder:text-muted-foreground"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
          <Bell size={20} className="text-muted-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-accent" />
        </button>

        {/* User avatar */}
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-medium text-sm">
            {user?.email?.charAt(0).toUpperCase() || 'U'}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
