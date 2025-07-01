
import React, { useState } from 'react';
import RestaurantMap from '@/components/RestaurantMap';
import MapLegend from '@/components/MapLegend';
import TaggedRestaurantManager from '@/components/TaggedRestaurantManager';

const Index = () => {
  const [taggedRestaurants, setTaggedRestaurants] = useState<string[]>([
    'Zur Letzten Instanz',
    'Katz Orange', 
    'Restaurant Tim Raue',
    'Prater Garten',
    'Rutz Restaurant'
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Berlin Restaurant Explorer
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover restaurants in central Berlin. Yellow markers highlight our specially tagged restaurants, 
            while grey markers show all other dining locations in the area.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-3 space-y-4">
            <RestaurantMap taggedRestaurants={taggedRestaurants} />
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <MapLegend />
            <TaggedRestaurantManager 
              taggedRestaurants={taggedRestaurants}
              onUpdateTaggedRestaurants={setTaggedRestaurants}
            />
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Data from OpenStreetMap • Click markers for restaurant names</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
