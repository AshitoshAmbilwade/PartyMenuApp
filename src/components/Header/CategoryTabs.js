'use dom';
import '../../../global.css';

const categories = ['All', 'Starter', 'Main Course', 'Dessert', 'Beverage', 'Other'];

export default function CategoryTabs({ selectedCategory, setSelectedCategory, selectedCountMap }) {
  return (
    <div className="flex overflow-x-auto pb-2 mt-4 hide-scrollbar">
      <div className="flex space-x-2 pl-4">
        {categories.map((cat) => (
          <div key={cat} className="relative">
            <button
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
            
            {selectedCountMap?.[cat] > 0 && (
              <span className={`absolute -top-1 -right-1 text-xs w-5 h-5 flex items-center justify-center rounded-full ${
                selectedCategory === cat 
                  ? 'bg-white text-black border border-gray-200' 
                  : 'bg-red-500 text-white'
              }`}>
                {selectedCountMap[cat]}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}