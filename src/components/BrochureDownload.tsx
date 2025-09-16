import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, FileText, Mail, User, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BrochureDownloadProps {
  trigger?: React.ReactNode;
}

const BrochureDownload = ({ trigger }: BrochureDownloadProps) => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brochureType: "",
    purpose: ""
  });

  const brochureTypes = [
    { value: "complete", label: "Complete Hotel Brochure (12MB)" },
    { value: "rooms", label: "Rooms & Suites Guide (8MB)" },
    { value: "dining", label: "Dining & Events (4MB)" },
    { value: "spa", label: "Spa & Wellness (6MB)" },
    { value: "packages", label: "Special Packages (5MB)" }
  ];

  const purposes = [
    { value: "personal", label: "Personal Travel Planning" },
    { value: "business", label: "Business Travel" },
    { value: "event", label: "Event Planning" },
    { value: "agent", label: "Travel Agent/Planner" },
    { value: "other", label: "Other" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloading(true);

    // Simulate download process
    setTimeout(() => {
      // Create a mock PDF download
      const link = document.createElement('a');
      link.href = '#'; // In real implementation, this would be the actual PDF URL
      link.download = `GrandLuxuryHotel_${formData.brochureType}_Brochure.pdf`;
      link.click();

      toast({
        title: "Download Started!",
        description: `Your ${brochureTypes.find(t => t.value === formData.brochureType)?.label} is being downloaded.`,
      });

      setIsDownloading(false);
      setIsOpen(false);
      setFormData({ name: "", email: "", phone: "", brochureType: "", purpose: "" });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="luxury" size="xl">
            Download Brochure
            <Download className="w-4 h-4 ml-2" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-center flex items-center justify-center">
            <FileText className="w-6 h-6 mr-2 text-primary" />
            Download Brochure
          </DialogTitle>
          <p className="text-center text-muted-foreground">
            Get our comprehensive brochure with detailed information about our luxury accommodations and amenities.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="brochure-name" className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Full Name
              </Label>
              <Input
                id="brochure-name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="brochure-phone" className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Phone Number
              </Label>
              <Input
                id="brochure-phone"
                type="tel"
                placeholder="Enter your phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="brochure-email" className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Email Address
            </Label>
            <Input
              id="brochure-email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="brochure-type">Select Brochure Type</Label>
            <Select value={formData.brochureType} onValueChange={(value) => handleInputChange("brochureType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Choose which brochure to download" />
              </SelectTrigger>
              <SelectContent>
                {brochureTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="brochure-purpose">Purpose of Request</Label>
            <Select value={formData.purpose} onValueChange={(value) => handleInputChange("purpose", value)}>
              <SelectTrigger>
                <SelectValue placeholder="What will you use this for?" />
              </SelectTrigger>
              <SelectContent>
                {purposes.map((purpose) => (
                  <SelectItem key={purpose.value} value={purpose.value}>
                    {purpose.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            variant="hero" 
            className="w-full" 
            disabled={isDownloading}
          >
            {isDownloading ? (
              <>
                <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Preparing Download...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                Download Now
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By downloading, you agree to receive updates about our luxury hotel services. 
            Your information is secure and will not be shared with third parties.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BrochureDownload;