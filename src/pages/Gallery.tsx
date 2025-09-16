import { useState } from "react";
import { Button } from "@/components/ui/button";
import VirtualTourModal from "@/components/VirtualTourModal";
import BrochureDownload from "@/components/BrochureDownload";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Download,
  Share,
  Camera
} from "lucide-react";
import heroImage from "@/assets/hotel-hero.jpg";
import deluxeSuite from "@/assets/deluxe-suite.jpg";
import standardRoom from "@/assets/standard-room.jpg";
import spaFacilities from "@/assets/spa-facilities.jpg";
import galleryRestaurant from "@/assets/gallery-restaurant.jpg";
import galleryConference from "@/assets/gallery-conference.jpg";
import galleryBar from "@/assets/gallery-bar.jpg";
import galleryTerrace from "@/assets/gallery-terrace.jpg";
import gardenSuite from "@/assets/garden-suite.jpg";
import executiveSuite from "@/assets/executive-suite.jpg";
import juniorSuite from "@/assets/junior-suite.jpg";
import familySuite from "@/assets/family-suite.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Photos", count: 24 },
    { id: "rooms", name: "Rooms & Suites", count: 12 },
    { id: "dining", name: "Dining", count: 6 },
    { id: "facilities", name: "Facilities", count: 6 }
  ];

  const images = [
    {
      id: 1,
      src: heroImage,
      category: "facilities",
      title: "Grand Lobby",
      description: "Elegant marble lobby with crystal chandelier and luxury furnishings"
    },
    {
      id: 2,
      src: deluxeSuite,
      category: "rooms",
      title: "Deluxe Suite",
      description: "Spacious suite with panoramic city views and modern amenities"
    },
    {
      id: 3,
      src: standardRoom,
      category: "rooms",
      title: "Standard Room",
      description: "Comfortable accommodations with elegant decor and premium bedding"
    },
    {
      id: 4,
      src: spaFacilities,
      category: "facilities",
      title: "Luxury Spa",
      description: "Tranquil spa environment with infinity pool and wellness facilities"
    },
    {
      id: 5,
      src: galleryRestaurant,
      category: "dining",
      title: "Fine Dining Restaurant",
      description: "Michelin-starred dining experience with exquisite cuisine"
    },
    {
      id: 6,
      src: gardenSuite,
      category: "rooms",
      title: "Garden View Suite",
      description: "Serene accommodations overlooking beautiful landscaped gardens"
    },
    {
      id: 7,
      src: galleryConference,
      category: "facilities",
      title: "Conference Room",
      description: "State-of-the-art meeting facilities with modern technology"
    },
    {
      id: 8,
      src: executiveSuite,
      category: "rooms",
      title: "Executive Suite",
      description: "Business-friendly accommodations with work area and lounge access"
    },
    {
      id: 9,
      src: galleryBar,
      category: "dining",
      title: "Premium Bar",
      description: "Spectacular atmosphere with craft cocktails and premium spirits"
    },
    {
      id: 10,
      src: spaFacilities,
      category: "facilities",
      title: "Pool Deck",
      description: "Outdoor infinity pool with comfortable lounge areas"
    },
    {
      id: 11,
      src: juniorSuite,
      category: "rooms",
      title: "Junior Suite",
      description: "Spacious comfort with separate sitting area and enhanced amenities"
    },
    {
      id: 12,
      src: galleryTerrace,
      category: "dining",
      title: "Garden Terrace",
      description: "Outdoor dining with garden views and fresh air experience"
    },
    {
      id: 13,
      src: familySuite,
      category: "rooms",
      title: "Family Suite",
      description: "Perfect for families with connecting rooms and child-friendly amenities"
    },
    {
      id: 14,
      src: heroImage,
      category: "facilities",
      title: "Business Center",
      description: "Fully equipped business facilities with meeting rooms"
    },
    {
      id: 15,
      src: deluxeSuite,
      category: "rooms",
      title: "Honeymoon Suite",
      description: "Romantic accommodations with special amenities for couples"
    },
    {
      id: 16,
      src: galleryRestaurant,
      category: "dining",
      title: "Private Dining",
      description: "Intimate dining spaces for special occasions and business meetings"
    },
    {
      id: 17,
      src: standardRoom,
      category: "rooms",
      title: "Superior Room",
      description: "Enhanced standard accommodations with city or garden views"
    },
    {
      id: 18,
      src: galleryBar,
      category: "dining",
      title: "Coffee Lounge",
      description: "Relaxed atmosphere for coffee, pastries, and light meals"
    },
    {
      id: 19,
      src: gardenSuite,
      category: "rooms",
      title: "Premium Suite",
      description: "Enhanced comfort with separate living area and premium amenities"
    },
    {
      id: 20,
      src: spaFacilities,
      category: "facilities",
      title: "Fitness Center",
      description: "State-of-the-art gym equipment with personal training services"
    },
    {
      id: 21,
      src: executiveSuite,
      category: "rooms",
      title: "Royal Suite",
      description: "Regal accommodations with opulent decor and exclusive services"
    },
    {
      id: 22,
      src: galleryTerrace,
      category: "facilities",
      title: "Rooftop Terrace",
      description: "Spectacular city views from our luxury rooftop terrace"
    },
    {
      id: 23,
      src: juniorSuite,
      category: "rooms",
      title: "Penthouse Suite",
      description: "Top-floor luxury with panoramic city views and private terrace"
    },
    {
      id: 24,
      src: galleryConference,
      category: "facilities",
      title: "Event Hall",
      description: "Elegant venue for weddings, conferences, and special events"
    }
  ];

  const filteredImages = selectedCategory === "all" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const currentImage = selectedImage ? images.find(img => img.id === selectedImage) : null;

  return (
    <div className="min-h-screen bg-background pt-20">
{/* Hero Section */}
<section
  className="relative py-20 bg-gradient-elegant bg-cover bg-center"
  style={{ backgroundImage: `url(${spaFacilities})` }}
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
      Photo Gallery
    </h1>
    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-white">
      Explore the elegance and luxury of Grand Luxury Hotel through our curated
      collection of images showcasing our rooms, facilities, and dining
      experiences.
    </p>
  </motion.div>
</section>


      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "hero" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="relative"
              >
                <Camera className="w-4 h-4 mr-2" />
                {category.name}
                <Badge 
                  variant="secondary" 
                  className="ml-2 bg-secondary/20 text-secondary text-xs"
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="group overflow-hidden shadow-card hover:shadow-gold transition-elegant cursor-pointer"
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-elegant duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-elegant">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                      <p className="text-white/80 text-xs">{image.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-elegant">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground text-xs">
                      {categories.find(cat => cat.id === image.category)?.name.split(' ')[0] || 'Gallery'}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && currentImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Navigation Buttons */}
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20"
              onClick={() => navigateImage("prev")}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20"
              onClick={() => navigateImage("next")}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Close Button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white border-white/20"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Image Container */}
            <div className="max-w-5xl max-h-[80vh] flex flex-col items-center">
              <img 
                src={currentImage.src} 
                alt={currentImage.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image Info */}
              <div className="mt-6 text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-2xl">
                <h2 className="text-white font-display text-2xl font-bold mb-2">{currentImage.title}</h2>
                <p className="text-white/80 mb-4">{currentImage.description}</p>
                
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Share className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold mb-4">Take a Virtual Tour</h2>
          <p className="text-xl mb-8 text-white/90">
            Experience our hotel from the comfort of your home with our immersive 360° virtual tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <VirtualTourModal />
            <BrochureDownload />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;