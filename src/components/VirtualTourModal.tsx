import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Play, 
  Maximize, 
  RotateCcw, 
  Volume2,
  VolumeX,
  X,
  MapPin
} from "lucide-react";
import heroImage from "@/assets/hotel-hero.jpg";
import carouselImage1 from "@/assets/carousel-1-lobby.jpg";
import carouselImage2 from "@/assets/carousel-2-pool.jpg";
import carouselImage3 from "@/assets/carousel-3-restaurant.jpg";
import carouselImage4 from "@/assets/carousel-4-spa.jpg";

interface VirtualTourModalProps {
  trigger?: React.ReactNode;
}

const VirtualTourModal = ({ trigger }: VirtualTourModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("lobby");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const locations = [
    {
      id: "lobby",
      name: "Grand Lobby",
      image: carouselImage1,
      description: "Experience our stunning marble lobby with crystal chandeliers"
    },
    {
      id: "pool",
      name: "Pool & Spa",
      image: carouselImage2,
      description: "Relax in our infinity pool with panoramic city views"
    },
    {
      id: "restaurant",
      name: "Fine Dining",
      image: carouselImage3,
      description: "Enjoy Michelin-starred cuisine in our elegant restaurant"
    },
    {
      id: "spa",
      name: "Luxury Spa",
      image: carouselImage4,
      description: "Unwind in our world-class spa and wellness center"
    },
    {
      id: "exterior",
      name: "Hotel Exterior",
      image: heroImage,
      description: "Admire our iconic architecture and landscaped gardens"
    }
  ];

  const currentLocationData = locations.find(loc => loc.id === currentLocation) || locations[0];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="hero" size="xl">
            <Camera className="w-5 h-5 mr-2" />
            Start Virtual Tour
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className={`${isFullscreen ? 'max-w-[95vw] max-h-[95vh]' : 'max-w-6xl max-h-[85vh]'} p-0`}>
        <div className="relative bg-black text-white overflow-hidden rounded-lg">
          {/* Tour Header */}
          <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent p-4">
            <div className="flex justify-between items-center">
              <div>
                <DialogTitle className="font-display text-2xl text-white">
                  Virtual Tour - {currentLocationData.name}
                </DialogTitle>
                <p className="text-white/80 text-sm mt-1">{currentLocationData.description}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Main Tour View */}
          <div className="relative aspect-video bg-black">
            <img 
              src={currentLocationData.image} 
              alt={currentLocationData.name}
              className="w-full h-full object-cover"
            />
            
            {/* Play Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePlayPause}
                  className="w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 text-white"
                >
                  <Play className="w-8 h-8 ml-2" />
                </Button>
              </div>
            )}

            {/* Tour Status Badge */}
            <div className="absolute top-4 right-4">
              <Badge className="bg-green-500 text-white border-0">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                Live Tour
              </Badge>
            </div>
          </div>

          {/* Location Navigation */}
          <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex justify-between items-center mb-4">
              {/* Location Selector */}
              <div className="flex gap-2 overflow-x-auto">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setCurrentLocation(location.id)}
                    className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      currentLocation === location.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <MapPin className="w-4 h-4 mr-1 inline" />
                    {location.name}
                  </button>
                ))}
              </div>

              {/* Tour Controls */}
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePlayPause}
                  className="text-white hover:bg-white/20"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <div className="w-4 h-4 flex gap-1">
                      <div className="w-1.5 h-4 bg-white rounded"></div>
                      <div className="w-1.5 h-4 bg-white rounded"></div>
                    </div>
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleMuteToggle}
                  className="text-white hover:bg-white/20"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCurrentLocation("lobby")}
                  className="text-white hover:bg-white/20"
                  title="Reset Tour"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleFullscreen}
                  className="text-white hover:bg-white/20"
                  title="Toggle Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Tour Progress */}
            <div className="w-full bg-white/20 rounded-full h-1">
              <div 
                className="bg-primary h-1 rounded-full transition-all duration-300"
                style={{ width: `${((locations.findIndex(l => l.id === currentLocation) + 1) / locations.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VirtualTourModal;