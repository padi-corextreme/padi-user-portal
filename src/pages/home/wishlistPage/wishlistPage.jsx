import React, { useEffect, useRef } from 'react';

const Wishlist = () => {
  const firstCardRef = useRef(null);

  useEffect(() => {
    // Get the width of the first card
    const firstCardWidth = firstCardRef.current.offsetWidth;
    // Apply the width to all cards
    const cards = document.querySelectorAll('.wishlist-card');
    cards.forEach(card => {
      card.style.width = `${firstCardWidth}px`;
    });
  }, []);

  return (
    <div className="max-w-sm mx-auto">
      <div className="space-y-6 p-4">
        <div>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Liste du bébé</h2>
          <div className="space-y-6 mt-3">
            <div className="flex items-start space-x-4 wishlist-card" ref={firstCardRef}>
              <div className="bg-pink-100 dark:bg-pink-900 p-4 rounded-lg flex items-center">
                <img src="https://placehold.co/300x200" alt="Item" className="w-24 h-24 object-cover rounded-md" />
                <div>
                  <h3 className="text-sm font-semibold">Pantoufles pour bébé</h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">9 000 FCFA</p>
                  <button className="mt-2 text-blue-600 dark:text-blue-400">Voir les détails</button>
                </div>
              </div>
            </div>
            {/* Repeat the above card structure for other items */}
            {/* Note: Do not include "wishlist-card" class in subsequent cards */}
            <div className="flex items-start space-x-4">
              <div className="bg-pink-100 dark:bg-pink-900 p-4 rounded-lg flex items-center">
                <img src="https://placehold.co/300x200" alt="Item" className="w-24 h-24 object-cover rounded-md" />
                <div>
                  <h3 className="text-sm font-semibold">Item 2</h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Price 2</p>
                  <button className="mt-2 text-blue-600 dark:text-blue-400">Voir les détails</button>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-pink-100 dark:bg-pink-900 p-4 rounded-lg flex items-center">
                <img src="https://placehold.co/300x200" alt="Item" className="w-24 h-24 object-cover rounded-md" />
                <div>
                  <h3 className="text-sm font-semibold">Item 3</h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Price 3</p>
                  <button className="mt-2 text-blue-600 dark:text-blue-400">Voir les détails</button>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-pink-100 dark:bg-pink-900 p-4 rounded-lg flex items-center">
                <img src="https://placehold.co/300x200" alt="Item" className="w-24 h-24 object-cover rounded-md" />
                <div>
                  <h3 className="text-sm font-semibold">Item 4</h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Price 4</p>
                  <button className="mt-2 text-blue-600 dark:text-blue-400">Voir les détails</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-orange-500 text-white py-2 px-4 rounded-full flex items-center">
          <span className="text-lg mr-2">+</span> Ajouter un nouvel article
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
