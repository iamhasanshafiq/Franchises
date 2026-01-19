import { useState } from 'react';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import StatusBadge from '../components/common/StatusBadge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Plus, Edit, Power } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const Franchises = () => {
  const [franchises] = useState([
    { id: 1, name: 'Lahore Central', code: 'LHR-C', city: 'Lahore', max_riders: 50, status: 'ACTIVE' },
    { id: 2, name: 'Karachi South', code: 'KHI-S', city: 'Karachi', max_riders: 75, status: 'ACTIVE' },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', code: '', city_id: '', max_riders: '' });

  const columns = [
    { key: 'name', label: 'Franchise Name' },
    { key: 'code', label: 'Code' },
    { key: 'city', label: 'City' },
    { key: 'max_riders', label: 'Max Riders' },
    { key: 'status', label: 'Status', render: (val) => <StatusBadge status={val} /> },
    { key: 'actions', label: 'Actions', render: () => (
      <div className="flex gap-2">
        <Button size="sm" variant="ghost"><Edit size={16} /></Button>
        <Button size="sm" variant="ghost"><Power size={16} /></Button>
      </div>
    )},
  ];

  return (
    <DashboardLayout>
      <Header title="Franchises" subtitle="Manage franchises across cities" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">All Franchises</h2>
          <Button onClick={() => setModalOpen(true)}><Plus size={18} className="mr-2" /> Add Franchise</Button>
        </div>
        <DataTable columns={columns} data={franchises} emptyMessage="No franchises found" />
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Add Franchise">
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast({ title: 'Franchise created' }); setModalOpen(false); }}>
          <div><Label>Name</Label><Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required /></div>
          <div><Label>Code</Label><Input value={formData.code} onChange={(e) => setFormData({ ...formData, code: e.target.value })} required /></div>
          <div><Label>Max Riders</Label><Input type="number" value={formData.max_riders} onChange={(e) => setFormData({ ...formData, max_riders: e.target.value })} /></div>
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setModalOpen(false)} className="flex-1">Cancel</Button>
            <Button type="submit" className="flex-1">Create</Button>
          </div>
        </form>
      </Modal>
    </DashboardLayout>
  );
};

export default Franchises;
