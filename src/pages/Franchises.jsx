import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import ConfirmDialog from '../components/common/ConfirmDialog';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Plus, Edit, Trash2, Store, MapPin, Hash, Users } from 'lucide-react';
import { useFranchises } from '../hooks/useFranchises';
import { useCities } from '../hooks/useCities';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const Franchises = () => {
  const { franchises, loading, fetchFranchises, createFranchise, updateFranchise, terminateFranchise } = useFranchises();
  const { cities, fetchCities } = useCities();

  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedFranchise, setSelectedFranchise] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [terminateLoading, setTerminateLoading] = useState(false);
  const [formData, setFormData] = useState({
    cityId: '',
    name: '',
    code: '',
    maxActiveRiders: ''
  });

  useEffect(() => {
    fetchCities();
    fetchFranchises();
  }, []);

  const columns = [
    {
      key: 'name',
      label: 'Franchise Node',
      render: (val) => (
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
            <Store size={16} />
          </div>
          <span className="font-bold text-slate-700">{val}</span>
        </div>
      )
    },
    {
      key: 'code',
      label: 'Node ID',
      render: (val) => <code className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-600">{val}</code>
    },
    {
      key: 'city',
      label: 'Region',
      render: (val) => (
        <div className="flex items-center gap-2 text-slate-500">
          <MapPin size={14} />
          <span className="text-sm">{val?.name || 'Global'}</span>
        </div>
      )
    },
    {
      key: 'maxActiveRiders',
      label: 'Rider Cap',
      render: (val) => (
        <div className="flex items-center gap-2 font-semibold text-slate-600">
          <Users size={14} className="text-slate-400" />
          {val}
        </div>
      )
    },
    {
      key: 'createdAt',
      label: 'Established',
      render: (val) => val ? new Date(val).toLocaleDateString() : '-'
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <div className="flex gap-1">
          <Button size="sm" variant="ghost" className="hover:bg-blue-50 hover:text-blue-600" onClick={() => handleEdit(row)}>
            <Edit size={16} />
          </Button>
          <Button size="sm" variant="ghost" className="hover:bg-red-50 hover:text-red-600" onClick={() => handleTerminate(row)}>
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
        await updateFranchise(selectedFranchise.id, data); // PATCH /api/franchises/{{id}}
      } else {
        await createFranchise(data); // POST /api/franchises
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
    if (!selectedFranchise) return;

    try {
      setTerminateLoading(true);
      await terminateFranchise(selectedFranchise.id);
    } catch (error) {
      console.error('Error terminating franchise:', error);
    } finally {
      setTerminateLoading(false);
      setConfirmOpen(false);
      setSelectedFranchise(null);
    }
  };

  const handleOpenModal = () => {
    setSelectedFranchise(null);
    setFormData({ cityId: '', name: '', code: '', maxActiveRiders: '' });
    setModalOpen(true);
  };

  return (
    <DashboardLayout>
      <Header title="Franchise Nodes" subtitle="Monitor and scale operational capacity across regions" />

      <div className="p-8 max-w-7xl mx-auto space-y-6">
        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200">
                <Store size={20} />
              </div>
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-600">Node Directory</h2>
            </div>
            <Button onClick={handleOpenModal} disabled={loading} className="rounded-xl h-11 px-6 shadow-xl shadow-blue-100 transition-all hover:scale-105 active:scale-95">
              <Plus size={18} className="mr-2" /> Add Franchise Node
            </Button>
          </div>

          <DataTable
            columns={columns}
            data={franchises}
            loading={loading}
            emptyMessage="No franchise nodes found in system"
          />

          <div className="p-4 border-t border-slate-50 bg-slate-50/30 text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Total Active Nodes: {franchises.length}
            </p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedFranchise ? 'Reconfigure Franchise' : 'Provision New Franchise'}
      >
        <form onSubmit={handleSubmit} className="space-y-5 py-4">
          <div className="space-y-2">
            <Label className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-2">
              <MapPin size={14} /> Assigned Region
            </Label>
            <Select value={formData.cityId} onValueChange={(value) => setFormData({ ...formData, cityId: value })}>
              <SelectTrigger className="h-12 rounded-xl border-slate-200 focus:ring-4 focus:ring-blue-500/10">
                <SelectValue placeholder="Select target city" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city.id} value={city.id}>{city.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-2">
                <Store size={14} /> Node Name
              </Label>
              <Input className="h-12 rounded-xl" placeholder="Barqi Lahore" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-2">
                <Hash size={14} /> Node Code
              </Label>
              <Input className="h-12 rounded-xl font-mono" placeholder="BARQILHR" value={formData.code} onChange={(e) => setFormData({ ...formData, code: e.target.value })} required />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-2">
              <Users size={14} /> Rider Operational Cap
            </Label>
            <Input type="number" className="h-12 rounded-xl" placeholder="50" value={formData.maxActiveRiders} onChange={(e) => setFormData({ ...formData, maxActiveRiders: e.target.value })} required />
          </div>

          <div className="flex gap-4 pt-6">
            <Button type="button" variant="outline" onClick={() => setModalOpen(false)} className="flex-1 h-12 rounded-xl" disabled={formLoading}>Cancel</Button>
            <Button type="submit" className="flex-1 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200" disabled={formLoading}>
              {formLoading ? 'Processing Node...' : (selectedFranchise ? 'Commit Update' : 'Initialize Node')}
            </Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirmTerminate}
        title="Decommission Franchise"
        message={`Warning: You are about to terminate operational node ${selectedFranchise?.name}. This action cannot be undone.`}
        loading={terminateLoading}
      />
    </DashboardLayout>
  );
};

export default Franchises;