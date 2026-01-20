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
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useCities } from '../hooks/useCities';

const Cities = () => {
  const { cities, loading, pagination, fetchCities, createCity, updateCity, deactivateCity } = useCities();
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [formData, setFormData] = useState({ name: '', code: '' });
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    fetchCities(pagination.page, pagination.limit);
  }, [fetchCities, pagination.page, pagination.limit]);

  const columns = [
    { key: 'name', label: 'City Name' },
    { key: 'code', label: 'Code' },
    { key: 'status', label: 'Status', render: (val) => <StatusBadge status={val} /> },
    { key: 'createdAt', label: 'Created', render: (val) => val ? new Date(val).toLocaleDateString() : '-' },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <div className="flex gap-2">
          <Button size="sm" variant="ghost" onClick={() => handleEdit(row)}>
            <Edit size={16} />
          </Button>
          <Button size="sm" variant="ghost" onClick={() => handleToggleStatus(row)}>
            <Trash2 size={16} />
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      if (selectedCity) {
        await updateCity(selectedCity.id, formData);
      } else {
        await createCity(formData);
      }
      setModalOpen(false);
      setFormData({ name: '', code: '' });
      setSelectedCity(null);
    } catch (error) {
      console.error('Error saving city:', error);
    } finally {
      setFormLoading(false);
    }
  };

  const handleConfirmToggle = async () => {
    if (selectedCity) {
      try {
        await deactivateCity(selectedCity.id);
      } catch (error) {
        console.error('Error deactivating city:', error);
      }
      setConfirmOpen(false);
      setSelectedCity(null);
    }
  };

  const handlePageChange = (newPage) => {
    fetchCities(newPage, pagination.limit);
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
        <DataTable 
          columns={columns} 
          data={cities} 
          loading={loading} 
          emptyMessage="No cities found"
          pagination={{
            page: pagination.page,
            totalPages: pagination.totalPages,
            hasNext: pagination.hasNext,
            hasPrev: pagination.hasPrev,
            onPageChange: handlePageChange
          }}
        />
        
        {cities.length > 0 && (
          <div className="text-sm text-muted-foreground text-center">
            Showing {cities.length} of {pagination.total} cities
          </div>
        )}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={selectedCity ? 'Edit City' : 'Add City'}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div><Label>City Name</Label><Input placeholder="Enter city name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required /></div>
          <div><Label>Code</Label><Input placeholder="Enter city code (e.g. KHI)" value={formData.code} onChange={(e) => setFormData({ ...formData, code: e.target.value })} required /></div>
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setModalOpen(false)} className="flex-1" disabled={formLoading}>Cancel</Button>
            <Button type="submit" className="flex-1" disabled={formLoading}>
              {formLoading ? 'Please wait...' : (selectedCity ? 'Update' : 'Create')}
            </Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog isOpen={confirmOpen} onClose={() => setConfirmOpen(false)} onConfirm={handleConfirmToggle} title="Deactivate City" message={`Are you sure you want to deactivate ${selectedCity?.name}?`} />
    </DashboardLayout>
  );
};

export default Cities;
