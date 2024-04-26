import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/images/medium-shot-woman-antique-store 1.png"
import image2 from '../assets/images/woman-walks-outside-with-paper-shopping-bags-messages-via-smartphone-glad-recieve-feedback-her-comment-happy-make-successful-purchases-leisure-time 1.png'
import image3 from "../assets/images/portrait-african-american-man-pleased-with-his-shoe-choice-happy-dark-haired-man-holding-new-shoe-boutique-showing-it-camera-laughing-buying-menswear-clothes-business-concept 2.png"
import image4 from "../assets/images/elegant-smartphone-composition-removebg-preview.png"
import image5 from "../assets/images/arrangement-with-sanitary-products 1.png"
import image6 from "../assets/images/high-angle-cosmetic-containers-arrangement 1.png"

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
    { name: 'Electronics', picture :image2 },
    { name: 'Clothes', picture :image1},
    { name: 'Shoes' ,picture :image3},
    { name: 'Mobile',picture :image4 },
    { name: 'Hygiene' ,picture :image5},
    { name: 'Cosmetics',picture :image6 }
    
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
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            category: selectedInterests,
          }),
        }
      );
      console.log(await response.json());
      if (response.status === 201) {
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
            <img key={index} src={category.picture} alt={`Image ${index + 1}`} />
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
