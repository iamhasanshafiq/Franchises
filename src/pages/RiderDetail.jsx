import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatusBadge from '../components/common/StatusBadge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ArrowLeft, Plus, Trash2, CheckCircle, XCircle, Upload, Loader2, FileText } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useRiders } from '../hooks/useRiders';
import { useRiderDocs } from '../hooks/useRiderDocs';
import { uploadFiles } from '../utils/fileUpload';

const RiderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFranchiseAdmin, isAdmin } = useAuth();
  const { rider, loading: riderLoading, fetchRider, updateRider, changeStatus } = useRiders();
  const { createDocument, deleteDocument } = useRiderDocs();
  const [activeTab, setActiveTab] = useState('info');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    vehicleType: '',
  });
  const [statusForm, setStatusForm] = useState({
    status: '',
    reason: '',
  });
  const [loading, setLoading] = useState(false);
  const [docLoading, setDocLoading] = useState(false);
  const [docType, setDocType] = useState('CNIC');
  const fileInputRef = useRef(null);

  const documentTypeOptions = [
    'CNIC',
    'DRIVING_LICENSE',
    'VEHICLE_REGISTRATION',
    'INSURANCE',
    'PROFILE_PHOTO',
    'ADDRESS_PROOF',
    'OTHER',
  ];

  const riderStatusOptions = ['APPLIED', 'INTERVIEWED', 'APPROVED', 'ACTIVE', 'SUSPENDED', 'BLOCKED'];

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
        email: data.email || '',
        vehicleType: data.vehicleType || data.vehicle_type || '',
      });
      setStatusForm({
        status: data.status || '',
        reason: '',
      });
    }
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

  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setDocLoading(true);
    try {
      const uploadedFiles = await uploadFiles(files);
      const uploadedFile = uploadedFiles[0];
      
      await createDocument({
        riderId: id,
        documentType: docType,
        documentUrl: uploadedFile.url,
      });
      
      await loadRiderData(id);
    } catch (error) {
      console.error('Error uploading document:', error);
      alert('Failed to upload document. Please try again.');
    } finally {
      setDocLoading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDeleteDocument = async (docId) => {
    if (window.confirm('Are you sure you want to delete this document?')) {
      try {
        await deleteDocument(docId);
        await loadRiderData(id);
      } catch (error) {
        console.error('Error deleting document:', error);
      }
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleString();
  };

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <Label className="text-muted-foreground text-xs">Full Name</Label>
                    <Input 
                      value={formData.fullName} 
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      disabled={!isFranchiseAdmin()} 
                      className="mt-1 font-medium" 
                    />
                  </div>
                  <div>
                    <Label className="text-muted-foreground text-xs">Phone</Label>
                    <Input 
                      value={formData.phone} 
                      disabled 
                      className="mt-1 bg-muted font-medium" 
                    />
                  </div>
                  <div>
                    <Label className="text-muted-foreground text-xs">Email</Label>
                    <Input 
                      value={formData.email || '-'} 
                      disabled 
                      className="mt-1 bg-muted font-medium" 
                    />
                  </div>
                  <div>
                    <Label className="text-muted-foreground text-xs">Vehicle Type</Label>
                    {isFranchiseAdmin() ? (
                      <Select 
                        value={formData.vehicleType}
                        onValueChange={(value) => setFormData({ ...formData, vehicleType: value })}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="BIKE">Bike</SelectItem>
                          <SelectItem value="MOTORBIKE">Motorbike</SelectItem>
                          <SelectItem value="CAR">Car</SelectItem>
                          <SelectItem value="VAN">Van</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input 
                        value={formData.vehicleType} 
                        disabled 
                        className="mt-1 bg-muted font-medium" 
                      />
                    )}
                  </div>
                  <div>
                    <Label className="text-muted-foreground text-xs">Status</Label>
                    <div className="mt-2">
                      <StatusBadge status={rider?.status} />
                    </div>
                  </div>
                  <div>
                    <Label className="text-muted-foreground text-xs">Applied At</Label>
                    <p className="mt-1 font-medium">{formatDate(rider?.appliedAt)}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground text-xs">Approved At</Label>
                    <p className="mt-1 font-medium">{formatDate(rider?.approvedAt)}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground text-xs">Activated At</Label>
                    <p className="mt-1 font-medium">{formatDate(rider?.activatedAt)}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground text-xs">Created At</Label>
                    <p className="mt-1 font-medium">{formatDate(rider?.createdAt)}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground text-xs">Updated At</Label>
                    <p className="mt-1 font-medium">{formatDate(rider?.updatedAt)}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <Label className="text-muted-foreground text-xs">Rider ID</Label>
                    <p className="mt-1 font-mono text-sm bg-muted p-2 rounded inline-block">{rider?.id}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground text-xs">Franchise ID</Label>
                    <p className="mt-1 font-mono text-sm bg-muted p-2 rounded inline-block">{rider?.franchiseId}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground text-xs">City ID</Label>
                    <p className="mt-1 font-mono text-sm bg-muted p-2 rounded inline-block">{rider?.cityId}</p>
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
                    <div className="flex gap-2">
                      <Select value={docType} onValueChange={setDocType}>
                        <SelectTrigger className="w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {documentTypeOptions.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type.replace(/_/g, ' ')}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button size="sm" onClick={triggerFileInput} disabled={docLoading}>
                        {docLoading ? (
                          <>
                            <Loader2 size={16} className="mr-2 animate-spin" /> Uploading...
                          </>
                        ) : (
                          <>
                            <Upload size={16} className="mr-2" /> Add Document
                          </>
                        )}
                      </Button>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                        accept="image/*,.pdf,.doc,.docx"
                        className="hidden"
                      />
                    </div>
                  )}
                </div>
                {rider?.documents && rider.documents.length > 0 ? (
                  <div className="space-y-3">
                    {rider.documents.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText size={20} className="text-primary" />
                          <div>
                            <p className="font-medium">{doc.documentType?.replace(/_/g, ' ')}</p>
                            {doc.documentUrl && (
                              <a href={doc.documentUrl} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">
                                View Document
                              </a>
                            )}
                            <p className="text-xs text-muted-foreground">Created: {formatDate(doc.createdAt)}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {doc.verified ? (
                            <CheckCircle className="text-green-500" size={20} />
                          ) : (
                            <XCircle className="text-yellow-500" size={20} />
                          )}
                          {isFranchiseAdmin() && (
                            <Button size="sm" variant="ghost" onClick={() => handleDeleteDocument(doc.id)}>
                              <Trash2 size={16} className="text-red-500" />
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
                      <Select 
                        value={statusForm.status}
                        onValueChange={(value) => setStatusForm({ ...statusForm, status: value })}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select status..." />
                        </SelectTrigger>
                        <SelectContent>
                          {riderStatusOptions.map((status) => (
                            <SelectItem key={status} value={status}>{status}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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

