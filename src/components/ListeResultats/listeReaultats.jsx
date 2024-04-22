import React, { useState } from 'react';

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
      <div className="flex items-center bg-white p-3 rounded-md shadow-sm dark:bg-zinc-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-600 dark:text-zinc-300">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        <input
          type="search"
          placeholder="Recherche"
          className="flex-1 px-4 py-2 text-zinc-900 bg-transparent border-none focus:ring-0 dark:text-white"
          value={searchTerm}
          onChange={handleSearch}
        />
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-600 dark:text-zinc-300">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m5 0l-6 6m0-6l6 6m-6 0l6-6m-6 6l-6-6m5 0l-6 6"></path>
        </svg>
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