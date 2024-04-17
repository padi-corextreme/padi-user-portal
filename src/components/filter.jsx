export default function FilterPage() {
    return (
      <div className="bg-white dark:bg-zinc-800 p-4">
        <div className="flex items-center justify-between border-b pb-4">
          <button className="text-zinc-600 dark:text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-lg font-semibold">Filtres</h2>
          <div></div>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Trier par</h3>
          <div className="flex gap-2 mb-4">
            <button className="bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-lg px-3 py-1">Prix: Prix croissant</button>
            <button className="bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-lg px-3 py-1">Prix décroissant</button>
            <button className="bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-lg px-3 py-1">Point de vente</button>
            <button className="bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-lg px-3 py-1">Taux de réduction</button>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Catégorie</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="all" className="mr-2" />
              <label htmlFor="all" className="ml-2">Toutes</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="furniture" className="mr-2" />
              <label htmlFor="furniture" className="ml-2">Mobilier</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="appliances" className="mr-2" />
              <label htmlFor="appliances" className="ml-2">Électroménager</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="food" className="mr-2" />
              <label htmlFor="food" className="ml-2">Alimentaire</label>
            </div>
            <button className="text-blue-500 dark:text-blue-300 text-sm">Voir toutes les 12 catégories</button>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Prix</h3>
          <div className="mb-2">
            <input type="range" min="5000" max="250000" value="125000" className="w-full" />
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">Et dui malesuada ac sit dolor vel felis lorem. Egestas arcu.</p>
        </div>
        <div className="flex items-center justify-between mt-8">
          <button className="text-zinc-600 dark:text-zinc-400">
            Retour
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Montrer les 54 résultats
          </button>
        </div>
      </div>
    );
  }