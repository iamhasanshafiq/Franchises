import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatusBadge from '../components/common/StatusBadge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ArrowLeft, Plus, Trash2, CheckCircle, XCircle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useRiders } from '../hooks/useRiders';
import { useRiderDocs } from '../hooks/useRiderDocs';

const RiderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFranchiseAdmin, isAdmin } = useAuth();
  const { rider, loading: riderLoading, fetchRider, updateRider, changeStatus } = useRiders();
  const { documents, fetchDocumentsByRider, deleteDocument } = useRiderDocs();
  const [activeTab, setActiveTab] = useState('info');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    vehicleType: '',
  });
  const [statusForm, setStatusForm] = useState({
    status: '',
    reason: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      loadRiderData(id);
    }
  }, [id]);

  const loadRiderData = async (riderId) => {
    const data = await fetchRider(riderId);
    if (data) {
      setFormData({
        fullName: data.fullName || data.full_name || '',
        phone: data.phone || '',
        vehicleType: data.vehicleType || data.vehicle_type || '',
      });
      setStatusForm({
        status: data.status || '',
        reason: '',
      });
    }
    await fetchDocumentsByRider(riderId);
  };

  const handleSaveProfile = async () => {
    setLoading(true);
    try {
      await updateRider(id, {
        fullName: formData.fullName,
        vehicleType: formData.vehicleType,
      });
    } catch (error) {
      console.error('Error updating rider:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeStatus = async () => {
    if (!statusForm.status) return;
    setLoading(true);
    try {
      await changeStatus(id, statusForm.status, statusForm.reason);
      await loadRiderData(id);
    } catch (error) {
      console.error('Error changing status:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteDocument = async (docId) => {
    if (window.confirm('Are you sure you want to delete this document?')) {
      try {
        await deleteDocument(docId);
        await fetchDocumentsByRider(id);
      } catch (error) {
        console.error('Error deleting document:', error);
      }
    }
  };

  const riderStatusOptions = ['APPLIED', 'INTERVIEWED', 'APPROVED', 'ACTIVE', 'SUSPENDED', 'BLOCKED'];

  return (
    <DashboardLayout>
      <Header title="Rider Details" subtitle={formData.fullName || 'Loading...'} />
      <div className="p-6">
        <Button variant="ghost" onClick={() => navigate('/riders')} className="mb-4">
          <ArrowLeft size={18} className="mr-2" /> Back to Riders
        </Button>

        {riderLoading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList>
              <TabsTrigger value="info">Basic Info</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              {(isFranchiseAdmin() || isAdmin()) && <TabsTrigger value="status">Change Status</TabsTrigger>}
            </TabsList>

            <TabsContent value="info">
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Full Name</Label>
                    <Input 
                      value={formData.fullName} 
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      disabled={!isFranchiseAdmin()} 
                      className="mt-1" 
                    />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input 
                      value={formData.phone} 
                      disabled 
                      className="mt-1 bg-muted" 
                    />
                  </div>
                  <div>
                    <Label>Vehicle Type</Label>
                    <Input 
                      value={formData.vehicleType} 
                      onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                      disabled={!isFranchiseAdmin()} 
                      className="mt-1" 
                    />
                  </div>
                  <div>
                    <Label>Status</Label>
                    <div className="mt-2">
                      <StatusBadge status={rider?.status} />
                    </div>
                  </div>
                </div>
                {isFranchiseAdmin() && (
                  <Button className="mt-6" onClick={handleSaveProfile} disabled={loading}>
                    {loading ? 'Saving...' : 'Save Changes'}
                  </Button>
                )}
              </div>
            </TabsContent>

            <TabsContent value="documents">
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Documents</h3>
                  {isFranchiseAdmin() && (
                    <Button size="sm" onClick={() => alert('Document upload functionality')}>
                      <Plus size={16} className="mr-2" /> Add Document
                    </Button>
                  )}
                </div>
                {documents.length > 0 ? (
                  <div className="space-y-3">
                    {documents.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">{doc.documentType?.replace(/_/g, ' ') || doc.type?.replace(/_/g, ' ')}</p>
                          {doc.documentUrl && (
                            <a href={doc.documentUrl} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">
                              View Document
                            </a>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {doc.verified ? (
                            <CheckCircle className="text-green-500" size={20} />
                          ) : (
                            <XCircle className="text-yellow-500" size={20} />
                          )}
                          {isFranchiseAdmin() && (
                            <Button size="sm" variant="ghost" onClick={() => handleDeleteDocument(doc.id)}>
                              <Trash2 size={16} />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-4">No documents found</p>
                )}
              </div>
            </TabsContent>

            {(isFranchiseAdmin() || isAdmin()) && (
              <TabsContent value="status">
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-semibold mb-4">Change Rider Status</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label>New Status</Label>
                      <select 
                        value={statusForm.status}
                        onChange={(e) => setStatusForm({ ...statusForm, status: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
                      >
                        <option value="">Select status...</option>
                        {riderStatusOptions.map((status) => (
                          <option key={status} value={status}>{status}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label>Reason (optional)</Label>
                      <Input 
                        value={statusForm.reason}
                        onChange={(e) => setStatusForm({ ...statusForm, reason: e.target.value })}
                        placeholder="Reason for status change"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <Button className="mt-6" onClick={handleChangeStatus} disabled={loading || !statusForm.status}>
                    {loading ? 'Updating...' : 'Update Status'}
                  </Button>
                </div>
              </TabsContent>
            )}
          </Tabs>
        )}
      </div>
    </DashboardLayout>
  );
};

export default RiderDetail;
