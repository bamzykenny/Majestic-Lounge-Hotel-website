import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link} from "react-router-dom";
import BookingForm from "@/components/BookingForm";
import SearchFilter, { FilterState } from "@/components/SearchFilter";
import { motion } from "framer-motion";
import { 
  Wifi, 
  Tv, 
  Car, 
  Coffee, 
  Bath, 
  Wind,
  Users,
  Bed,
  Calendar,
  ArrowRight,
  Star
} from "lucide-react";
import deluxeSuite from "@/assets/deluxe-suite.jpg";
import standardRoom from "@/assets/standard-room.jpg";
import gardenSuite from "@/assets/garden-suite.jpg";
import executiveSuite from "@/assets/executive-suite.jpg";
import juniorSuite from "@/assets/junior-suite.jpg";
import familySuite from "@/assets/family-suite.jpg";
import penthouseSuite from "@/assets/penthouse-suite.jpg";
import royalSuite from "@/assets/royal-suite.jpg";

const rooms = [
    {
      id: "standard",
      name: "Standard Room",
      price: 299,
      image: standardRoom,
      description: "Elegant comfort with modern amenities and city views. Perfect for business and leisure travelers.",
      size: "32 sqm",
      occupancy: "2 guests",
      bed: "King or Twin beds",
      amenities: [
        { icon: Wifi, name: "Free Wi-Fi" },
        { icon: Tv, name: "Smart TV" },
        { icon: Coffee, name: "Coffee Machine" },
        { icon: Wind, name: "Air Conditioning" },
        { icon: Car, name: "Valet Parking" },
        { icon: Bath, name: "Luxury Bathroom" },
      ],
      features: [
        "24/7 room service",
        "Blackout curtains",
        "Mini bar",
        "In-room safe",
        "Marble bathroom",
        "Work desk"
      ]
    },
    {
      id: "garden",
      name: "Garden View Suite",
      price: 399,
      image: gardenSuite,
      description: "Serene accommodations overlooking beautiful landscaped gardens with premium comfort features.",
      size: "45 sqm",
      occupancy: "3 guests",
      bed: "King bed + Daybed",
      amenities: [
        { icon: Wifi, name: "Free Wi-Fi" },
        { icon: Tv, name: "Smart TV" },
        { icon: Coffee, name: "Espresso Machine" },
        { icon: Wind, name: "Climate Control" },
        { icon: Car, name: "Valet Parking" },
        { icon: Bath, name: "Garden Bath" },
      ],
      features: [
        "Garden terrace access",
        "Natural lighting",
        "Premium bedding",
        "Tea ceremony set",
        "Rainfall shower",
        "Reading nook"
      ]
    },
    {
      id: "junior",
      name: "Junior Suite",
      price: 449,
      image: juniorSuite,
      description: "Spacious comfort with separate sitting area and enhanced amenities for extended stays.",
      size: "48 sqm",
      occupancy: "3 guests",
      bed: "King bed + Sofa",
      amenities: [
        { icon: Wifi, name: "Free Wi-Fi" },
        { icon: Tv, name: "Smart TV" },
        { icon: Coffee, name: "Premium Coffee" },
        { icon: Wind, name: "Smart Climate" },
        { icon: Car, name: "Valet Parking" },
        { icon: Bath, name: "Luxury Bathroom" },
      ],
      features: [
        "Separate sitting area",
        "Work station",
        "Premium minibar",
        "Complimentary snacks",
        "Upgraded amenities",
        "Priority housekeeping"
      ]
    },
    {
      id: "deluxe",
      name: "Deluxe Suite",
      price: 499,
      image: deluxeSuite,
      description: "Spacious luxury with separate living area, premium amenities, and breathtaking panoramic views.",
      size: "55 sqm",
      occupancy: "4 guests",
      bed: "King bed + Sofa bed",
      amenities: [
        { icon: Wifi, name: "Free Wi-Fi" },
        { icon: Tv, name: "Smart TV" },
        { icon: Coffee, name: "Espresso Machine" },
        { icon: Wind, name: "Climate Control" },
        { icon: Car, name: "Valet Parking" },
        { icon: Bath, name: "Spa Bathroom" },
      ],
      features: [
        "Separate living room",
        "Panoramic city views",
        "Premium minibar",
        "Butler service",
        "Marble spa bathroom",
        "Private balcony"
      ]
    },
    {
      id: "executive",
      name: "Executive Suite",
      price: 649,
      image: executiveSuite,
      description: "Business-focused luxury with executive lounge access and enhanced work facilities.",
      size: "62 sqm",
      occupancy: "4 guests",
      bed: "King bed + Office area",
      amenities: [
        { icon: Wifi, name: "Business Wi-Fi" },
        { icon: Tv, name: "Business TV" },
        { icon: Coffee, name: "Executive Bar" },
        { icon: Wind, name: "Climate Control" },
        { icon: Car, name: "Business Transport" },
        { icon: Bath, name: "Executive Bath" },
      ],
      features: [
        "Executive lounge access",
        "Business center privileges",
        "Meeting room discount",
        "Express laundry",
        "Complimentary breakfast",
        "Late checkout"
      ]
    },
    {
      id: "family",
      name: "Family Suite",
      price: 699,
      image: familySuite,
      description: "Perfect for families with connecting rooms, child-friendly amenities, and spacious living areas.",
      size: "72 sqm",
      occupancy: "6 guests",
      bed: "King + Twin beds",
      amenities: [
        { icon: Wifi, name: "Family Wi-Fi" },
        { icon: Tv, name: "Entertainment System" },
        { icon: Coffee, name: "Family Kitchen" },
        { icon: Wind, name: "Multi-zone Climate" },
        { icon: Car, name: "Family Transport" },
        { icon: Bath, name: "Family Bathroom" },
      ],
      features: [
        "Connecting rooms",
        "Children's play area",
        "Baby amenities",
        "Family dining space",
        "Kid-friendly activities",
        "Childcare services"
      ]
    },
    {
      id: "premium",
      name: "Premium Suite", 
      price: 799,
      image: penthouseSuite,
      description: "Ultimate luxury experience with exclusive amenities, personalized service, and premium location.",
      size: "80 sqm",
      occupancy: "6 guests",
      bed: "King bed + Living area",
      amenities: [
        { icon: Wifi, name: "Premium Wi-Fi" },
        { icon: Tv, name: "Entertainment System" },
        { icon: Coffee, name: "Premium Bar" },
        { icon: Wind, name: "Smart Climate" },
        { icon: Car, name: "Luxury Transport" },
        { icon: Bath, name: "Spa Suite" },
      ],
      features: [
        "Executive lounge access",
        "Personal concierge",
        "Premium dining privileges",
        "Spa treatment credits",
        "Airport transfers",
        "Private dining option"
      ]
    },
    {
      id: "penthouse",
      name: "Penthouse Suite",
      price: 999,
      image: penthouseSuite,
      description: "Top-floor luxury with panoramic city views, private terrace, and ultra-premium amenities.",
      size: "95 sqm",
      occupancy: "6 guests",
      bed: "Master suite + Guest room",
      amenities: [
        { icon: Wifi, name: "Penthouse Wi-Fi" },
        { icon: Tv, name: "Premium Entertainment" },
        { icon: Coffee, name: "Private Bar" },
        { icon: Wind, name: "Climate Suite" },
        { icon: Car, name: "Chauffeur Service" },
        { icon: Bath, name: "Master Spa" },
      ],
      features: [
        "Private terrace",
        "Panoramic city views",
        "Premium bar service",
        "Private elevator",
        "Butler service",
        "Helicopter pad access"
      ]
    },
    {
      id: "royal",
      name: "Royal Suite",
      price: 1199,
      image: royalSuite,
      description: "Regal accommodations with opulent decor, exclusive services, and the finest luxury amenities.",
      size: "110 sqm",
      occupancy: "8 guests",
      bed: "Royal master + Guest suite",
      amenities: [
        { icon: Wifi, name: "Royal Wi-Fi" },
        { icon: Tv, name: "Royal Entertainment" },
        { icon: Coffee, name: "Royal Kitchen" },
        { icon: Wind, name: "Royal Climate" },
        { icon: Car, name: "Royal Transport" },
        { icon: Bath, name: "Royal Spa" },
      ],
      features: [
        "Royal dining room",
        "Private library",
        "Art collection",
        "Personal chef service",
        "Royal treatment spa",
        "VIP reception"
      ]
    },
    {
      id: "presidential",
      name: "Presidential Suite",
      price: 1599,
      image: royalSuite,
      description: "The pinnacle of luxury hospitality with exclusive services and unmatched elegance.",
      size: "150 sqm",
      occupancy: "10 guests",
      bed: "Presidential master + 2 guest rooms",
      amenities: [
        { icon: Wifi, name: "Exclusive Wi-Fi" },
        { icon: Tv, name: "Home Theater" },
        { icon: Coffee, name: "Full Kitchen" },
        { icon: Wind, name: "Presidential Climate" },
        { icon: Car, name: "Presidential Fleet" },
        { icon: Bath, name: "Presidential Spa" },
      ],
      features: [
        "Private elevator access",
        "Dedicated butler team",
        "Private dining room",
        "In-suite spa services",
        "Helicopter transfers",
        "24/7 personal assistant"
      ]
    }
  ];

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState<string>("");
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [filteredRooms, setFilteredRooms] = useState(rooms);

  // Initialize filtered rooms on component mount
  useEffect(() => {
    setFilteredRooms(rooms);
  }, []);

  const handleBookRoom = (roomType: string) => {
    setSelectedRoom(roomType);
    setShowBookingForm(true);
  };

  const handleFilterChange = (filters: FilterState) => {
    let filtered = [...rooms];

    // Filter by search query
    if (filters.searchQuery) {
      filtered = filtered.filter(room =>
        room.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        room.description.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        room.amenities.some(amenity => amenity.name.toLowerCase().includes(filters.searchQuery.toLowerCase()))
      );
    }

    // Filter by room type
    if (filters.roomType && filters.roomType !== "all") {
      filtered = filtered.filter(room =>
        room.name.toLowerCase().includes(filters.roomType.toLowerCase())
      );
    }

    // Filter by price range
    if (filters.priceRange && filters.priceRange !== "all") {
      const priceRanges = {
        budget: [100, 200],
        mid: [200, 400],
        luxury: [400, 600],
        premium: [600, 9999]
      };
      
      const [min, max] = priceRanges[filters.priceRange as keyof typeof priceRanges] || [0, 9999];
      filtered = filtered.filter(room => room.price >= min && room.price <= max);
    }

    // Filter by amenities
    if (filters.amenities.length > 0) {
      filtered = filtered.filter(room =>
        filters.amenities.every(filterAmenity =>
          room.amenities.some(roomAmenity =>
            roomAmenity.name.toLowerCase().includes(filterAmenity.toLowerCase())
          )
        )
      );
    }

    setFilteredRooms(filtered);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
{/* Header */}
<section
  className="relative py-16 bg-gradient-elegant bg-cover bg-center"
  style={{ backgroundImage: `url(${royalSuite})` }}
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
      Rooms & Suites
    </h1>
    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-white">
      Discover our collection of meticulously designed accommodations, each
      offering a unique blend of comfort, elegance, and modern luxury amenities.
    </p>
  </motion.div>
</section>


      {/* Search & Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchFilter onFilterChange={handleFilterChange} />
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredRooms.length} {filteredRooms.length === 1 ? 'room' : 'rooms'} available
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12">
            {filteredRooms.map((room, index) => (
              <Card key={room.id} className="overflow-hidden shadow-card hover:shadow-gold transition-elegant">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Room Image */}
                  <div className={`relative h-80 lg:h-96 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={room.image} 
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground font-semibold">
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-background/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-card">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Room Details */}
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex justify-between items-start mb-4">
                      <CardHeader className="p-0">
                        <CardTitle className="font-display text-3xl font-bold text-primary mb-2">
                          {room.name}
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Bed className="w-4 h-4 mr-1" />
                            {room.size}
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {room.occupancy}
                          </span>
                        </div>
                      </CardHeader>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-secondary">${room.price}</div>
                        <div className="text-sm text-muted-foreground">per night</div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{room.description}</p>

                    {/* Room Specifications */}
                    <div className="mb-6 p-4 bg-accent rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Room Specifications</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="text-muted-foreground">Size: <span className="text-foreground font-medium">{room.size}</span></span>
                        <span className="text-muted-foreground">Occupancy: <span className="text-foreground font-medium">{room.occupancy}</span></span>
                        <span className="text-muted-foreground col-span-2">Bed: <span className="text-foreground font-medium">{room.bed}</span></span>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3">Amenities</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {room.amenities.map((amenity, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <amenity.icon className="w-4 h-4 text-secondary" />
                            <span className="text-muted-foreground">{amenity.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-primary mb-3">Features</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {room.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        variant="hero" 
                        size="lg" 
                        onClick={() => handleBookRoom(room.name)}
                        className="flex-1"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book This Room
                      </Button>
                      <Button variant="outline" size="lg" className="flex-1">
                        View Gallery
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

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <BookingForm 
              preselectedRoom={selectedRoom}
              className="bg-background"
            />
            <Button 
              variant="ghost" 
              className="mt-4 w-full" 
              onClick={() => setShowBookingForm(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {/* Special Offers */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold mb-4 text-white">Special Packages</h2>
          <p className="text-xl mb-8 text-white/90 text-white">
            Enhance your stay with our exclusive packages and seasonal offers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold mb-2 text-white">Romantic Getaway</h3>
                <p className="text-white/90 text-sm mb-4">Champagne, spa credits, and late checkout included</p>
                <Button variant="luxury" size="sm">Learn More</Button>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold mb-2 text-white">Business Package</h3>
                <p className="text-white/90 text-sm mb-4">Meeting rooms, business lounge, and early breakfast</p>
                <Button variant="luxury" size="sm">Learn More</Button>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold mb-2 text-white">Weekend Escape</h3>
                <p className="text-white/90 text-sm mb-4">Extended stay discounts and complimentary dining</p>
                <Button variant="luxury" size="sm">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;