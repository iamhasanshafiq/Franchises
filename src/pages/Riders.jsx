import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import StatusBadge from '../components/common/StatusBadge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Plus, Eye, Edit } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useRiders } from '../hooks/useRiders';

const Riders = () => {
  const { isAdmin, isFranchiseAdmin } = useAuth();
  const navigate = useNavigate();
  const { riders, loading, pagination, fetchRiders } = useRiders();
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ 
    fullName: '', 
    phone: '', 
    vehicleType: 'BIKE',
    franchiseId: '',
    cityId: '' 
  });
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    fetchRiders(pagination.page, pagination.limit);
  }, [fetchRiders, pagination.page, pagination.limit]);

  const columns = [
    { key: 'fullName', label: 'Name', render: (_, row) => row.fullName || row.full_name || '-' },
    { key: 'phone', label: 'Phone' },
    { key: 'vehicleType', label: 'Vehicle', render: (_, row) => row.vehicleType || row.vehicle_type || '-' },
    { key: 'status', label: 'Status', render: (val) => <StatusBadge status={val} /> },
    { key: 'createdAt', label: 'Created', render: (val) => val ? new Date(val).toLocaleDateString() : '-' },
    { key: 'actions', label: 'Actions', render: (_, row) => (
      <div className="flex gap-2">
        <Button size="sm" variant="ghost" onClick={() => navigate(`/riders/${row.id}`)}>
          <Eye size={16} />
        </Button>
        {(isFranchiseAdmin() || isAdmin()) && (
          <Button size="sm" variant="ghost" onClick={() => navigate(`/riders/${row.id}/edit`)}>
            <Edit size={16} />
          </Button>
        )}
      </div>
    )},
  ];

  const handlePageChange = (newPage) => {
    fetchRiders(newPage, pagination.limit);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      // Create rider logic would go here
      setModalOpen(false);
      setFormData({ fullName: '', phone: '', vehicleType: 'BIKE', franchiseId: '', cityId: '' });
    } catch (error) {
      console.error('Error creating rider:', error);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <Header title="Riders" subtitle="Manage delivery riders" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">All Riders</h2>
          {isFranchiseAdmin() && (
            <Button onClick={() => setModalOpen(true)}>
              <Plus size={18} className="mr-2" /> Add Rider
            </Button>
          )}
        </div>
        <DataTable 
          columns={columns} 
          data={riders} 
          loading={loading} 
          emptyMessage="No riders found"
          pagination={{
            page: pagination.page,
            totalPages: pagination.totalPages,
            hasNext: pagination.hasNext,
            hasPrev: pagination.hasPrev,
            onPageChange: handlePageChange
          }}
        />
        
        {riders.length > 0 && (
          <div className="text-sm text-muted-foreground text-center mt-4">
            Showing {riders.length} of {pagination.total} riders
          </div>
        )}
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Add Rider">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div><Label>Full Name</Label><Input 
            value={formData.fullName} 
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} 
            placeholder="Enter full name"
            required 
          /></div>
          <div><Label>Phone</Label><Input 
            value={formData.phone} 
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
            placeholder="+923001234567"
            required 
          /></div>
          <div><Label>Vehicle Type</Label>
            <select 
              value={formData.vehicleType}
              onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="BIKE">Bike</option>
              <option value="MOTORBIKE">Motorbike</option>
              <option value="CAR">Car</option>
              <option value="VAN">Van</option>
            </select>
          </div>
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setModalOpen(false)} className="flex-1" disabled={formLoading}>Cancel</Button>
            <Button type="submit" className="flex-1" disabled={formLoading}>
              {formLoading ? 'Please wait...' : 'Create'}
            </Button>
          </div>
        </form>
      </Modal>
    </DashboardLayout>
  );
};

export default Riders;
