import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { 
  Star, 
  Calendar, 
  Users, 
  Wine, 
  Sparkles, 
  Heart, 
  Briefcase,
  Gift,
  Crown,
  Plane
} from "lucide-react";
import BookingForm from "@/components/BookingForm";
import deluxeSuite from "@/assets/deluxe-suite.jpg";
import executiveSuite from "@/assets/executive-suite.jpg";
import familySuite from "@/assets/family-suite.jpg";
import gardenSuite from "@/assets/garden-suite.jpg";
import juniorSuite from "@/assets/junior-suite.jpg";
import penthouseSuite from "@/assets/penthouse-suite.jpg";
import royalSuite from "@/assets/royal-suite.jpg";
import standardRoom from "@/assets/standard-room.jpg";

const SpecialPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const packages = [
    {
      id: "romantic-getaway",
      title: "Romantic Getaway Package",
      subtitle: "Perfect for couples seeking luxury and romance",
      price: "$899",
      originalPrice: "$1,299",
      duration: "2 nights",
      guests: "2 guests",
      image: deluxeSuite,
      icon: Heart,
      badge: "Most Popular",
      badgeColor: "bg-red-500",
      features: [
        "Deluxe Suite with city views",
        "Couples spa treatment",
        "Private candlelit dinner",
        "Champagne & chocolate welcome",
        "Rose petal turndown service",
        "Late checkout until 2 PM"
      ],
      roomType: "Deluxe Suite"
    },
    {
      id: "business-excellence",
      title: "Business Excellence Package",
      subtitle: "Premium accommodations for business travelers",
      price: "$749",
      originalPrice: "$999",
      duration: "3 nights",
      guests: "1-2 guests",
      image: executiveSuite,
      icon: Briefcase,
      badge: "Best Value",
      badgeColor: "bg-blue-500",
      features: [
        "Executive Suite with work area",
        "Airport transfer service",
        "Business center access",
        "Express laundry service",
        "Executive lounge access",
        "Meeting room credit ($200)"
      ],
      roomType: "Executive Suite"
    },
    {
      id: "family-fun",
      title: "Family Fun Package",
      subtitle: "Create unforgettable memories with your family",
      price: "$1,199",
      originalPrice: "$1,599",
      duration: "4 nights",
      guests: "4-6 guests",
      image: familySuite,
      icon: Users,
      badge: "Family Favorite",
      badgeColor: "bg-green-500",
      features: [
        "Family Suite with connecting rooms",
        "Kids welcome amenities",
        "Family pool access",
        "Children's activity program",
        "Family dining packages",
        "Babysitting service credit"
      ],
      roomType: "Family Suite"
    },
    {
      id: "wellness-retreat",
      title: "Wellness Retreat Package",
      subtitle: "Rejuvenate your mind, body, and soul",
      price: "$659",
      originalPrice: "$899",
      duration: "3 nights",
      guests: "1-2 guests",
      image: gardenSuite,
      icon: Sparkles,
      badge: "New",
      badgeColor: "bg-purple-500",
      features: [
        "Garden View Suite",
        "Daily spa treatments",
        "Yoga & meditation sessions",
        "Healthy gourmet meals",
        "Fitness center access",
        "Wellness consultation"
      ],
      roomType: "Garden View Suite"
    },
    {
      id: "luxury-escape",
      title: "Ultimate Luxury Escape",
      subtitle: "Experience the pinnacle of luxury hospitality",
      price: "$2,499",
      originalPrice: "$3,299",
      duration: "5 nights",
      guests: "2-4 guests",
      image: penthouseSuite,
      icon: Crown,
      badge: "Exclusive",
      badgeColor: "bg-gold",
      features: [
        "Penthouse Suite with terrace",
        "Butler service",
        "Private chef experience",
        "Helicopter city tour",
        "VIP spa package",
        "Exclusive shopping experience"
      ],
      roomType: "Penthouse Suite"
    },
    {
      id: "honeymoon-bliss",
      title: "Honeymoon Bliss Package",
      subtitle: "Start your new life together in paradise",
      price: "$1,599",
      originalPrice: "$2,199",
      duration: "7 nights",
      guests: "2 guests",
      image: royalSuite,
      icon: Heart,
      badge: "Romance",
      badgeColor: "bg-pink-500",
      features: [
        "Royal Suite with panoramic views",
        "Daily couple's massage",
        "Private beach dinner",
        "Sunset yacht excursion",
        "Photography session",
        "Honeymoon celebration cake"
      ],
      roomType: "Royal Suite"
    },
    {
      id: "weekend-getaway",
      title: "Weekend City Break",
      subtitle: "Quick escape to luxury in the heart of the city",
      price: "$449",
      originalPrice: "$599",
      duration: "2 nights",
      guests: "1-2 guests",
      image: juniorSuite,
      icon: Plane,
      badge: "Quick Stay",
      badgeColor: "bg-indigo-500",
      features: [
        "Junior Suite upgrade",
        "Welcome cocktails",
        "City tour guide",
        "Museum passes",
        "Late checkout",
        "Breakfast included"
      ],
      roomType: "Junior Suite"
    },
    {
      id: "celebration-special",
      title: "Celebration Special",
      subtitle: "Make your special occasions unforgettable",
      price: "$799",
      originalPrice: "$1,099",
      duration: "2 nights",
      guests: "2-6 guests",
      image: standardRoom,
      icon: Gift,
      badge: "Celebration",
      badgeColor: "bg-yellow-500",
      features: [
        "Suite accommodation",
        "Celebration decorations",
        "Custom cake & flowers",
        "Private dining option",
        "Event planning assistance",
        "Photography service"
      ],
      roomType: "Deluxe Suite"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
{/* Hero Section */}
<section
  className="relative py-20 bg-gradient-hero bg-cover bg-center text-white"
  style={{ backgroundImage: `url(${executiveSuite})` }}
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
    <h1 className="font-display text-5xl font-bold mb-6">
      Special Packages & Offers
    </h1>
    <p className="text-xl max-w-3xl mx-auto text-white/90">
      Discover our curated collection of luxury packages designed to create
      unforgettable experiences at exceptional values.
    </p>
  </motion.div>
</section>


      {/* Packages Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => {
              const IconComponent = pkg.icon;
              return (
                <Card key={pkg.id} className="group overflow-hidden shadow-card hover:shadow-gold transition-elegant">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-elegant duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${pkg.badgeColor} text-white border-0`}>
                        {pkg.badge}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <CardTitle className="font-display text-xl text-primary">{pkg.title}</CardTitle>
                        <p className="text-muted-foreground text-sm mt-1">{pkg.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                        <div className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {pkg.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {pkg.guests}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {pkg.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <Star className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="hero" 
                          className="w-full"
                          onClick={() => setSelectedPackage(pkg.roomType)}
                        >
                          Book This Package
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <BookingForm preselectedRoom={selectedPackage} />
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-primary mb-4">Need a Custom Package?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our concierge team can create a personalized experience tailored to your specific needs and preferences.
          </p>
          <Button variant="hero" size="xl">
            <Wine className="w-5 h-5 mr-2" />
            Contact Our Concierge
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SpecialPackages;