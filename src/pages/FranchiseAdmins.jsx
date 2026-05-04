import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import ConfirmDialog from '../components/common/ConfirmDialog';
import StatusBadge from '../components/common/StatusBadge';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Plus, Trash2, UserPlus } from 'lucide-react';
import { useFranchiseAdmins } from '../hooks/useFranchiseAdmins';
import { useFranchises } from '../hooks/useFranchises';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const FranchiseAdmins = () => {
  const { admins, loading, fetchAdmins, createAdmin, deleteAdmin, changeStatus } = useFranchiseAdmins();
  const { franchises, fetchFranchises } = useFranchises();

  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [statusConfirmOpen, setStatusConfirmOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [statusLoading, setStatusLoading] = useState(false);
  const [formData, setFormData] = useState({
    franchiseId: '',
    fullName: '',
    email: '',
    password: '',
    phone: ''
  });

  useEffect(() => {
    fetchFranchises();
    fetchAdmins();
  }, []);

  const columns = [
    { key: 'fullName', label: 'Full Name', render: (val) => val || '-' },
    { key: 'email', label: 'Email', render: (val) => val || '-' },
    { key: 'phone', label: 'Contact', render: (val) => val || '-' },
    { key: 'franchise', label: 'Franchise Node', render: (val) => val?.name || 'N/A' },
    { key: 'role', label: 'Role', render: (val) => <span className="text-xs font-bold uppercase">{val}</span> },
    {
      key: 'status',
      label: 'Status',
      render: (val, row) => (
        <button
          onClick={() => handleStatusClick(row)}
          title={val === 'ACTIVE' ? 'Click to suspend' : 'Click to activate'}
          className="cursor-pointer hover:opacity-70 transition-opacity"
        >
          <StatusBadge status={val} />
        </button>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <Button size="sm" variant="ghost" className="hover:text-red-600" onClick={() => handleDeleteClick(row)}>
          <Trash2 size={16} />
        </Button>
      ),
    },
  ];

  const handleDeleteClick = (admin) => {
    setSelectedAdmin(admin);
    setConfirmOpen(true);
  };

  const handleStatusClick = (admin) => {
    setSelectedAdmin(admin);
    setStatusConfirmOpen(true);
  };

  const handleConfirmStatusChange = async () => {
    if (!selectedAdmin) return;
    const newStatus = selectedAdmin.status === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE';
    try {
      setStatusLoading(true);
      await changeStatus(selectedAdmin.id, newStatus);
    } catch (error) {
      console.error('Status change error:', error);
    } finally {
      setStatusLoading(false);
      setStatusConfirmOpen(false);
      setSelectedAdmin(null);
    }
  };

  const handleConfirmDelete = async () => {
    if (!selectedAdmin) return;

    try {
      setDeleteLoading(true);
      await deleteAdmin(selectedAdmin.id);
    } catch (error) {
      console.error('Deletion error:', error);
    } finally {
      setDeleteLoading(false);
      setConfirmOpen(false);
      setSelectedAdmin(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.franchiseId) {
      alert('Please select a franchise before provisioning an admin.');
      return;
    }
    setFormLoading(true);
    try {
      await createAdmin(formData);
      setModalOpen(false);
      setFormData({ franchiseId: '', fullName: '', email: '', password: '', phone: '' });
    } catch (error) {
      console.error('Error creating admin:', error);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <Header title="System Administrators" subtitle="Manage franchise-level command nodes" />

      <div className="p-8 max-w-7xl mx-auto space-y-6">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                <UserPlus size={20} />
              </div>
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-600">Administrative Directory</h2>
            </div>
            <Button onClick={() => setModalOpen(true)} disabled={loading} className="rounded-xl shadow-lg shadow-indigo-200">
              <Plus size={18} className="mr-2" /> Provision Admin
            </Button>
          </div>

          <DataTable
            columns={columns}
            data={admins}
            loading={loading}
            emptyMessage="No administrative nodes found in network"
          />
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Provision New Administrator">
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-slate-500">Target Franchise Node</Label>
            <Select value={formData.franchiseId} onValueChange={(val) => setFormData({ ...formData, franchiseId: val })}>
              <SelectTrigger className="rounded-xl h-12">
                <SelectValue placeholder="Select target node" />
              </SelectTrigger>
              <SelectContent>
                {franchises.map((f) => (
                  <SelectItem key={f.id} value={f.id}>{f.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase text-slate-500">Full Name</Label>
              <Input
                className="rounded-xl h-12"
                placeholder="Ali Khan"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase text-slate-500">Contact Number</Label>
              <Input
                className="rounded-xl h-12"
                placeholder="03001234567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-slate-500">Email Address</Label>
            <Input
              type="email"
              className="rounded-xl h-12"
              placeholder="admin@barqi.pk"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-slate-500">Temporary Password</Label>
            <Input
              type="password"
              className="rounded-xl h-12"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <div className="flex gap-4 pt-6">
            <Button type="button" variant="outline" onClick={() => setModalOpen(false)} className="flex-1 rounded-xl h-12">Cancel</Button>
            <Button type="submit" className="flex-1 rounded-xl h-12" disabled={formLoading}>
              {formLoading ? 'Provisioning...' : 'Confirm Provision'}
            </Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Revoke Admin Access"
        message={`Are you sure you want to permanently remove access for ${selectedAdmin?.fullName}?`}
        loading={deleteLoading}
      />

      <ConfirmDialog
        isOpen={statusConfirmOpen}
        onClose={() => { setStatusConfirmOpen(false); setSelectedAdmin(null); }}
        onConfirm={handleConfirmStatusChange}
        title={selectedAdmin?.status === 'ACTIVE' ? 'Suspend Admin' : 'Activate Admin'}
        message={
          selectedAdmin?.status === 'ACTIVE'
            ? `Suspend access for ${selectedAdmin?.fullName}? They will not be able to log in until reactivated.`
            : `Reactivate access for ${selectedAdmin?.fullName}? They will regain full login access.`
        }
        confirmText={selectedAdmin?.status === 'ACTIVE' ? 'Suspend' : 'Activate'}
        variant={selectedAdmin?.status === 'ACTIVE' ? 'destructive' : 'default'}
        loading={statusLoading}
      />
    </DashboardLayout>
  );
};

export default FranchiseAdmins;