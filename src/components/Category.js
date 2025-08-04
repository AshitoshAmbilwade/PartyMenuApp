'use dom';
import '../../global.css';
import { useState } from 'react';

export default function Header({ selectedCategory, onCategoryChange }) {
  const [search, setSearch] = useState('');

  const categories = ['All', 'Starter', 'Main Course', 'Dessert', 'Beverages'];

  return (
    <div className="px-4 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800">Party Menu</h1>
      <p className="text-sm text-gray-500">Select Dishes You Want</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search dishes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Category Tabs */}
      <div className="mt-4 flex space-x-2 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition duration-200 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
