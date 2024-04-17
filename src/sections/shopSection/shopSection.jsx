import React from 'react';
import Logocard from '../../assets/images/Carrefour-logo.png';
import logoMarket from '../../assets/images/Carrefour Market.png';

const ShopsectionCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Carrefour Market</h2>
      <p className="text-gray-700">jusqu'à
      <span>75% de réduction</span>
      </p>
      <img src= {Logocard} alt="carrefour logo" />
      <div>
        <img src={logoMarket} alt="logo" />
      </div>
    </div>
  );
};

export default ShopsectionCard;