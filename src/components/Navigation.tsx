import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import BookingForm from "@/components/BookingForm";
import { Menu, X, Calendar, Phone } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Rooms & Suites", href: "/rooms" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Special Packages", href: "/special-packages" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center shadow-gold">
              <span className="text-primary font-display font-bold text-xl">ML</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-primary">Majestic Lounge</h1>
              <p className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Hotel</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-elegant hover:text-secondary ${
                  isActive(item.href) 
                    ? "text-secondary border-b-2 border-secondary" 
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

         {/* CTA Buttons */}
<div className="hidden md:flex items-center space-x-4">
  <a href="tel:+2348012345678">
    <Button 
      variant="outline" 
      size="sm" 
      className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
    >
      <Phone className="w-4 h-4 mr-2" />
      Call Us
    </Button>
  </a>

  <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
    <DialogTrigger asChild>
      <Button variant="hero" size="sm">
        <Calendar className="w-4 h-4 mr-2" />
        Book Now
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
      <BookingForm />
    </DialogContent>
  </Dialog>
</div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/98 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-elegant ${
                    isActive(item.href)
                      ? "bg-secondary text-secondary-foreground"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
                <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                  <DialogTrigger asChild>
                    <Button variant="hero" size="sm" className="w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <BookingForm />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;