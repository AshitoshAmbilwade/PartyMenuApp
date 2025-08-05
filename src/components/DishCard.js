'use dom';
import '../../global.css';
import { useNavigation } from '@react-navigation/native';

export default function DishCard({ dish, quantity = 0, onQuantityChange }) {
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

        {/* Counter UI */}
        {quantity > 0 ? (
          <div className="flex items-center gap-2">
            <button
              onClick={() => onQuantityChange(dish.id, quantity - 1)}
              className="px-2 bg-gray-200 rounded-full"
            >
              ➖
            </button>
            <span className="text-sm font-medium">{quantity}</span>
            <button
              onClick={() => onQuantityChange(dish.id, quantity + 1)}
              className="px-2 bg-gray-200 rounded-full"
            >
              ➕
            </button>
          </div>
        ) : (
          <button
            onClick={() => onQuantityChange(dish.id, 1)}
            className="text-sm px-3 py-1 rounded-full font-medium bg-green-100 text-green-600 border border-green-400"
          >
            Add +
          </button>
        )}
      </div>
    </div>
  );
}
