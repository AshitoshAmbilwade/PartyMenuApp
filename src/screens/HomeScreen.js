'use dom';
import '../../global.css'; // adjust path based on your structure
import Header from '../components/Header';
import { useState } from 'react';
import DishList from './DishList';

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="w-screen bg-gray-50 min-h-screen">
      <Header
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      {/* DishList will go here */}
      <DishList/>
    </div>
  );
}

