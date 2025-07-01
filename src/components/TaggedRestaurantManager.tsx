
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TaggedRestaurantManagerProps {
  taggedRestaurants: string[];
  onUpdateTaggedRestaurants: (restaurants: string[]) => void;
}

const TaggedRestaurantManager: React.FC<TaggedRestaurantManagerProps> = ({
  taggedRestaurants,
  onUpdateTaggedRestaurants
}) => {
  const [inputValue, setInputValue] = useState(taggedRestaurants.join('\n'));
  const [isExpanded, setIsExpanded] = useState(false);

  const handleUpdate = () => {
    const newTaggedRestaurants = inputValue
      .split('\n')
      .map(name => name.trim())
      .filter(name => name.length > 0);
    
    onUpdateTaggedRestaurants(newTaggedRestaurants);
  };

  const handleReset = () => {
    const defaultRestaurants = [
      'Zur Letzten Instanz',
      'Katz Orange',
      'Restaurant Tim Raue',
      'Prater Garten',
      'Rutz Restaurant'
    ];
    setInputValue(defaultRestaurants.join('\n'));
    onUpdateTaggedRestaurants(defaultRestaurants);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">Tagged Restaurants</CardTitle>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-fit"
        >
          {isExpanded ? 'Hide Editor' : 'Edit Tagged Restaurants'}
        </Button>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Restaurant Names (one per line):
            </label>
            <Textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter restaurant names, one per line..."
              className="min-h-[120px]"
            />
          </div>
          
          <div className="flex gap-2">
            <Button onClick={handleUpdate} className="flex-1">
              Update Map
            </Button>
            <Button onClick={handleReset} variant="outline">
              Reset to Default
            </Button>
          </div>
          
          <div className="text-xs text-gray-600">
            Current tagged restaurants: {taggedRestaurants.length}
          </div>
        </CardContent>
      )}
      
      {!isExpanded && (
        <CardContent>
          <div className="text-sm text-gray-600">
            <strong>Currently tagged ({taggedRestaurants.length}):</strong>
            <ul className="mt-1 space-y-1">
              {taggedRestaurants.slice(0, 3).map((name, index) => (
                <li key={index} className="text-yellow-600">• {name}</li>
              ))}
              {taggedRestaurants.length > 3 && (
                <li className="text-gray-500">... and {taggedRestaurants.length - 3} more</li>
              )}
            </ul>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default TaggedRestaurantManager;
