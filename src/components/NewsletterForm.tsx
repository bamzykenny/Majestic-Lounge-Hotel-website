import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Mail, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface NewsletterFormProps {
  trigger?: React.ReactNode;
  className?: string;
}

const NewsletterForm = ({ trigger, className = "" }: NewsletterFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    preferences: [] as string[]
  });
  const [isOpen, setIsOpen] = useState(false);

  const preferences = [
    "Special Offers & Discounts",
    "New Room Types & Upgrades", 
    "Dining & Event Updates",
    "Spa & Wellness Programs",
    "Seasonal Packages"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Welcome to Our Newsletter!",
      description: "Thank you for subscribing. You'll receive our latest offers and updates.",
    });
    
    console.log("Newsletter subscription:", formData);
    setIsOpen(false);
    setFormData({ email: "", name: "", preferences: [] });
  };

  const handlePreferenceChange = (preference: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      preferences: checked 
        ? [...prev.preferences, preference]
        : prev.preferences.filter(p => p !== preference)
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="secondary" size="sm" className={className}>
            <Mail className="w-4 h-4 mr-2" />
            Subscribe Now
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-center">
            Join Our Newsletter
          </DialogTitle>
          <p className="text-center text-muted-foreground">
            Get exclusive offers, luxury packages, and insider updates delivered to your inbox.
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newsletter-name">Full Name</Label>
              <Input
                id="newsletter-name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="newsletter-email">Email Address</Label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-3">
              <Label>What interests you? (Optional)</Label>
              <div className="space-y-2">
                {preferences.map((preference) => (
                  <label key={preference} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-input"
                      checked={formData.preferences.includes(preference)}
                      onChange={(e) => handlePreferenceChange(preference, e.target.checked)}
                    />
                    <span className="text-sm">{preference}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button type="submit" variant="hero" className="flex-1">
              Subscribe Now
            </Button>
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterForm;