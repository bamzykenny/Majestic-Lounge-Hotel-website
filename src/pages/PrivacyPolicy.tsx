import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: [
        "Personal information (name, email, phone number, address)",
        "Booking and reservation details",
        "Payment information (processed securely)",
        "Website usage data and cookies",
        "Communication preferences",
        "Special requests and dietary requirements"
      ]
    },
    {
      title: "How We Use Your Information", 
      icon: Lock,
      content: [
        "Process and manage your reservations",
        "Provide personalized guest services",
        "Send booking confirmations and updates",
        "Improve our services and facilities",
        "Comply with legal requirements",
        "Send promotional offers (with consent)"
      ]
    },
    {
      title: "Information Sharing",
      icon: Shield,
      content: [
        "We never sell your personal information",
        "Share only with trusted service providers",
        "Comply with legal obligations when required",
        "Obtain consent before sharing for marketing",
        "Maintain strict confidentiality agreements",
        "Use secure, encrypted data transmission"
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        "SSL encryption for all data transmission",
        "Regular security audits and updates",
        "Restricted access to personal information",
        "Secure payment processing systems",
        "Regular staff training on data protection",
        "Incident response procedures in place"
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
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Introduction */}
          <Card className="shadow-card animate-on-scroll">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                Our Commitment to Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                At Grand Luxury Hotel, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, 
                make reservations, or use our services.
              </p>
            </CardContent>
          </Card>

          {/* Policy Sections */}
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

          {/* Your Rights */}
          <Card className="shadow-card animate-on-scroll">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                Your Privacy Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                You have the right to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Access your personal data",
                  "Correct inaccurate information",
                  "Delete your personal data",
                  "Object to data processing",
                  "Data portability",
                  "Withdraw consent anytime"
                ].map((right, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
                    <Lock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{right}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-card animate-on-scroll bg-gradient-elegant">
            <CardContent className="p-8 text-center">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Questions About Privacy?</h3>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <p>Email: privacy@grandluxuryhotel.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Luxury Avenue, City, State 12345</p>
              </div>
              <Button variant="hero" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Contact Privacy Team
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;