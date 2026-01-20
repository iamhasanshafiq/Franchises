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
import { useFranchises } from '../hooks/useFranchises';
import { useCities } from '../hooks/useCities';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const Franchises = () => {
  const { franchises, loading, pagination, fetchFranchises, createFranchise, updateFranchise, terminateFranchise } = useFranchises();
  const { cities, fetchCities } = useCities();
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedFranchise, setSelectedFranchise] = useState(null);
  const [formData, setFormData] = useState({ cityId: '', name: '', code: '', maxActiveRiders: '' });
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    fetchCities(1, 100);
    fetchFranchises(pagination.page, pagination.limit);
  }, [fetchCities, fetchFranchises, pagination.page, pagination.limit]);

  const columns = [
    { key: 'name', label: 'Franchise Name' },
    { key: 'code', label: 'Code' },
    { key: 'cityName', label: 'City' },
    { key: 'maxActiveRiders', label: 'Max Riders' },
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
          <Button size="sm" variant="ghost" onClick={() => handleTerminate(row)}>
            <Trash2 size={16} />
          </Button>
        </div>
      ),
    },
  ];

  const handleEdit = (franchise) => {
    setSelectedFranchise(franchise);
    setFormData({
      cityId: franchise.cityId || '',
      name: franchise.name || '',
      code: franchise.code || '',
      maxActiveRiders: franchise.maxActiveRiders?.toString() || '',
    });
    setModalOpen(true);
  };

  const handleTerminate = (franchise) => {
    setSelectedFranchise(franchise);
    setConfirmOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      const data = {
        cityId: formData.cityId,
        name: formData.name,
        code: formData.code,
        maxActiveRiders: parseInt(formData.maxActiveRiders) || 0,
      };
      
      if (selectedFranchise) {
        await updateFranchise(selectedFranchise.id, data);
      } else {
        await createFranchise(data);
      }
      setModalOpen(false);
      setFormData({ cityId: '', name: '', code: '', maxActiveRiders: '' });
      setSelectedFranchise(null);
    } catch (error) {
      console.error('Error saving franchise:', error);
    } finally {
      setFormLoading(false);
    }
  };

  const handleConfirmTerminate = async () => {
    if (selectedFranchise) {
      try {
        await terminateFranchise(selectedFranchise.id);
      } catch (error) {
        console.error('Error terminating franchise:', error);
      }
      setConfirmOpen(false);
      setSelectedFranchise(null);
    }
  };

  const handlePageChange = (newPage) => {
    fetchFranchises(newPage, pagination.limit);
  };

  const handleOpenModal = () => {
    setSelectedFranchise(null);
    setFormData({ cityId: '', name: '', code: '', maxActiveRiders: '' });
    setModalOpen(true);
  };

  return (
    <DashboardLayout>
      <Header title="Franchises" subtitle="Manage franchises across cities" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">All Franchises</h2>
          <Button onClick={handleOpenModal}>
            <Plus size={18} className="mr-2" /> Add Franchise
          </Button>
        </div>
        <DataTable 
          columns={columns} 
          data={franchises} 
          loading={loading} 
          emptyMessage="No franchises found"
          pagination={{
            page: pagination.page,
            totalPages: pagination.totalPages,
            hasNext: pagination.hasNext,
            hasPrev: pagination.hasPrev,
            onPageChange: handlePageChange
          }}
        />
        
        {franchises.length > 0 && (
          <div className="text-sm text-muted-foreground text-center mt-4">
            Showing {franchises.length} of {pagination.total} franchises
          </div>
        )}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={selectedFranchise ? 'Edit Franchise' : 'Add Franchise'}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>City</Label>
            <Select value={formData.cityId} onValueChange={(value) => setFormData({ ...formData, cityId: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city.id} value={city.id}>
                    {city.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div><Label>Franchise Name</Label><Input placeholder="Enter franchise name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required /></div>
          <div><Label>Code</Label><Input placeholder="Enter franchise code" value={formData.code} onChange={(e) => setFormData({ ...formData, code: e.target.value })} required /></div>
          <div><Label>Max Active Riders</Label><Input type="number" placeholder="Enter max active riders" value={formData.maxActiveRiders} onChange={(e) => setFormData({ ...formData, maxActiveRiders: e.target.value })} required /></div>
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setModalOpen(false)} className="flex-1" disabled={formLoading}>Cancel</Button>
            <Button type="submit" className="flex-1" disabled={formLoading}>
              {formLoading ? 'Please wait...' : (selectedFranchise ? 'Update' : 'Create')}
            </Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog isOpen={confirmOpen} onClose={() => setConfirmOpen(false)} onConfirm={handleConfirmTerminate} title="Terminate Franchise" message={`Are you sure you want to terminate ${selectedFranchise?.name}?`} />
    </DashboardLayout>
  );
};

export default Franchises;
