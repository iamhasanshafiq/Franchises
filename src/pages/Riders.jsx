import { useState } from 'react';
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
import { toast } from '../hooks/use-toast';

const Riders = () => {
  const { isFranchiseAdmin } = useAuth();
  const navigate = useNavigate();
  const [riders] = useState([
    { id: 1, full_name: 'Ali Khan', phone: '03001234567', vehicle_type: 'Motorcycle', status: 'ACTIVE' },
    { id: 2, full_name: 'Ahmed Raza', phone: '03009876543', vehicle_type: 'Bike', status: 'APPLIED' },
    { id: 3, full_name: 'Usman Ali', phone: '03211234567', vehicle_type: 'Car', status: 'DOCUMENT_SUBMITTED' },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ full_name: '', phone: '', vehicle_type: 'Motorcycle' });

  const columns = [
    { key: 'full_name', label: 'Name' },
    { key: 'phone', label: 'Phone' },
    { key: 'vehicle_type', label: 'Vehicle' },
    { key: 'status', label: 'Status', render: (val) => <StatusBadge status={val} /> },
    { key: 'actions', label: 'Actions', render: (_, row) => (
      <div className="flex gap-2">
        <Button size="sm" variant="ghost" onClick={() => navigate(`/riders/${row.id}`)}><Eye size={16} /></Button>
        {isFranchiseAdmin() && <Button size="sm" variant="ghost"><Edit size={16} /></Button>}
      </div>
    )},
  ];

  return (
    <DashboardLayout>
      <Header title="Riders" subtitle="Manage delivery riders" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">All Riders</h2>
          {isFranchiseAdmin() && <Button onClick={() => setModalOpen(true)}><Plus size={18} className="mr-2" /> Add Rider</Button>}
        </div>
        <DataTable columns={columns} data={riders} emptyMessage="No riders found" />
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Add Rider">
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast({ title: 'Rider created' }); setModalOpen(false); }}>
          <div><Label>Full Name</Label><Input value={formData.full_name} onChange={(e) => setFormData({ ...formData, full_name: e.target.value })} required /></div>
          <div><Label>Phone</Label><Input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required /></div>
          <div><Label>Vehicle Type</Label><Input value={formData.vehicle_type} onChange={(e) => setFormData({ ...formData, vehicle_type: e.target.value })} /></div>
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setModalOpen(false)} className="flex-1">Cancel</Button>
            <Button type="submit" className="flex-1">Create</Button>
          </div>
        </form>
      </Modal>
    </DashboardLayout>
  );
};

export default Riders;
