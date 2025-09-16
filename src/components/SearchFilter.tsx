import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  X, 
  SlidersHorizontal,
  Users,
  DollarSign,
  Calendar,
  MapPin
} from "lucide-react";

interface SearchFilterProps {
  onFilterChange: (filters: FilterState) => void;
  className?: string;
}

export interface FilterState {
  searchQuery: string;
  roomType: string;
  priceRange: string;
  guests: string;
  amenities: string[];
  checkIn: string;
  checkOut: string;
  location?: string;
  features?: string;
}

const SearchFilter = ({ onFilterChange, className }: SearchFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: "",
    roomType: "all",
    priceRange: "all",
    guests: "1",
    amenities: [],
    checkIn: "",
    checkOut: "",
    location: "",
    features: ""
  });

  const roomTypes = [
    { value: "all", label: "All Room Types" },
    { value: "standard", label: "Standard Room" },
    { value: "deluxe", label: "Deluxe Suite" },
    { value: "executive", label: "Executive Suite" },
    { value: "family", label: "Family Suite" },
    { value: "junior", label: "Junior Suite" },
    { value: "garden", label: "Garden View Suite" },
    { value: "penthouse", label: "Penthouse Suite" },
    { value: "royal", label: "Royal Suite" }
  ];

  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "budget", label: "$100 - $200" },
    { value: "mid", label: "$200 - $400" },
    { value: "luxury", label: "$400 - $600" },
    { value: "premium", label: "$600+" }
  ];

  const availableAmenities = [
    "Ocean View",
    "City View",
    "Balcony", 
    "Kitchenette",
    "Spa Bath",
    "Business Center",
    "Pet Friendly",
    "Smoking Allowed",
    "Wheelchair Accessible"
  ];

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const clearFilters = () => {
    const clearedFilters: FilterState = {
      searchQuery: "",
      roomType: "all",
      priceRange: "all", 
      guests: "1",
      amenities: [],
      checkIn: "",
      checkOut: "",
      location: "",
      features: ""
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const toggleAmenity = (amenity: string) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity];
    
    updateFilters({ amenities: newAmenities });
  };

  const activeFiltersCount = Object.entries(filters).reduce((count, [key, value]) => {
    if (key === 'amenities') return count + (value as string[]).length;
    if (typeof value === 'string' && value && value !== 'all' && value !== '1') return count + 1;
    return count;
  }, 0);

  return (
    <Card className={`shadow-card ${className}`}>
      <CardContent className="p-6">
        {/* Search Bar & Toggle */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search rooms, amenities, or locations..."
              value={filters.searchQuery}
              onChange={(e) => updateFilters({ searchQuery: e.target.value })}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
            
            {activeFiltersCount > 0 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={clearFilters}
                className="text-destructive hover:text-destructive"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Expanded Filters */}
        {isExpanded && (
          <div className="space-y-6 pt-4 border-t border-border animate-slide-in-left">
            {/* Date Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Check-in Date
                </label>
                <Input
                  type="date"
                  value={filters.checkIn}
                  onChange={(e) => updateFilters({ checkIn: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Check-out Date
                </label>
                <Input
                  type="date"
                  value={filters.checkOut}
                  onChange={(e) => updateFilters({ checkOut: e.target.value })}
                />
              </div>
            </div>

            {/* Room Type & Price */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Room Type
                </label>
                <Select 
                  value={filters.roomType} 
                  onValueChange={(value) => updateFilters({ roomType: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {roomTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Price Range
                </label>
                <Select 
                  value={filters.priceRange} 
                  onValueChange={(value) => updateFilters({ priceRange: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map((range) => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Guests
                </label>
                <Select 
                  value={filters.guests} 
                  onValueChange={(value) => updateFilters({ guests: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} Guest{num > 1 ? 's' : ''}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

          {/* Advanced Search Filters */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Advanced Filters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Location</Label>
                <Select value={filters.location || ""} onValueChange={(value) => updateFilters({ location: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="oceanview">Ocean View</SelectItem>
                    <SelectItem value="cityview">City View</SelectItem>
                    <SelectItem value="gardenview">Garden View</SelectItem>
                    <SelectItem value="poolside">Poolside</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">Special Features</Label>
                <Select value={filters.features || ""} onValueChange={(value) => updateFilters({ features: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select features" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="balcony">Private Balcony</SelectItem>
                    <SelectItem value="jacuzzi">In-room Jacuzzi</SelectItem>
                    <SelectItem value="kitchen">Kitchenette</SelectItem>
                    <SelectItem value="workspace">Business Workspace</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="space-y-3">
            <label className="text-sm font-medium flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Amenities
            </label>
            <div className="flex flex-wrap gap-2">
              {availableAmenities.map((amenity) => (
                <Badge
                  key={amenity}
                  variant={filters.amenities.includes(amenity) ? "default" : "outline"}
                  className="cursor-pointer transition-elegant hover:scale-105"
                  onClick={() => toggleAmenity(amenity)}
                >
                  {amenity}
                </Badge>
              ))}
            </div>
          </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchFilter;