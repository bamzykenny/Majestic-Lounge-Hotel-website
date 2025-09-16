import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import contactUs from "@/assets/contact-us.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Car,
  Plane,
  MessageSquare,
  Send,
  Star,
  Globe,
  Users
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: ""
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+234 123456789", "+234 814567890"],
      description: "24/7 Reception & Concierge"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["reservations@MajesticLounge.com", "info@MajesticLounge.com"],
      description: "Response within 2 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Nigeria Ogun state"],
      description: "Abeokuta"
    },
    {
      icon: Clock,
      title: "Check-in / Check-out",
      details: ["Check-in: 5:00 AM", "Check-out: 6:00 PM"],
      description: "Flexible timing available"
    }
  ];

  const departments = [
    {
      name: "Reservations",
      phone: "+234 08123456789",
      email: "reservations@MajesticLounge.com",
      hours: "24/7"
    },
    {
      name: "Concierge Services", 
      phone: "+234 08123456780",
      email: "concierge@MajesticLounge.com", 
      hours: "24/7"
    },
    {
      name: "Events & Catering",
      phone: "+234 08123456781",
      email: "events@MajesticLounge.com",
      hours: "9:00 AM - 6:00 PM"
    },
    {
      name: "Spa & Wellness",
      phone: "+234 08123456789", 
      email: "spa@MajesticLounge.com",
      hours: "6:00 AM - 10:00 PM"
    }
  ];

  const inquiryTypes = [
    "General Inquiry",
    "Room Reservation", 
    "Event Planning",
    "Spa Services",
    "Dining Reservations",
    "Transportation",
    "Feedback/Complaint",
    "Partnership Inquiry"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success message
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for contacting us. We'll respond within 2 hours during business hours.",
    });
    
    console.log("Contact form data:", formData);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background pt-20">
{/* Hero Section */}
<section
  className="relative py-20 bg-gradient-elegant"
  style={{
    backgroundImage: `url(${contactUs})`,
    height: "350px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  }}
>
  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <motion.div
    className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="font-display text-5xl font-bold text-primary mb-6 text-white">
      Contact Us
    </h1>
    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-white">
      We're here to assist you with reservations, inquiries, and ensuring your
      experience exceeds expectations. Reach out to our dedicated team anytime.
    </p>
  </motion.div>
</section>


      {/* Contact Information Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-card hover:shadow-gold transition-elegant group text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-elegant shadow-gold">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary text-lg mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-secondary font-medium">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-center">Send Us a Message</CardTitle>
                <p className="text-center text-muted-foreground">We'll get back to you within 2 hours</p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
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
                      <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiry-type" className="text-sm font-medium">Inquiry Type</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">Subject *</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Brief subject line"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="min-h-32"
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="shadow-card">
                <CardContent className="p-0">
                  <div className="h-80 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center rounded-lg">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-secondary mx-auto mb-4" />
                      <h3 className="font-display text-xl font-bold text-primary mb-2">Our Location</h3>
                      <p className="text-muted-foreground mb-4">
                        Located in the heart of the downtown financial district,<br />
                        easily accessible from major airports and attractions.
                      </p>
                      <Button variant="outline">
                        <Globe className="w-4 h-4 mr-2" />
                        Open in Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Transportation Info */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-display text-xl flex items-center">
                    <Car className="w-5 h-5 mr-2" />
                    Getting Here
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Plane className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold">From Airport</h4>
                      <p className="text-sm text-muted-foreground">50 minutes by car, complimentary airport shuttle available</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Car className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold">Parking</h4>
                      <p className="text-sm text-muted-foreground">Complimentary valet parking for all guests</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-primary mb-4">Department Contacts</h2>
            <p className="text-lg text-muted-foreground">Direct contact for specific services and departments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="shadow-card hover:shadow-gold transition-elegant">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center mx-auto mb-4 shadow-gold">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-3">{dept.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-3 h-3 text-secondary" />
                      <span className="text-muted-foreground">{dept.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-3 h-3 text-secondary" />
                      <span className="text-muted-foreground text-xs">{dept.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-3 h-3 text-secondary" />
                      <span className="text-muted-foreground">{dept.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">Quick Answers</h2>
          <p className="text-xl mb-8 text-white/90">
            Find immediate answers to common questions in our comprehensive FAQ section.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <MessageSquare className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h3 className="font-display text-lg font-bold mb-2 text-white">General Questions</h3>
                <p className="text-white/90 text-sm text-white">Policies, amenities, and services</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <Star className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h3 className="font-display text-lg font-bold mb-2 text-white">Reservations</h3>
                <p className="text-white/90 text-sm">Booking, modifications, and cancellations</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h3 className="font-display text-lg font-bold mb-2 text-white">Events & Groups</h3>
                <p className="text-white/90 text-sm">Meetings, weddings, and special events</p>
              </CardContent>
            </Card>
          </div>
        <Link to="/faqs">
  <Button variant="luxury" size="lg" className="mt-8">
    View All FAQs
  </Button>
</Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;