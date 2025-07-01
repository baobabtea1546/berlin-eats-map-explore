
import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet with Webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Restaurant {
  id: string;
  name: string;
  lat: number;
  lon: number;
  isTagged?: boolean;
}

interface RestaurantMapProps {
  taggedRestaurants: string[];
}

const RestaurantMap: React.FC<RestaurantMapProps> = ({ taggedRestaurants }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

  // Central Berlin bounding box
  const bbox = {
    south: 52.4900,
    west: 13.3500,
    north: 52.5300,
    east: 13.4200
  };

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView([52.5200, 13.4050], 13);
    mapInstanceRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Fetch restaurants from Overpass API
    fetchRestaurants();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    // Update markers when tagged restaurants change
    if (mapInstanceRef.current && restaurants.length > 0) {
      updateMarkers();
    }
  }, [taggedRestaurants, restaurants]);

  const fetchRestaurants = async () => {
    setLoading(true);
    try {
      const overpassQuery = `
        [out:json][timeout:25];
        (
          node["amenity"="restaurant"](${bbox.south},${bbox.west},${bbox.north},${bbox.east});
          way["amenity"="restaurant"](${bbox.south},${bbox.west},${bbox.north},${bbox.east});
          relation["amenity"="restaurant"](${bbox.south},${bbox.west},${bbox.north},${bbox.east});
        );
        out center;
      `;

      const response = await fetch('https://overpass-api.de/api/interpreter', {
        method: 'POST',
        body: overpassQuery,
        headers: {
          'Content-Type': 'text/plain',
        },
      });

      const data = await response.json();
      
      const restaurantData: Restaurant[] = data.elements
        .filter((element: any) => element.lat && element.lon && element.tags?.name)
        .map((element: any) => ({
          id: element.id.toString(),
          name: element.tags.name,
          lat: element.lat || element.center?.lat,
          lon: element.lon || element.center?.lon,
        }))
        .slice(0, 100); // Limit to first 100 restaurants

      setRestaurants(restaurantData);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      // Fallback mock data for demo
      setRestaurants([
        { id: '1', name: 'Zur Letzten Instanz', lat: 52.5170, lon: 13.4124 },
        { id: '2', name: 'Katz Orange', lat: 52.5199, lon: 13.3894 },
        { id: '3', name: 'Lokal Modern', lat: 52.5067, lon: 13.4281 },
        { id: '4', name: 'Prater Garten', lat: 52.5408, lon: 13.4094 },
        { id: '5', name: 'Restaurant Tim Raue', lat: 52.5107, lon: 13.4116 },
        { id: '6', name: 'Hackescher Hof', lat: 52.5225, lon: 13.4015 },
        { id: '7', name: 'Borchardt', lat: 52.5154, lon: 13.3912 },
        { id: '8', name: 'Rutz Restaurant', lat: 52.5269, lon: 13.3782 },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const updateMarkers = () => {
    if (!mapInstanceRef.current) return;

    // Clear existing markers
    mapInstanceRef.current.eachLayer((layer) => {
      if (layer instanceof L.CircleMarker) {
        mapInstanceRef.current!.removeLayer(layer);
      }
    });

    // Add new markers
    restaurants.forEach((restaurant) => {
      const isTagged = taggedRestaurants.some(
        tagged => tagged.toLowerCase().trim() === restaurant.name.toLowerCase().trim()
      );

      const marker = L.circleMarker([restaurant.lat, restaurant.lon], {
        radius: 8,
        fillColor: isTagged ? '#fbbf24' : '#6b7280',
        color: isTagged ? '#f59e0b' : '#4b5563',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
      });

      marker.bindPopup(`<strong>${restaurant.name}</strong>`);
      marker.addTo(mapInstanceRef.current!);
    });
  };

  return (
    <div className="relative">
      <div 
        ref={mapRef} 
        className="w-full h-[400px] md:h-[500px] rounded-lg shadow-lg"
      />
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-lg">
          <div className="text-gray-600">Loading restaurants...</div>
        </div>
      )}
    </div>
  );
};

export default RestaurantMap;
