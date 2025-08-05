'use dom';
import '../../../global.css';

export default function SubHeadingFilter({
  category = "Main Course",
  selectedCount = 0,
  showVeg,
  showNonVeg,
  setShowVeg,
  setShowNonVeg,
}) {
  return (
    <div className="flex justify-between items-center px-4 mt-4 mb-2">
      {/* Left-aligned category count */}
      <h2 className="text-base font-semibold text-gray-800">
        {category} <span className="text-gray-600">({selectedCount})</span>
      </h2>
      
      {/* Right-aligned toggle switches */}
      <div className="flex items-center gap-4">
        {/* Veg Toggle */}
        <div 
          onClick={() => setShowVeg(!showVeg)}
          className="flex items-center space-x-1.5"
        >
          <div className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
            showVeg ? 'bg-green-500' : 'bg-gray-300'
          }`}>
            <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-200 ${
              showVeg ? 'left-6' : 'left-1'
            }`}></div>
          </div>
          <span className="text-lg">🌱</span>
        </div>

        {/* Non-Veg Toggle */}
        <div 
          onClick={() => setShowNonVeg(!showNonVeg)}
          className="flex items-center space-x-1.5"
        >
          <div className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
            showNonVeg ? 'bg-red-500' : 'bg-gray-300'
          }`}>
            <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-200 ${
              showNonVeg ? 'left-6' : 'left-1'
            }`}></div>
          </div>
          <span className="text-lg">🍗</span>
        </div>
      </div>
    </div>
  );
}