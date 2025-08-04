'use dom';
import '../../../global.css';

const categories = ['All', 'Starter', 'Main Course', 'Dessert', 'Beverage', 'Other'];

export default function CategoryTabs({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex overflow-x-auto space-x-4 mt-4 pb-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-4 py-2 rounded-full border transition-colors duration-200 cursor-pointer whitespace-nowrap ${
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
