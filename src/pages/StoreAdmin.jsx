import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import ConfirmDialog from '../components/common/ConfirmDialog';
import StatusBadge from '../components/common/StatusBadge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';
import { UserPlus, Search, ShieldCheck, Mail, Lock, Phone, Store, Loader2, Eye, Trash2 } from 'lucide-react';
import TableSkeleton from '../components/common/TableSkeleton';
import { useStoreAdmins } from '../hooks/useStoreAdmins';
import { storesApi } from '../api/stores.api';

const StoreAdmins = () => {
  const { admins, loading, fetchAdmins, createAdmin, changeStatus, deleteAdmin } = useStoreAdmins();
  const [stores, setStores] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const [statusConfirmOpen, setStatusConfirmOpen] = useState(false);
  const [statusLoading, setStatusLoading] = useState(false);

  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [formData, setFormData] = useState({
    storeId: '',
    fullName: '',
    email: '',
    password: '',
    phone: ''
  });

  useEffect(() => {
    fetchAdmins();
    storesApi.getAll(1, 100).then(res => {
      const data = res.data || res;
      setStores(data.items || data || []);
    }).catch(() => toast.error('Failed to load stores'));
  }, [fetchAdmins]);

  const filteredAdmins = useMemo(() => {
    if (!searchTerm) return admins;
    const s = searchTerm.toLowerCase();
    return admins.filter(a =>
      a.fullName?.toLowerCase().includes(s) ||
      a.email?.toLowerCase().includes(s) ||
      a.phone?.toLowerCase().includes(s) ||
      a.store?.name?.toLowerCase().includes(s)
    );
  }, [admins, searchTerm]);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!formData.storeId) {
      toast.error('Please select a store first.');
      return;
    }
    setFormLoading(true);
    try {
      await createAdmin(formData);
      setModalOpen(false);
      setFormData({ storeId: '', fullName: '', email: '', password: '', phone: '' });
    } catch {
      // error toast handled in hook
    } finally {
      setFormLoading(false);
    }
  };

  const handleViewDetail = (admin) => {
    setSelectedAdmin(admin);
    setDetailOpen(true);
  };

  const handleStatusClick = (admin) => {
    setSelectedAdmin(admin);
    setStatusConfirmOpen(true);
  };

  const handleConfirmStatus = async () => {
    if (!selectedAdmin) return;
    const newStatus = selectedAdmin.status === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE';
    try {
      setStatusLoading(true);
      await changeStatus(selectedAdmin.id, newStatus);
    } catch {
      // error toast handled in hook
    } finally {
      setStatusLoading(false);
      setStatusConfirmOpen(false);
      setSelectedAdmin(null);
    }
  };

  const handleDeleteClick = (admin) => {
    setSelectedAdmin(admin);
    setDeleteConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedAdmin) return;
    try {
      setDeleteLoading(true);
      await deleteAdmin(selectedAdmin.id);
    } catch {
      // error toast handled in hook
    } finally {
      setDeleteLoading(false);
      setDeleteConfirmOpen(false);
      setSelectedAdmin(null);
    }
  };

  return (
    <DashboardLayout>
      <Header title="Store Access Control" subtitle="Manage personnel authorized to oversee local hub operations" />

      <div className="p-6 space-y-6 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
            <Input
              placeholder="Search administrators..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-11 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <Button onClick={() => setModalOpen(true)} className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 h-11 px-8 rounded-xl shadow-lg shadow-orange-100 transition-all">
            <UserPlus size={18} className="mr-2" /> Add Store Admin
          </Button>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          {loading ? (
            <TableSkeleton rows={6} />
          ) : (
            <DataTable
              data={filteredAdmins}
              columns={[
                {
                  key: 'fullName',
                  label: 'Administrator',
                  render: (val, row) => (
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-700 font-bold uppercase">
                        {val?.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{val}</div>
                        <div className="text-xs text-gray-400">{row.email}</div>
                      </div>
                    </div>
                  )
                },
                {
                  key: 'store',
                  label: 'Assigned Hub',
                  render: (_, row) => (
                    <div className="flex items-center gap-2">
                      <Store size={14} className="text-gray-400" />
                      <span className="text-sm font-medium">{row.store?.name || 'Unassigned'}</span>
                    </div>
                  )
                },
                {
                  key: 'phone',
                  label: 'Contact',
                  render: (val) => <span className="text-xs font-mono">{val || '-'}</span>
                },
                {
                  key: 'status',
                  label: 'Status',
                  render: (val, row) => (
                    <button onClick={() => handleStatusClick(row)} className="cursor-pointer">
                      <StatusBadge status={val} />
                    </button>
                  )
                },
                {
                  key: 'actions',
                  label: '',
                  render: (_, row) => (
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-600" onClick={() => handleViewDetail(row)}>
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-600" onClick={() => handleDeleteClick(row)}>
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  )
                }
              ]}
            />
          )}
        </div>
      </div>

      {/* Create Modal */}
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="New Store Administrator" size="lg">
          <form onSubmit={handleCreate} className="space-y-6 py-2">
            <div className="p-4 bg-orange-50/50 rounded-2xl border border-orange-100 space-y-2">
              <Label className="text-[10px] font-bold uppercase text-orange-700 tracking-wider">Target Store Hub</Label>
              <Select value={formData.storeId} onValueChange={(val) => setFormData({ ...formData, storeId: val })}>
                <SelectTrigger className="h-11 bg-white border-orange-200">
                  <SelectValue placeholder="Select store for management" />
                </SelectTrigger>
                <SelectContent>
                  {stores.map(s => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <Label className="text-xs font-semibold text-gray-600">Full Name</Label>
                <div className="relative">
                  <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
                  <Input className="pl-10 h-11" placeholder="e.g. Usman Ali" value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label className="text-xs font-semibold text-gray-600">Official Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
                    <Input className="pl-10 h-11" type="email" placeholder="store@barqi.pk" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs font-semibold text-gray-600">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
                    <Input className="pl-10 h-11" placeholder="03001234567" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} required />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <Label className="text-xs font-semibold text-gray-600">Temporary Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
                  <Input className="pl-10 h-11" type="password" placeholder="••••••••" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} required />
                </div>
                <p className="text-[10px] text-gray-400 italic">User will be prompted to change this on first login.</p>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t">
              <Button type="button" variant="ghost" onClick={() => setModalOpen(false)} className="flex-1 h-12 rounded-xl">Cancel</Button>
              <Button type="submit" disabled={formLoading} className="flex-[2] bg-orange-600 hover:bg-orange-700 text-white rounded-xl h-12 font-bold shadow-lg shadow-orange-100">
                {formLoading ? <Loader2 className="animate-spin mr-2" /> : 'Create Administrator'}
              </Button>
            </div>
          </form>
        </Modal>
      )}

      {/* Detail Modal */}
      {detailOpen && selectedAdmin && (
        <Modal isOpen={detailOpen} onClose={() => { setDetailOpen(false); setSelectedAdmin(null); }} title="Store Admin Details">
          <div className="space-y-4 py-2">
            <div className="flex items-center gap-4">
              <div className="size-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-700 font-bold text-2xl uppercase">
                {selectedAdmin.fullName?.charAt(0)}
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900">{selectedAdmin.fullName}</p>
                <p className="text-sm text-gray-500">{selectedAdmin.email}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">Phone</p>
                <p className="text-sm font-medium">{selectedAdmin.phone || '-'}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">Status</p>
                <StatusBadge status={selectedAdmin.status} />
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">Assigned Store</p>
                <p className="text-sm font-medium">{selectedAdmin.store?.name || 'Unassigned'}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">Role</p>
                <p className="text-sm font-bold uppercase">{selectedAdmin.role}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 col-span-2">
                <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">Created</p>
                <p className="text-sm font-medium">{selectedAdmin.createdAt ? new Date(selectedAdmin.createdAt).toLocaleDateString() : '-'}</p>
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <Button variant="outline" onClick={() => { setDetailOpen(false); setSelectedAdmin(null); }} className="rounded-xl">Close</Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Status Toggle Confirmation */}
      <ConfirmDialog
        isOpen={statusConfirmOpen}
        onClose={() => { setStatusConfirmOpen(false); setSelectedAdmin(null); }}
        onConfirm={handleConfirmStatus}
        title={selectedAdmin?.status === 'ACTIVE' ? 'Suspend Admin' : 'Activate Admin'}
        message={`Are you sure you want to ${selectedAdmin?.status === 'ACTIVE' ? 'suspend' : 'activate'} ${selectedAdmin?.fullName}?`}
        loading={statusLoading}
      />

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={deleteConfirmOpen}
        onClose={() => { setDeleteConfirmOpen(false); setSelectedAdmin(null); }}
        onConfirm={handleConfirmDelete}
        title="Remove Store Admin"
        message={`Are you sure you want to permanently remove ${selectedAdmin?.fullName} as store admin?`}
        loading={deleteLoading}
      />
    </DashboardLayout>
  );
};

export default StoreAdmins;
