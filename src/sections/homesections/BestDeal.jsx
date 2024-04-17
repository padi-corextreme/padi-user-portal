import React, { useState } from 'react';
import Cornflakes from "../../assets/images/Corn Flakes Milk Chocolat 1.png"
import Storelogo from "../../assets/images/Logo Carrefour Market 1.png"

const cardClasses = "max-w-sm bg-white rounded-lg shadow-md dark:bg-zinc-800 dark:border-zinc-700";
const buttonClasses = "text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center";
const darkButtonClasses = "dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800";

const BestDealsCard = () => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className={cardClasses}>
            <div className="relative">
                <img className="rounded-t-lg p-8" src={Cornflakes} alt="product img" />
                <button
                    className={`absolute top-0 right-0 mt-4 mr-4 bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 ${buttonClasses} ${darkButtonClasses}`}
                    onClick={toggleLike}
                >
                    <svg
                        className={`w-4 h-4 ${liked ? 'text-red-500' : 'text-white'}`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.25c3.215 0 5.772 2.606 7.071 4.68C20.984 10.699 21.25 12.278 21 14c-.262 2.361-2.563 4.667-4.768 6.704a43.89 43.89 0 0 1-2.395 1.844c-.398.28-.84.28-1.238 0a43.89 43.89 0 0 1-2.395-1.844C5.313 18.667 3.262 16.361 3 14c-.25-1.722.016-3.301.929-5.07C6.228 6.856 8.785 4.25 12 4.25zM12 21.75l-.566-.492C6.875 17.403 4 15.163 4 12c0-2.204 1.796-4 4-4 1.133 0 2.206.485 3 1.334C11.794 8.485 12.867 8 14 8c2.204 0 4 1.796 4 4 0 3.163-2.875 5.403-7.434 9.258L12 21.75z"></path>
                    </svg>
                </button>
            </div>
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">Céréales au chocolat</h5>
                <div className="text-zinc-500 dark:text-zinc-400 text-sm mb-2 mt-1">Pulvinar sed morbi tempor ullamcorper id nisl. In arcu nulla duis cras id.</div>
                <div className="flex items-center mt-2.5 mb-5">
                    <span className="text-3xl font-bold text-zinc-900 dark:text-white">13 000 FCFA</span>
                    <span className="text-base font-semibold line-through text-zinc-500 dark:text-zinc-400 ml-2">13 000 FCFA</span>
                    <span className="ml-2 text-xl font-semibold text-red-500 bg-red-100 rounded-full px-2.5 py-0.5">54%</span>
                </div>
                <div className="flex justify-between items-center">
                    <img className="h-6" src={Storelogo} alt="store logo" />
                    <button className={`text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>Voir les détails</button>
                </div>
            </div>
        </div>
    );
};

export default BestDealsCard;
