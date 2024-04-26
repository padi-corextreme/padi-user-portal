import React, { useState } from "react";
import Cornflakes from "../../assets/images/Corn Flakes Milk Chocolat 1.png";
import Storelogo from "../../assets/images/Logo Carrefour Market 1.png";

const cardClasses =
  "max-w-sm bg-white rounded-lg shadow-md dark:bg-zinc-800 dark:border-zinc-700";
const buttonClasses =
  "text-white font-medium rounded-full text-sm p-2.5 text-center flex  ";
const darkButtonClasses =
  "dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800";

const BestDealsCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  // Handle case when product data is not available yet
  if (!product) {
    return <div>Loading...</div>;
  }

  // Destructure product data
  const { name, description, price, discount } = product;

  return (
    <div className={cardClasses}>
      <div className="relative">
        <img
          className="rounded-t-lg w-full h-40 object-cover"
          src={Cornflakes}
          alt="product img"
        />
        <button
          className={`absolute top-0 right-0 mt-2 mr-2 bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 ${buttonClasses} ${darkButtonClasses}`}
          onClick={toggleLike}
        >
          <svg
            className={`w-4 h-4 ${liked ? "text-red-500" : "text-white"}`}
            fill="currentcolor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
          </svg>
        </button>
      </div>
      <div className="px-4 py-2">
        <h5 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          {name}
        </h5>
        <div className="text-zinc-500 dark:text-zinc-400 text-sm mb-2 mt-1">
          {description}
        </div>
        <div className="justify-between items-center">
          <div className="flex items-center py-2">
            <span className="text-3xl font-bold text-zinc-900 dark:text-white">
              {price}
            </span>
            <span className="text-base font-semibold line-through text-zinc-500 dark:text-zinc-400 ml-2">
              {discount}
            </span>

            <div className=" items-center">
            <img className="h-6 mr-2" src={Storelogo} alt="store logo" />
           
          </div>
          </div>
         

          <button
              className={`text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2  ${darkButtonClasses}`}
            >
              See more details
            </button>
          
        </div>
      
      </div>
    </div>
  );
};

export default BestDealsCard;
