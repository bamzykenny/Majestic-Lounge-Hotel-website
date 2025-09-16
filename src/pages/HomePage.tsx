import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BookingForm from "@/components/BookingForm";
import { Link } from "react-router-dom";
import { 
  Wifi,
  Users,
  Music,
  Coffee,
  Bath, 
  Car, 
  Utensils, 
  Waves, 
  Dumbbell, 
  Sparkles,
  Star,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import carouselImage1 from "@/assets/carousel-1-lobby.jpg";
import carouselImage2 from "@/assets/carousel-2-pool.jpg";
import carouselImage3 from "@/assets/carousel-3-restaurant.jpg";
import carouselImage4 from "@/assets/carousel-4-spa.jpg";
import carouselImage5 from "@/assets/carousel-5-exterior.jpg";
import amenitiesBackground from "@/assets/amenities-background.jpg";
import choiceBackground from "@/assets/choice-background.jpg";
import bookingSectionImage from "@/assets/booking-section.jpg";

const HomePage = () => {
  const carouselImages = [
    { src: carouselImage1, alt: "Luxury Hotel Lobby" },
    { src: carouselImage2, alt: "Pool & Spa Area" },
    { src: carouselImage3, alt: "Fine Dining Restaurant" },
    { src: carouselImage4, alt: "Wellness Spa" },
    { src: carouselImage5, alt: "Hotel Exterior" },
  ];

  const rooms = [
    {
      id: 1,
      name: "Executive Suite",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: 450,
      rating: 4.9,
      capacity: 2,
      size: "45 sqm",
      amenities: ["King Bed", "City View", "Mini Bar", "Balcony"],
      features: [Wifi, Car, Coffee, Bath],
      gallery: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2074&q=80",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=2126&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 2,
      name: "Presidential Suite",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: 850,
      rating: 5.0,
      capacity: 4,
      size: "85 sqm",
      amenities: ["2 Bedrooms", "Ocean View", "Butler Service", "Private Terrace"],
      features: [Wifi, Car, Coffee, Bath],
            gallery: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=2126&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2074&q=80"
      ]
    },
    {
      id: 3,
      name: "Deluxe Room",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      price: 280,
      rating: 4.7,
      capacity: 2,
      size: "32 sqm",
      amenities: ["Queen Bed", "Garden View", "Welcome Amenities", "Work Desk"],
      features: [Wifi, Coffee, Bath],
            gallery: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=2126&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2074&q=80"
      ]
    },
    {
      id: 4,
      name: "Family Suite",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      price: 520,
      rating: 4.8,
      capacity: 6,
      size: "60 sqm",
      amenities: ["2 Bedrooms", "Living Area", "Kitchenette", "2 Bathrooms"],
      features: [Wifi, Car, Coffee, Bath],
            gallery: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=2126&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2074&q=80"
      ]
    }
  ];


  const features = [
    { icon: Wifi, title: "Free Wi-Fi", description: "High-speed internet throughout the property", hours: "24/7 Access", color: "text-amber-500"  },
    { icon: Waves, title: "Pool & Spa", description: "Luxury wellness facilities and treatments", hours: "6:00 AM - 10:00 PM" },
    { icon: Utensils, title: "Fine Dining", description: "Award-winning restaurants and bars", hours: "12:00 PM - 11:00 PM" },
    { icon: Car, title: "Valet Service", description: "Complimentary valet parking", hours: "24/7 Access"  },
    { icon: Dumbbell, title: "Fitness Center", description: "State-of-the-art gym equipment",hours: "5:00 AM - 11:00 PM"  },
    { icon: Sparkles, title: "Concierge", description: "24/7 personalized guest services", hours: "24/7 Access"  },
    { icon: Music, title: "Night Club", description: "Dance and enjoy vibrant nightlife within the hotel.", hours: "9:00 PM - 3:00 AM"  },
     { icon: Bath, title: "Laundry", description: "Professional laundry services for your convenience.",  hours: "7:00 AM - 9:00 PM"  },
         {
      icon: Users,
      title: "Business Center",
      description: "Fully equipped meeting rooms and conference facilities",
      hours: "24/7 Access",
    },
    
  ];
  
  

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely stunning hotel with impeccable service. The attention to detail is remarkable.",
    },
    {
      name: "Michael David",
      rating: 5,
      comment: "The most luxurious stay I've ever experienced. Every moment was perfect.",
    },
    {
      name: "Daniella Grace",
      rating: 5,
      comment: "Outstanding accommodations and world-class amenities. Highly recommended!",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Carousel Section */}
      <section className="relative h-screen overflow-hidden">
        <Carousel
          className="w-full h-full"
          plugins={[
            Autoplay({
              delay: 8000,
            }),
          ]}
        >
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-screen w-full">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${image.src})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40"></div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Hero Content Overlay */}
        <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          >

          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
              <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >

              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight italic">
                Majestic Lounge
                <span className="block text-secondary">Hotel</span>
              </h1>
              <motion.p                
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed italic"
                >
                Experience unparalleled luxury and sophistication in the heart of the city. Where every detail is crafted for perfection.
              </motion.p>
              
              <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                >
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                    variant="hero"
  size="xl"
  className="min-w-48"
  onClick={() => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  }}>
                      <Calendar className="w-5 h-5 mr-2" />
                      Reserve Your Stay
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <BookingForm />
                  </DialogContent>
                </Dialog>
                <Link to="/contact">
                  <Button variant="luxury" size="xl" className="min-w-48">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
        </motion.div>
        

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ArrowRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* Quick Booking Section */}
      <section className="py-16 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div            
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            >
            <h2 className="font-display text-4xl font-bold text-primary mb-4">Book Your Perfect Stay</h2>
            <p className="text-lg text-muted-foreground">Reserve your luxury experience with us today</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Booking Form */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              >
              <BookingForm />
            </motion.div>
            
            {/* Hotel Image */}
            <motion.div 
              className="relative h-96 rounded-lg overflow-hidden shadow-card"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                src={bookingSectionImage} 
                alt="Hotel Reception" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-display text-2xl font-bold mb-2">24/7 Concierge Service</h3>
                <p className="text-white/90">Professional assistance for all your needs</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section 
        className="py-20 bg-background relative overflow-hidden"
        style={{
          backgroundImage: `url(${amenitiesBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">World-Class Amenities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the exceptional services and facilities that make your stay unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-gold transition-elegant group bg-background/95 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-elegant shadow-gold">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-primary mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

            <section id="rooms" className="py-20 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Luxurious <span className="text-primary">Accommodations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of elegantly appointed rooms and suites, each designed for ultimate comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    Best Value
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{room.name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span>{room.rating}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{room.capacity} guests</span>
                      </div>
                      <span>•</span>
                      <span>{room.size}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">${room.price}</div>
                    <div className="text-sm text-muted-foreground">per night</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {room.amenities.map((amenity) => (
                      <Badge key={amenity} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mb-4">
                    {room.features.map((Feature, index) => (
                      <Feature key={index} className="w-5 h-5 text-muted-foreground" />
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  {/* Book Now opens booking form with preselected room */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="flex-1 bg-primary hover:bg-primary/90">
                        Book Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <BookingForm preselectedRoom={room.name} />
                    </DialogContent>
                  </Dialog>

                  {/* View Details Dialog with Carousel */}
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline" className="flex-1">
      View Details
    </Button>
  </DialogTrigger>
  <DialogContent className="max-w-3xl">
    <h2 className="text-2xl font-bold mb-4">{room.name} Gallery</h2>
    <Carousel className="w-full relative"   plugins={[
    Autoplay({ delay: 3000 })
  ]}>
      <CarouselContent>
        {room.gallery.map((pic, idx) => (
          <CarouselItem key={idx}>
            <img
              src={pic}
              alt={`${room.name} ${idx + 1}`}
              className="rounded-lg object-cover w-full h-[400px]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Controls */}
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full" />
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full" />
    </Carousel>
  </DialogContent>
</Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>  



            {/* Features Section */}
      <section 
        className="py-20 bg-background relative overflow-hidden"
        style={{
          backgroundImage: `url(${amenitiesBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl font-bold text-primary mb-4">World-Class Amenities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the exceptional services and facilities that make your stay unforgettable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {features.map((feature, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.2, duration: 0.7 }}
    >
      <Card className="shadow-card hover:shadow-gold transition-elegant group bg-background/95 backdrop-blur-sm">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-elegant shadow-gold">
            <feature.icon className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-semibold text-lg text-primary mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
          {feature.hours && (
            <p className={`${feature.color ? feature.color : "text-amber-400"} mt-2 text-sm`}>
              {feature.hours}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* Highlights Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${choiceBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9 }}
            >
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                Why Choose Majestic Lounge Hotel?
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                With over years of hospitality excellence, we've redefined luxury accommodation. 
                Our commitment to exceptional service and attention to detail ensures every guest 
                experiences the pinnacle of comfort and sophistication.
              </p>

              <div className="space-y-4">
                {[
                  "Best-winning luxury accommodations", 
                  "Personalized concierge services",
                  "Prime city center location",
                  "State-of-the-art wellness facilities"
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.2, duration: 0.7 }}
                  >
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/about">
              <Button variant="elegant" size="lg">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              </Link> 
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {["500+", "20+", "5★", "24/7"].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.3, duration: 0.8 }}
                >
                  <Card className="shadow-card bg-background/95 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-secondary mb-2">{stat}</div>
                      <p className="text-black-300">Stat Info</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl font-bold text-primary mb-4">What Our Guests Say</h2>
            <p className="text-lg text-muted-foreground">Read about the exceptional experiences of our valued guests</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
              >
                <Card className="shadow-card hover:shadow-gold transition-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <motion.div 
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-display text-4xl font-bold mb-4">Ready for Your Luxury Escape?</h2>
          <p className="text-xl mb-8 text-white/90">
            Book now and discover why Grand Luxury Hotel is the preferred choice for discerning travelers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="hero" size="xl">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Stay
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <BookingForm />
              </DialogContent>
            </Dialog>
            <Link to="/rooms">
              <Button variant="luxury" size="xl">
                View Our Rooms
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          </motion.div>
      </section>
    </div>
  );
};

export default HomePage;