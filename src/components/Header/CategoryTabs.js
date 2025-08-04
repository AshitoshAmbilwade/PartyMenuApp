'use dom';
import '../../../global.css';

const categories = ['All', 'Starter', 'Main Course', 'Dessert', 'Beverage', 'Other'];

export default function CategoryTabs({ selectedCategory, setSelectedCategory, selectedCountMap }) {
  return (
    <div className="flex overflow-x-auto space-x-4 mt-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`relative px-4 py-2 rounded-full border whitespace-nowrap ${
            selectedCategory === cat
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-gray-300'
          }`}
        >
          {cat}
          {selectedCountMap?.[cat] > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {selectedCountMap[cat]}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
