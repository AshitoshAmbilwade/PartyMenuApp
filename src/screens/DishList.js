
'use dom';
import '../../global.css';
import React, { useState } from 'react';
import dishes from '../data/dishes.json';
import DishCard from '../components/DishCard';

export default function DishList() {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div>
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          isSelected={selected.includes(dish.id)}
          onToggleSelect={toggleSelect}
        />
      ))}
    </div>
  );
}
