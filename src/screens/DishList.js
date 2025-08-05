'use dom';
import '../../global.css';
import React, { useState } from 'react';
import dishes from '../data/dishes.json';
import DishCard from '../components/DishCard';
import CategoryTabs from '../components/Header/CategoryTabs';
import SubHeadingFilter from '../components/Header/SubHeadingFilter';
import SearchBar from '../components/Header/SearchBar';

export default function DishList() {
  const [selectedCategory, setSelectedCategory] = useState('Starter');
  const [showVeg, setShowVeg] = useState(true);
  const [showNonVeg, setShowNonVeg] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState({});

  const onQuantityChange = (id, quantity) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (quantity <= 0) delete updated[id];
      else updated[id] = quantity;
      return updated;
    });
  };

  const selectedDishes = dishes.filter((d) => cart[d.id]);

  const selectedCountMap = selectedDishes.reduce((acc, dish) => {
    const cat = dish.category || 'Other';
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  let filteredDishes =
    selectedCategory === 'All'
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory);

  filteredDishes = filteredDishes.filter((dish) => {
    if (dish.type?.toLowerCase() === 'veg' && !showVeg) return false;
    if (dish.type?.toLowerCase() === 'non-veg' && !showNonVeg) return false;
    return true;
  });

  filteredDishes = filteredDishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-28 px-4">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <CategoryTabs
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedCountMap={selectedCountMap}
      />

      <SubHeadingFilter
        category={selectedCategory}
        selectedCount={Object.keys(cart).length}
        showVeg={showVeg}
        showNonVeg={showNonVeg}
        setShowVeg={setShowVeg}
        setShowNonVeg={setShowNonVeg}
      />

      {filteredDishes.length === 0 ? (
        <p className="text-gray-600 mt-4">No dishes in this category.</p>
      ) : (
        filteredDishes.map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
            quantity={cart[dish.id] || 0}
            onQuantityChange={onQuantityChange}
          />
        ))
      )}

      {/* Fixed Bottom Summary */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md p-4 flex justify-between items-center z-50">
        <p className="text-sm font-medium">
          Items: {Object.values(cart).reduce((a, b) => a + b, 0)}
        </p>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Continue
        </button>
      </div>
    </div>
  );
}
