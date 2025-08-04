"use dom";
import '../../../global.css';
import React from 'react';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="w-full px-4 mt-2">
      <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
        <input
          type="text"
          placeholder="Search dish for your party......"
          className="flex-1 outline-none bg-transparent text-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.65 6.15z"
          />
        </svg>
      </div>
    </div>
  );
}
