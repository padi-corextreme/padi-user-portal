import React, { useEffect, useRef } from 'react';
import BestDealsCard from '../../../sections/homesections/BestDeal';
import Navbar from '../../../components/navbar/navbar';
import baby1 from "../../../assets/images/interior-light-baby-room-with-modern-cozy-crib-cute-animal-paintings-wall.png"
import baby2 from "../../../assets/images/close-up-adorable-knitted-socks.png"
import baby3 from "../../../assets/images/front-view-cute-little-baby-shoes.png"


const WishlistPage = () => {
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
    <div className="max-w-sm mx-auto ">
      <div className="space-y-1 p-1">
        <div>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Liste du bébé</h2>
          <div className="space-y-6 mt-3">
            <div className="flex items-start space-x-4 wishlist-card" ref={firstCardRef}>
              <div className="bg-pink-100 dark:bg-pink-900 p-4 rounded-lg flex items-center">
                <img src={baby1} alt="Item" className="w-24 h-24 object-cover rounded-md" />
                <div>
                  <h3 className="text-sm font-semibold">Pantoufles pour bébé</h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">9 000 FCFA</p>
                  <button className="mt-2 text-blue-600 dark:text-blue-400">Voir les détails</button>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-pink-100 dark:bg-pink-900 p-4 rounded-lg flex items-center">
                <img src={baby2} alt="Item" className="w-24 h-24 object-cover rounded-md" />
                <div>
                  <h3 className="text-sm font-semibold">Pantoufles pour bébé</h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">33 000</p>
                  <button className="mt-2 text-blue-600 dark:text-blue-400">Voir les détails</button>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-pink-100 dark:bg-pink-900 p-4 rounded-lg flex items-center">
                <img src={baby3} alt="Item" className="w-24 h-24 object-cover rounded-md" />
                <div>
                  <h3 className="text-sm font-semibold">Pantoufles pour bébé</h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">33 000</p>
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
      <BestDealsCard/>
      <Navbar/>
    </div>
    
  );
};

export default WishlistPage;
