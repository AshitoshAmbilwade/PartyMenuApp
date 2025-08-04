import React from 'react';
import '../../global.css';
import SearchBar from './Header/SearchBar'; 
import CategoryTabs from './Header/CategoryTabs';
import SubHeadingFilter from './Header/SubHeadingFilter';

export default function Header() {
  return (
    <div className="bg-white px-4 py-2 shadow">
      {/* Title */}
      <h1 className="text-center text-2xl font-bold mb-2">Party Menu</h1>

      {/* Search Bar */}
      <SearchBar />
    </div>
  );
}
