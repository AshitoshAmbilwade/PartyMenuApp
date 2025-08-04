'use dom';
import { useState } from 'react';
import '../../../global.css';

export default function SubHeadingFilter({ category = "Main Courses", selectedCount = 0 }) {
  const [showVeg, setShowVeg] = useState(true);
  const [showNonVeg, setShowNonVeg] = useState(true);

  return (
    <div className="flex justify-between items-center px-4 mt-4">
      <h2 className="text-sm font-semibold text-gray-700">
        {category} Selected ({selectedCount})
      </h2>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setShowVeg(!showVeg)}
          className={`text-sm px-2 py-1 rounded-full border ${
            showVeg ? 'bg-green-100 text-green-700 border-green-500' : 'bg-white border-gray-300 text-gray-500'
          }`}
        >
          🌱
        </button>
        <button
          onClick={() => setShowNonVeg(!showNonVeg)}
          className={`text-sm px-2 py-1 rounded-full border ${
            showNonVeg ? 'bg-red-100 text-red-700 border-red-500' : 'bg-white border-gray-300 text-gray-500'
          }`}
        >
          🍗
        </button>
      </div>
    </div>
  );
}
