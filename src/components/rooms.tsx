import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wifi, Car, Coffee, Bath, Bed, Users, Star } from "lucide-react";

const Rooms = () => {
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
      features: [Wifi, Car, Coffee, Bath]
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
      features: [Wifi, Car, Coffee, Bath]
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
      features: [Wifi, Coffee, Bath]
    },
    {
      id: 4,
      name: "Family Suite",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
      price: 520,
      rating: 4.8,
      capacity: 6,
      size: "60 sqm",
      amenities: ["2 Bedrooms", "Living Area", "Kitchenette", "2 Bathrooms"],
      features: [Wifi, Car, Coffee, Bath]
    }
  ];

  return (
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
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    Book Now
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;