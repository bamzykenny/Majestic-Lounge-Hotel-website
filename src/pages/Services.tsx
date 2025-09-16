import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import BookingForm from "@/components/BookingForm";
import { 
  Utensils, 
  Waves, 
  Dumbbell, 
  Car, 
  Plane, 
  Shirt,
  Coffee,
  Users,
  Clock,
  Star,
  ArrowRight,
  Phone,
  MapPin,
  Sparkles
} from "lucide-react";
import spaFacilities from "@/assets/spa-facilities.jpg";
import carousel4Spa from "@/assets/carousel-4-spa.jpg";

const Services = () => {
  const mainServices = [
    {
      icon: Utensils,
      title: "Fine Dining Restaurant",
      description: "Experience culinary excellence at our Michelin-starred restaurant featuring contemporary cuisine with local ingredients.",
      highlights: ["Michelin Star Rating", "Chef's Tasting Menu", "Wine Pairing", "Private Dining"],
      hours: "6:00 AM - 11:00 PM",
      location: "Ground Floor",
      image: spaFacilities
    },
    {
      icon: Waves,
      title: "Luxury Spa & Wellness",
      description: "Rejuvenate your body and mind with our comprehensive wellness facilities including treatments, pools, and relaxation areas.",
      highlights: ["Signature Treatments", "Infinity Pool", "Sauna & Steam", "Couples Suites"],
      hours: "6:00 AM - 10:00 PM", 
      location: "5th Floor",
      image: spaFacilities
    },
    {
      icon: Dumbbell,
      title: "State-of-the-Art Fitness Center",
      description: "Maintain your fitness routine with our fully equipped gym featuring the latest equipment and personal training services.",
      highlights: ["Latest Equipment", "Personal Training", "Yoga Classes", "24/7 Access"],
      hours: "24/7 Access",
      location: "4th Floor",
      image: spaFacilities
    }
  ];

  const additionalServices = [
    {
      icon: Car,
      title: "Valet & Transportation",
      description: "Complimentary valet parking and luxury transportation services including airport transfers.",
      features: ["Valet Parking", "Airport Transfers", "City Tours", "Luxury Vehicles"]
    },
    {
      icon: Plane,
      title: "Concierge Services", 
      description: "Our dedicated concierge team assists with reservations, tickets, and personalized recommendations.",
      features: ["Restaurant Reservations", "Event Tickets", "Local Recommendations", "Travel Planning"]
    },
    {
      icon: Shirt,
      title: "Laundry & Dry Cleaning",
      description: "Professional laundry and dry cleaning services with same-day and express options available.",
      features: ["Same-Day Service", "Express Cleaning", "Garment Care", "Shoe Shine"]
    },
    {
      icon: Coffee,
      title: "24/7 Room Service",
      description: "Enjoy gourmet dining in the comfort of your room with our extensive 24-hour room service menu.",
      features: ["24/7 Availability", "Gourmet Menu", "In-Room Dining", "Special Occasions"]
    },
    {
      icon: Users,
      title: "Business Center",
      description: "Fully equipped business facilities with meeting rooms, high-speed internet, and secretarial services.",
      features: ["Meeting Rooms", "High-Speed Internet", "Printing Services", "Video Conferencing"]
    },
    {
      icon: Sparkles,
      title: "Event Services",
      description: "Host memorable events with our comprehensive planning services and elegant venue spaces.",
      features: ["Wedding Planning", "Corporate Events", "Catering Services", "Audio Visual Equipment"]
    }
  ];

  const amenities = [
    "Free High-Speed Wi-Fi",
    "24/7 Front Desk Service", 
    "Multilingual Staff",
    "Currency Exchange",
    "Safe Deposit Boxes",
    "Newspaper Delivery",
    "Wake-up Service",
    "Pet-Friendly Policies",
    "Accessibility Features",
    "Lost & Found Services"
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
   {/* Hero Section */}
<section
  className="relative py-20 bg-gradient-elegant bg-cover bg-center"
  style={{ backgroundImage: `url(${carousel4Spa})` }}
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
      Services & Facilities
    </h1>
    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-white">
      Discover our comprehensive range of luxury services and world-class
      facilities designed to enhance every moment of your stay.
    </p>
  </motion.div>
</section>


      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">Premium Facilities</h2>
            <p className="text-lg text-muted-foreground">Experience luxury at its finest with our signature services</p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-gold transition-elegant">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Service Image */}
                  <div className={`relative h-80 lg:h-96 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                        Premium
                      </Badge>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center mr-4 shadow-gold">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardHeader className="p-0">
                        <CardTitle className="font-display text-2xl font-bold text-primary">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                    {/* Service Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span className="text-muted-foreground">Hours: <span className="font-medium text-foreground">{service.hours}</span></span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span className="text-muted-foreground">Location: <span className="font-medium text-foreground">{service.location}</span></span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-primary mb-3">Highlights</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <Star className="w-3 h-3 text-secondary fill-current" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
<div className="flex flex-col sm:flex-row gap-3">
  {/* Booking Form Trigger */}
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="hero" size="lg" className="flex-1">
        <Phone className="w-4 h-4 mr-2" />
        Make Reservation
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-2xl">
      <BookingForm />
    </DialogContent>
  </Dialog>
                      <Button variant="outline" size="lg" className="flex-1">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground">Comprehensive services to meet all your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-gold transition-elegant group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-elegant shadow-gold">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full mt-4 group-hover:border-secondary group-hover:text-secondary">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">Hotel Amenities</h2>
            <p className="text-lg text-muted-foreground">Essential services available throughout your stay</p>
          </div>

          <div className="bg-gradient-elegant rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-background/50 transition-elegant">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold mb-4">Experience Luxury Service</h2>
          <p className="text-xl mb-8 text-white/90">
            Our dedicated team is available 24/7 to ensure your stay exceeds all expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              <Phone className="w-5 h-5 mr-2" />
              Call Concierge
            </Button>
            <Button variant="luxury" size="xl">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;