import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const RIDER_STATUSES = {
  APPLIED: 'Applied',
  APPROVED: 'Approved',
  DOCUMENT_SUBMITTED: 'Document Submitted',
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
  SUSPENDED: 'Suspended',
  TERMINATED: 'Terminated',
};

export const VEHICLE_TYPES = {
  BIKE: 'Bike',
  MOTORCYCLE: 'Motorcycle',
  CAR: 'Car',
  VAN: 'Van',
};

export const DOCUMENT_TYPES = {
  CNIC_FRONT: 'CNIC Front',
  CNIC_BACK: 'CNIC Back',
  LICENSE_FRONT: 'License Front',
  LICENSE_BACK: 'License Back',
  VEHICLE_REGISTRATION: 'Vehicle Registration',
  PROFILE_PHOTO: 'Profile Photo',
  OTHER: 'Other',
};

export const formatDate = (dateString) => {
  if (!dateString) return '-';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatDateTime = (dateString) => {
  if (!dateString) return '-';
  return new Date(dateString).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getStatusColor = (status) => {
  const colors = {
    ACTIVE: 'success',
    APPROVED: 'success',
    APPLIED: 'info',
    DOCUMENT_SUBMITTED: 'warning',
    INACTIVE: 'muted',
    SUSPENDED: 'warning',
    TERMINATED: 'destructive',
  };
  return colors[status] || 'muted';
};
