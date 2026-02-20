import { cn } from '../../lib/utils';

const StatusBadge = ({ status, variant }) => {
  const variantStyles = {
    success: 'bg-success/10 text-success border-success/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    destructive: 'bg-destructive/10 text-destructive border-destructive/20',
    info: 'bg-info/10 text-info border-info/20',
    muted: 'bg-muted text-muted-foreground border-border',
    primary: 'bg-primary/10 text-primary border-primary/20',
    accent: 'bg-accent/10 text-accent border-accent/20',
  };

  const getAutoVariant = () => {
    const statusLower = status?.toLowerCase();
    if (['active', 'approved', 'verified', 'success'].includes(statusLower)) return 'success';
    if (['pending', 'applied', 'document_submitted'].includes(statusLower)) return 'info';
    if (['suspended', 'warning', 'inactive'].includes(statusLower)) return 'warning';
    if (['terminated', 'rejected', 'failed', 'error'].includes(statusLower)) return 'destructive';
    return 'muted';
  };

  const finalVariant = variant || getAutoVariant();

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        variantStyles[finalVariant]
      )}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
