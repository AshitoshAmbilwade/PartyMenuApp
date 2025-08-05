'use dom';
import '../../global.css'; // ✅ Tailwind CSS must be configured in this file

export default function IngredientDetailScreen({ route }) {
  // ✅ Fallback dish if no route params are passed
  const { dish } = route.params || {
    dish: {
      name: 'Fried Avocado Tacos',
      description:
        'Panco fried avocado, Mayo, Panco fried avocado, Mayo, Panco fried avocado, Mayo.',
      image: 'https://your-image-url.com/image.jpg',
      serves: 2,
      ingredients: [
        { name: 'Cauliflower', quantity: '01 Pc' },
        { name: 'Mustard oil', quantity: '1/2 litres' },
        { name: 'Cauliflower', quantity: '01 Pc' },
        { name: 'Tomato', quantity: '01 Pc' },
      ],
    },
  };

  return (
    // ✅ Main container with padding and background
    <div className="p-4 bg-white min-h-screen text-sm font-medium">
      
      {/* 🔹 Dish Header: Name, Description, Image */}
      <div className="flex items-center mb-4">
        <div className="flex-1">
          <h1 className="text-xl font-bold leading-tight">{dish.name}</h1>
          <p className="text-gray-500 line-clamp-2">{dish.description}</p>
        </div>
        <img
          src={dish.image}
          alt={dish.name}
          className="w-24 h-24 rounded-full object-cover ml-4"
        />
      </div>

      {/* 🔹 Ingredients Title and Serving Info */}
      <h2 className="text-base font-semibold mt-6 mb-1">Ingredients</h2>
      <p className="text-gray-500 mb-3">
        For {dish.serves} {dish.serves === 1 ? 'person' : 'people'}
      </p>

      {/* 🔹 Ingredients Table-like List */}
      <div className="border-t border-gray-200">
        {dish.ingredients.map((item, index) => (
          <div
            key={index}
            className="flex justify-between py-2 border-b border-gray-100"
          >
            <span className="text-gray-800">{item.name}</span>
            <span className="text-gray-600">{item.quantity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
