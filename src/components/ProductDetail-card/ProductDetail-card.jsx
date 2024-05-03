import React from 'react';




const BUTTON_CLASS = "text-zinc-600 dark:text-zinc-400";
const TEXT_CLASS = "text-zinc-800 dark:text-white";
const BG_CLASS = "bg-zinc-200 dark:bg-zinc-700";
const TEXT_COLOR_CLASS = "text-zinc-800 dark:text-white";

const ProductCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg my-4">
      <div className="flex justify-between items-center px-4 py-2">
        <button className={BUTTON_CLASS}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className={BUTTON_CLASS}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

      <img className="w-full" src={""} alt="Product Img" />

      <div className="px-4 py-4">
        <h2 className={`font-bold text-xl mb-2 ${TEXT_CLASS}`}>HP Elite Book</h2>
        <p className={`text-zinc-700 dark:text-zinc-300 text-base mb-4`}>
          Fringilla sed lacinia cras diam congue vitae aliquet nulla cursus. Fermentum vulputate tristique neque eu volutpat sit et pharetra.
        </p>
        <div className="flex items-center">
          <span className={`text-lg font-semibold ${TEXT_CLASS}`}>66%</span>
          <span className={`text-sm text-zinc-500 dark:text-zinc-400 line-through ml-2`}>350,000 FCFA</span>
        </div>
        <div className="my-4">
          <h3 className={`font-semibold ${TEXT_CLASS} mb-2`}>Options</h3>
          <div className="flex justify-between">
            <div className={`text-center ${BG_CLASS} ${TEXT_COLOR_CLASS} p-4 rounded-lg`}>
              Gris<br />
              120 000 FCFA<br />
              <span className="text-green-500">En Stock</span>
            </div>
            <div className={`text-center ${BG_CLASS} ${TEXT_COLOR_CLASS} p-4 rounded-lg`}>
              Noir<br />
              120 000 FCFA<br />
              <span className="text-green-500">En Stock</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className={`text-xl font-bold ${TEXT_CLASS}`}>120 000 FCFA</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Récupérer en magasin</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
