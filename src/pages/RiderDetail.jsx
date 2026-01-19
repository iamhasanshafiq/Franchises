import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatusBadge from '../components/common/StatusBadge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ArrowLeft, Plus, Trash2, CheckCircle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { toast } from '../hooks/use-toast';

const RiderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFranchiseAdmin } = useAuth();
  const [rider] = useState({ id, full_name: 'Ali Khan', phone: '03001234567', vehicle_type: 'Motorcycle', status: 'ACTIVE' });
  const [documents] = useState([
    { id: 1, type: 'CNIC_FRONT', url: 'https://example.com/doc1.jpg', verified: true },
    { id: 2, type: 'LICENSE_FRONT', url: 'https://example.com/doc2.jpg', verified: false },
  ]);

  return (
    <DashboardLayout>
      <Header title="Rider Details" subtitle={rider.full_name} />
      <div className="p-6">
        <Button variant="ghost" onClick={() => navigate('/riders')} className="mb-4">
          <ArrowLeft size={18} className="mr-2" /> Back to Riders
        </Button>

        <Tabs defaultValue="info" className="space-y-6">
          <TabsList>
            <TabsTrigger value="info">Basic Info</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="info">
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><Label>Full Name</Label><Input value={rider.full_name} disabled={!isFranchiseAdmin()} className="mt-1" /></div>
                <div><Label>Phone</Label><Input value={rider.phone} disabled={!isFranchiseAdmin()} className="mt-1" /></div>
                <div><Label>Vehicle Type</Label><Input value={rider.vehicle_type} disabled={!isFranchiseAdmin()} className="mt-1" /></div>
                <div><Label>Status</Label><div className="mt-2"><StatusBadge status={rider.status} /></div></div>
              </div>
              {isFranchiseAdmin() && <Button className="mt-6" onClick={() => toast({ title: 'Rider updated' })}>Save Changes</Button>}
            </div>
          </TabsContent>

          <TabsContent value="documents">
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Documents</h3>
                {isFranchiseAdmin() && <Button size="sm"><Plus size={16} className="mr-2" /> Add Document</Button>}
              </div>
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium">{doc.type.replace(/_/g, ' ')}</p>
                      <a href={doc.url} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">View Document</a>
                    </div>
                    <div className="flex items-center gap-2">
                      {doc.verified ? <CheckCircle className="text-success" size={20} /> : <StatusBadge status="Pending" variant="warning" />}
                      {isFranchiseAdmin() && <Button size="sm" variant="ghost"><Trash2 size={16} /></Button>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default RiderDetail;
