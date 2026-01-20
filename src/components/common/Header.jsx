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
    </header>
  );
};

export default Header;
