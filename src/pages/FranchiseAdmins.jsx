import { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import ConfirmDialog from '../components/common/ConfirmDialog';
import StatusBadge from '../components/common/StatusBadge';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Plus, Trash2 } from 'lucide-react';
import { useFranchiseAdmins } from '../hooks/useFranchiseAdmins';
import { useFranchises } from '../hooks/useFranchises';
import { useUsers } from '../hooks/useUsers';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const FranchiseAdmins = () => {
  const { admins, loading, pagination, fetchAdmins, createAdmin, deleteAdmin } = useFranchiseAdmins();
  const { franchises, fetchFranchises } = useFranchises();
  const { users, fetchUsers } = useUsers();
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [formData, setFormData] = useState({ franchiseId: '', authUserId: '' });
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    fetchFranchises(1, 100);
    fetchUsers(1, 100);
    fetchAdmins(pagination.page, pagination.limit);
  }, [fetchFranchises, fetchUsers, fetchAdmins, pagination.page, pagination.limit]);

  const columns = [
    { key: 'email', label: 'Email', render: (_, row) => row.authUser?.email || '-' },
    { key: 'fullName', label: 'Full Name', render: (_, row) => row.authUser?.fullName || row.authUser?.full_name || '-' },
    { key: 'franchiseName', label: 'Franchise', render: (_, row) => row.franchise?.name || '-' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status', render: (val) => <StatusBadge status={val} /> },
    { key: 'createdAt', label: 'Created', render: (val) => val ? new Date(val).toLocaleDateString() : '-' },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <Button size="sm" variant="ghost" onClick={() => handleDelete(row)}>
          <Trash2 size={16} />
        </Button>
      ),
    },
  ];

  const handleDelete = (admin) => {
    setSelectedAdmin(admin);
    setConfirmOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      await createAdmin({
        franchiseId: formData.franchiseId,
        authUserId: formData.authUserId,
      });
      setModalOpen(false);
      setFormData({ franchiseId: '', authUserId: '' });
    } catch (error) {
      console.error('Error creating admin:', error);
    } finally {
      setFormLoading(false);
    }
  };

  const handleConfirmDelete = async () => {
    if (selectedAdmin) {
      try {
        await deleteAdmin(selectedAdmin.id);
      } catch (error) {
        console.error('Error deleting admin:', error);
      }
      setConfirmOpen(false);
      setSelectedAdmin(null);
    }
  };

  const handlePageChange = (newPage) => {
    fetchAdmins(newPage, pagination.limit);
  };

  const handleOpenModal = () => {
    setFormData({ franchiseId: '', authUserId: '' });
    setModalOpen(true);
  };

  return (
    <DashboardLayout>
      <Header title="Franchise Admins" subtitle="Manage franchise administrators" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">All Admins</h2>
          <Button onClick={handleOpenModal}>
            <Plus size={18} className="mr-2" /> Add Admin
          </Button>
        </div>
        <DataTable 
          columns={columns} 
          data={admins} 
          loading={loading} 
          emptyMessage="No admins found"
          pagination={{
            page: pagination.page,
            totalPages: pagination.totalPages,
            hasNext: pagination.hasNext,
            hasPrev: pagination.hasPrev,
            onPageChange: handlePageChange
          }}
        />
        
        {admins.length > 0 && (
          <div className="text-sm text-muted-foreground text-center mt-4">
            Showing {admins.length} of {pagination.total} admins
          </div>
        )}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Add Franchise Admin">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Franchise</Label>
            <Select value={formData.franchiseId} onValueChange={(value) => setFormData({ ...formData, franchiseId: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select a franchise" />
              </SelectTrigger>
              <SelectContent>
                {franchises.map((franchise) => (
                  <SelectItem key={franchise.id} value={franchise.id}>
                    {franchise.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>User</Label>
            <Select value={formData.authUserId} onValueChange={(value) => setFormData({ ...formData, authUserId: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select a user" />
              </SelectTrigger>
              <SelectContent>
                {users.map((user) => (
                  <SelectItem key={user.id} value={user.id}>
                    {user.fullName || user.full_name} ({user.email})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setModalOpen(false)} className="flex-1" disabled={formLoading}>Cancel</Button>
            <Button type="submit" className="flex-1" disabled={formLoading || !formData.franchiseId || !formData.authUserId}>
              {formLoading ? 'Please wait...' : 'Create'}
            </Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog 
        isOpen={confirmOpen} 
        onClose={() => setConfirmOpen(false)} 
        onConfirm={handleConfirmDelete} 
        title="Remove Admin" 
        message={`Are you sure you want to remove ${selectedAdmin?.authUser?.email || selectedAdmin?.email} as admin?`} 
      />
    </DashboardLayout>
  );
};

export default FranchiseAdmins;
