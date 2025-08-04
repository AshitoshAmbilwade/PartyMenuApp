'use dom';
import '../../global.css';
import React, { useState } from 'react';
import dishes from '../data/dishes.json';
import DishCard from '../components/DishCard';
import CategoryTabs from '../components/Header/CategoryTabs';
import SubHeadingFilter from '../components/Header/SubHeadingFilter';

export default function DishList() {
  const [selected, setSelected] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Starter');
  const [showVeg, setShowVeg] = useState(true);
  const [showNonVeg, setShowNonVeg] = useState(true);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Step 1: Filter by category
  let filteredDishes =
    selectedCategory === 'All'
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory);

  // Step 2: Filter by type
  filteredDishes = filteredDishes.filter((dish) => {
    if (dish.type?.toLowerCase() === 'veg' && !showVeg) return false;
    if (dish.type?.toLowerCase() === 'non-veg' && !showNonVeg) return false;
    return true;
  });

  return (
    <div className="pb-28 px-4">
      <h1 className="text-2xl font-bold mt-4">Party Menu</h1>

      {/* Category Tabs */}
      <CategoryTabs
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Veg/Non-Veg Filter */}
      <SubHeadingFilter
        category={selectedCategory}
        selectedCount={selected.length}
        showVeg={showVeg}
        showNonVeg={showNonVeg}
        setShowVeg={setShowVeg}
        setShowNonVeg={setShowNonVeg}
      />

      {/* Filtered Dish Cards */}
      {filteredDishes.length === 0 ? (
        <p className="text-gray-600 mt-4">No dishes in this category.</p>
      ) : (
        filteredDishes.map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
            isSelected={selected.includes(dish.id)}
            onToggleSelect={toggleSelect}
          />
        ))
      )}

      {/* Fixed Bottom Summary */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md p-4 flex justify-between items-center z-50">
        <p className="text-sm font-medium">
          Total Dishes Selected: {selected.length}
        </p>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Continue
        </button>
      </div>
    </div>
  );
}
