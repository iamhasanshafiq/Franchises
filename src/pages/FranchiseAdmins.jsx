import { useState } from 'react';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Plus, Trash2 } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const FranchiseAdmins = () => {
  const [admins] = useState([
    { id: 1, email: 'admin1@gmail.com', franchise: 'Lahore Central', created_at: '2024-01-20' },
    { id: 2, email: 'admin2@gmail.com', franchise: 'Karachi South', created_at: '2024-02-15' },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const columns = [
    { key: 'email', label: 'Email' },
    { key: 'franchise', label: 'Franchise' },
    { key: 'created_at', label: 'Created', render: (val) => new Date(val).toLocaleDateString() },
    { key: 'actions', label: 'Actions', render: () => <Button size="sm" variant="ghost"><Trash2 size={16} /></Button> },
  ];

  return (
    <DashboardLayout>
      <Header title="Franchise Admins" subtitle="Manage franchise administrators" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">All Admins</h2>
          <Button onClick={() => setModalOpen(true)}><Plus size={18} className="mr-2" /> Add Admin</Button>
        </div>
        <DataTable columns={columns} data={admins} emptyMessage="No admins found" />
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Add Franchise Admin">
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast({ title: 'Admin created' }); setModalOpen(false); }}>
          <div><Label>Email</Label><Input type="email" required /></div>
          <div><Label>Password</Label><Input type="password" required /></div>
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setModalOpen(false)} className="flex-1">Cancel</Button>
            <Button type="submit" className="flex-1">Create</Button>
          </div>
        </form>
      </Modal>
    </DashboardLayout>
  );
};

export default FranchiseAdmins;
