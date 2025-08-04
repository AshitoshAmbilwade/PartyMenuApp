'use dom';
import '../../global.css';
import IngredientList from './IngredientList';
import { useNavigation } from '@react-navigation/native';

export default function DishCard({ dish, isSelected, onToggleSelect }) {
  const navigation = useNavigation();

  return (
    <div className="flex justify-between items-start border p-4 mb-2 rounded-lg bg-white shadow-sm">
      <div className="flex-1">
        <div className="flex items-center gap-1">
          <h2 className="font-semibold">{dish.name}</h2>
          {dish.type === 'veg' ? (
            <span className="text-green-600 text-sm">🟢</span>
          ) : (
            <span className="text-red-600 text-sm">🔴</span>
          )}
        </div>

        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{dish.description}</p>

        {/* 👇 Ingredient button navigates to new screen */}
        <button
          className="text-orange-500 text-sm mt-1 hover:underline"
          onClick={() => navigation.navigate('IngredientDetail', { dish })}
        >
          🍽 Ingredient
        </button>
      </div>

      <div className="flex flex-col items-end">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-16 h-16 object-cover rounded-md mb-2"
        />
        <button
          onClick={() => onToggleSelect(dish.id)}
          className={`text-sm px-3 py-1 rounded-full font-medium ${
            isSelected
              ? 'bg-orange-100 text-orange-600 border border-orange-400'
              : 'bg-green-100 text-green-600 border border-green-400'
          }`}
        >
          {isSelected ? 'Remove' : 'Add +'}
        </button>
      </div>
    </div>
  );
}
