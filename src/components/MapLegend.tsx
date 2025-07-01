
import React from 'react';

const MapLegend: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border">
      <h3 className="font-semibold text-gray-800 mb-3">Legend</h3>
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-gray-500 border-2 border-gray-600"></div>
          <span className="text-sm text-gray-700">Regular restaurants</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-yellow-600"></div>
          <span className="text-sm text-gray-700">Tagged restaurants</span>
        </div>
      </div>
    </div>
  );
};

export default MapLegend;
