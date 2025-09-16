import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { XCircle, Clock, DollarSign, Calendar, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CancellationPolicy = () => {
  const cancellationTiers = [
    {
      title: "Free Cancellation",
      period: "24+ hours before check-in",
      fee: "No charge",
      color: "bg-success text-success-foreground",
      icon: "✓",
      details: [
        "Full refund of all charges",
        "No cancellation fees",
        "Instant processing",
        "Email confirmation sent"
      ]
    },
    {
      title: "Standard Cancellation", 
      period: "12-24 hours before check-in",
      fee: "One night's room rate",
      color: "bg-secondary text-secondary-foreground",
      icon: "!",
      details: [
        "Charged one night's accommodation",
        "Taxes and fees still apply",
        "Processing within 5-7 business days",
        "Partial refund available"
      ]
    },
    {
      title: "Late Cancellation",
      period: "Less than 12 hours before check-in",
      fee: "Full stay charges",
      color: "bg-destructive text-destructive-foreground", 
      icon: "✕",
      details: [
        "Full booking amount charged",
        "No refund available",
        "All taxes and fees apply",
        "Future credit may be offered"
      ]
    }
  ];

  const specialPolicies = [
    {
      title: "Holiday Periods",
      description: "Special cancellation terms apply during peak seasons and holidays",
      details: ["48-hour free cancellation", "72-hour notice for groups", "No-show charges apply"]
    },
    {
      title: "Group Bookings",
      description: "Different terms apply for reservations of 5+ rooms",
      details: ["14-day free cancellation", "Deposit may be required", "Contract terms apply"]
    },
    {
      title: "Special Packages",
      description: "Promotional rates may have different cancellation terms",
      details: ["Package-specific policies", "Non-refundable rates available", "Check booking details"]
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
              <XCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl font-bold text-primary mb-4">Cancellation & Refund Policy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understand our flexible cancellation terms designed to accommodate your travel needs while ensuring fair business practices.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Policy effective: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Cancellation Tiers */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-primary mb-4">Cancellation Timeline</h2>
            <p className="text-muted-foreground">
              Your cancellation charges depend on when you cancel your reservation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cancellationTiers.map((tier, index) => (
              <Card key={index} className="shadow-card hover:shadow-gold transition-elegant animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-2xl font-bold mb-4" style={{backgroundColor: tier.color.includes('success') ? 'hsl(var(--success))' : tier.color.includes('secondary') ? 'hsl(var(--secondary))' : 'hsl(var(--destructive))'}}>
                    <span className="text-white">{tier.icon}</span>
                  </div>
                  <CardTitle className="text-xl">{tier.title}</CardTitle>
                  <Badge variant="outline" className="text-sm">
                    <Clock className="w-3 h-3 mr-1" />
                    {tier.period}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-2xl font-bold text-primary flex items-center justify-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    {tier.fee}
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Policies */}
      <section className="py-16 bg-accent/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-primary mb-4">Special Circumstances</h2>
            <p className="text-muted-foreground">
              Different cancellation terms may apply in certain situations
            </p>
          </div>

          <div className="space-y-6">
            {specialPolicies.map((policy, index) => (
              <Card key={index} className="shadow-card animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    {policy.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{policy.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {policy.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Process */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-card animate-on-scroll">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-3">
                <DollarSign className="w-6 h-6 text-primary" />
                Refund Processing Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Processing Timeline</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Credit card refunds: 5-10 business days</li>
                    <li>• Debit card refunds: 3-7 business days</li>
                    <li>• Bank transfers: 7-14 business days</li>
                    <li>• Third-party bookings: Up to 30 days</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Required Information</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Booking confirmation number</li>
                    <li>• Original payment method details</li>
                    <li>• Reason for cancellation</li>
                    <li>• Valid identification</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-accent/50 rounded-lg p-6 text-center">
                <p className="text-muted-foreground mb-4">
                  <strong>Important Note:</strong> Refunds are processed to the original payment method used for the booking. 
                  Processing times may vary depending on your bank or card issuer.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold mb-4">Need Help with Your Cancellation?</h2>
          <p className="text-xl mb-8 text-white/90">
            Our reservations team is available 24/7 to assist with cancellations and answer policy questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              <Phone className="w-5 h-5 mr-2" />
              Call Reservations
            </Button>
            <Button variant="luxury" size="xl">
              Cancel Online
              <XCircle className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="mt-8 space-y-2 text-sm text-white/80">
            <p>Phone: +1 (555) 123-4567</p>
            <p>Email: reservations@grandluxuryhotel.com</p>
            <p>Available 24 hours a day, 7 days a week</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CancellationPolicy;