import { AlertTriangle } from 'lucide-react';
import Modal from './Modal';
import { Button } from '../ui/button';

const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'destructive',
  loading = false,
}) => {
  const handleConfirm = async () => {
    await onConfirm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="sm">
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
          <AlertTriangle className="w-6 h-6 text-destructive" />
        </div>
        <p className="text-muted-foreground mb-6">{message}</p>
        <div className="flex gap-3 w-full">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={loading}
            className="flex-1"
          >
            {cancelText}
          </Button>
          <Button
            variant={variant}
            onClick={handleConfirm}
            disabled={loading}
            className="flex-1"
          >
            {loading ? 'Processing...' : confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmDialog;
