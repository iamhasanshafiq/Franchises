import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';
import { UserPlus, Search, ShieldCheck, Mail, Lock, Phone, Store, Loader2, Eye, Trash2 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import TableSkeleton from '../components/common/TableSkeleton';

const BASE_URL = "https://api.barqibazar.org/franchise/api";

const StoreAdmins = () => {
  const navigate = useNavigate();
  const { role } = useAuth();
  const [admins, setAdmins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const [formData, setFormData] = useState({
    storeId: '',
    fullName: '',
    email: '',
    password: '',
    phone: ''
  });

  const apiCall = useCallback(async (endpoint, method = 'GET', data = null) => {
    const token = localStorage.getItem('access_token');
    return axios({
      method,
      url: `${BASE_URL}${endpoint}`,
      headers: { Authorization: `Bearer ${token}` },
      data
    });
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const adminRes = await apiCall('/store-admins?page=1&limit=50');
      setAdmins(adminRes.data?.data?.items || adminRes.data?.data || []);
      const storeRes = await apiCall('/stores?limit=100');
      setStores(storeRes.data?.data?.items || storeRes.data?.data || []);
    } catch (err) {
      toast.error("Failed to load store management data");
    } finally {
      setLoading(false);
    }
  }, [apiCall]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const filteredAdmins = useMemo(() => {
    if (!searchTerm) return admins;

    return admins.filter((admin) => {
      const name = admin.fullName?.toLowerCase() || '';
      const email = admin.email?.toLowerCase() || '';
      const phone = admin.phone?.toLowerCase() || '';
      const store = admin.store?.name?.toLowerCase() || '';

      const search = searchTerm.toLowerCase();

      return (
        name.includes(search) ||
        email.includes(search) ||
        phone.includes(search) ||
        store.includes(search)
      );
    });
  }, [admins, searchTerm]);
  const handleCreate = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      await apiCall('/store-admins', 'POST', formData);
      toast.success("Store Admin credentials generated");
      setModalOpen(false);
      setFormData({ storeId: '', fullName: '', email: '', password: '', phone: '' });
      fetchData();
    } catch (err) {
      toast.error(err.response?.data?.message || "Creation failed");
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <Header title="Store Access Control" subtitle="Manage personnel authorized to oversee local hub operations" />

      <div className="p-6 space-y-6 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
            <Input
              placeholder="Search administrators..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-11 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-orange-500"
            />

          </div>
          <Button onClick={() => setModalOpen(true)} className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 h-11 px-8 rounded-xl shadow-lg shadow-orange-100 transition-all">
            <UserPlus size={18} className="mr-2" /> Add Store Admin
          </Button>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          {loading ? (
            <TableSkeleton rows={6} />
          ) : (
            <DataTable
              data={filteredAdmins}

              columns={[
                {
                  key: 'fullName',
                  label: 'Administrator',
                  render: (val, row) => (
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-700 font-bold uppercase">
                        {val?.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{val}</div>
                        <div className="text-xs text-gray-400">{row.email}</div>
                      </div>
                    </div>
                  )
                },
                {
                  key: 'store',
                  label: 'Assigned Hub',
                  render: (_, row) => (
                    <div className="flex items-center gap-2">
                      <Store size={14} className="text-gray-400" />
                      <span className="text-sm font-medium">{row.store?.name || 'Unassigned'}</span>
                    </div>
                  )
                },
                {
                  key: 'phone',
                  label: 'Contact',
                  render: (val) => <span className="text-xs font-mono">{val}</span>
                },
                {
                  key: 'actions',
                  label: '',
                  render: (_, row) => (
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-600">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-600">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  )
                }
              ]}
            />
          )}
        </div>

      </div>

      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="New Store Administrator" size="lg">
          <form onSubmit={handleCreate} className="space-y-6 py-2">

            <div className="p-4 bg-orange-50/50 rounded-2xl border border-orange-100 space-y-2">
              <Label className="text-[10px] font-bold uppercase text-orange-700 tracking-wider">Target Store Hub</Label>
              <Select
                value={formData.storeId}
                onValueChange={(val) => setFormData({ ...formData, storeId: val })}
              >
                <SelectTrigger className="h-11 bg-white border-orange-200">
                  <SelectValue placeholder="Select store for management" />
                </SelectTrigger>
                <SelectContent>
                  {stores.map(s => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <Label className="text-xs font-semibold text-gray-600">Full Name</Label>
                <div className="relative">
                  <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
                  <Input className="pl-10 h-11" placeholder="e.g. Usman Ali" value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label className="text-xs font-semibold text-gray-600">Official Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
                    <Input className="pl-10 h-11" type="email" placeholder="usman.store@barqi.pk" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs font-semibold text-gray-600">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
                    <Input className="pl-10 h-11" placeholder="03001234567" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} required />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <Label className="text-xs font-semibold text-gray-600">Temporary Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
                  <Input className="pl-10 h-11" type="password" placeholder="••••••••" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} required />
                </div>
                <p className="text-[10px] text-gray-400 italic">User will be prompted to change this on first login.</p>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t">
              <Button type="button" variant="ghost" onClick={() => setModalOpen(false)} className="flex-1 h-12 rounded-xl">Cancel</Button>
              <Button type="submit" disabled={formLoading} className="flex-[2] bg-orange-600 hover:bg-orange-700 text-white rounded-xl h-12 font-bold shadow-lg shadow-orange-100">
                {formLoading ? <Loader2 className="animate-spin mr-2" /> : 'Create Administrator'}
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </DashboardLayout>
  );
};

export default StoreAdmins;