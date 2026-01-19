import { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import ConfirmDialog from '../components/common/ConfirmDialog';
import StatusBadge from '../components/common/StatusBadge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Plus, Edit, Power } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const Cities = () => {
  const [cities, setCities] = useState([
    { id: 1, name: 'Lahore', code: 'LHR', status: 'ACTIVE', created_at: '2024-01-15' },
    { id: 2, name: 'Karachi', code: 'KHI', status: 'ACTIVE', created_at: '2024-01-10' },
    { id: 3, name: 'Islamabad', code: 'ISB', status: 'INACTIVE', created_at: '2024-02-01' },
  ]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [formData, setFormData] = useState({ name: '', code: '' });

  const columns = [
    { key: 'name', label: 'City Name' },
    { key: 'code', label: 'Code' },
    { key: 'status', label: 'Status', render: (val) => <StatusBadge status={val} /> },
    { key: 'created_at', label: 'Created', render: (val) => new Date(val).toLocaleDateString() },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <div className="flex gap-2">
          <Button size="sm" variant="ghost" onClick={() => handleEdit(row)}>
            <Edit size={16} />
          </Button>
          <Button size="sm" variant="ghost" onClick={() => handleToggleStatus(row)}>
            <Power size={16} />
          </Button>
        </div>
      ),
    },
  ];

  const handleEdit = (city) => {
    setSelectedCity(city);
    setFormData({ name: city.name, code: city.code });
    setModalOpen(true);
  };

  const handleToggleStatus = (city) => {
    setSelectedCity(city);
    setConfirmOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({ title: selectedCity ? 'City updated' : 'City created', description: `${formData.name} saved successfully` });
    setModalOpen(false);
    setFormData({ name: '', code: '' });
    setSelectedCity(null);
  };

  const handleConfirmToggle = () => {
    toast({ title: 'Status updated', description: `${selectedCity.name} status changed` });
    setConfirmOpen(false);
  };

  return (
    <DashboardLayout>
      <Header title="Cities" subtitle="Manage cities in the network" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">All Cities</h2>
          <Button onClick={() => { setSelectedCity(null); setFormData({ name: '', code: '' }); setModalOpen(true); }}>
            <Plus size={18} className="mr-2" /> Add City
          </Button>
        </div>
        <DataTable columns={columns} data={cities} loading={loading} emptyMessage="No cities found" />
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={selectedCity ? 'Edit City' : 'Add City'}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div><Label>City Name</Label><Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required /></div>
          <div><Label>Code</Label><Input value={formData.code} onChange={(e) => setFormData({ ...formData, code: e.target.value })} required /></div>
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setModalOpen(false)} className="flex-1">Cancel</Button>
            <Button type="submit" className="flex-1">{selectedCity ? 'Update' : 'Create'}</Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog isOpen={confirmOpen} onClose={() => setConfirmOpen(false)} onConfirm={handleConfirmToggle} title="Toggle Status" message={`Are you sure you want to ${selectedCity?.status === 'ACTIVE' ? 'deactivate' : 'activate'} ${selectedCity?.name}?`} />
    </DashboardLayout>
  );
};

export default Cities;
