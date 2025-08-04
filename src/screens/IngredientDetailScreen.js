'use dom';
import '../../global.css';

export default function IngredientDetailScreen({ route }) {
  const { dish } = route.params;

  return (
    <div className="p-5 bg-white min-h-screen">
      {/* Dish Image */}
      <div className="mb-4">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Dish Title */}
      <h1 className="text-2xl font-bold mb-1">{dish.name}</h1>

      {/* Description */}
      <p className="text-gray-600 mb-4">{dish.description}</p>

      {/* Ingredient List */}
      <h2 className="text-lg font-semibold mb-2">Ingredients</h2>
      <div className="bg-gray-100 p-4 rounded-md">
        {dish.ingredients.map((ingredient, idx) => (
          <p key={idx} className="text-gray-800 mb-1">• {ingredient}</p>
        ))}
      </div>
    </div>
  );
}
