import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const searchResults = ['Chaussures', 'Biberon pour nourrisson', 'Écouteurs sans fil', 'T-shirt oversize', 'Pommes de France', 'Réfrigérateur'];

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(searchResults);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = searchResults.filter(item => item.toLowerCase().includes(term));
    setFilteredItems(filtered);
  };

  return (
    <div className="min-h-screen bg-zinc-100 p-4 dark:bg-zinc-800">
      <div className="relative">
        <input
          type="search"
          placeholder="Recherche"
          className="pl-8 pr-4 py-3 text-zinc-900 bg-white rounded-lg shadow-sm dark:bg-zinc-700 dark:text-white focus:ring-0 w-full"
          value={searchTerm}
          onChange={handleSearch}
          autoFocus // Automatically focuses the input field
        />
        <FaSearch className="absolute left-3 top-3 text-zinc-600 dark:text-zinc-300 pointer-events-none" />
      </div>
      <ul className="mt-4 space-y-2">
        {filteredItems.map((item, index) => (
          <li key={index} className="bg-white p-4 rounded-md shadow-sm flex justify-between items-center dark:bg-zinc-700">
            <span className="text-zinc-900 dark:text-white">{item}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-600 dark:text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;