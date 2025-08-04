'use dom';
import '../../../global.css';
import { useState } from 'react';

const categories = ['Starter', 'Main Course', 'Dessert', 'Beverage', 'Other'];

export default function CategoryTabs({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex overflow-x-auto space-x-4 mt-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === cat
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-gray-300'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
