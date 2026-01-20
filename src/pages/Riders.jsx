
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import StatusBadge from '../components/common/StatusBadge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Plus, Eye, Edit, Upload, FileText, X, Loader2 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useRiders } from '../hooks/useRiders';
import { useFranchises } from '../hooks/useFranchises';
import { useCities } from '../hooks/useCities';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { uploadFiles } from '../utils/fileUpload';

const Riders = () => {
  const { isAdmin, isFranchiseAdmin } = useAuth();
  const navigate = useNavigate();
  const { riders, loading, pagination, fetchRiders, createRider } = useRiders();
  const { franchises, myFranchise, fetchFranchises, fetchMyFranchise } = useFranchises();
  const { cities, fetchCities } = useCities();
  const [modalOpen, setModalOpen] = useState(false);
  const [documentsModalOpen, setDocumentsModalOpen] = useState(false);
  const [selectedRider, setSelectedRider] = useState(null);
  const [formData, setFormData] = useState({ 
    fullName: '', 
    phone: '', 
    vehicleType: 'BIKE',
    franchiseId: '',
    cityId: '' 
  });
  const [documentForm, setDocumentForm] = useState({
    documentType: 'CNIC',
  });
  const [riderDocuments, setRiderDocuments] = useState([]);
  const [formLoading, setFormLoading] = useState(false);
  const [docLoading, setDocLoading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchRiders(pagination.page, pagination.limit);
    if (isAdmin()) {
      fetchCities(1, 100);
      fetchFranchises(1, 100);
    } else if (isFranchiseAdmin()) {
      fetchMyFranchise();
    }
  }, [fetchRiders, pagination.page, pagination.limit, isAdmin, isFranchiseAdmin, fetchCities, fetchFranchises, fetchMyFranchise]);

  // Auto-fill form data when myFranchise is loaded
  useEffect(() => {
    if (isFranchiseAdmin() && myFranchise) {
      setFormData(prev => ({
        ...prev,
        franchiseId: myFranchise.id,
        cityId: myFranchise.cityId,
      }));
    }
  }, [isFranchiseAdmin, myFranchise]);

  const columns = [
    { key: 'fullName', label: 'Name', render: (_, row) => row.fullName || row.full_name || '-' },
    { key: 'phone', label: 'Phone' },
    { key: 'vehicleType', label: 'Vehicle', render: (_, row) => row.vehicleType || row.vehicle_type || '-' },
    { key: 'status', label: 'Status', render: (val) => <StatusBadge status={val} /> },
    { key: 'createdAt', label: 'Created', render: (val) => val ? new Date(val).toLocaleDateString() : '-' },
    { key: 'actions', label: 'Actions', render: (_, row) => (
      <div className="flex gap-2">
        <Button size="sm" variant="ghost" onClick={() => navigate(`/riders/${row.id}`)}>
          <Eye size={16} />
        </Button>
        {isAdmin() && (
          <>
            <Button size="sm" variant="ghost" onClick={() => handleOpenDocuments(row)}>
              <FileText size={16} />
            </Button>
            <Button size="sm" variant="ghost" onClick={() => navigate(`/riders/${row.id}/edit`)}>
              <Edit size={16} />
            </Button>
          </>
        )}
      </div>
    )},
  ];

  const handlePageChange = (newPage) => {
    fetchRiders(newPage, pagination.limit);
  };

  const handleOpenDocuments = (rider) => {
    setSelectedRider(rider);
    setRiderDocuments(rider.documents || []);
    setDocumentsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      await createRider({
        fullName: formData.fullName,
        phone: formData.phone,
        vehicleType: formData.vehicleType,
        franchiseId: formData.franchiseId,
        cityId: formData.cityId,
        documents: riderDocuments,
      });
      setModalOpen(false);
      setFormData({ fullName: '', phone: '', vehicleType: 'BIKE', franchiseId: '', cityId: '' });
      setRiderDocuments([]);
    } catch (error) {
      console.error('Error creating rider:', error);
    } finally {
      setFormLoading(false);
    }
  };


  const handleRemoveDocument = (docId) => {
    setRiderDocuments(riderDocuments.filter(doc => doc.id !== docId));
  };

  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setDocLoading(true);
    try {
      const uploadedFiles = await uploadFiles(files);
      
      // Add each uploaded file to documents list with default type
      const newDocs = uploadedFiles.map((file) => ({
        id: file.id,
        documentType: documentForm.documentType,
        documentUrl: file.url,
        originalName: file.originalName,
      }));
      
      setRiderDocuments([...riderDocuments, ...newDocs]);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file. Please try again.');
    } finally {
      setDocLoading(false);
      // Reset file input
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

  const documentTypeOptions = [
    'CNIC',
    'DRIVING_LICENSE',
    'VEHICLE_REGISTRATION',
    'INSURANCE',
    'PROFILE_PHOTO',
    'ADDRESS_PROOF',
    'OTHER',
  ];

  return (
    <DashboardLayout>
      <Header title="Riders" subtitle="Manage delivery riders" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">All Riders</h2>
          {isFranchiseAdmin() && (
            <Button onClick={() => setModalOpen(true)}>
              <Plus size={18} className="mr-2" /> Add Rider
            </Button>
          )}
        </div>
        <DataTable 
          columns={columns} 
          data={riders} 
          loading={loading} 
          emptyMessage="No riders found"
          pagination={{
            page: pagination.page,
            totalPages: pagination.totalPages,
            hasNext: pagination.hasNext,
            hasPrev: pagination.hasPrev,
            onPageChange: handlePageChange
          }}
        />
        
        {riders.length > 0 && (
          <div className="text-sm text-muted-foreground text-center mt-4">
            Showing {riders.length} of {pagination.total} riders
          </div>
        )}
      </div>

      {/* Add Rider Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Add Rider" size="lg">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Franchise Admin: Show dedicated sections (read-only) */}
          {isFranchiseAdmin() && myFranchise ? (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Franchise</Label>
                <div className="p-3 bg-muted rounded-md">
                  <p className="font-medium">{myFranchise.name}</p>
                  <p className="text-xs text-muted-foreground">{myFranchise.code}</p>
                </div>
              </div>
              <div>
                <Label>City</Label>
                <div className="p-3 bg-muted rounded-md">
                  <p className="font-medium">{myFranchise.city?.name || '-'}</p>
                </div>
              </div>
            </div>
          ) : (
            /* Admin: Show dropdowns for selection */
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Franchise</Label>
                <Select 
                  value={formData.franchiseId} 
                  onValueChange={(value) => setFormData({ ...formData, franchiseId: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select franchise" />
                  </SelectTrigger>
                  <SelectContent>
                    {franchises.map((franchise) => (
                      <SelectItem key={franchise.id} value={franchise.id}>
                        {franchise.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>City</Label>
                <Select 
                  value={formData.cityId} 
                  onValueChange={(value) => setFormData({ ...formData, cityId: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
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
            </div>
          )}
          
          <div>
            <Label>Full Name</Label>
            <Input 
              value={formData.fullName} 
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} 
              placeholder="Enter full name"
              required 
            />
          </div>
          
          <div>
            <Label>Phone</Label>
            <Input 
              value={formData.phone} 
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
              placeholder="+923001234567"
              required 
            />
          </div>
          
          <div>
            <Label>Vehicle Type</Label>
            <Select 
              value={formData.vehicleType}
              onValueChange={(value) => setFormData({ ...formData, vehicleType: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BIKE">Bike</SelectItem>
                <SelectItem value="MOTORBIKE">Motorbike</SelectItem>
                <SelectItem value="CAR">Car</SelectItem>
                <SelectItem value="VAN">Van</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Documents Section */}
          <div className="border-t pt-4 mt-4">
            <Label className="mb-2 block">Documents (Optional)</Label>
            
            {riderDocuments.length > 0 && (
              <div className="space-y-2 mb-4">
                {riderDocuments.map((doc, index) => (
                  <div key={doc.id || index} className="flex items-center justify-between p-2 bg-muted rounded">
                    <div className="flex items-center gap-2">
                      <FileText size={14} className="text-primary" />
                      <span className="text-sm">{doc.documentType?.replace(/_/g, ' ')}</span>
                      <span className="text-xs text-muted-foreground">({doc.originalName})</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => handleRemoveDocument(doc.id)}
                    >
                      <X size={14} />
                    </Button>
                  </div>
                ))}
              </div>
            )}
            
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept="image/*,.pdf,.doc,.docx"
              multiple
              className="hidden"
            />
            
            <div className="flex gap-2">
              <Select 
                value={documentForm.documentType}
                onValueChange={(value) => setDocumentForm({ ...documentForm, documentType: value })}
              >
                <SelectTrigger className="w-40">
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
              <Button 
                type="button" 
                variant="outline" 
                onClick={triggerFileInput}
                disabled={docLoading}
                className="flex-1"
              >
                {docLoading ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" /> Uploading...
                  </>
                ) : (
                  <>
                    <Upload size={16} className="mr-2" /> Choose File
                  </>
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Supported formats: Images, PDF, DOC, DOCX
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setModalOpen(false)} className="flex-1" disabled={formLoading}>Cancel</Button>
            <Button type="submit" className="flex-1" disabled={formLoading}>
              {formLoading ? 'Please wait...' : 'Create Rider'}
            </Button>
          </div>
        </form>
      </Modal>

      {/* View Documents Modal */}
      <Modal isOpen={documentsModalOpen} onClose={() => setDocumentsModalOpen(false)} title={`Documents - ${selectedRider?.fullName || ''}`} size="lg">
        <div className="space-y-4">
          {riderDocuments.length > 0 ? (
            <div className="space-y-3">
              {riderDocuments.map((doc, index) => (
                <div key={doc.id || index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText size={20} className="text-primary" />
                    <div>
                      <p className="font-medium">{doc.documentType?.replace(/_/g, ' ')}</p>
                      {doc.documentUrl && (
                        <a href={doc.documentUrl} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">
                          View Document
                        </a>
                      )}
                    </div>
                  </div>
                  {doc.verified && (
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">Verified</span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">No documents uploaded</p>
          )}
          
          <div className="flex justify-end pt-4">
            <Button variant="outline" onClick={() => setDocumentsModalOpen(false)}>Close</Button>
          </div>
        </div>
      </Modal>
    </DashboardLayout>
  );
};

export default Riders;
