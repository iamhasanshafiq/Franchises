import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const StatsCards = ({ cards, loading = false }) => {
  const colorClasses = {
    primary:
      'from-primary/20 to-primary/5 text-primary border-primary/20',
    accent:
      'from-accent/20 to-accent/5 text-accent border-accent/20',
    success:
      'from-emerald-500/20 to-emerald-500/5 text-emerald-600 border-emerald-500/20',
    warning:
      'from-amber-500/20 to-amber-500/5 text-amber-600 border-amber-500/20',
    info:
      'from-sky-500/20 to-sky-500/5 text-sky-600 border-sky-500/20',
    destructive:
      'from-red-500/20 to-red-500/5 text-red-600 border-red-500/20',
  };

  // LOADING STATE
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {cards.map((_, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm p-6"
          >
            <div className="animate-pulse">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="h-3 w-24 rounded bg-muted mb-4" />
                  <div className="h-8 w-28 rounded bg-muted mb-3" />
                  <div className="h-3 w-20 rounded bg-muted" />
                </div>

                <div className="w-14 h-14 rounded-2xl bg-muted" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // MAIN UI
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-300"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Top Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex items-start justify-between">
              <div className="flex-1">
                {/* TITLE */}
                <p className="text-sm font-medium text-muted-foreground tracking-wide mb-2">
                  {card.title}
                </p>

                {/* VALUE */}
                <h3 className="text-3xl font-bold text-foreground tracking-tight">
                  {typeof card.value === 'number'
                    ? card.value.toLocaleString()
                    : card.value}
                </h3>

                {/* CHANGE */}
                {card.change && (
                  <div className="mt-4 inline-flex items-center gap-1 rounded-full border border-border/50 bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {card.change}
                  </div>
                )}
              </div>

              {/* ICON */}
              <div
                className={cn(
                  'relative flex items-center justify-center w-14 h-14 rounded-2xl border bg-gradient-to-br shadow-inner transition-all duration-300 group-hover:scale-110',
                  colorClasses[card.color] || colorClasses.primary
                )}
              >
                <div className="absolute inset-0 rounded-2xl bg-white/10" />

                <Icon
                  size={24}
                  className="relative z-10 transition-transform duration-300 group-hover:rotate-6"
                />
              </div>
            </div>

            {/* DECORATION */}
            <div className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default StatsCards;