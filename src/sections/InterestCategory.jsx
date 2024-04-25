import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const interestClasses = "group relative flex-none w-64 rounded-lg shadow-md";
const buttonClasses =
  "absolute bottom-4 left-4 bg-white dark:bg-zinc-700 p-2 rounded-full shadow-lg";
const tagClasses =
  "absolute bottom-4 right-4 bg-white dark:bg-zinc-700 py-2 px-4 rounded-lg shadow-md";
const textClasses = "text-sm text-zinc-800 dark:text-zinc-200";

const InterestsCategory = () => {
  const userId = localStorage.getItem("userId");

  const navigate = useNavigate();
  const categories = [
    { name: "Electronics" },
    { name: "Clothes" },
    { name: "Shoes" },
    { name: "Mobile" },
    { name: "Automobiles" },
  ];

  const [selectedInterests, setSelectedInterests] = useState([]);
  console.log(selectedInterests);

  const selectInterests = (name) => {
    const updatedInterests = [...selectedInterests];
    updatedInterests.push(name);
    setSelectedInterests(updatedInterests);
  };

  const addInterest = async (event) => {
    try {
      event.preventDefault();

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/interests/${userId}`,
        {
          method: "POST",
          body: JSON.stringify({
            category: selectedInterests,
          }),
        }
      );
      console.log(await response.json());
      if (response.status == 201) {
        toast.success("Interest was added successfully");
        navigate("/interestoptions");
      } else {
        toast.error("Failed to add interest");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-800 p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="text-zinc-600 dark:text-zinc-300">Page 2 of 3</div>
        <button
          className="text-blue-600 dark:text-blue-400"
          onClick={() => navigate("/")}
        >
          Quit
        </button>
      </div>
      <h2 className="text-2xl font-semibold text-center mb-6">
        Select categories of interest.
      </h2>
      <div className="flex flex-row overflow-x-auto space-x-4">
        {categories.map((category, index) => (
          <div key={index} className={interestClasses}>
            <img
              src={`https://placehold.co/300x400?text=${category.name}`}
              alt={category.name}
            />
            <button
              className={buttonClasses}
              onClick={() => selectInterests(category.name)}
            >
              {selectedInterests[index] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
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
        <button
          className="text-blue-600 dark:text-blue-400"
          onClick={() => navigate("/login")}
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg"
          onClick={addInterest}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default InterestsCategory;
