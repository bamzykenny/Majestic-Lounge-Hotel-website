import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import NewsletterForm from "@/components/NewsletterForm";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Wifi,
  Car,
  Utensils,
  Waves,
  Dumbbell,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms & Suites", path: "/rooms" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { icon: Wifi, name: "Free Wi-Fi" },
    { icon: Car, name: "Valet Parking" },
    { icon: Utensils, name: "Fine Dining" },
    { icon: Waves, name: "Spa & Pool" },
    { icon: Dumbbell, name: "Fitness Center" },
    { icon: Sparkles, name: "Concierge" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Hotel Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-secondary mb-4">Majestic Lounge Hotel</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Experience unparalleled luxury and sophistication in the heart of the city. 
                Where every detail is crafted for perfection.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/90">Nigeria</p>
                  <p className="text-primary-foreground/90">Ogun State</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/90">+234 08012345678</p>
                  <p className="text-primary-foreground/70 text-sm">24/7 Reception</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/90">info@Majesticloungehotel.com</p>
                  <p className="text-primary-foreground/70 text-sm">Reservations & Inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/90">Check-in: 9:00 AM</p>
                  <p className="text-primary-foreground/90">Check-out: 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg text-secondary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg text-secondary mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <service.icon className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span className="text-primary-foreground/80">{service.name}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h5 className="font-medium text-secondary mb-2">Special Offers</h5>
              <p className="text-primary-foreground/70 text-sm">
                Subscribe to our newsletter for exclusive deals and luxury packages.
              </p>
              <NewsletterForm className="mt-3" />
            </div>
          </div>

          {/* Awards & Recognition */}
          <div>
            <h4 className="font-semibold text-lg text-secondary mb-4">Ratings</h4>
            <div className="space-y-3">
              <div className="bg-primary-foreground/10 p-3 rounded-lg">
                <p className="text-secondary font-medium">★★★★★</p>
                <p className="text-primary-foreground/90 text-sm">Five Star</p>
              </div>
              <div className="bg-primary-foreground/10 p-3 rounded-lg">
                <p className="text-secondary font-medium">🏆</p>
                <p className="text-primary-foreground/90 text-sm">Premium Customer Service</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-medium text-secondary mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary/20 rounded-full flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-primary-foreground/70 group-hover:text-secondary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} Majestic Lounge Hotel. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-xs mt-1">
              Crafted with excellence for discerning travelers worldwide.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/privacy-policy" className="text-primary-foreground/70 hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/70 hover:text-secondary transition-colors">
              Terms of Service
            </Link>
            <Link to="/cancellation-policy" className="text-primary-foreground/70 hover:text-secondary transition-colors">
              Cancellation Policy
            </Link>
            <Link to="/contact" className="text-primary-foreground/70 hover:text-secondary transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;