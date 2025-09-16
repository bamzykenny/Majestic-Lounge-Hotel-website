import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, AlertTriangle, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  const sections = [
    {
      title: "Booking and Reservations",
      icon: FileText,
      content: [
        "All reservations are subject to availability and confirmation",
        "A valid credit card is required to guarantee your reservation", 
        "Room rates are subject to change without notice",
        "Special requests cannot be guaranteed but will be accommodated when possible",
        "Check-in time is 3:00 PM, check-out time is 11:00 AM",
        "Early check-in and late check-out may incur additional charges"
      ]
    },
    {
      title: "Payment Terms",
      icon: Scale,
      content: [
        "Payment in full is required at time of check-in",
        "We accept major credit cards and debit cards",
        "All rates are quoted in USD and include applicable taxes",
        "Incidental charges will be authorized on your credit card",
        "City taxes and resort fees may apply additionally",
        "Currency exchange rates may vary for international payments"
      ]
    },
    {
      title: "Hotel Policies",
      icon: AlertTriangle,
      content: [
        "Smoking is prohibited in all guest rooms and public areas",
        "Pets are welcome with prior arrangement (fees may apply)",
        "Maximum occupancy limits must be respected",
        "Noise levels must be kept reasonable after 10:00 PM",
        "Damage to hotel property will result in additional charges",
        "Lost key cards will incur a replacement fee"
      ]
    },
    {
      title: "Liability and Safety",
      icon: Scale,
      content: [
        "The hotel is not responsible for lost or stolen personal items",
        "Guests use hotel facilities at their own risk",
        "Swimming pool and spa facilities have specific operating hours",
        "Children must be supervised by adults at all times",
        "Emergency procedures are posted in each guest room",
        "Security cameras operate in public areas for guest safety"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-elegant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl font-bold text-primary mb-4">Terms & Conditions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read these terms and conditions carefully before making a reservation or using our services.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Effective date: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Introduction */}
          <Card className="shadow-card animate-on-scroll">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Scale className="w-5 h-5 text-primary" />
                Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                By making a reservation or using the services of Grand Luxury Hotel, you agree to comply with and be bound by 
                these terms and conditions. If you do not agree to these terms, please do not use our services. We reserve the 
                right to modify these terms at any time, and such modifications will be effective immediately upon posting.
              </p>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          {sections.map((section, index) => (
            <Card key={index} className="shadow-card animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <section.icon className="w-5 h-5 text-primary" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          {/* Modification and Termination */}
          <Card className="shadow-card animate-on-scroll">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-primary" />
                Modifications and Termination
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Reservation Changes</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Changes subject to availability</li>
                    <li>• Modification fees may apply</li>
                    <li>• Rate differences will be charged</li>
                    <li>• 24-hour notice required for changes</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Service Termination</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Violation of policies may result in termination</li>
                    <li>• No refund for terminated services</li>
                    <li>• Legal action may be pursued</li>
                    <li>• Appeal process available</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact for Legal Matters */}
          <Card className="shadow-card animate-on-scroll bg-gradient-elegant">
            <CardContent className="p-8 text-center">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Legal Questions or Concerns?</h3>
              <p className="text-muted-foreground mb-6">
                For any legal questions regarding these terms and conditions, please contact our legal department:
              </p>
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <p>Email: legal@grandluxuryhotel.com</p>
                <p>Phone: +1 (555) 123-4567 ext. 100</p>
                <p>Business Hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
              </div>
              <Button variant="hero" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Contact Legal Team
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Terms;