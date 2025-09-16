import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookingFormProps {
  preselectedRoom?: string;
  className?: string;
}

const BookingForm = ({ preselectedRoom, className = "" }: BookingFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "",
    roomType: preselectedRoom || "",
    name: "",
    email: "",
    phone: "",
    requests: ""
  });

  const roomTypes = [
    "Standard Room",
    "Garden View Suite", 
    "Junior Suite",
    "Deluxe Suite",
    "Executive Suite",
    "Family Suite",
    "Premium Suite",
    "Penthouse Suite",
    "Royal Suite",
    "Presidential Suite"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Since this requires backend functionality, show info about Supabase integration
    toast({
      title: "Booking Request Submitted",
      description: "We've received your booking request. Our team will contact you within 24 hours to confirm your reservation.",
    });
    
    console.log("Booking form data:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Card className={`shadow-card ${className}`}>
      <CardHeader className="bg-gradient-elegant">
        <CardTitle className="font-display text-2xl text-center">Reserve Your Stay</CardTitle>
        <p className="text-center text-muted-foreground">Experience luxury at Grand Luxury Hotel</p>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Dates and Guests */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="checkin" className="text-sm font-medium">Check-in Date</Label>
              <div className="relative">
                <Input
                  id="checkin"
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => handleInputChange("checkIn", e.target.value)}
                  className="pl-10"
                  required
                />
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="checkout" className="text-sm font-medium">Check-out Date</Label>
              <div className="relative">
                <Input
                  id="checkout"
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => handleInputChange("checkOut", e.target.value)}
                  className="pl-10"
                  required
                />
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests" className="text-sm font-medium">Guests</Label>
              <div className="relative">
                <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5+">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Room Type */}
          <div className="space-y-2">
            <Label htmlFor="room-type" className="text-sm font-medium">Room Type</Label>
            <div className="relative">
              <Select value={formData.roomType} onValueChange={(value) => handleInputChange("roomType", value)}>
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="Select room type" />
                </SelectTrigger>
                <SelectContent>
                  {roomTypes.map((room) => (
                    <SelectItem key={room} value={room}>{room}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Guest Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requests" className="text-sm font-medium">Special Requests (Optional)</Label>
            <Input
              id="requests"
              placeholder="Any special requests or requirements?"
              value={formData.requests}
              onChange={(e) => handleInputChange("requests", e.target.value)}
            />
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full">
            Submit Booking Request
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our terms and conditions. We'll contact you within 24 hours to confirm your reservation.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;