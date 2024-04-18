import React, { useState } from 'react';

const interestClasses = "group relative flex-none w-64 rounded-lg shadow-md";
const buttonClasses = "absolute bottom-4 left-4 bg-white dark:bg-zinc-700 p-2 rounded-full shadow-lg";
const tagClasses = "absolute bottom-4 right-4 bg-white dark:bg-zinc-700 py-2 px-4 rounded-lg shadow-md";
const textClasses = "text-sm text-zinc-800 dark:text-zinc-200";

const InterestsCategory = () => {
  const categories = [
    { name: 'Electronics' },
    { name: 'Clothes' },
    { name: 'Shoes' },
    { name: 'Mobile' }
  ];

  const [selectedInterests, setSelectedInterests] = useState(Array(categories.length).fill(false));

  const toggleInterest = (index) => {
    const updatedInterests = [...selectedInterests];
    updatedInterests[index] = !updatedInterests[index];
    setSelectedInterests(updatedInterests);
  };

  return (
    <div className="bg-white dark:bg-zinc-800 p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="text-zinc-600 dark:text-zinc-300">Page 2 of 3</div>
        <button className="text-blue-600 dark:text-blue-400">Quit</button>
      </div>
      <h2 className="text-2xl font-semibold text-center mb-6">Select categories of interest.</h2>
      <div className="flex flex-row overflow-x-auto space-x-4">
        {categories.map((category, index) => (
          <div key={index} className={interestClasses}>
            <img src={`https://placehold.co/300x400?text=${category.name}`} alt={category.name} />
            <button className={buttonClasses} onClick={() => toggleInterest(index)}>
              {selectedInterests[index] ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : null}
            </button>
            <div className={tagClasses}>
              <span className={textClasses}>{category.name}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <button className="text-blue-600 dark:text-blue-400">Back</button>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg">Continue</button>
      </div>
    </div>
  );
};

export default InterestsCategory;
