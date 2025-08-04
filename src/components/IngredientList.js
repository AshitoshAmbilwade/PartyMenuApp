'use dom';
import '../../global.css';

export default function IngredientList({ ingredients }) {
  return (
    <ul className="mt-2 list-disc list-inside text-sm text-gray-700 bg-gray-100 p-3 rounded-lg">
      {ingredients.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
