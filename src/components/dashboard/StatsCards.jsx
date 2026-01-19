import { cn } from '../../lib/utils';

const StatsCards = ({ cards }) => {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary',
    accent: 'bg-accent/10 text-accent',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
    info: 'bg-info/10 text-info',
    destructive: 'bg-destructive/10 text-destructive',
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{card.title}</p>
                <p className="text-2xl font-bold text-card-foreground">
                  {typeof card.value === 'number'
                    ? card.value.toLocaleString()
                    : card.value}
                </p>
                {card.change && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {card.change}
                  </p>
                )}
              </div>
              <div
                className={cn(
                  'w-10 h-10 rounded-lg flex items-center justify-center',
                  colorClasses[card.color] || colorClasses.primary
                )}
              >
                <Icon size={20} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
