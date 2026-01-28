import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import ConfirmDialog from '../components/common/ConfirmDialog';
import StatusBadge from '../components/common/StatusBadge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Plus, Edit, Trash2, MapPin, Hash, Globe } from 'lucide-react';
import { useCities } from '../hooks/useCities';

const Cities = () => {
  // Use "Fetch All" hook logic (Pagination removed)
  const { cities, loading, fetchCities, createCity, updateCity, deactivateCity } = useCities();
  
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [formData, setFormData] = useState({ name: '', code: '' });
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    // GET /api/cities (without limit/page)
    fetchCities(); 
  }, [fetchCities]);

  const columns = [
    { 
      key: 'name', 
      label: 'City Name', 
      render: (val) => (
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
            <MapPin size={16} />
          </div>
          <span className="font-bold text-slate-700">{val}</span>
        </div>
      )
    },
    { 
      key: 'code', 
      label: 'Region Code', 
      render: (val) => <code className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-600 tracking-wider">{val}</code> 
    },
    { 
      key: 'status', 
      label: 'Network Status', 
      render: (val) => <StatusBadge status={val} /> 
    },
    { 
      key: 'createdAt', 
      label: 'Added On', 
      render: (val) => val ? new Date(val).toLocaleDateString() : '-' 
    },
    {
      key: 'actions',
      label: 'Command',
      render: (_, row) => (
        <div className="flex gap-1">
          <Button size="sm" variant="ghost" className="hover:bg-blue-50 hover:text-blue-600" onClick={() => handleEdit(row)}>
            <Edit size={16} />
          </Button>
          <Button size="sm" variant="ghost" className="hover:bg-red-50 hover:text-red-600" onClick={() => handleToggleStatus(row)}>
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
        // PATCH /api/cities/{{cityId}}
        await updateCity(selectedCity.id, formData);
      } else {
        // POST /api/cities
        await createCity(formData);
      }
      setModalOpen(false);
      setFormData({ name: '', code: '' });
      setSelectedCity(null);
    } catch (error) {
      console.error('Operation failed:', error);
    } finally {
      setFormLoading(false);
    }
  };

  const handleConfirmToggle = async () => {
    if (selectedCity) {
      try {
        // PATCH /api/cities/{{cityId}}/deactivate
        await deactivateCity(selectedCity.id);
      } catch (error) {
        console.error('Status update failed:', error);
      }
      setConfirmOpen(false);
      setSelectedCity(null);
    }
  };

  const handleOpenModal = () => {
    setSelectedCity(null);
    setFormData({ name: '', code: '' });
    setModalOpen(true);
  };

  return (
    <DashboardLayout>
      <Header title="Regional Infrastructure" subtitle="Configure and manage active city nodes within the Barqi network" />
      
      <div className="p-8 max-w-7xl mx-auto space-y-6">
        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-600 text-white rounded-xl shadow-lg shadow-emerald-200">
                <Globe size={20} />
              </div>
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-600">City Directory</h2>
            </div>
            <Button onClick={handleOpenModal} className="rounded-xl h-11 px-6 shadow-xl shadow-emerald-100 transition-all hover:scale-105 active:scale-95 bg-emerald-600 hover:bg-emerald-700">
              <Plus size={18} className="mr-2" /> Register New City
            </Button>
          </div>

          <DataTable 
            columns={columns} 
            data={cities} 
            loading={loading} 
            emptyMessage="No regional nodes established"
          />
          
          <div className="p-4 border-t border-slate-50 bg-slate-50/30 text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Total Managed Regions: {cities.length}
            </p>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        title={selectedCity ? 'Modify Regional Node' : 'Initialize Regional Node'}
      >
        <form onSubmit={handleSubmit} className="space-y-5 py-4">
          <div className="space-y-2">
            <Label className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-2">
              <MapPin size={14} /> City Designation
            </Label>
            <Input 
              className="h-12 rounded-xl" 
              placeholder="e.g. Islamabad" 
              value={formData.name} 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-2">
              <Hash size={14} /> Identification Code
            </Label>
            <Input 
              className="h-12 rounded-xl font-mono" 
              placeholder="e.g. ISB" 
              value={formData.code} 
              onChange={(e) => setFormData({ ...formData, code: e.target.value })} 
              required 
            />
          </div>

          <div className="flex gap-4 pt-6">
            <Button type="button" variant="outline" onClick={() => setModalOpen(false)} className="flex-1 h-12 rounded-xl" disabled={formLoading}>Cancel</Button>
            <Button type="submit" className="flex-1 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200 text-white" disabled={formLoading}>
              {formLoading ? 'Processing...' : (selectedCity ? 'Apply Changes' : 'Confirm Registration')}
            </Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog 
        isOpen={confirmOpen} 
        onClose={() => setConfirmOpen(false)} 
        onConfirm={handleConfirmToggle} 
        title="Deactivate Regional Node" 
        message={`Warning: Deactivating ${selectedCity?.name} will restrict operational activities in this region. Continue?`} 
      />
    </DashboardLayout>
  );
};

export default Cities;